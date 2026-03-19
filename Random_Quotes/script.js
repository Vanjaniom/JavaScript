let btn = document.querySelector('button')
let play = document.querySelector('#PlayGround')
let quotes = [
    'Winner takes it all',
    'Honesty is Best Policy',
    'No one cares about you',
    'Real Man is Dad that Supports System',
    'Real Women is Mom',
    'Son has to do their duty'
]
let Colors = ['red','green','blue','indigo','teal','pink','orange','yellow','cyan']
btn.addEventListener('click',function(){
    let randomQuotes = quotes[Math.floor(Math.random()*quotes.length)]
    let randomColors = Colors[Math.floor(Math.random()*Colors.length)]
    let h4 = document.createElement('h4')
    h4.innerHTML=randomQuotes
    h4.style.color=randomColors
    console.log(h4);
   play.append(h4)
   play.style.overflow='hidden'
})