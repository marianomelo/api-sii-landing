import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Configuración de email no disponible' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { nombre, empresa, email, telefono, mensaje } = body;

    if (!nombre || !empresa || !email || !telefono) {
      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben ser completados' },
        { status: 400 }
      );
    }

    const emailHtml = `
      <h2>Nueva solicitud de acceso API SII</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Empresa:</strong> ${empresa}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje || 'Sin mensaje adicional'}</p>
    `;

    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'noreply@transactional.erpsync.app',
      to: process.env.EMAIL_TO || 'soporte@tecnologicachile.cl',
      subject: `Nueva solicitud API SII - ${empresa}`,
      html: emailHtml,
    });

    return NextResponse.json({ message: 'Email enviado correctamente' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}