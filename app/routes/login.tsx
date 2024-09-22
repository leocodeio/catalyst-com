import React, { useState } from "react";
import Login from "../components/startComponents/loginForm";
import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { commitSession, createUserSession, getSession } from "~/session.server";
import { loginUser } from "../user.server";
export const loader: LoaderFunction = async ({ request }) => {
  return null;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  // console.log(formData);
  // console.log("login request obtained");
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  // console.log("form data at login action function:", email, password);
  // console.log("registerUserPayload", registerUserPayload);
  try {
    const response = await loginUser({
      email,
      password,
    });
    // const userSession: UserSession = {
    //   data: response.user,
    //   lightOrDarkMode: "light",
    //   language: "en",
    //   CSRFToken: "",
    //   metrics: {
    //     lastLogin: new Date(),
    //     loginCount: 0,
    //   },
    // };
    // console.log("userSession", userSession);
    if (response.status) {
      //create session
      return createUserSession(
        request,
        {
          data: response.user,
          lightOrDarkMode: "light",
          language: "en",
          CSRFToken: "",
          metrics: {
            lastLogin: new Date(),
            loginCount: 0,
          },
        },
        "/home"
      );
    }
  } catch (err) {
    console.error("error from backend", err);
  }
  return null;
};

const Start: React.FC = () => {
  const [haveAccount, setHaveAccount] = useState<boolean>(false);
  const toggle = () => {
    setHaveAccount(!haveAccount);
  };

  return (
    <div className="h-screen flex flex-col align-center items-center">
      <header className="bg-transparent flex h-[150px] w-full justify-center align-center items-center">
        <img
          src="./images/logo.png"
          alt="Catalyst Logo"
          className="h-20 w-40"
        />
      </header>
      <div className="flex h-[500px] items-center flex-col gap-5">
        <Login />
      </div>
    </div>
  );
};

export default Start;
