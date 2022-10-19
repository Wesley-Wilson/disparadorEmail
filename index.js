var donoEmail = "Wesley";
function enviarEmail() {
    var params = {
        donoEmail : document.getElementById("donoEmail").value,
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        mensagem: document.getElementById("mensagem").value,
    };

    const serviceID = "service_6uvka9t";
    const templateID = "template_qln1o4i"
    
    emailjs.send(serviceID, templateID, params).then((res) => {
                document.getElementById("nome").value = "";
                document.getElementById("email").value = "";
                document.getElementById("telefone").value = "";
                document.getElementById("mensagem").value = "";
                document.getElementById("donoEmail");
                console.log(res);
                alert("Sua mensagem foi enviada com sucesso");
            })
            .catch((err) => console.log(err));
}

        