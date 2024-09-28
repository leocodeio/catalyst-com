import { useLoaderData } from "@remix-run/react";
import { UserData } from "../../model/user-data";

const Welcome = () => {
  const user = useLoaderData<UserData>();
  // console.log(user);
  return (
    <div className="bg-black bg-opacity-45 text-primary flex flex-col items-center justify-center text-center p-4 rounded-lg">
      {user.id !== "" ? (
        <h1 className="text-2xl mb-4">Welcome to Catalyst - {user.name}</h1>
      ) : (
        <h1 className="text-2xl mb-4">Welcome to Catalyst </h1>
      )}

      <h2 className="mb-4">
        Reach out to us at <br />
        <a href="https://www.linkedin.com/in/sai-harsha-vardhan-pittada-8a9a74252/">
          <p> {"Click -->"}</p>
          <h3 className="text-blue">@leocodeio</h3>
        </a>
      </h2>
      <p className="mt-4">Thank you for staying connected!</p>
    </div>
  );
};

export default Welcome;
