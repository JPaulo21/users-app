const cadastrar = document.querySelector('.btn__cadastrar');
const api_usuarios = 'http://localhost:8080/users'

cadastrar.addEventListener('click', (e) => {
    e.preventDefault();
    const form = document.querySelector('form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch(api_usuarios,{
        method:'POST',

        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },

        body: JSON.stringify(data)
    }).then((response) => {
        //console.log(response.headers.get('location')); Obtendo Location do ResponseHeadears
        if(response.status == 400){
            const inputUsername = document.getElementById('idUsername');
            inputUsername.classList.add('error');
            return response.json();
        }
   
    }).then((jsonData) => {
        const [username, password] = jsonData;

        const msgError = document.getElementById('msgErro');
        msgError.classList.add('msgError');
        msgError.innerHTML = username.msg;
    }).catch((error) => {
        
    })    
        
});

