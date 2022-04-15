import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);

  return (
    <div>
      <div className="grid grid-cols-2 mt-7 gap-4">
        <div className="bg-white-100 px-3 py-1 rounded-full shadow-md">
          <button onClick={() => signInWithGoogle()}>
            Continue With Google
          </button>
        </div>
        <div className="bg-gray-100 px-3 py-1 rounded-full shadow-md">
          <button onClick={() => signInWithGithub()}>
            Continue With Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Social;
