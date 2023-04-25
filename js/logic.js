
function consultWsp(){ 
    let linkWsp = "https://api.whatsapp.com/send?phone=+573146389721&text=";
    let name = document.getElementById('name').value;
    let message = document.getElementById('consult').value;
    
    if(name != "" && message != ""){
        alert("Hola " + name + " es un gusto colaborarte en: " + message);
    }else{
        alert("Ingrese su nombre y mensaje");
    }
} 

addEventListener('DOMContentLoaded', () =>  {  //guia de menu al hacer scroll
    const SECCIONES = document.querySelectorAll('.seccion');
    const MENU_ITEMS = document.querySelectorAll('.nav-link');
    const funcionObserver = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                const seccionActual = Array.from(MENU_ITEMS).find(item => item.dataset.url === entry.target.id);
                seccionActual.classList.add('active');
                for(const item  of MENU_ITEMS){
                    if(item != seccionActual){
                        item.classList.remove('active');
                    }
                }
            }
        });
    }

    const OBSERVER = new IntersectionObserver(funcionObserver, {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    });

    SECCIONES.forEach(seccion => OBSERVER.observe(seccion));
});