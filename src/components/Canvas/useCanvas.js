// сделали отдельно кастомный хук ref
import React, { useEffect } from 'react'
import { useRef } from 'react'

const useCanvas = draw => {
        const ref = useRef();
       
    

    useEffect(()=>{
        const canvas = ref.current;
        const context = canvas.getContext('2d')

        // let offsetY = Math.random()*280+50
        // let freq = Math.random()*0.01
        // let ampl = Math.random()*90+40
        // let a2 = offsetY + ampl *  Math.cos(count2 * freq)


        let count =0
        let count2 = 0
        let y =Math.floor( Math.random()*400+10)
        let y2 = Math.floor( Math.random()*400+10)

       

        let animationID

        const render = ()=>{
           
            count+=1
            count2+=1.1
          
            // добавил проверку чтобы рыбы каждый раз по рандомно выплывали 
            if(count>=795){
                count = 0
                console.log('hello');
                y=Math.floor( Math.random()*400+10)
                
              }
              if(count2>=795){
                count2 = 0
                y2= Math.floor( Math.random()*400+10)
              
               
              }
               
            
          
            draw(context,count,count2,y,y2)
            animationID= window.requestAnimationFrame(render)
        }
       
       render()
       return () =>window.cancelAnimationFrame(animationID)
    },[draw])
    
     return ref
}

export default useCanvas