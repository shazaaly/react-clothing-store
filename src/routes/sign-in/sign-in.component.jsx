import { signInWithGooglePopUp , createUserDocFromAuth} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromAuth(user);
    // console.log(user)
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google pop-up</button>
    </div>
  );
};

export default SignIn;
