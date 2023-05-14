// Change theme
//S_R_T = switch button theme XD
//C_Th = change theme

//llamando botones
const S_B_T = document.querySelector(".swich_Theme");
const light = document.querySelector(".light");
const shadow = document.querySelector(".shadow");
const theme_body = document.querySelector("body");
const text_res = document.querySelector('span');



//agregando eventos
S_B_T.addEventListener('click', theme_body, text_res);
light.addEventListener('click', theme_body, shadow, text_res);
shadow.addEventListener('click', light, text_res);


//cambiar tema y volver invisible el boton
function C_Th_D(){
    theme_body.classList.remove('claro');
    theme_body.classList.add('oscuro');

    if (light.classList.contains('invisible')){
        light.classList.remove('invisible');
        light.classList.add('visible');

        if (shadow.classList.contains('visible')){
            shadow.classList.remove('visible');
            shadow.classList.add('invisible');

        }

        if (text_res.classList.contains('texto_oscuro_resaltado')){
            text_res.classList.remove('texto_oscuro_resaltado')
            text_res.classList.add('texto_claro_resaltado')

        }
    }

}

//cambiar tema y volver invisible el boton
function C_Th_L(){
    theme_body.classList.remove('oscuro');
    theme_body.classList.add('claro');

    if (shadow.classList.contains('invisible')){
        shadow.classList.remove('invisible');
        shadow.classList.add('visible');

        if (light.classList.contains('visible')){
            light.classList.remove('visible');
            light.classList.add('invisible');
        }
        if (text_res.classList.contains('texto_claro_resaltado')){
            text_res.classList.remove('texto_claro_resaltado')
            text_res.classList.add('texto_oscuro_resaltado')

        }
    }
}








