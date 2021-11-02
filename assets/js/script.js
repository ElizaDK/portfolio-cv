//menu-btn

    let navbar = document.querySelector('.header .navbar');

    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
    };

    window.onscroll = () =>{
        navbar.classList.remove('active');

        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        }else{
            document.querySelector('.header').classList.remove('active');
        }
    };

    window.onload = () =>{
        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        }else{
            document.querySelector('.header').classList.remove('active');
        }
    };


//efeito máquina escrever

function typewriter(elemento){
    const textArray = elemento.innerHTML.split('');//dividir por letras
    elemento.innerHTML = '';//começar vazio
    textArray.forEach((letra, i) => {//para cada letra um tempo
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 75 * i)
    });
}

const titulo = document.querySelector('h3');
typewriter(titulo);
