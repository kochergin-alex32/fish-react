import React from 'react'
import useCanvas from './useCanvas';
// импорты когда хук зддесь
// import React, { useEffect } from 'react'
// import { useRef } from 'react'

const Canvas = (props) => {
    const {draw, ...rest}= props
   
    // вариант когда хук отдельно вынесен
    const ref = useCanvas(draw);
    
    
    // вариант когда хук здесь 
    // const ref = useRef();
    // useEffect(()=>{
    //     const canvas = ref.current;
    //     const context = canvas.getContext('2d')
    //     let count = 0
    //     let animationID

    //     const render = ()=>{
    //         count+=5
    //         draw(context,count)
    //         animationID= window.requestAnimationFrame(render)
    //     }
    //    render()
    //    return () =>window.cancelAnimationFrame(animationID)
    // },[draw])
    
     return <canvas ref={ref} {...rest}/>
}

export default Canvas