"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import { validateString, getErrorMessage } from "@/lib/utils";

const resendApi = process.env.RESEND_API_KEY;

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get("message");

  // Validación del lado del servidor
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Envio de email inválido"
    };
  }

  if (!validateString(message, 500)) {
    return {
      error: "Mensaje invalido"
    };
  }

  if (!resendApi)
    return {
      error: "Resend api key faltante"
    };

  const resend = new Resend(resendApi);

  let data;

  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "dicoratojuanpablo@gmail.com",
      subject: "Mensaje desde el formulario de contacto",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail
      })
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    };
  }
  return {
    data
  };
};
