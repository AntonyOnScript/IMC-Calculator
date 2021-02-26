const form = document.getElementsByTagName('form')[0]
const peso1 = form.querySelector('#peso')
const altura1 = form.querySelector('#altura')
const botao = form.querySelector('button')
let resultado1 = form.querySelector('div')

form.addEventListener('submit', check)

function check(e){
    e.preventDefault()
    let resultado = calcularImc(Number(peso1.value), Number(altura1.value)  )
    if(resultado>=0 && resultado!==Infinity){
        resultado1.style.backgroundColor="green"
        resultado1.setAttribute("ativado", "ativado")
        resultado1.querySelector('p').innerText=`Seu resultado foi ${resultado}` 
    }else{
        resultado1.setAttribute("ativado", "ativado")
        resultado1.style.backgroundColor="gold"
        resultado1.querySelector('p').innerText=`insira algo válido` 
    }
}
function calcularImc(peso, altura){
    return (peso/(altura*altura))
}