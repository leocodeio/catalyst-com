// import Welcome from "./components/homeComponents/Welcome";
import Header from "../components/common/Header";
import Welcome from "../components/homeComponents/Welcome";

import { getSession } from "~/session.server";
import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  // console.log(session.get("data"));
  if (session.get("id") === "") {
    return null;
  }
  return session.get("data");
};

const Home = () => {
  return (
    <>
      <Header />
      {/* <h1>{user.id}</h1> */}
      <div
        className="h-screen w-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('./images/catalyst-home.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Welcome />
      </div>
    </>
  );
};

export default Home;
