rulesBtn = document.getByElementById('rules-btn')
rules = document.getByElementById('rules')
closeBtn = document.getByElementById('close-btn')
canvas = document.getByElementById('canvas')
ctx = canvas.getContext('2d'
)
rulesBtn.addEventListener( 'click', () => {
    rules.classList.add('show')
})
closeBtn.addEventListener( 'click;, () => {
    rules.classList.remove('show')
})

ball = {
    x: canvas-width/2,
    y: canvas-height/2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4,

}
