// import Welcome from "./components/homeComponents/Welcome";
import Header from "../components/common/Header";

import { LoaderFunction, redirect } from "@remix-run/node";
import { getSession } from "~/session.server";
import { useLoaderData } from "@remix-run/react";
import { UserData } from "../model/user-data";
export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session.get("id")) {
    return redirect("/login");
  } else {
    const user = session.get("data");
    return user;
  }
};

const Home = () => {
  const user = useLoaderData<UserData>();
  return (
    <>
      <Header />
      {/* <h1>{user.id}</h1> */}
      <div
        className="h-screen w-screen"
        style={{
          backgroundImage: "url('./images/catalyst-home.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <Welcome /> */}
      </div>
    </>
  );
};

export default Home;
