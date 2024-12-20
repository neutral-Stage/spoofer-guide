"use client";

import { useState } from "react";
import "./style.css";
import { downloadFile } from "@/components/fetchFunc";

const Page = () => {
  const [message, setMessage] = useState("");

  const checkLicenseKey = async (key: string) => {
    await downloadFile(key)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        if (data.success) {
          setMessage("Downloading...");
        } else {
          setMessage(data.message);
        }
      })
      .catch((error) => {
        setMessage(error);
        console.log("error", error);
      });
  };

  const handleSubmit = () => {
    const key = document.getElementById("license-key") as HTMLInputElement;
    checkLicenseKey(key.value);
  };
  return (
    <div className="login">
      <div className="container">
        <div className="red-shadow" />
        <div className="card">
          <div
            style={{
              WebkitTransform: "none",
              msTransform: "none",
              transform: "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide-download-big"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1={12} x2={12} y1={15} y2={3} />
            </svg>
          </div>
          <h1 className="title">Loader Install Request </h1>
          <div className="subtitle">
            Enter your license key to begin installation
          </div>
          {message && <div className="message">{message}</div>}
          <div className="input-container">
            <div style={{ position: "relative" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide-key-round"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
              </svg>
              <input
                type="text"
                className="license-key"
                id="license-key"
                placeholder="XXXX-XXXX-XXXX-XXXX"
              />
            </div>
            <button className="button" onClick={handleSubmit}>
              <span className="button-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download mr-2 h-4 w-4"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1={12} x2={12} y1={15} y2={3} />
                </svg>
                Get Installation Instructions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-sparkles"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
