

import {
  signInWithGooglePopUp,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromAuth(user);
    // console.log(user)
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google pop-up</button>

      <SignUpForm />
    
    </div>
  );
};

export default SignIn;
