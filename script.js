function adicionaRegistro() {

    let nome = document.getElementById("registroNome").value;
    let sobrenome = document.getElementById("registroSobrenome").value;
    let email = document.getElementById("registroEmail").value;
    let senha= document.getElementById("registroSenha").value;
    let numero = document.getElementById("numeroTel").value;
    let observacoes = document.getElementById("registroObservacoes").value;

        if (nome && sobrenome && email && senha && numero && observacoes) {

            let registro = {
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                senha: senha,
                numero: numero,
                observacoes: observacoes
            }
        

            let registros = JSON.parse(localStorage.getItem("registros")) || [];
            registros.push(registro);

            localStorage.setItem("registros", JSON.stringify(registros));

            limparCampos();

            alert("Registro realizado com sucesso.")
        }
        else {
            alert("Preencha todos os campos obrigatórios.")
        }
    }
function limparCampos() {
    document.getElementById("registroNome").value = "";
    document.getElementById("registroSobrenome").value = "";
    document.getElementById("registroEmail").value = "";
    document.getElementById("registroSenha").value = "";
    document.getElementById("numeroTel").value = "";
    document.getElementById("registroObservacoes").value = "";
}

document.getElementById("adicionarNumero").addEventListener("click", function() {
    let container = document.getElementById("numerosAdicionais");
    let novoNumero = document.createElement("input");
    novoNumero.type = "number";
    novoNumero.maxlength = "20";
    container.appendChild(document.createElement("br"));
    container.appendChild(novoNumero);
});


document.getElementById("botao_criar").addEventListener("click", function (event) {
    event.preventDefault();
    adicionaRegistro();

    window.location.href = "login.html";
});


function entrarConta(){

    let email = document.getElementById("email_login").value;
    let senha = document.getElementById("senha_login").value;

    let registros = JSON.parse(localStorage.getItem("registros")) || [];
    let usuarioEncontrado = registros.find(function(usuario) {
        return usuario.email === email && usuario.senha === senha;
    });

    if (usuarioEncontrado) {
        window.location.href = "https://www.fiap.com.br/";
    } else {
        alert("Credenciais inválidas. Sai Hacker!!");
    }
}

