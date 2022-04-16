import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import "react-toastify/dist/ReactToastify.css";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorMessage;
  if (error || gitError) {
    errorMessage = (<p>{error?.message}</p>)(<p>{gitError?.message}</p>);
  }
  if (loading || gitLoading) {
    return <p className="mt-10 text-3xl font-extrabold">Loading...</p>;
  }
  if (user || gitUser) {
    navigate("/");
    toast("Logged In");
  }
  return (
    <div>
      <div>{errorMessage}</div>
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
      <ToastContainer />
    </div>
  );
};

export default Social;
