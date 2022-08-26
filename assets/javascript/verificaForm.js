const formNome = document.querySelector('#nome');
const formEmail = document.querySelector('#email');
const formAssunto = document.querySelector('#assunto');
const formMensagem = document.querySelector('#mensagem');
const formButton = document.querySelector('[contato__enviar]')

const formNomeParagrado = document.querySelector('[contato__error-nome]');
const formEmailParagrafo = document.querySelector('[contato__error-email]');
const formAssuntoParagrafo = document.querySelector('[contato__error-assunto]');
const formMensagemParagrafo = document.querySelector('[contato__error-mensagem]');

let erros = [false, false, false, false];

const atualizaBotao = () => {
    let validador = 0;
    erros.forEach((erro) => {
        if(!erro){
            formButton.disabled = true;
            return "";
        }
        validador++;
        if(validador = 4){
            formButton.disabled = false;
        }
    })
}

const verificador = (input, tamanho, qualParagrafo, num) => {

    if (input.value == "" || input.value.length < 3) {
        qualParagrafo.innerHTML = "O campo não pode ficar em branco ou vazio";
        erros[num] = false;

    } else if (input.value.length > tamanho) {
        qualParagrafo.innerHTML = `O campo não pode ser maior que ${tamanho} caracteres`;
        erros[num] = false;
    } else {
        qualParagrafo.innerHTML = "";
        erros[num] = true;
    }

    console.log(erros);

    atualizaBotao();
}

const verificadorEmail = (qualParagrafo, num) => {

    usuario = formEmail.value.substring(0, formEmail.value.indexOf('@'));
    dominio = formEmail.value.substring(formEmail.value.indexOf("@")+1, formEmail.value.length);

    if (formEmail.value == "") {
        qualParagrafo.innerHTML = "O campo não pode ficar em branco ou vazio";
        erros[num] = false;

    } else if (
        formEmail.value.search('@') != -1 &&
        usuario.length >= 1 &&
        usuario.search(" ") == -1 &&
        usuario.search('@') == -1 &&
        dominio.indexOf('.') > 0 &&
        dominio.search(' ') == -1 &&
        dominio.search('@') == -1 &&
        dominio.lastIndexOf(".") < dominio.length - 1 
    ) {
        qualParagrafo.innerHTML = "";
        erros[num] = true;
    } else {
        qualParagrafo.innerHTML = `O e-mail deve ter o padrão usuário@dominio.com`;
        erros[num] = false;
    }
    atualizaBotao();
}

formNome.addEventListener('blur', () => {
    verificador(formNome, 50, formNomeParagrado, 0);
});

formEmail.addEventListener('blur', () => {
    verificadorEmail(formEmailParagrafo, 1);
})

formAssunto.addEventListener('blur', () => {
    verificador(formAssunto, 50, formAssuntoParagrafo, 2);
});

formMensagem.addEventListener('blur', () => {
    verificador(formMensagem, 300, formMensagemParagrafo, 3);
});