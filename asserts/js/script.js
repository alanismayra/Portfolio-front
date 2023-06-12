/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag:getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')

nome.style.width = '100%'


let mensagemOk = false;
let cepOk = false;


function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3) {    
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color ="red"
    }
    else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = "green"
    }

}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color ="red"
    }
    else{
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
    }

}

function validarMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem");

    if (mensagem.value.length >= 50) {
        txtMensagem.innerHTML = "Mensagem muito grande!";
        txtMensagem.style.color = "red";
        mensagemOk = false;
    } else {
        txtMensagem.innerHTML = "✔";
        txtMensagem.style.color = "green";
        mensagemOk = true;
    }
}

function enviarForm() {
    if (nomeOk === true && emailOk === true && mensagemOk === true) {
        alert(nome.value + ", obrigado pelo contato, aguarde nosso retorno.");
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

function validarCep() {
    const cep = document.getElementById("cep").value.replace("-", "");

    if (cepValido(cep)) {
        txtCep.innerHTML = "✔";
        txtCep.style.color = "green";
        cepOk = true;
    } else {
        txtCep.innerHTML = "CEP Inválido";
        txtCep.style.color = "red";
        cepOK = false;
    }
}

function consultarCep() {
    document.getElementById('dados').innerHTML = "";
    const cep = document.getElementById('cep').value.replace('-','');
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cepOk === true || cepValido(cep)) {

        fetch(url)
            .then((response) => response.json())
            .then((jsonBody) => {
                if (jsonBody.erro === true || jsonBody.logradouro === undefined) {
                    alert("CEP nao encontrado!");
                } else {
                    document.getElementById("dados").innerHTML =
                        jsonBody.logradouro +
                        "\n" +
                        jsonBody.bairro +
                        "\n" +
                        jsonBody.localidade +
                        "\n" +
                        jsonBody.uf;
                }
            })
            .catch((error) => {
                alert("CEP não encontrado!");
            });
    }
}


