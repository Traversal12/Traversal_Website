import { motion } from 'framer-motion'
import traversal from "../assets/traversal_logo.png"
import geu from "../assets/geu_logo.png"


function Marquee() {
    var images=[
        geu,
        traversal,
        geu,
        traversal,
        geu,
        traversal,
       
    ]
  return (
    <div className='max-w-screen-lg mx-auto overflow-hidden flex '>
    <motion.div 
    initial={{ x: "0" }}
    animate={{ x: "-100%" }}
    transition={{ ease:"linear" ,duration:10, repeat:Infinity }}
    className='flex h-12 mt-20 gap-16 flex-shrink-0 pr-1'>
    {images.map((ele,index)=>(
        <img key={index} src={ele} alt="Logo" className="mr-4" />)
    )}
    </motion.div>
    <motion.div 
    initial={{ x: "0%" }}
    animate={{ x: "-100%" }}
    transition={{ ease:"linear" ,duration:10, repeat:Infinity }}
    className='flex h-12 mt-20 gap-16 flex-shrink-0 pr-1 '>
    {images.map((ele,index)=>(
        <img key={index} src={ele} alt="Logo" className="mr-4" />)
    )}
    </motion.div>
    </div>
  )
}

export default Marquee