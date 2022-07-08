import { GoogleLogin } from "react-google-login";


const Login = () => {
    const clientId =
    "568440819395-83l3vftoloe333nbq6o11crj027l2pmn.apps.googleusercontent.com";

    const onSuccess = (res) => {
        console.log("Login Successful! Current user:", res.profileObj)
    }
     const onFailure = (res) => {
        console.log("Login FAILED! red:", res)
    }


    return (
        <div id="signInButton">
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>
    )

}

export default Login