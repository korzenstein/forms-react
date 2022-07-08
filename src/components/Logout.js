import { GoogleLogout } from "react-google-login";

const Logout = () => {
    const clientId =
    "568440819395-83l3vftoloe333nbq6o11crj027l2pmn.apps.googleusercontent.com";

    const onSuccess = () => {
        console.log('Logout success')
    }
    return (
        <div id="signOutButton">
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSuccess}
        />
      </div>
    )

}

export default Logout