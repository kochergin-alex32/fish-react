// сделали отдельно кастомный хук ref
import React, { useEffect } from 'react'
import { useRef } from 'react'

const useCanvas = draw => {
        const ref = useRef();
       
    

    useEffect(()=>{
        const canvas = ref.current;
        const context = canvas.getContext('2d')
        let count =0
        let a =Math.floor( Math.random()*400+10)
  
        // console.log(count);
        let animationID

        const render = ()=>{
           
            // let a = offsetY + ampl *  Math.cos(count * freq)
            
            count+=Math.random()*4+0.5
               
            
           console.log(a);
            draw(context,count,a)
            animationID= window.requestAnimationFrame(render)
        }
       render()
       return () =>window.cancelAnimationFrame(animationID)
    },[draw])
    
     return ref
}

export default useCanvas