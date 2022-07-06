import {Link} from 'react-router-dom'
import { motion } from "framer-motion";


const Other = () => {
    return (
        <motion.div
        className="other"
        initial={{x: '-100%'}}
        animate={{x: '0%'}}
        exit={{x: '-100%'}}
        transition={{duration: 1}}
        >
            <h3>Other</h3>
            <Link to="/something">
            Back to Somthing</Link>
        </motion.div>
    )
}

export default Other