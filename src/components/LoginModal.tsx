"use client";

import { useEffect, useState } from "react";
import "./login.css";
import { fetchLicenseVerification } from "./fetchFunc";

const LoginModal = () => {
  const [error, setError] = useState("");
  const [licenseKey, setLicenseKey] = useState("");
  const [verified, setVerified] = useState(true);
  const handleClick = async () => {
    try {
      // TestKey-848AzL
      const data = await fetchLicenseVerification(licenseKey);
      // const data =
      //   licenseKey === "testapi"
      //     ? { success: true }
      //     : { success: false, message: "Error verifying Key" };
      if (data.success) {
        sessionStorage.setItem("verified", "true");
        setVerified(true);
      } else {
        setError(data?.message || "Error verifying Key");
      }
    } catch {
      setError("Error verifying Key");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("verified") !== "true") {
        setVerified(false);
      }
    }
  }, []);
  if (verified) {
    return null;
  }

  return (
    <div id="loginModal" className="modal">
      <div className="login">
        <div className="login-container">
          <div className="red-shadow"></div>
          <div className="login-card p-6 rounded shadow-md w-96">
            <h2 className="text-gray-200 text-2xl mb-6 text-center">Login</h2>
            {error && (
              <div
                id="error-message"
                className="text-center text-[#FD0606] mb-4"
              >
                {error}
              </div>
            )}

            <div className="relative mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide-key-round lucide w-4 h-4 absolute left-0 top-4 text-gray-300"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </svg>
              <input
                type="password"
                id="password"
                onChange={(e) => setLicenseKey(e.target.value)}
                className="mt-1 block text-gray-200 w-full border-r-0 border-t-0 border-l-0 border-b border-gray-300 focus:border-[#FD0606] focus:shadow-none focus:outline-none bg-transparent pl-6 pr-0 py-2"
                required
              />
            </div>
            <button
              id="verifyButton"
              className="w-full bg-[#FD0606] text-white p-2 rounded mt-2"
              onClick={handleClick}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
