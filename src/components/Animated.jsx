import { motion } from 'framer-motion';

const animations = {
    initial: {opacity: 0, x: 100},
    animate: {opacity: 5, x: 0},
    exit: {opacity: 0, x: -100},
}

const Animated = ({children}) => {
  return (
    <motion.div variants={animations} 
    initial='initial'
    animate='animate' 
    exit='exit'
    transition={ {duration: 1}}>
      {children}
    </motion.div>
  )
}

export default Animated
