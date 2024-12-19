import Link from "next/link";

const page = () => {
  return (
    <main
      id="scrollableContent"
      className="flex-1 relative py-8 lg:px-12 break-anywhere page-api-block:xl:max-2xl:pr-0 page-api-block:max-w-[1654px] page-api-block:mx-auto"
    >
      <header className="max-w-3xl mx-auto mb-6 space-y-3 page-api-block:ml-0">
        <nav>
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <a
                className="underline-offset-2 decoration-primary/6 text-primary hover:text-primary-700 transition-colors no-underline hover:underline text-xs tracking-wide font-semibold uppercase flex items-center gap-1"
                href="3-spoof"
              >
                3# Spoof
              </a>
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl font-bold flex items-center gap-4">
          Spoof HWID
        </h1>
        <p className="text-lg text-dark-4 dark:text-light-4">
          How to spoof HWID
        </p>
      </header>
      <div className="[&>*+*]:mt-5 grid whitespace-pre-wrap">
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
                Run<strong className="font-bold"> loader</strong>
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
                Enter key <i className="font-italic">(Check </i>
                <i className="font-italic">
                  <strong className="font-bold">Remember me</strong>
                </i>
                )
              </p>
            </div>
          </li>
          <li className="leading-normal flex items-start">
            <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
              <div
                className="before:font-var before:content-[--pseudoBefore--content]"
                style={{
                  "--pseudoBefore--content": "'3.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                <strong className="font-bold">Login</strong>
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
                Recommend Using EFI Due to it being the safest option
              </p>
            </div>
          </div>
        </div>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0" />
        <div className="rounded-lg straight-corners:rounded-sm ring-1 ring-inset ring-dark/3 flex overflow-hidden flex-col dark:ring-light/2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <div
            role="tablist"
            className="group/tabs inline-flex flex-row self-stretch after:flex-[1] after:bg-dark-2/1 [&:has(button.active-tab:last-of-type):after]:rounded-bl-md dark:after:bg-dark-1/5"
          >
            <button
              role="tab"
              aria-selected="true"
              aria-controls="uefi"
              id="tab-uefi"
              className="[&:has(+_.active-tab)]:rounded-br-md [.active-tab_+_&]:rounded-bl-md [.active-tab_+_:after]:rounded-br-md inline-block text-sm px-3.5 py-2 transition-[color] font-[500] relative after:transition-colors after:group-hover/tabs:border-transparent after:border-r after:absolute after:left-[unset] after:right-0 after:border-dark/4 after:top-[15%] after:h-[70%] after:w-[1px] last:after:border-transparent hover:text-dark-2 dark:after:border-light/2 dark:hover:text-light-3 truncate max-w-full shrink-0 active-tab text-dark-2 bg-transparent dark:text-light dark:bg-transparent after:[&.active-tab]:border-transparent after:[:has(+_&.active-tab)]:border-transparent after:[:has(&_+)]:border-transparent"
            >
              UEFI
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="efi"
              id="tab-efi"
              className="[&:has(+_.active-tab)]:rounded-br-md [.active-tab_+_&]:rounded-bl-md [.active-tab_+_:after]:rounded-br-md inline-block text-sm px-3.5 py-2 transition-[color] font-[500] relative after:transition-colors after:group-hover/tabs:border-transparent after:border-r after:absolute after:left-[unset] after:right-0 after:border-dark/4 after:top-[15%] after:h-[70%] after:w-[1px] last:after:border-transparent text-dark-2/7 bg-dark-2/1 dark:bg-dark-1/5 hover:text-dark-2 dark:text-light-3/8 dark:after:border-light/2 dark:hover:text-light-3 truncate max-w-full"
            >
              EFI
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="regular"
              id="tab-regular"
              className="[&:has(+_.active-tab)]:rounded-br-md [.active-tab_+_&]:rounded-bl-md [.active-tab_+_:after]:rounded-br-md inline-block text-sm px-3.5 py-2 transition-[color] font-[500] relative after:transition-colors after:group-hover/tabs:border-transparent after:border-r after:absolute after:left-[unset] after:right-0 after:border-dark/4 after:top-[15%] after:h-[70%] after:w-[1px] last:after:border-transparent text-dark-2/7 bg-dark-2/1 dark:bg-dark-1/5 hover:text-dark-2 dark:text-light-3/8 dark:after:border-light/2 dark:hover:text-light-3 truncate max-w-full"
            >
              Regular
            </button>
          </div>
          <div
            role="tabpanel"
            id="uefi"
            aria-labelledby="tab-uefi"
            className="p-4"
          >
            <div className="w-full space-y-4">
              <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
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
                      Leave <strong className="font-bold">Normal Spoof</strong>{" "}
                      enabled
                    </p>
                  </div>
                </li>
              </ol>
              <div className="hint p-4 transition-colors rounded-md straight-corners:rounded-none bg-dark-1/1 border-dark/3 dark:bg-light/1 dark:border-light/3 [&_.can-override-bg]:bg-dark-1/2 [&_.can-override-text]:text-dark dark:[&_.can-override-bg]:bg-light/2 dark:[&_.can-override-text]:text-light w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                <div className="flex flex-row">
                  <svg
                    className="gb-icon size-5 mr-4 mt-0.5 leading-normal text-primary-500 dark:text-primary-400"
                    style={{
                      maskImage:
                        "url('https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/circle-info.svg?v=2&token=a463935e93')",
                      maskRepeat: "no-repeat",
                      maskPosition: "center center",
                    }}
                  />
                  <div className="flex-1 space-y-4 [&_.hint]:border [&_pre]:border">
                    <p className="w-full mx-auto decoration-primary/6 max-w-3xl [&_a]:text-primary-500 [&_a:hover]:text-primary-600 dark:[&_a]:text-primary-400 dark:[&_a:hover]:text-primary-300 flip-heading-hash">
                      <strong className="font-bold">Enable</strong> GPU Spoofing
                      for
                      <span className="text-red-500">
                        <strong className="font-bold"> FiveM</strong>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
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
                      <strong className="font-bold">Save Config</strong>
                    </p>
                  </div>
                </li>
                <li className="leading-normal flex items-start">
                  <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
                    <div
                      className="before:font-var before:content-[--pseudoBefore--content]"
                      style={{
                        "--pseudoBefore--content": "'3.'",
                        "--font-family": "inherit",
                        fontSize: "min(1em, 24px)",
                      }}
                    />
                  </div>
                  <div className="space-y-2 flex flex-col flex-1">
                    <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                      Press <strong className="font-bold">UEFI Spoof</strong>
                    </p>
                  </div>
                </li>
              </ol>
              <div className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash flex flex-row gap-3 justify-center">
                <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
                  <img
                    alt=""
                    fetchPriority="high"
                    className="block"
                    src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQ2Z0EwSZAiXFmKKJFDTh%252FUEFI.jpg%3Falt%3Dmedia%26token%3Daec203b4-6c2b-4b28-a4ab-022e46e890ee&width=768&dpr=4&quality=100&sign=d4839c16&sv=2"
                    srcSet="
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQ2Z0EwSZAiXFmKKJFDTh%252FUEFI.jpg%3Falt%3Dmedia%26token%3Daec203b4-6c2b-4b28-a4ab-022e46e890ee&width=400&dpr=1&quality=100&sign=d4839c16&sv=2  400w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQ2Z0EwSZAiXFmKKJFDTh%252FUEFI.jpg%3Falt%3Dmedia%26token%3Daec203b4-6c2b-4b28-a4ab-022e46e890ee&width=400&dpr=2&quality=100&sign=d4839c16&sv=2  800w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQ2Z0EwSZAiXFmKKJFDTh%252FUEFI.jpg%3Falt%3Dmedia%26token%3Daec203b4-6c2b-4b28-a4ab-022e46e890ee&width=400&dpr=3&quality=100&sign=d4839c16&sv=2 1200w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQ2Z0EwSZAiXFmKKJFDTh%252FUEFI.jpg%3Falt%3Dmedia%26token%3Daec203b4-6c2b-4b28-a4ab-022e46e890ee&width=400&dpr=4&quality=100&sign=d4839c16&sv=2 1600w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQ2Z0EwSZAiXFmKKJFDTh%252FUEFI.jpg%3Falt%3Dmedia%26token%3Daec203b4-6c2b-4b28-a4ab-022e46e890ee&width=768&dpr=1&quality=100&sign=d4839c16&sv=2  768w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQ2Z0EwSZAiXFmKKJFDTh%252FUEFI.jpg%3Falt%3Dmedia%26token%3Daec203b4-6c2b-4b28-a4ab-022e46e890ee&width=768&dpr=2&quality=100&sign=d4839c16&sv=2 1536w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQ2Z0EwSZAiXFmKKJFDTh%252FUEFI.jpg%3Falt%3Dmedia%26token%3Daec203b4-6c2b-4b28-a4ab-022e46e890ee&width=768&dpr=3&quality=100&sign=d4839c16&sv=2 2304w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQ2Z0EwSZAiXFmKKJFDTh%252FUEFI.jpg%3Falt%3Dmedia%26token%3Daec203b4-6c2b-4b28-a4ab-022e46e890ee&width=768&dpr=4&quality=100&sign=d4839c16&sv=2 3072w
          "
                    sizes="(max-width: 640px) 400px, 768px"
                    width={694}
                    height={474}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                <li className="leading-normal flex items-start">
                  <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
                    <div
                      className="before:font-var before:content-[--pseudoBefore--content]"
                      style={{
                        "--pseudoBefore--content": "'4.'",
                        "--font-family": "inherit",
                        fontSize: "min(1em, 24px)",
                      }}
                    />
                  </div>
                  <div className="space-y-2 flex flex-col flex-1">
                    <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                      Choose your motherboard and click
                      <strong className="font-bold">
                        Spoof (if you are a different motherboard press other)
                      </strong>
                    </p>
                  </div>
                </li>
              </ol>
              <div className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash flex flex-row gap-3 justify-center">
                <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
                  <img
                    alt=""
                    loading="lazy"
                    fetchPriority="low"
                    className="block"
                    src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYihnVWGQH9hs9D9WDVHb%252Fimage.png%3Falt%3Dmedia%26token%3Dc336467d-2a99-408f-aa87-0d0a720da3d5&width=768&dpr=4&quality=100&sign=e681d270&sv=2"
                    srcSet="
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYihnVWGQH9hs9D9WDVHb%252Fimage.png%3Falt%3Dmedia%26token%3Dc336467d-2a99-408f-aa87-0d0a720da3d5&width=400&dpr=1&quality=100&sign=e681d270&sv=2  400w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYihnVWGQH9hs9D9WDVHb%252Fimage.png%3Falt%3Dmedia%26token%3Dc336467d-2a99-408f-aa87-0d0a720da3d5&width=400&dpr=2&quality=100&sign=e681d270&sv=2  800w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYihnVWGQH9hs9D9WDVHb%252Fimage.png%3Falt%3Dmedia%26token%3Dc336467d-2a99-408f-aa87-0d0a720da3d5&width=400&dpr=3&quality=100&sign=e681d270&sv=2 1200w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYihnVWGQH9hs9D9WDVHb%252Fimage.png%3Falt%3Dmedia%26token%3Dc336467d-2a99-408f-aa87-0d0a720da3d5&width=400&dpr=4&quality=100&sign=e681d270&sv=2 1600w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYihnVWGQH9hs9D9WDVHb%252Fimage.png%3Falt%3Dmedia%26token%3Dc336467d-2a99-408f-aa87-0d0a720da3d5&width=768&dpr=1&quality=100&sign=e681d270&sv=2  768w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYihnVWGQH9hs9D9WDVHb%252Fimage.png%3Falt%3Dmedia%26token%3Dc336467d-2a99-408f-aa87-0d0a720da3d5&width=768&dpr=2&quality=100&sign=e681d270&sv=2 1536w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYihnVWGQH9hs9D9WDVHb%252Fimage.png%3Falt%3Dmedia%26token%3Dc336467d-2a99-408f-aa87-0d0a720da3d5&width=768&dpr=3&quality=100&sign=e681d270&sv=2 2304w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYihnVWGQH9hs9D9WDVHb%252Fimage.png%3Falt%3Dmedia%26token%3Dc336467d-2a99-408f-aa87-0d0a720da3d5&width=768&dpr=4&quality=100&sign=e681d270&sv=2 3072w
          "
                    sizes="(max-width: 640px) 400px, 768px"
                    width={694}
                    height={476}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            role="tabpanel"
            id="efi"
            aria-labelledby="tab-efi"
            className="p-4 hidden"
          >
            <div className="w-full space-y-4">
              <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
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
                      Use the <strong className="font-bold">EFI </strong>method
                    </p>
                  </div>
                </li>
              </ol>
              <div className="hint p-4 transition-colors rounded-md straight-corners:rounded-none bg-dark-1/1 border-dark/3 dark:bg-light/1 dark:border-light/3 [&_.can-override-bg]:bg-dark-1/2 [&_.can-override-text]:text-dark dark:[&_.can-override-bg]:bg-light/2 dark:[&_.can-override-text]:text-light w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                <div className="flex flex-row">
                  <svg
                    className="gb-icon size-5 mr-4 mt-0.5 leading-normal text-primary-500 dark:text-primary-400"
                    style={{
                      maskImage:
                        "url('https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/circle-info.svg?v=2&token=a463935e93')",
                      maskRepeat: "no-repeat",
                      maskPosition: "center center",
                    }}
                  />
                  <div className="flex-1 space-y-4 [&_.hint]:border [&_pre]:border">
                    <p className="w-full mx-auto decoration-primary/6 max-w-3xl [&_a]:text-primary-500 [&_a:hover]:text-primary-600 dark:[&_a]:text-primary-400 dark:[&_a:hover]:text-primary-300 flip-heading-hash">
                      <strong className="font-bold">Enable</strong> GPU Spoofing
                      for<strong className="font-bold"> </strong>
                      <span className="text-red-500">
                        <strong className="font-bold">FiveM</strong>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
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
                      Save Config
                    </p>
                  </div>
                </li>
                <li className="leading-normal flex items-start">
                  <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
                    <div
                      className="before:font-var before:content-[--pseudoBefore--content]"
                      style={{
                        "--pseudoBefore--content": "'3.'",
                        "--font-family": "inherit",
                        fontSize: "min(1em, 24px)",
                      }}
                    />
                  </div>
                  <div className="space-y-2 flex flex-col flex-1">
                    <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                      Click EFI Spoof
                    </p>
                  </div>
                </li>
              </ol>
              <div className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash flex flex-row gap-3 justify-center">
                <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
                  <img
                    alt=""
                    loading="lazy"
                    fetchPriority="low"
                    className="block"
                    src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4zmF6gk5q9vbgNwPiz6o%252FEFI.jpg%3Falt%3Dmedia%26token%3Dd6144361-22e4-4deb-8393-8db3df2d0989&width=768&dpr=4&quality=100&sign=294d1859&sv=2"
                    srcSet="
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4zmF6gk5q9vbgNwPiz6o%252FEFI.jpg%3Falt%3Dmedia%26token%3Dd6144361-22e4-4deb-8393-8db3df2d0989&width=400&dpr=1&quality=100&sign=294d1859&sv=2  400w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4zmF6gk5q9vbgNwPiz6o%252FEFI.jpg%3Falt%3Dmedia%26token%3Dd6144361-22e4-4deb-8393-8db3df2d0989&width=400&dpr=2&quality=100&sign=294d1859&sv=2  800w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4zmF6gk5q9vbgNwPiz6o%252FEFI.jpg%3Falt%3Dmedia%26token%3Dd6144361-22e4-4deb-8393-8db3df2d0989&width=400&dpr=3&quality=100&sign=294d1859&sv=2 1200w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4zmF6gk5q9vbgNwPiz6o%252FEFI.jpg%3Falt%3Dmedia%26token%3Dd6144361-22e4-4deb-8393-8db3df2d0989&width=400&dpr=4&quality=100&sign=294d1859&sv=2 1600w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4zmF6gk5q9vbgNwPiz6o%252FEFI.jpg%3Falt%3Dmedia%26token%3Dd6144361-22e4-4deb-8393-8db3df2d0989&width=768&dpr=1&quality=100&sign=294d1859&sv=2  768w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4zmF6gk5q9vbgNwPiz6o%252FEFI.jpg%3Falt%3Dmedia%26token%3Dd6144361-22e4-4deb-8393-8db3df2d0989&width=768&dpr=2&quality=100&sign=294d1859&sv=2 1536w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4zmF6gk5q9vbgNwPiz6o%252FEFI.jpg%3Falt%3Dmedia%26token%3Dd6144361-22e4-4deb-8393-8db3df2d0989&width=768&dpr=3&quality=100&sign=294d1859&sv=2 2304w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4zmF6gk5q9vbgNwPiz6o%252FEFI.jpg%3Falt%3Dmedia%26token%3Dd6144361-22e4-4deb-8393-8db3df2d0989&width=768&dpr=4&quality=100&sign=294d1859&sv=2 3072w
          "
                    sizes="(max-width: 640px) 400px, 768px"
                    width={692}
                    height={474}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                <li className="leading-normal flex items-start">
                  <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
                    <div
                      className="before:font-var before:content-[--pseudoBefore--content]"
                      style={{
                        "--pseudoBefore--content": "'4.'",
                        "--font-family": "inherit",
                        fontSize: "min(1em, 24px)",
                      }}
                    />
                  </div>
                  <div className="space-y-2 flex flex-col flex-1">
                    <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                      Choose your motherboard and click
                      <strong className="font-bold">Spoof</strong>
                    </p>
                  </div>
                </li>
              </ol>
              <div className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash flex flex-row gap-3 justify-center">
                <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
                  <img
                    alt=""
                    loading="lazy"
                    fetchPriority="low"
                    className="block"
                    src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F1w37c0YETOtcH3rvDBFP%252Fimage.png%3Falt%3Dmedia%26token%3D7521e69c-1bf4-416a-ac4c-e57538ea7b91&width=768&dpr=4&quality=100&sign=8f7ff16f&sv=2"
                    srcSet="
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F1w37c0YETOtcH3rvDBFP%252Fimage.png%3Falt%3Dmedia%26token%3D7521e69c-1bf4-416a-ac4c-e57538ea7b91&width=400&dpr=1&quality=100&sign=8f7ff16f&sv=2  400w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F1w37c0YETOtcH3rvDBFP%252Fimage.png%3Falt%3Dmedia%26token%3D7521e69c-1bf4-416a-ac4c-e57538ea7b91&width=400&dpr=2&quality=100&sign=8f7ff16f&sv=2  800w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F1w37c0YETOtcH3rvDBFP%252Fimage.png%3Falt%3Dmedia%26token%3D7521e69c-1bf4-416a-ac4c-e57538ea7b91&width=400&dpr=3&quality=100&sign=8f7ff16f&sv=2 1200w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F1w37c0YETOtcH3rvDBFP%252Fimage.png%3Falt%3Dmedia%26token%3D7521e69c-1bf4-416a-ac4c-e57538ea7b91&width=400&dpr=4&quality=100&sign=8f7ff16f&sv=2 1600w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F1w37c0YETOtcH3rvDBFP%252Fimage.png%3Falt%3Dmedia%26token%3D7521e69c-1bf4-416a-ac4c-e57538ea7b91&width=768&dpr=1&quality=100&sign=8f7ff16f&sv=2  768w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F1w37c0YETOtcH3rvDBFP%252Fimage.png%3Falt%3Dmedia%26token%3D7521e69c-1bf4-416a-ac4c-e57538ea7b91&width=768&dpr=2&quality=100&sign=8f7ff16f&sv=2 1536w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F1w37c0YETOtcH3rvDBFP%252Fimage.png%3Falt%3Dmedia%26token%3D7521e69c-1bf4-416a-ac4c-e57538ea7b91&width=768&dpr=3&quality=100&sign=8f7ff16f&sv=2 2304w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F1w37c0YETOtcH3rvDBFP%252Fimage.png%3Falt%3Dmedia%26token%3D7521e69c-1bf4-416a-ac4c-e57538ea7b91&width=768&dpr=4&quality=100&sign=8f7ff16f&sv=2 3072w
          "
                    sizes="(max-width: 640px) 400px, 768px"
                    width={694}
                    height={476}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <h2
                id="download-winrar"
                className="text-3xl font-semibold group relative grid w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash"
              >
                <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[1em]">
                  <a
                    href="#download-winrar"
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
                </div>
                <div className="grid-area-1-1 z-[1] mt-[1em]">
                  Download WinRAR
                </div>
              </h2>
              <div className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none">
                <a
                  className="group flex flex-row justify-between items-center gap-4 ring-1 ring-dark/3 rounded straight-corners:rounded-none px-5 py-3 transition-shadow hover:ring-primary/8 dark:ring-light/2 dark:hover:text-light dark:hover:ring-primary-300/4"
                  href="https://www.win-rar.com/download.html"
                >
                  <img
                    src="https://www.win-rar.com/fileadmin/images/common/favicon.ico"
                    className="w-5 h-5"
                    alt="Logo"
                  />
                  <span className="flex flex-col flex-1">
                    <span className="text-base transition-colors group-hover:text-primary">
                      WinRAR
                    </span>
                    <span className="text-xs text-dark/7 dark:text-light/6">
                      WinRAR download free and support
                    </span>
                  </span>
                  <svg
                    className="gb-icon size-3 text-dark/7 transition-all group-hover:translate-x-0.5 group-hover:text-primary/8 dark:text-light/6"
                    style={{
                      maskImage:
                        "url('https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/chevron-right.svg?v=2&token=a463935e93')",
                      maskRepeat: "no-repeat",
                      maskPosition: "center center",
                    }}
                  />
                </a>
              </div>
              <h2
                id="load-using-efi"
                className="text-3xl font-semibold group relative grid w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash"
              >
                <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[1em]">
                  <a
                    href="#load-using-efi"
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
                </div>
                <div className="grid-area-1-1 z-[1] mt-[1em]">
                  Load Using EFI
                </div>
              </h2>
              <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
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
                      Format your drive partition as shown below:
                    </p>
                  </div>
                </li>
              </ol>
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
                        src="https://cdn.iframe.ly/QGYSXD8"
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
                        allow="encrypted-media *;"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
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
                      The required files will be placed on your Desktop
                      automatically:
                    </p>
                  </div>
                </li>
              </ol>
              <div className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash flex flex-row gap-3 justify-center">
                <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
                  <img
                    alt=""
                    loading="lazy"
                    fetchPriority="low"
                    className="block"
                    src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FL4kGuVoxmgglo4PX55Jp%252Fimage.png%3Falt%3Dmedia%26token%3Db1acc5d4-0700-463d-ac71-9b275a1c97d6&width=768&dpr=4&quality=100&sign=d3f3e060&sv=2"
                    srcSet="
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FL4kGuVoxmgglo4PX55Jp%252Fimage.png%3Falt%3Dmedia%26token%3Db1acc5d4-0700-463d-ac71-9b275a1c97d6&width=400&dpr=1&quality=100&sign=d3f3e060&sv=2  400w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FL4kGuVoxmgglo4PX55Jp%252Fimage.png%3Falt%3Dmedia%26token%3Db1acc5d4-0700-463d-ac71-9b275a1c97d6&width=400&dpr=2&quality=100&sign=d3f3e060&sv=2  800w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FL4kGuVoxmgglo4PX55Jp%252Fimage.png%3Falt%3Dmedia%26token%3Db1acc5d4-0700-463d-ac71-9b275a1c97d6&width=400&dpr=3&quality=100&sign=d3f3e060&sv=2 1200w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FL4kGuVoxmgglo4PX55Jp%252Fimage.png%3Falt%3Dmedia%26token%3Db1acc5d4-0700-463d-ac71-9b275a1c97d6&width=400&dpr=4&quality=100&sign=d3f3e060&sv=2 1600w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FL4kGuVoxmgglo4PX55Jp%252Fimage.png%3Falt%3Dmedia%26token%3Db1acc5d4-0700-463d-ac71-9b275a1c97d6&width=768&dpr=1&quality=100&sign=d3f3e060&sv=2  768w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FL4kGuVoxmgglo4PX55Jp%252Fimage.png%3Falt%3Dmedia%26token%3Db1acc5d4-0700-463d-ac71-9b275a1c97d6&width=768&dpr=2&quality=100&sign=d3f3e060&sv=2 1536w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FL4kGuVoxmgglo4PX55Jp%252Fimage.png%3Falt%3Dmedia%26token%3Db1acc5d4-0700-463d-ac71-9b275a1c97d6&width=768&dpr=3&quality=100&sign=d3f3e060&sv=2 2304w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FL4kGuVoxmgglo4PX55Jp%252Fimage.png%3Falt%3Dmedia%26token%3Db1acc5d4-0700-463d-ac71-9b275a1c97d6&width=768&dpr=4&quality=100&sign=d3f3e060&sv=2 3072w
          "
                    sizes="(max-width: 640px) 400px, 768px"
                    width={301}
                    height={141}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                <li className="leading-normal flex items-start">
                  <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
                    <div
                      className="before:font-var before:content-[--pseudoBefore--content]"
                      style={{
                        "--pseudoBefore--content": "'3.'",
                        "--font-family": "inherit",
                        fontSize: "min(1em, 24px)",
                      }}
                    />
                  </div>
                  <div className="space-y-2 flex flex-col flex-1">
                    <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                      Extract efikit.rar using WinRAR
                    </p>
                  </div>
                </li>
                <li className="leading-normal flex items-start">
                  <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
                    <div
                      className="before:font-var before:content-[--pseudoBefore--content]"
                      style={{
                        "--pseudoBefore--content": "'4.'",
                        "--font-family": "inherit",
                        fontSize: "min(1em, 24px)",
                      }}
                    />
                  </div>
                  <div className="space-y-2 flex flex-col flex-1">
                    <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                      Drag startup.nsh into the extracted folder
                    </p>
                  </div>
                </li>
              </ol>
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
                        src="https://cdn.iframe.ly/j8PB5mu"
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
                        allow="encrypted-media *;"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hint p-4 transition-colors rounded-md straight-corners:rounded-none bg-orange-500/2 border-orange-500/4 w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
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
                      Make sure to set the newly formatted USB/Partition into
                      1st boot priority in bios
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            role="tabpanel"
            id="regular"
            aria-labelledby="tab-regular"
            className="p-4 hidden"
          >
            <div className="w-full space-y-4">
              <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
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
                      Enable <strong className="font-bold">RAID0 Spoof</strong>
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
                      <strong className="font-bold">Save Config</strong>
                    </p>
                  </div>
                </li>
                <li className="leading-normal flex items-start">
                  <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
                    <div
                      className="before:font-var before:content-[--pseudoBefore--content]"
                      style={{
                        "--pseudoBefore--content": "'3.'",
                        "--font-family": "inherit",
                        fontSize: "min(1em, 24px)",
                      }}
                    />
                  </div>
                  <div className="space-y-2 flex flex-col flex-1">
                    <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                      Press <strong className="font-bold">Regular Spoof</strong>
                    </p>
                  </div>
                </li>
              </ol>
              <div className="hint p-4 transition-colors rounded-md straight-corners:rounded-none bg-dark-1/1 border-dark/3 dark:bg-light/1 dark:border-light/3 [&_.can-override-bg]:bg-dark-1/2 [&_.can-override-text]:text-dark dark:[&_.can-override-bg]:bg-light/2 dark:[&_.can-override-text]:text-light w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                <div className="flex flex-row">
                  <svg
                    className="gb-icon size-5 mr-4 mt-0.5 leading-normal text-primary-500 dark:text-primary-400"
                    style={{
                      maskImage:
                        "url('https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/circle-info.svg?v=2&token=a463935e93')",
                      maskRepeat: "no-repeat",
                      maskPosition: "center center",
                    }}
                  />
                  <div className="flex-1 space-y-4 [&_.hint]:border [&_pre]:border">
                    <p className="w-full mx-auto decoration-primary/6 max-w-3xl [&_a]:text-primary-500 [&_a:hover]:text-primary-600 dark:[&_a]:text-primary-400 dark:[&_a:hover]:text-primary-300 flip-heading-hash">
                      <strong className="font-bold">Enable </strong>GPU Spoofing
                      for<span className="text-red-500"> </span>
                      <span className="text-red-500">
                        <strong className="font-bold">FiveM</strong>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash flex flex-row gap-3 justify-center">
                <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
                  <img
                    alt=""
                    loading="lazy"
                    fetchPriority="low"
                    className="block"
                    src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2fj0TzVi97BOsBc2LLVT%252FRAID0.png%3Falt%3Dmedia%26token%3D7341e51c-9095-41b0-8818-37d5a5dddb9f&width=768&dpr=4&quality=100&sign=c1a7eb5c&sv=2"
                    srcSet="
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2fj0TzVi97BOsBc2LLVT%252FRAID0.png%3Falt%3Dmedia%26token%3D7341e51c-9095-41b0-8818-37d5a5dddb9f&width=400&dpr=1&quality=100&sign=c1a7eb5c&sv=2  400w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2fj0TzVi97BOsBc2LLVT%252FRAID0.png%3Falt%3Dmedia%26token%3D7341e51c-9095-41b0-8818-37d5a5dddb9f&width=400&dpr=2&quality=100&sign=c1a7eb5c&sv=2  800w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2fj0TzVi97BOsBc2LLVT%252FRAID0.png%3Falt%3Dmedia%26token%3D7341e51c-9095-41b0-8818-37d5a5dddb9f&width=400&dpr=3&quality=100&sign=c1a7eb5c&sv=2 1200w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2fj0TzVi97BOsBc2LLVT%252FRAID0.png%3Falt%3Dmedia%26token%3D7341e51c-9095-41b0-8818-37d5a5dddb9f&width=400&dpr=4&quality=100&sign=c1a7eb5c&sv=2 1600w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2fj0TzVi97BOsBc2LLVT%252FRAID0.png%3Falt%3Dmedia%26token%3D7341e51c-9095-41b0-8818-37d5a5dddb9f&width=768&dpr=1&quality=100&sign=c1a7eb5c&sv=2  768w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2fj0TzVi97BOsBc2LLVT%252FRAID0.png%3Falt%3Dmedia%26token%3D7341e51c-9095-41b0-8818-37d5a5dddb9f&width=768&dpr=2&quality=100&sign=c1a7eb5c&sv=2 1536w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2fj0TzVi97BOsBc2LLVT%252FRAID0.png%3Falt%3Dmedia%26token%3D7341e51c-9095-41b0-8818-37d5a5dddb9f&width=768&dpr=3&quality=100&sign=c1a7eb5c&sv=2 2304w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2fj0TzVi97BOsBc2LLVT%252FRAID0.png%3Falt%3Dmedia%26token%3D7341e51c-9095-41b0-8818-37d5a5dddb9f&width=768&dpr=4&quality=100&sign=c1a7eb5c&sv=2 3072w
          "
                    sizes="(max-width: 640px) 400px, 768px"
                    width={693}
                    height={472}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                <li className="leading-normal flex items-start">
                  <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
                    <div
                      className="before:font-var before:content-[--pseudoBefore--content]"
                      style={{
                        "--pseudoBefore--content": "'4.'",
                        "--font-family": "inherit",
                        fontSize: "min(1em, 24px)",
                      }}
                    />
                  </div>
                  <div className="space-y-2 flex flex-col flex-1">
                    <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                      Choose your motherboard and click
                      <strong className="font-bold">Spoof</strong>
                    </p>
                  </div>
                </li>
              </ol>
              <div className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash flex flex-row gap-3 justify-center">
                <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
                  <img
                    alt=""
                    loading="lazy"
                    fetchPriority="low"
                    className="block"
                    src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FFmP4lI4lQ2Ir3JQqipGF%252Fimage.png%3Falt%3Dmedia%26token%3D63205dcc-fe29-4b81-9a20-32eeed539f2d&width=768&dpr=4&quality=100&sign=ea52c4ba&sv=2"
                    srcSet="
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FFmP4lI4lQ2Ir3JQqipGF%252Fimage.png%3Falt%3Dmedia%26token%3D63205dcc-fe29-4b81-9a20-32eeed539f2d&width=400&dpr=1&quality=100&sign=ea52c4ba&sv=2  400w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FFmP4lI4lQ2Ir3JQqipGF%252Fimage.png%3Falt%3Dmedia%26token%3D63205dcc-fe29-4b81-9a20-32eeed539f2d&width=400&dpr=2&quality=100&sign=ea52c4ba&sv=2  800w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FFmP4lI4lQ2Ir3JQqipGF%252Fimage.png%3Falt%3Dmedia%26token%3D63205dcc-fe29-4b81-9a20-32eeed539f2d&width=400&dpr=3&quality=100&sign=ea52c4ba&sv=2 1200w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FFmP4lI4lQ2Ir3JQqipGF%252Fimage.png%3Falt%3Dmedia%26token%3D63205dcc-fe29-4b81-9a20-32eeed539f2d&width=400&dpr=4&quality=100&sign=ea52c4ba&sv=2 1600w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FFmP4lI4lQ2Ir3JQqipGF%252Fimage.png%3Falt%3Dmedia%26token%3D63205dcc-fe29-4b81-9a20-32eeed539f2d&width=768&dpr=1&quality=100&sign=ea52c4ba&sv=2  768w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FFmP4lI4lQ2Ir3JQqipGF%252Fimage.png%3Falt%3Dmedia%26token%3D63205dcc-fe29-4b81-9a20-32eeed539f2d&width=768&dpr=2&quality=100&sign=ea52c4ba&sv=2 1536w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FFmP4lI4lQ2Ir3JQqipGF%252Fimage.png%3Falt%3Dmedia%26token%3D63205dcc-fe29-4b81-9a20-32eeed539f2d&width=768&dpr=3&quality=100&sign=ea52c4ba&sv=2 2304w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FFmP4lI4lQ2Ir3JQqipGF%252Fimage.png%3Falt%3Dmedia%26token%3D63205dcc-fe29-4b81-9a20-32eeed539f2d&width=768&dpr=4&quality=100&sign=ea52c4ba&sv=2 3072w
          "
                    sizes="(max-width: 640px) 400px, 768px"
                    width={694}
                    height={476}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <li className="leading-normal flex items-start">
            <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
              <div
                className="before:font-var before:content-[--pseudoBefore--content]"
                style={{
                  "--pseudoBefore--content": "'5.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                Restart your PC
              </p>
            </div>
          </li>
          <li className="leading-normal flex items-start">
            <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
              <div
                className="before:font-var before:content-[--pseudoBefore--content]"
                style={{
                  "--pseudoBefore--content": "'6.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                Run loader &amp; login
              </p>
            </div>
          </li>
          <li className="leading-normal flex items-start">
            <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
              <div
                className="before:font-var before:content-[--pseudoBefore--content]"
                style={{
                  "--pseudoBefore--content": "'7.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                Click Serial Checker to compare your serials
              </p>
            </div>
          </li>
          <li className="leading-normal flex items-start">
            <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
              <div
                className="before:font-var before:content-[--pseudoBefore--content]"
                style={{
                  "--pseudoBefore--content": "'8.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                Now do the Device Setup
              </p>
            </div>
          </li>
        </ol>
      </div>
      <div className="next-prev">
        <Link
          href="/2-setup/download-loader"
          className="nav-button"
          id="prev-button"
        >
          &larr; Previous
        </Link>
        <Link
          href="/3-spoof/device-setup-required"
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

export default page;
