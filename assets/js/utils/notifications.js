function msgError(jsonObject){
    const msgValidacao = document.getElementById(`msg-${jsonObject.field}`);
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('txt-error');
    paragrafo.innerHTML = jsonObject.msg; 
    msgValidacao.append(paragrafo);
}

function msgSucess(msg){
    const elementMsgUsuario = document.getElementById('msg-usuario');
    elementMsgUsuario.innerHTML = '';
    const paragrafo = document.createElement('p');
    paragrafo.innerHTML = msg;
    paragrafo.classList.add('success');
    elementMsgUsuario.appendChild(paragrafo);

    setTimeout(clearMsg, 4000);
}

function clearMsg(){
    const inputMsgs = document.getElementsByClassName('msg');
    const msgs = Array.from(inputMsgs);
    msgs.forEach(msg => {
        msg.innerHTML = '';
    });
}

export const notifications = {
    msgError,
    msgSucess,
    clearMsg
};