window.addEventListener('load',function(){
    const button=document.getElementById('calcular');
    button.addEventListener('click', function(){
        const valor1=document.getElementById('operadorA');
        const valor2=document.getElementById('operadorB');
        let resultado;
        switch(document.getElementById('operacion').value){
            case "suma":
             resultado=parseInt(valor1.value)+parseInt(valor2.value);
            break;

            case "resta":
             resultado=parseInt(valor1.value)-parseInt(valor2.value);
            break;

            case "multiplicacion":
             resultado=parseInt(valor1.value)*parseInt(valor2.value);
            break;

            case "division":
             resultado=parseInt(valor1.value)/parseInt(valor2.value);
            break;
        }

        alert(resultado);
    })
})