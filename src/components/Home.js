import {Link} from 'react-router-dom'
import { motion } from "framer-motion";
import Drink from './Drink'

const Home = () => {
    return (
        <motion.div
        className="home"
        initial={{x: '-100%'}}
        animate={{x: '0%'}}
        exit={{x: '-100%'}}
        transition={{ 
        duration: 0.7,
        delay: 0.5
     }}
        >
            <Link to="/other">
            <Drink/>
            </Link>
        </motion.div>
    )
}

export default Home