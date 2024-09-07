import React, { useState } from "react";
import Login from "../components/startComponents/Login";
import Signup from "../components/startComponents/Signup";
import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { commitSession, getSession } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  session.set("id", null);
  return new Response(null, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  console.log(formData);
  const formType = formData.get("form_type");
  if (formType === "login") {
    console.log("login request obtained")
  } else if (formType === "signup") {
    console.log("signup request obtained")
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const password = formData.get("password");
    const rePassword = formData.get("re-enter Password");
    const catalystId = formData.get("catalystId");
    // console.log(name, email, phone, password, rePassword, catalystId);
  } else {
    console.log("no form type found");
  }
  return null
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
        {haveAccount ? <Login toggle={toggle} /> : <Signup toggle={toggle} />}
      </div>
    </div>
  );
};

export default Start;
