let red = document.getElementById('red')
let yellow = document.getElementById('yellow')
let green = document.getElementById('green')
let form = document.getElementById('form')
let restart = document.getElementById('restart')
let svetafor = document.querySelector('.svetafor')
let rest = document.querySelector('.rest')
let divs = document.querySelectorAll('.svetafor div')
let sec = 0

let mem = 0
let timer = null


let colors = ['red', 'yellow', 'green']

form.addEventListener('submit', (e) => {
    e.preventDefault()
    svetafor.style.display = 'flex'
    rest.style.display = 'flex'
    rest.style.justifyContent = 'center'

    clearInterval(timer)
    let arr = [+red.value, +yellow.value, +green.value]
   
    sec = 0
    mem = 0

    timer = setInterval(() => {
        sec++
        
        divs[mem].style.backgroundColor = colors[mem]
        if(arr[mem] <= sec) {
            
            divs[mem].style.backgroundColor = 'gray'
            
            if(mem == 2) {
                mem = 0
            } else {
                mem++
            }
            sec = 0
        }
    }, 1000)
})


restart.addEventListener('click', () => {
    window.location.reload();
})

