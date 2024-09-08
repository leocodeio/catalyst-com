import React, { useState } from "react";
import Signup from "../components/startComponents/signupForm";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { commitSession, getSession } from "~/session.server";
import { registerUser } from "~/user.server";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.set("id", null);
  session.set("data", { id: "" });
  return new Response(null, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  // console.log(formData);
  // console.log("signup request obtained");
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const password = formData.get("password") as string;
  const reenterPassword = formData.get("reenterPassword") as string;
  const registerUserPayload = {
    name,
    email,
    phone,
    password,
    reenterPassword,
  };
  // console.log(
  //   "form data at signin action function:",
  //   name,
  //   email,
  //   phone,
  //   password,
  //   reenterPassword,
  // );
  // console.log("registerUserPayload", registerUserPayload);
  try {
    const response = await registerUser(registerUserPayload);
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
      return redirect("/login");
    }
  } catch (err) {
    console.error("error from backend", err);
  }
  return null;
};

const Start: React.FC = () => {
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
        <Signup />
      </div>
    </div>
  );
};

export default Start;
