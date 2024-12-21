"use client";

import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [tab, setTab] = useState(0);
  const [tab2, setTab2] = useState(0);
  const isActive = (index: number) =>
    tab === index ? "active-tab bg-primary/50" : "";
  const isTabActive = (index: number) =>
    tab2 === index ? "active-tab bg-primary/50" : "";
  return (
    <main
      id="scrollableContent"
      className="flex-1 relative py-8 lg:px-12 break-anywhere page-api-block:xl:max-2xl:pr-0 page-api-block:max-w-[1654px] page-api-block:mx-auto"
    >
      <Link
        href="https://streamable.com/46qndv"
        className="video-btn"
        target="_blank"
      >
        Video
      </Link>
      <header className="max-w-3xl mx-auto mb-6 space-y-3 page-api-block:ml-0">
        <nav>
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <a
                className="underline-offset-2 decoration-primary/6 text-primary hover:text-primary-700 transition-colors no-underline hover:underline text-xs tracking-wide font-semibold uppercase flex items-center gap-1"
                href="2-setup"
              >
                2# Setup
              </a>
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl font-bold flex items-center gap-4">
          Bios Setup
        </h1>
        <p className="text-lg text-dark-4 dark:text-light-4">
          REQUIRED steps for all motherboards
        </p>
      </header>
      <div className="[&>*+*]:mt-5 grid whitespace-pre-wrap">
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          Flash Bios
        </p>
        <div className="rounded-lg straight-corners:rounded-sm ring-1 ring-primary/25 ring-inset ring-dark/3 flex overflow-hidden flex-col dark:ring-light/2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <div
            role="tablist"
            className="group/tabs inline-flex flex-row self-stretch after:flex-[1] after:bg-dark-2/1 [&:has(button.active-tab:last-of-type):after]:rounded-bl-md dark:after:bg-dark-1/5"
          >
            <button
              role="tab"
              aria-selected="true"
              aria-controls="msi"
              id="tab-msi"
              className={`[&:has(+_.active-tab)]:rounded-br-md [.active-tab_+_&]:rounded-bl-md [.active-tab_+_:after]:rounded-br-md inline-block text-sm px-3.5 py-2 transition-[color] font-[500] relative after:transition-colors  after:border-r-primary/50 after:border-r after:absolute after:left-[unset] after:right-0 after:border-dark/4 after:top-[15%] after:h-[70%] after:w-[1px] last:after:border-transparent text-dark-2/7 bg-dark-2/1 dark:bg-dark-1/5 hover:text-dark-2 dark:text-light-3/8 dark:after:border-light/2 dark:hover:text-light-3 truncate max-w-full hover:bg-primary/50  ${isActive(
                0
              )}`}
              onClick={() => setTab(0)}
            >
              MSI
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="gigabyte"
              id="tab-gigabyte"
              className={` inline-block text-sm px-3.5 py-2 transition-[color] font-[500] relative after:transition-colors  after:border-r-primary/50 after:border-r after:absolute after:left-[unset] after:right-0 after:border-dark/4 after:top-[15%] after:h-[70%] after:w-[1px] last:after:border-transparent text-dark-2/7 bg-dark-2/1 dark:bg-dark-1/5 hover:text-dark-2 dark:text-light-3/8 dark:after:border-light/2 dark:hover:text-light-3 truncate max-w-full hover:bg-primary/50 ${isActive(
                1
              )}`}
              onClick={() => setTab(1)}
            >
              GIGABYTE
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="asus"
              id="tab-asus"
              className={`inline-block text-sm px-3.5 py-2 transition-[color] font-[500] relative after:transition-colors  after:border-r-primary/50 after:border-r after:absolute after:left-[unset] after:right-0 after:border-dark/4 after:top-[15%] after:h-[70%] after:w-[1px] last:after:border-transparent text-dark-2/7 bg-dark-2/1 dark:bg-dark-1/5 hover:text-dark-2 dark:text-light-3/8 dark:after:border-light/2 dark:hover:text-light-3 truncate max-w-full hover:bg-primary/50  ${isActive(
                2
              )}`}
              onClick={() => setTab(2)}
            >
              ASUS
            </button>
          </div>
          <div
            role="tabpanel"
            id="msi"
            aria-labelledby="tab-msi"
            className={`p-4 ${tab === 0 ? "" : "hidden"}`}
          >
            <div className="w-full space-y-4">
              <div className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none">
                <div>
                  <div>
                    <div
                      style={{
                        left: "0",
                        width: "100%",
                        height: "0",
                        position: "relative",
                        paddingBottom: "56.25%",
                      }}
                    >
                      <iframe
                        src="https://cdn.iframe.ly/o2UKnx4"
                        style={{
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          border: "0",
                        }}
                        allowFullScreen
                        scrolling="no"
                        allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            role="tabpanel"
            id="gigabyte"
            aria-labelledby="tab-gigabyte"
            className={`p-4 ${tab === 1 ? "" : "hidden"}`}
          >
            <div className="w-full space-y-4">
              <div className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none">
                <div>
                  <div>
                    <div
                      style={{
                        left: "0",
                        width: "100%",
                        height: "0",
                        position: "relative",
                        paddingBottom: "56.25%",
                      }}
                    >
                      <iframe
                        src="https://cdn.iframe.ly/Vo7ZaXR"
                        style={{
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          border: "0",
                        }}
                        allowFullScreen
                        scrolling="no"
                        allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            role="tabpanel"
            id="asus"
            aria-labelledby="tab-asus"
            className={`p-4 ${tab === 2 ? "" : "hidden"}`}
          >
            <div className="w-full space-y-4">
              <div className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none">
                <div>
                  <div>
                    <div
                      style={{
                        left: "0",
                        width: "100%",
                        height: "0",
                        position: "relative",
                        paddingBottom: "56.25%",
                      }}
                    >
                      <iframe
                        src="https://cdn.iframe.ly/7ON9IY7"
                        style={{
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                          border: "0",
                        }}
                        allowFullScreen
                        scrolling="no"
                        allow="accelerometer *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *; web-share *;"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <li className="leading-normal flex items-start">
            <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
              <div
                className="before:font-var before:content-[--pseudoBefore--content]"
                style={{
                  "--pseudoBefore--content": "'•'",
                  "--font-family": "Arial",
                  fontSize: "min(1.5em, 24px)",
                  lineHeight: "1",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                Download your BIOS file from the manufacturer's site
              </p>
            </div>
          </li>
          <li className="leading-normal flex items-start">
            <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
              <div
                className="before:font-var before:content-[--pseudoBefore--content]"
                style={{
                  "--pseudoBefore--content": "'•'",
                  "--font-family": "Arial",
                  fontSize: "min(1.5em, 24px)",
                  lineHeight: "1",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                Go into your BIOS
              </p>
            </div>
          </li>
          <li className="leading-normal flex items-start">
            <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
              <div
                className="before:font-var before:content-[--pseudoBefore--content]"
                style={{
                  "--pseudoBefore--content": "'•'",
                  "--font-family": "Arial",
                  fontSize: "min(1.5em, 24px)",
                  lineHeight: "1",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                Update it to a newer or to the same version
              </p>
            </div>
          </li>
        </ul>
        <div className="hint p-4 transition-colors rounded-md straight-corners:rounded-none bg-orange-500/2 border-orange-500/4 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <div className="flex flex-row">
            <svg
              className="gb-icon size-5 mr-4 mt-0.5 leading-normal text-amber-500 dark:text-orange-400"
              style={{
                maskImage:
                  "url('https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/circle-exclamation.svg?v=2&token=a463935e93')",
                maskRepeat: "no-repeat",
                maskPosition: "center center",
              }}
            />
            <div className="flex-1 space-y-4 [&_.hint]:border [&_pre]:border">
              <p className="w-full mx-auto max-w-3xl [&_a]:text-orange-800 [&_a:hover]:text-orange-900 dark:[&_a]:text-orange-400 dark:[&_a:hover]:text-orange-300 [&_.can-override-bg]:bg-orange-500/3 [&_.can-override-text]:text-orange-800 dark:[&_.can-override-text]:text-orange-400 decoration-orange-800/6 dark:decoration-orange-400/6 flip-heading-hash">
                Note: After flashing bios it can result in a reset of your bios
                settings, so keep note of them before flashing bios When
                Flashing BIOS Make Sure to Upgrade 1 Version Each Time. Example:
                Version FE 03/12/23 -&gt; Version FW 03/29/23 instead of going
                to a newer one always go through the following dates in order!
                How to check my version? Go to your bios and check what is your
                bios version in system information. (Could Also Show When You
                are Flashing Bios, So Enter Flash Mode to do so) MAKE SURE
                EVERYTHING IS RIGHT BEFORE YOU DO IT! (Note : If you on the
                newest version, downgrade and upgrade)
              </p>
            </div>
          </div>
        </div>
        <h2
          id="enable-tpm"
          className="text-3xl font-semibold group relative grid w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0"
        >
          {/* <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[1em]">
            <a
              href="#enable-tpm"
              aria-label="Direct link to heading"
              className="inline-flex h-full items-start dark:text-light/3 dark:shadow-none dark:ring-0 leading-tight"
            >
              <svg
                className="gb-icon w-3.5 h-[1lh] transition-colors text-transparent group-hover:text-dark/6 dark:group-hover:text-light/5 lg:w-4"
                style={{
                  maskImage:
                    "url('https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/hashtag.svg?v=2&token=a463935e93')",
                  maskRepeat: "no-repeat",
                  maskPosition: "center center",
                }}
              />
            </a>
          </div> */}
          <div className="grid-area-1-1 z-[1] mt-[1em]">Enable TPM</div>
        </h2>
        <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <li className="leading-normal flex items-start">
            <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
              <div
                className="before:font-var before:content-[--pseudoBefore--content]"
                style={{
                  "--pseudoBefore--content": "'1.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                Enable TPM (Security Device Support) in your
                <strong className="font-bold">
                  BIOS Security Tab (Trusted Computing)
                </strong>
              </p>
            </div>
          </li>
          <li className="leading-normal flex items-start">
            <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
              <div
                className="before:font-var before:content-[--pseudoBefore--content]"
                style={{
                  "--pseudoBefore--content": "'2.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                If you have an AMD CPU, also
                <strong className="font-bold">enable fTPM</strong> or set it to
                <strong className="font-bold">Firmware</strong>
              </p>
            </div>
          </li>
        </ol>
        <div className="hint p-4 transition-colors rounded-md straight-corners:rounded-none bg-orange-500/2 border-orange-500/4 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <div className="flex flex-row">
            <svg
              className="gb-icon size-5 mr-4 mt-0.5 leading-normal text-amber-500 dark:text-orange-400"
              style={{
                maskImage:
                  "url('https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/circle-exclamation.svg?v=2&token=a463935e93')",
                maskRepeat: "no-repeat",
                maskPosition: "center center",
              }}
            />
            <div className="flex-1 space-y-4 [&_.hint]:border [&_pre]:border">
              <p className="w-full mx-auto max-w-3xl [&_a]:text-orange-800 [&_a:hover]:text-orange-900 dark:[&_a]:text-orange-400 dark:[&_a:hover]:text-orange-300 [&_.can-override-bg]:bg-orange-500/3 [&_.can-override-text]:text-orange-800 dark:[&_.can-override-text]:text-orange-400 decoration-orange-800/6 dark:decoration-orange-400/6 flip-heading-hash">
                <strong className="font-bold">
                  FOR EAC Disable TPM &amp; SECURE BOOT (Fortnite, Rust, ETC.)
                </strong>
              </p>
            </div>
          </div>
        </div>
        <h2
          id="turn-off-wifi-and-bluetooth-required"
          className="text-3xl font-semibold group relative grid w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0"
        >
          {/* <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[1em]">
            <a
              href="#turn-off-wifi-and-bluetooth-required"
              aria-label="Direct link to heading"
              className="inline-flex h-full items-start dark:text-light/3 dark:shadow-none dark:ring-0 leading-tight"
            >
              <svg
                className="gb-icon w-3.5 h-[1lh] transition-colors text-transparent group-hover:text-dark/6 dark:group-hover:text-light/5 lg:w-4"
                style={{
                  maskImage:
                    "url('https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/hashtag.svg?v=2&token=a463935e93')",
                  maskRepeat: "no-repeat",
                  maskPosition: "center center",
                }}
              />
            </a>
          </div> */}
          <div className="grid-area-1-1 z-[1] mt-[1em]">
            TURN OFF WIFI &amp; BLUETOOTH [REQUIRED]
          </div>
        </h2>
        <div className="hint p-4 transition-colors rounded-md straight-corners:rounded-none bg-red-500/2 border-red-500/4 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <div className="flex flex-row">
            <svg
              className="gb-icon size-5 mr-4 mt-0.5 leading-normal text-red-500 dark:text-red-400"
              style={{
                maskImage:
                  "url('https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/triangle-exclamation.svg?v=2&token=a463935e93')",
                maskRepeat: "no-repeat",
                maskPosition: "center center",
              }}
            />
            <div className="flex-1 space-y-4 [&_.hint]:border [&_pre]:border">
              <p className="w-full mx-auto max-w-3xl [&_a]:text-red-800 [&_a:hover]:text-red-900 dark:[&_a]:text-red-400 dark:[&_a:hover]:text-red-300 [&_.can-override-bg]:bg-red-500/3 [&_.can-override-text]:text-red-400 decoration-red-800/6 dark:decoration-red-400/6 flip-heading-hash">
                <span className="text-red-500">
                  If your Ethernet Disable WiFi and Bluetooth from your BIOS -
                  If your motherboard has both! - Otherwise if WiFi Disable
                  Bluetooth
                </span>
              </p>
            </div>
          </div>
        </div>
        <blockquote className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 text-dark/7 border-l-2 pl-6 py-3 border-dark/2 dark:text-light/7 dark:border-light/2 space-y-4">
          <p className="w-full mx-auto decoration-primary/6 max-w-3xl">
            <strong className="font-bold">ASUS:</strong> ADVANCED &gt; ONBOARD
            DEVICES CONFIGS &gt; WIFI (WLAN) &amp; BLUETOOTH
            <strong className="font-bold">[DISABLED]</strong>
          </p>
        </blockquote>
        <blockquote className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 text-dark/7 border-l-2 pl-6 py-3 border-dark/2 dark:text-light/7 dark:border-light/2 space-y-4">
          <p className="w-full mx-auto decoration-primary/6 max-w-3xl">
            <strong className="font-bold">MSI:</strong> ADVANCED &gt; INTEGRATED
            PERIPHERALS &gt; WIFI (WLAN) &amp; BLUETOOTH
            <strong className="font-bold">[DISABLED]</strong>
          </p>
        </blockquote>
        <blockquote className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 text-dark/7 border-l-2 pl-6 py-3 border-dark/2 dark:text-light/7 dark:border-light/2 space-y-4">
          <p className="w-full mx-auto decoration-primary/6 max-w-3xl">
            <strong className="font-bold">GIGABYTE: </strong>
            ADVANCED/PERIPHERALS &gt; WIFI (WLAN) &amp; BLUETOOTH
            <strong className="font-bold">[DISABLED]</strong>
          </p>
        </blockquote>
        <blockquote className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 text-dark/7 border-l-2 pl-6 py-3 border-dark/2 dark:text-light/7 dark:border-light/2 space-y-4">
          <p className="w-full mx-auto decoration-primary/6 max-w-3xl">
            <strong className="font-bold">ASROCK: </strong>ADVANCED &gt; CHIPSET
            CONFIGURATION &gt; WIFI (WLAN) &amp; BLUETOOTH
            <strong className="font-bold">[DISABLED]</strong>
          </p>
        </blockquote>
        <h2
          id="disabling-virtualization"
          className="text-3xl font-semibold group relative grid w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0"
        >
          {/* <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[1em]">
            <a
              href="#disabling-virtualization"
              aria-label="Direct link to heading"
              className="inline-flex h-full items-start dark:text-light/3 dark:shadow-none dark:ring-0 leading-tight"
            >
              <svg
                className="gb-icon w-3.5 h-[1lh] transition-colors text-transparent group-hover:text-dark/6 dark:group-hover:text-light/5 lg:w-4"
                style={{
                  maskImage:
                    "url('https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/hashtag.svg?v=2&token=a463935e93')",
                  maskRepeat: "no-repeat",
                  maskPosition: "center center",
                }}
              />
            </a>
          </div> */}
          <div className="grid-area-1-1 z-[1] mt-[1em]">
            Disabling Virtualization
          </div>
        </h2>
        <div className="rounded-lg straight-corners:rounded-sm ring-1 ring-primary/25 ring-inset ring-dark/3 flex overflow-hidden flex-col dark:ring-light/2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <div
            role="tablist"
            className="group/tabs inline-flex flex-row self-stretch after:flex-[1] after:bg-dark-2/1 [&:has(button.active-tab:last-of-type):after]:rounded-bl-md dark:after:bg-dark-1/5"
          >
            <button
              role="tab"
              aria-selected="true"
              aria-controls="intel"
              id="tab-intel"
              className={`[&:has(+_.active-tab)]:rounded-br-md [.active-tab_+_&]:rounded-bl-md [.active-tab_+_:after]:rounded-br-md inline-block text-sm px-3.5 py-2 transition-[color] font-[500] relative after:transition-colors  after:border-r-primary/50 after:border-r after:absolute after:left-[unset] after:right-0 after:border-dark/4 after:top-[15%] after:h-[70%] after:w-[1px] last:after:border-transparent text-dark-2/7 bg-dark-2/1 dark:bg-dark-1/5 hover:text-dark-2 dark:text-light-3/8 dark:after:border-light/2 dark:hover:text-light-3 truncate max-w-full hover:bg-primary/50  ${isTabActive(
                0
              )}`}
              onClick={() => setTab2(0)}
            >
              INTEL
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="amd"
              id="tab-amd"
              className={` inline-block text-sm px-3.5 py-2 transition-[color] font-[500] relative after:transition-colors  after:border-r-primary/50 after:border-r after:absolute after:left-[unset] after:right-0 after:border-dark/4 after:top-[15%] after:h-[70%] after:w-[1px] last:after:border-transparent text-dark-2/7 bg-dark-2/1 dark:bg-dark-1/5 hover:text-dark-2 dark:text-light-3/8 dark:after:border-light/2 dark:hover:text-light-3 truncate max-w-full hover:bg-primary/50 ${isTabActive(
                1
              )}`}
              onClick={() => setTab2(1)}
            >
              AMD
            </button>
          </div>
          <div
            role="tabpanel"
            id="intel"
            aria-labelledby="tab-intel"
            className={`p-4 ${tab2 === 0 ? "" : "hidden"}`}
          >
            <div className="w-full space-y-4">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                Disable These Options Listed Below Virtualization (Intel
                Virtualization Tech)
              </p>
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                VT-D
              </p>
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                TPM ( Check above for confirmation)
              </p>
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                SECURE BOOT ( Check above for confirmation)
              </p>
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                Utility Installer (Check where it is via bios )
              </p>
            </div>
          </div>
          <div
            role="tabpanel"
            id="amd"
            aria-labelledby="tab-amd"
            className={`p-4 ${tab2 === 1 ? "" : "hidden"}`}
          >
            <div className="w-full space-y-4">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                Disable These Options Listed Below Disable Virtualization/SVM
                (AMD)
              </p>
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                Disable IOMMU (AMD CBS &gt; NBIO Common Options &gt; NB
                Configuration &gt; IOMMU)
              </p>
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                Disable NX-Bit (Only if available, CPU Settings Secure Virtual
                Machine)
              </p>
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                TPM ( Check above for confirmation)
              </p>
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                SECURE BOOT ( Check above for confirmation)
              </p>
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                Utility Installer (Check where it is via bios )
              </p>
            </div>
          </div>
        </div>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          Confirming That Virtualization is Disabled
        </p>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
          <picture className="relative">
            <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit mx-auto">
              <img
                alt=""
                loading="lazy"
                fetchPriority="low"
                className="block"
                src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FxamciRdyVLDi2Zv3RZEi%252Fimage.png%3Falt%3Dmedia%26token%3Dcfd24bd0-337a-4516-9bee-44c6d67894b4&width=768&dpr=4&quality=100&sign=c71ce0db&sv=2"
                srcSet="
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FxamciRdyVLDi2Zv3RZEi%252Fimage.png%3Falt%3Dmedia%26token%3Dcfd24bd0-337a-4516-9bee-44c6d67894b4&width=400&dpr=1&quality=100&sign=c71ce0db&sv=2  400w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FxamciRdyVLDi2Zv3RZEi%252Fimage.png%3Falt%3Dmedia%26token%3Dcfd24bd0-337a-4516-9bee-44c6d67894b4&width=400&dpr=2&quality=100&sign=c71ce0db&sv=2  800w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FxamciRdyVLDi2Zv3RZEi%252Fimage.png%3Falt%3Dmedia%26token%3Dcfd24bd0-337a-4516-9bee-44c6d67894b4&width=400&dpr=3&quality=100&sign=c71ce0db&sv=2 1200w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FxamciRdyVLDi2Zv3RZEi%252Fimage.png%3Falt%3Dmedia%26token%3Dcfd24bd0-337a-4516-9bee-44c6d67894b4&width=400&dpr=4&quality=100&sign=c71ce0db&sv=2 1600w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FxamciRdyVLDi2Zv3RZEi%252Fimage.png%3Falt%3Dmedia%26token%3Dcfd24bd0-337a-4516-9bee-44c6d67894b4&width=768&dpr=1&quality=100&sign=c71ce0db&sv=2  768w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FxamciRdyVLDi2Zv3RZEi%252Fimage.png%3Falt%3Dmedia%26token%3Dcfd24bd0-337a-4516-9bee-44c6d67894b4&width=768&dpr=2&quality=100&sign=c71ce0db&sv=2 1536w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FxamciRdyVLDi2Zv3RZEi%252Fimage.png%3Falt%3Dmedia%26token%3Dcfd24bd0-337a-4516-9bee-44c6d67894b4&width=768&dpr=3&quality=100&sign=c71ce0db&sv=2 2304w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FxamciRdyVLDi2Zv3RZEi%252Fimage.png%3Falt%3Dmedia%26token%3Dcfd24bd0-337a-4516-9bee-44c6d67894b4&width=768&dpr=4&quality=100&sign=c71ce0db&sv=2 3072w
      "
                sizes="(max-width: 640px) 400px, 768px"
                width={663}
                height={590}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <figcaption className="text-sm text-center mt-2 text-dark/7 dark:text-light/7">
              Task Manager CPU
            </figcaption>
          </picture>
        </div>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
          <picture className="relative">
            <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit mx-auto">
              <img
                alt=""
                loading="lazy"
                fetchPriority="low"
                className="block"
                src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FtQ5LMTZ43Wkec1M0AYtm%252Fimage.png%3Falt%3Dmedia%26token%3D157dd672-c991-4a1e-9a22-b0b1c158d60e&width=768&dpr=4&quality=100&sign=9e7f0fac&sv=2"
                srcSet="
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FtQ5LMTZ43Wkec1M0AYtm%252Fimage.png%3Falt%3Dmedia%26token%3D157dd672-c991-4a1e-9a22-b0b1c158d60e&width=400&dpr=1&quality=100&sign=9e7f0fac&sv=2  400w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FtQ5LMTZ43Wkec1M0AYtm%252Fimage.png%3Falt%3Dmedia%26token%3D157dd672-c991-4a1e-9a22-b0b1c158d60e&width=400&dpr=2&quality=100&sign=9e7f0fac&sv=2  800w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FtQ5LMTZ43Wkec1M0AYtm%252Fimage.png%3Falt%3Dmedia%26token%3D157dd672-c991-4a1e-9a22-b0b1c158d60e&width=400&dpr=3&quality=100&sign=9e7f0fac&sv=2 1200w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FtQ5LMTZ43Wkec1M0AYtm%252Fimage.png%3Falt%3Dmedia%26token%3D157dd672-c991-4a1e-9a22-b0b1c158d60e&width=400&dpr=4&quality=100&sign=9e7f0fac&sv=2 1600w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FtQ5LMTZ43Wkec1M0AYtm%252Fimage.png%3Falt%3Dmedia%26token%3D157dd672-c991-4a1e-9a22-b0b1c158d60e&width=768&dpr=1&quality=100&sign=9e7f0fac&sv=2  768w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FtQ5LMTZ43Wkec1M0AYtm%252Fimage.png%3Falt%3Dmedia%26token%3D157dd672-c991-4a1e-9a22-b0b1c158d60e&width=768&dpr=2&quality=100&sign=9e7f0fac&sv=2 1536w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FtQ5LMTZ43Wkec1M0AYtm%252Fimage.png%3Falt%3Dmedia%26token%3D157dd672-c991-4a1e-9a22-b0b1c158d60e&width=768&dpr=3&quality=100&sign=9e7f0fac&sv=2 2304w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FtQ5LMTZ43Wkec1M0AYtm%252Fimage.png%3Falt%3Dmedia%26token%3D157dd672-c991-4a1e-9a22-b0b1c158d60e&width=768&dpr=4&quality=100&sign=9e7f0fac&sv=2 3072w
      "
                sizes="(max-width: 640px) 400px, 768px"
                width={298}
                height={94}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <figcaption className="text-sm text-center mt-2 text-dark/7 dark:text-light/7">
              Win Key + R = msinfo32 -&gt; Scroll All the Way Down
            </figcaption>
          </picture>
        </div>
        <h2
          id="enable-secure-boot"
          className="text-3xl font-semibold group relative grid w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0"
        >
          {/* <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[1em]">
            <a
              href="#enable-secure-boot"
              aria-label="Direct link to heading"
              className="inline-flex h-full items-start dark:text-light/3 dark:shadow-none dark:ring-0 leading-tight"
            >
              <svg
                className="gb-icon w-3.5 h-[1lh] transition-colors text-transparent group-hover:text-dark/6 dark:group-hover:text-light/5 lg:w-4"
                style={{
                  maskImage:
                    "url('https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/hashtag.svg?v=2&token=a463935e93')",
                  maskRepeat: "no-repeat",
                  maskPosition: "center center",
                }}
              />
            </a>
          </div> */}
          <div className="grid-area-1-1 z-[1] mt-[1em]">Enable Secure Boot</div>
        </h2>
        <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <li className="leading-normal flex items-start">
            <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
              <div
                className="before:font-var before:content-[--pseudoBefore--content]"
                style={{
                  "--pseudoBefore--content": "'1.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                Enable Secure Boot in your
                <strong className="font-bold">
                  BIOS Boot Tab - Restore Factory Boot Keys
                </strong>
              </p>
            </div>
          </li>
        </ol>
        <h2
          id="disable-csm"
          className="text-3xl font-semibold group relative grid w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0"
        >
          {/* <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[1em]">
            <a
              href="#disable-csm"
              aria-label="Direct link to heading"
              className="inline-flex h-full items-start dark:text-light/3 dark:shadow-none dark:ring-0 leading-tight"
            >
              <svg
                className="gb-icon w-3.5 h-[1lh] transition-colors text-transparent group-hover:text-dark/6 dark:group-hover:text-light/5 lg:w-4"
                style={{
                  maskImage:
                    "url('https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/hashtag.svg?v=2&token=a463935e93')",
                  maskRepeat: "no-repeat",
                  maskPosition: "center center",
                }}
              />
            </a>
          </div> */}
          <div className="grid-area-1-1 z-[1] mt-[1em]">Disable CSM</div>
        </h2>
        <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <li className="leading-normal flex items-start">
            <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
              <div
                className="before:font-var before:content-[--pseudoBefore--content]"
                style={{
                  "--pseudoBefore--content": "'1.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                Disable CSM in your
                <strong className="font-bold">
                  BIOS Boot Tab (failure to do so will cause serials to revert)
                </strong>
              </p>
            </div>
          </li>
        </ol>
        <h2
          id="confirm-correct-settings"
          className="text-3xl font-semibold group relative grid w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0"
        >
          {/* <div class="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[1em]">
            <a
              href="#confirm-correct-settings"
              aria-label="Direct link to heading"
              class="inline-flex h-full items-start dark:text-light/3 dark:shadow-none dark:ring-0 leading-tight"
            >
              <svg
                class="gb-icon w-3.5 h-[1lh] transition-colors text-transparent group-hover:text-dark/6 dark:group-hover:text-light/5 lg:w-4"
                style='mask-image: url("https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/hashtag.svg?v=2&amp;token=a463935e93"); mask-repeat: no-repeat; mask-position: center center;'
              ></svg>
            </a>
          </div> */}
          <div className="grid-area-1-1 z-[1] mt-[1em]">
            Confirm Correct Settings
          </div>
        </h2>
        <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <li className="leading-normal flex items-start">
            <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark-4 dark:text-light-4">
              <div
                className="before:font-var before:content-[--pseudoBefore--content]"
                style={{
                  "--pseudoBefore--content": "'1.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0 mx-0">
                In Windows, search for{" "}
                <strong className="font-bold">msinfo32</strong> and press Enter.
                Check if the value for{" "}
                <strong className="font-bold">Secure Boot State</strong> is{" "}
                <strong className="font-bold">On</strong>
              </p>
            </div>
          </li>
          <li className="leading-normal flex items-start">
            <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark-4 dark:text-light-4">
              <div
                className="before:font-var before:content-[--pseudoBefore--content]"
                style={{
                  "--pseudoBefore--content": "'2.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0 mx-0">
                Search for <strong className="font-bold">tpm.msc</strong> and
                press Enter. It should say{" "}
                <strong className="font-bold">The TPM is not available</strong>
              </p>
            </div>
          </li>
        </ol>
      </div>
      <div className="next-prev">
        <Link
          href="/2-setup/disable-windows-updates"
          className="nav-button"
          id="prev-button"
        >
          &larr; Previous
        </Link>
        <Link
          href="/2-setup/download-loader"
          className="nav-button"
          id="next-button"
        >
          Next &rarr;
        </Link>
      </div>
      <div className="last-updated">Last updated 5 months ago</div>
    </main>
  );
};

export default Page;
