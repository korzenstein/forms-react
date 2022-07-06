import {Link} from 'react-router-dom'
import { motion } from "framer-motion";


const Something = () => {
    return (
        <motion.div
        className="something"
        initial={{x: '-100%'}}
        animate={{x: '0%'}}
        exit={{x: '-100%'}}
        transition={{duration: 1}}
        >
            <h3>Something</h3>
            <Link to="/">
            Back to Main</Link>
        </motion.div>
    )
}

export default Something