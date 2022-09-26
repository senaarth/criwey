import mailer from "@emailjs/browser";

interface MailParams {
  name: string;
  company?: string;
  email: string;
  message: string;
}

const mailerKeys = {
  serviceId: `service_cbipm3j`,
  templateId: `template_bu84fhx`,
  publicKey: `wgqDfoIwPxdzu2ByB`,
};

export function sendMail(params: MailParams) {
  mailer
    .send(
      mailerKeys.serviceId,
      mailerKeys.templateId,
      {
        name: params.name || "Não informou",
        company: params.company || "Não informou",
        email: params.email || "Não informou",
        message: params.message || "Não informou",
      },
      mailerKeys.publicKey
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        throw new Error();
      }
    );
}
