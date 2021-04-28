import React from "react";
import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

export default function Welcome({ name }) {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
    if (loginType === "popup") {
      instance.loginPopup();
    } else if (loginType === "redirect") {
      instance.loginRedirect();
    }
  };

  return (
    <div className="w-full h-full">
      <AuthenticatedTemplate>
        <div>
          <div className="flex flex-col p-6 items-end">
            <h1 className="font-extrabold text-8xl">Hi, {name}</h1>
            <p className="font-normal text-5xl">Welcome to our adobe!</p>
            <div className="mt-10">
              <span className="inline-flex items-center cursor-pointer text-xl font-medium text-blue-600 hover:underline">
                Login
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </div>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <div className="flex w-full h-full">
          <div className="w-1/2 flex flex-col p-6 items-start">
            <h1 className="font-extrabold text-8xl">
              Hi, {name || "Trailblazer"}
            </h1>
            <p className="font-normal text-5xl">Please sign in!</p>
            <div className="mt-10">
              <span
                className="inline-flex items-center cursor-pointer text-xl font-medium text-blue-600 hover:underline"
                onClick={() => handleLogin("redirect")}
              >
                Login
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </span>
            </div>
          </div>
          <div className="w-1/2">
            <div className="login-img-wrapper"></div>
          </div>
        </div>
      </UnauthenticatedTemplate>
    </div>
  );
}
