let header_EL = document.getElementById("header")
let result_EL = document.getElementById("result")

header_EL.addEventListener('touchstart',event=>{
    result_EL.innerHTML += 'Run touch start \n'
})


header_EL.addEventListener('touchmove',event=>{
    result_EL.innerHTML += 'Run touch move \n'
})


header_EL.addEventListener('touchend',event=>{
    result_EL.innerHTML += 'Run touch end \n'
})