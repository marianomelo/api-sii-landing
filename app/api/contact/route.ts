import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    const emailData = await resend.emails.send({
      from: process.env.EMAIL_FROM as string,
      to: process.env.EMAIL_TO as string,
      subject: `Nueva consulta API SII Chile - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3B82F6; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
            Nueva Consulta - API SII Chile
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin: 0 0 15px 0; color: #1e293b;">Datos del Cliente:</h3>
            <p style="margin: 5px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            ${company ? `<p style="margin: 5px 0;"><strong>Empresa:</strong> ${company}</p>` : ''}
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #1e293b; margin-bottom: 10px;">Mensaje:</h3>
            <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>Este mensaje fue enviado desde el formulario de contacto de <strong>API SII Chile</strong></p>
            <p>Fecha: ${new Date().toLocaleString('es-CL')}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, id: emailData.data?.id });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}
