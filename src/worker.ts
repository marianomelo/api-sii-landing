export interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY?: string;
  EMAIL_FROM?: string;
  EMAIL_TO?: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const body = await request.json<{
          name?: string;
          email?: string;
          company?: string;
          message?: string;
        }>();

        const name = body.name?.trim();
        const email = body.email?.trim();
        const company = body.company?.trim();
        const message = body.message?.trim();

        if (!name || !email || !message) {
          return json({ error: "Todos los campos son obligatorios" }, 400);
        }

        // Prefer calling Resend REST API directly in Workers
        if (!env.RESEND_API_KEY || !env.EMAIL_FROM || !env.EMAIL_TO) {
          return json({ error: "Configuración de correo ausente" }, 500);
        }

        const html = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
              Nueva Consulta - API SII Chile
            </h2>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin: 0 0 15px 0; color: #1e293b;">Datos del Cliente:</h3>
              <p style="margin: 5px 0;"><strong>Nombre:</strong> ${escapeHTML(name)}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${escapeHTML(email)}</p>
              ${company ? `<p style="margin: 5px 0;"><strong>Empresa:</strong> ${escapeHTML(company)}</p>` : ''}
            </div>
            <div style="margin: 20px 0;">
              <h3 style="color: #1e293b; margin-bottom: 10px;">Mensaje:</h3>
              <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; white-space: pre-wrap;">
                ${escapeHTML(message)}
              </div>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
              <p>Este mensaje fue enviado desde el formulario de contacto de <strong>API SII Chile</strong></p>
              <p>Fecha: ${new Date().toLocaleString('es-CL')}</p>
            </div>
          </div>`;

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: env.EMAIL_FROM,
            to: env.EMAIL_TO,
            subject: `Nueva consulta API SII Chile - ${name}`,
            html,
          }),
        });

        if (!res.ok) {
          const err = await safeJson(res);
          return json({ error: "Error al enviar el mensaje", detail: err }, 502);
        }

        const data = await res.json();
        return json({ success: true, id: data?.id || data?.data?.id });
      } catch (e) {
        return json({ error: "Error al procesar la solicitud" }, 500);
      }
    }

    // Fallback to static assets for everything else
    return env.ASSETS.fetch(request);
  },
};

function json(obj: any, status = 200): Response {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function escapeHTML(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function safeJson(res: Response): Promise<any> {
  try { return await res.json(); } catch { return await res.text().catch(() => null); }
}

