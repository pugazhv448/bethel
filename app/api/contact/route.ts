import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, serviceType, message } = await request.json();

    // Send to business owner
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL_TO,
      subject: `New Lead: ${name} - ${serviceType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${serviceType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send confirmation to customer
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Quote Request Received - Bethel Stones',
      html: `
        <h2>Thank You, ${name}!</h2>
        <p>We received your inquiry and will contact you within 24 hours.</p>
        <p>Best regards,<br/>Bethel Stones Team<br/>+91 98848 28642</p>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
