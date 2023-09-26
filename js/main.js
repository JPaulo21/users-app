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
    })
        .then((response) => {
            //console.log(response.headers.get('location')); Obtendo
            console.log(response.headers);
        })
        
});

