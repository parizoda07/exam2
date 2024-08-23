let bars = document.querySelector('.fa-bars')
let xmark = document.querySelector('.fa-xmark')
let list = document.querySelector('.nav-list')


bars.addEventListener('click', () => {
    list.style.display = 'flex'
    xmark.style.display = 'inline-block'
    bars.style.display = 'none'
})

xmark.addEventListener('click', () => {
    list.style.display = 'none'
    xmark.style.display = 'none'
    bars.style.display = 'inline-block'
})