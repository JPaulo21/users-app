import { notifications } from "./utils/notifications.js";
import { usuarioService } from "./service/usuario-service.js";

function valueItemNavIsSelected(){
    const inputNavs = document.getElementsByClassName('nav');
    for(let itemNav of inputNavs){
        const tab = itemNav.querySelector('#tabCadastrar');
        if(tab.checked){
            return tab.value;
        }
    }
}

const btnEnviar = document.querySelector('.btn__enviar');

btnEnviar.addEventListener('click', async (e) => {
    e.preventDefault();
    const form = document.querySelector('[data-form-user]');
    const formDataUser = new FormData(form);
    const dataUser = Object.fromEntries(formDataUser);

    const itemNav = valueItemNavIsSelected();

    if(itemNav === 'cadastrar'){
        await usuarioService.salvar(dataUser).then((isSalvo)=>{
            if(isSalvo)
                notifications.msgSucess('Usuário criado com sucesso');
        });
    }

    if(itemNav === 'auth'){

    }

});

