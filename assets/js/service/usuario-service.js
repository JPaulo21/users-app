import {routes} from './routes.js';
import { notifications } from '../utils/notifications.js';

async function salvar(user){
    const url = routes.users;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        console.log('Location: ' + response.headers.get('location'));

        return response.ok;
    } catch (error) {
        console.error('Erro na requisição:', error);
        const msgErro = `Erro na requisição: ${error}`;
        notifications.msgError(msgErro);
    } 
}

export const usuarioService = {
    salvar
}