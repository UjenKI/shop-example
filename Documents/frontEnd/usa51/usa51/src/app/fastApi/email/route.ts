import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { name, number } = data;

  const transport = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${name}`,

    html: `<!doctype html>
    <html ⚡4email>
      <head>
        <meta charset="utf-8">
        <style amp4email-boilerplate>body{visibility:hidden}</style>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
      </head>
      <body>
        <div style="background: #2a3540; color: #fff; padding: 30px 0;">
            <div style="padding: 20px 30px; width: 70%; margin: 0 auto; background: #465564; border-radius: 8px;">
            <h3>Клієнт замовив дзвінок</h3>
            <div style="display: flex; align-items:center">
            <p style="margin:0; font-size:14px; color:#cbcaca; ">Ім'я:<span style="font-size:20px; margin-left:10px; text-decoration:none"> ${name}</span></p>
        </div>
        <div style="display: flex; align-items: center">
            <p style="margin:0; font-size:14px; color:#cbcaca; ;">Номер телефону:<span style="font-size:20px; margin-left:10px;"> ${number}</span></p>
        </div>
            </div>
        </div>
      </body>
    </html>`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err: any) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
