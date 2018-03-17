import './base.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import SWLNEO from 'swl-neo'
import SWL from 'swl'
window.React = React
window.ReactDOM = ReactDOM
window.SWLNEO = SWLNEO
window.SWL = SWL

import App from './componentes/App'
window.addEventListener('load', ()=>{
    ReactDOM.render(<App />, document.getElementById('root'))
})


/*let a = {a: 'a'}
let b = {b: 'b'}

let c ={...a, ...b}
console.log(c)
const {a: j, ...rest}=c
console.log(j)
console.log(rest)*/