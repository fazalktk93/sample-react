import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

export default function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // Get backend URL from env variable
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000";

    fetch(`${apiUrl}/api/hello`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error("Failed to fetch API:", err);
        setMessage("Error calling backend API");
      });
  }, []);

  return (
    <div className="app min-h-screen text-blue-200 flex items-center flex-col p-20">
      <div className="mb-10 grid grid-cols-4 grid-rows-2 w-1/2 mx-auto">
        <img className="opacity-25" src={logo} alt="React Logo" width="300" />
        <img
          className="col-span-2 row-span-3 animate-spin m-auto"
          style={{ animationDuration: "30s" }}
          src={logo}
          alt="React Logo"
          width="300"
        />
        <img className="opacity-25" src={logo} alt="React Logo" width="300" />
        <img className="opacity-25" src={logo} alt="React Logo" width="300" />
        <img className="opacity-25" src={logo} alt="React Logo" width="300" />
      </div>

      <h1 className="text-2xl lg:text-5xl mb-10 text-right">
        Welcome to Your New React App{" "}
        <span className="block text-lg text-blue-400">on DigitalOcean</span>
      </h1>

      <p className="mb-6 text-lg text-green-300">{message}</p>

      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <Button
          text="DigitalOcean Docs"
          url="https://www.digitalocean.com/docs/app-platform"
        />
        <Button
          text="DigitalOcean Dashboard"
          url="https://cloud.digitalocean.com/apps"
        />
      </div>
    </div>
  );
}

function Button({ className, text, url = "#" }) {
  return (
    <a
      href={url}
      className={`${className} py-3 px-6 bg-purple-400 hover:bg-purple-300 text-purple-800 hover:text-purple-900 block rounded text-center shadow flex items-center justify-center leading-snug text-xs transition ease-in duration-150`}
    >
      {text}
    </a>
  );
}
