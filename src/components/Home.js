import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Drink from "./icons/Drink";
import Coffee1 from "./Coffee1"
import Download from "./icons/Download";
import Repeat from './Repeat'
import Login from "./Login";
import Text from './icons/Text'
import Map from './Map'
import Sign from './icons/Sign'
import Breakdown from './icons/Breakdown'
import Logout from "./Logout";
import {gapi} from 'gapi-script'
import { useEffect, useState } from "react";

import Test from "./Test";


const Home = ({handleChoice, wardChoice, setWardChoice}) => {

    const clientId =
    "568440819395-83l3vftoloe333nbq6o11crj027l2pmn.apps.googleusercontent.com";

    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
        ? JSON.parse(localStorage.getItem('loginData'))
        : null
    )
    useEffect(() => {
        const start = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }
        gapi.load('client: auth2', start)
    }, [])

    // let accessToken = gapi.client.getToken().access_token

  return (
    <motion.div
      className="home"
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{
        duration: 0.7,
        delay: 1,
      }}
    >
      <div id="signInDiv"></div>
      <Link to="/coffee1">
        <Drink />
      </Link>
      <Link to="/pothole1">
        <Sign />
      </Link>
      <Link to="/pothole1">
        <Breakdown />
      </Link>
    </motion.div>
  );
};

export default Home;
