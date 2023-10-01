import React from 'react'
import './GameArea.css'
import Canvas from '../Canvas/Canvas'
const GameArea = () => {

    const draw = (context,count,a)=>{
      
        const am = a % 500
        const delta1 = count % 800 
        console.log(am);
        context.clearRect(0,0,context.canvas.width,context.canvas.height)
        context.fillStyle = 'grey'
        // метод говорит что мы начинаем отрисовку
        context.beginPath()
        context.arc(800-delta1, am, 10, 0, 2*Math.PI, false)
        // заливаем окружность нашим цветом
        context.fill()
        context.stroke()
         // создаем хвост
         context.beginPath()
        context.arc((800+20)-delta1, am, 10, Math.PI/2, 3*Math.PI/2, false)
        context.fill()
        context.stroke()
         // рисуем глаз
        context.fillStyle = "white"
         context.beginPath()
         context.arc((800-5)-delta1, am-3, 3, 0, 2*Math.PI, false)
         context.fill()
         // рисуем зрачек
         context.fillStyle = "black"
        context.beginPath()
        context.arc((800-5)-delta1, am-3, 1, 0, 2*Math.PI, false)
        context.fill()
        // рот
        context.fillStroke = "black"
         context.beginPath()
       context.moveTo((800 - 9)-delta1, am+4)
          context.lineTo((800 - 4)-delta1,am+4)
          context.stroke()
       

    }
    const draw2 = (context,count)=>{
        context.clearRect(0,0,context.canvas.width,context.canvas.height)
        context.fillStyle = 'grey'
        const delta = count % 500
        context.fillRect(10,500-delta,100,100)

    }

  return (
    <>
    <h1>heloo yopta</h1> 
    
    <Canvas draw={draw} width="800" height="500"/>
    {/* <Canvas draw={draw2} width="800" height="500"/> */}
    </>
  )
}

export default GameArea