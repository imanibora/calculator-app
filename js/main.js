const lines=document.querySelectorAll('.lines')
const disp=document.querySelector('p')
const egal=document.querySelector('#equal')
egal.addEventListener('mouseover',olange)
function olange(mouseover){
    mouseover.target.classList.replace('line4','orange')
}
lines.forEach(element => {
    element.addEventListener('mouseover',run)
    var valeur=element.value
    function run(){
if (event.target.classList.contains('lines','op')) {
   event.target.classList.add('orange')
} 
}
element.addEventListener('mouseout',rerun)
function rerun(){
if (event.target.classList.contains('orange')) {
element.classList.remove('orange')

}
}let count=0
element.addEventListener('click',clicker)
   function clicker(){
    count++
    
     for(let i=count; i<=count; i++){
disp.innerText+=valeur
console.log(disp.textContent)
     }
}
document.querySelector('#equal').addEventListener('click',calc)

function calc(){
   
        let result=eval(disp.textContent)
    console.log(result)
    disp.innerText=result
}
document.querySelector('#clear').addEventListener('click',clear)
function clear (){
    disp.innerText=""
}
})









