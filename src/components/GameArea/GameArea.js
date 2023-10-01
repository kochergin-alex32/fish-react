import React from 'react'
import './GameArea.css'
import Canvas from '../Canvas/Canvas'
const GameArea = () => {

    const draw = (context,count,count2,y,y2)=>{
        
    

        const am = y%500
        const am1 = y2%500
        const delta1 = count % 800 
        const delta = count2
        
       const redFish = ()=>{context.fillStyle = 'red'
       context.beginPath()
       context.arc(800-delta, am1, 10, 0, 2*Math.PI, false) 
       context.fill()
       context.stroke()
        context.beginPath()
       context.arc((800+20)-delta, am1, 10, Math.PI/2, 3*Math.PI/2, false)
       context.fill()
       context.stroke()
       context.fillStyle = "white"
        context.beginPath()
        context.arc((800-5)-delta, am1-3, 3, 0, 2*Math.PI, false)
        context.fill()
        context.fillStyle = "black"
       context.beginPath()
       context.arc((800-5)-delta, am1-3, 1, 0, 2*Math.PI, false)
       context.fill()
       context.fillStroke = "black"
        context.beginPath()
      context.moveTo((800 - 9)-delta, am1+4)
         context.lineTo((800 - 4)-delta,am1+4)
         context.stroke()}
 
        const greyFish =()=>{
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
        

        context.clearRect(0,0,context.canvas.width,context.canvas.height)
     
        greyFish()
        redFish()

   
       

    }
 
 
    // const draw2 = (context,count)=>{
    //     context.clearRect(0,0,context.canvas.width,context.canvas.height)
    //     context.fillStyle = 'grey'
    //     const delta = count % 500
    //     context.fillRect(10,500-delta,100,100)
 
    //     // context.clearRect(0,0,context.canvas.width,context.canvas.height)
    //     context.fillStyle = 'grey'
       
    //     context.fillRect(10,0+delta,100,100)

    // }

  return (
    <>
    <h1>heloo yopta</h1> 
    
    <Canvas draw={draw} width="800" height="500"/>
    {/* <Canvas draw={draw2} width="800" height="500"/> */}
    </>
  )
}

export default GameArea





























 //   context.fillStyle = 'grey'
      //   // метод говорит что мы начинаем отрисовку
      //   context.beginPath()
      //   context.arc(800-delta1, am, 10, 0, 2*Math.PI, false)
      //   // заливаем окружность нашим цветом
      //   context.fill()
      //   context.stroke()
      //    // создаем хвост
      //    context.beginPath()
      //   context.arc((800+20)-delta1, am, 10, Math.PI/2, 3*Math.PI/2, false)
      //   context.fill()
      //   context.stroke()
      //    // рисуем глаз
      //   context.fillStyle = "white"
      //    context.beginPath()
      //    context.arc((800-5)-delta1, am-3, 3, 0, 2*Math.PI, false)
      //    context.fill()
      //    // рисуем зрачек
      //    context.fillStyle = "black"
      //   context.beginPath()
      //   context.arc((800-5)-delta1, am-3, 1, 0, 2*Math.PI, false)
      //   context.fill()
      //   // рот
      //   context.fillStroke = "black"
      //    context.beginPath()
      //  context.moveTo((800 - 9)-delta1, am+4)
      //     context.lineTo((800 - 4)-delta1,am+4)
      //     context.stroke()