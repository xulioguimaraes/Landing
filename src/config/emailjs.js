// EmailJS Configuration
// Para configurar o envio de emails, você precisa:
// 1. Criar uma conta gratuita em https://www.emailjs.com/
// 2. Configurar um serviço de email (Gmail, Outlook, etc.)
// 3. Criar um template de email
// 4. Substituir as informações abaixo

export const emailjsConfig = {
    // Sua Public Key do EmailJS (disponível no dashboard)
    publicKey: "xm-KrdBJFi3tw4Cj3",

    // ID do serviço de email configurado no EmailJS
    serviceID: "service_fqravu9",

    // ID do template de email criado no EmailJS
    templateID: "template_cm9iove",

    // Email de destino (onde as mensagens serão recebidas)
    destinationEmail: "despairnateural@gmail.com"
};

// Template sugerido para o EmailJS:
// Assunto: Nova mensagem do site XGBoard - {{subject}}
// 
// Corpo do email:
// Nova mensagem recebida através do site XGBoard:
// 
// Nome: {{from_name}}
// Email: {{from_email}}
// Assunto: {{subject}}
// Data/Hora: {{timestamp}}
// 
// Mensagem:
// {{message}}
// 
// ---
// Esta mensagem foi enviada através do formulário de contato do site XGBoard.
// Para responder, use o email: {{reply_to}} 