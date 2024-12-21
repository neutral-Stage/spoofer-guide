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
                href="#"
              >
                1# Windows Steps
              </a>
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl font-bold flex items-center gap-4">
          Windows Reinstall
        </h1>
        <p className="text-lg text-dark-4 dark:text-light-4">
          How to reinstall window
        </p>
      </header>
      <div className="[&>*+*]:mt-5 grid whitespace-pre-wrap">
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
                Reinstalling Windows Will Result in a lost of data.
              </p>
            </div>
          </div>
        </div>
        <h2
          id="install-iso"
          className="text-3xl font-semibold group relative grid w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0"
        >
          {/* <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[1em]">
            <a
              href="#install-iso"
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
          <div className="grid-area-1-1 z-[1] mt-[1em]">Install ISO</div>
        </h2>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none">
          <a
            className="group flex flex-row justify-between items-center gap-4 ring-1 ring-dark/3 rounded straight-corners:rounded-none px-5 py-3 transition-shadow hover:ring-primary/8 dark:ring-light/2 dark:hover:text-light dark:hover:ring-primary-300/4"
            href="https://www.microsoft.com/en-us/software-download/windows10"
          >
            <img
              src="https://www.microsoft.com/favicon.ico"
              className="w-5 h-5"
              alt="Logo"
            />
            <span className="flex flex-col flex-1">
              <span className="text-base transition-colors group-hover:text-primary">
                Download Windows 10
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
                Download Media Creation Tool above, click
                <strong className="font-bold">Download Now</strong>
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
                Open <strong className="font-bold">Media Creation Tool</strong>
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
                Select
                <strong className="font-bold">
                  Create installation media (USB flash drive, DVD or ISO file)
                  for another PC
                </strong>
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
                Use the recommended options
              </p>
            </div>
          </li>
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
                Select <strong className="font-bold">ISO file </strong>
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
                Select the directory
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
                After the Windows ISO Finishes, Download Rufus
              </p>
            </div>
          </li>
        </ol>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none">
          <a
            className="group flex flex-row justify-between items-center gap-4 ring-1 ring-dark/3 rounded straight-corners:rounded-none px-5 py-3 transition-shadow hover:ring-primary/8 dark:ring-light/2 dark:hover:text-light dark:hover:ring-primary-300/4"
            href="https://github.com/pbatard/rufus/releases/download/v4.5/rufus-4.5.exe/"
          >
            <span className="flex flex-col flex-1">
              <span className="text-base transition-colors group-hover:text-primary">
                https://github.com/pbatard/rufus/releases/download/v4.5/rufus-4.5.exe/
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
                Open Rufus and Select These Options Press Select and go to the
                directory where you downloaded the ISO Device - Select your USB
                (8gb+)
              </p>
            </div>
          </li>
        </ol>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fklc84QZT775RVyFZka40%252Fimage.png%3Falt%3Dmedia%26token%3Dcfc23faf-0d49-44e4-8bc3-aef74f51ec14&width=768&dpr=4&quality=100&sign=834d6bd4&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fklc84QZT775RVyFZka40%252Fimage.png%3Falt%3Dmedia%26token%3Dcfc23faf-0d49-44e4-8bc3-aef74f51ec14&width=400&dpr=1&quality=100&sign=834d6bd4&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fklc84QZT775RVyFZka40%252Fimage.png%3Falt%3Dmedia%26token%3Dcfc23faf-0d49-44e4-8bc3-aef74f51ec14&width=400&dpr=2&quality=100&sign=834d6bd4&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fklc84QZT775RVyFZka40%252Fimage.png%3Falt%3Dmedia%26token%3Dcfc23faf-0d49-44e4-8bc3-aef74f51ec14&width=400&dpr=3&quality=100&sign=834d6bd4&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fklc84QZT775RVyFZka40%252Fimage.png%3Falt%3Dmedia%26token%3Dcfc23faf-0d49-44e4-8bc3-aef74f51ec14&width=400&dpr=4&quality=100&sign=834d6bd4&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fklc84QZT775RVyFZka40%252Fimage.png%3Falt%3Dmedia%26token%3Dcfc23faf-0d49-44e4-8bc3-aef74f51ec14&width=768&dpr=1&quality=100&sign=834d6bd4&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fklc84QZT775RVyFZka40%252Fimage.png%3Falt%3Dmedia%26token%3Dcfc23faf-0d49-44e4-8bc3-aef74f51ec14&width=768&dpr=2&quality=100&sign=834d6bd4&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fklc84QZT775RVyFZka40%252Fimage.png%3Falt%3Dmedia%26token%3Dcfc23faf-0d49-44e4-8bc3-aef74f51ec14&width=768&dpr=3&quality=100&sign=834d6bd4&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fklc84QZT775RVyFZka40%252Fimage.png%3Falt%3Dmedia%26token%3Dcfc23faf-0d49-44e4-8bc3-aef74f51ec14&width=768&dpr=4&quality=100&sign=834d6bd4&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={474}
              height={577}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
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
                Select the Last Two Options
              </p>
            </div>
          </li>
        </ol>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2lkRYivT9nTdm0O31XiV%252Fimage.png%3Falt%3Dmedia%26token%3D09f43166-d84a-46f3-8e72-563e387a8264&width=768&dpr=4&quality=100&sign=39198775&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2lkRYivT9nTdm0O31XiV%252Fimage.png%3Falt%3Dmedia%26token%3D09f43166-d84a-46f3-8e72-563e387a8264&width=400&dpr=1&quality=100&sign=39198775&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2lkRYivT9nTdm0O31XiV%252Fimage.png%3Falt%3Dmedia%26token%3D09f43166-d84a-46f3-8e72-563e387a8264&width=400&dpr=2&quality=100&sign=39198775&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2lkRYivT9nTdm0O31XiV%252Fimage.png%3Falt%3Dmedia%26token%3D09f43166-d84a-46f3-8e72-563e387a8264&width=400&dpr=3&quality=100&sign=39198775&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2lkRYivT9nTdm0O31XiV%252Fimage.png%3Falt%3Dmedia%26token%3D09f43166-d84a-46f3-8e72-563e387a8264&width=400&dpr=4&quality=100&sign=39198775&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2lkRYivT9nTdm0O31XiV%252Fimage.png%3Falt%3Dmedia%26token%3D09f43166-d84a-46f3-8e72-563e387a8264&width=768&dpr=1&quality=100&sign=39198775&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2lkRYivT9nTdm0O31XiV%252Fimage.png%3Falt%3Dmedia%26token%3D09f43166-d84a-46f3-8e72-563e387a8264&width=768&dpr=2&quality=100&sign=39198775&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2lkRYivT9nTdm0O31XiV%252Fimage.png%3Falt%3Dmedia%26token%3D09f43166-d84a-46f3-8e72-563e387a8264&width=768&dpr=3&quality=100&sign=39198775&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F2lkRYivT9nTdm0O31XiV%252Fimage.png%3Falt%3Dmedia%26token%3D09f43166-d84a-46f3-8e72-563e387a8264&width=768&dpr=4&quality=100&sign=39198775&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={547}
              height={211}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
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
                Press OK and Wait For Rufus to complete the USB Format
              </p>
            </div>
          </li>
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
                After Completed Drag this
                <a
                  className="underline underline-offset-2 text-primary hover:text-primary-700 transition-colors"
                  href="https://mega.nz/folder/jMlkxShB#gZH6tedefqJhJ-RxZW7b1g"
                >
                  <span className="text-blue-500">file</span>
                </a>
                inside of the USB
              </p>
            </div>
          </li>
        </ol>
        <h2
          id="your-usb-stick-should-look-like-this"
          className="text-3xl font-semibold group relative grid w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0"
        >
          <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[1em]">
            <a
              href="#your-usb-stick-should-look-like-this"
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
            Your USB stick should look like this:
          </div>
        </h2>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fw77sXVXKbGxWOTMlchDO%252Fimage.png%3Falt%3Dmedia%26token%3Dea3a4047-6113-4fd6-9064-0c03bef621b8&width=768&dpr=4&quality=100&sign=be2451a9&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fw77sXVXKbGxWOTMlchDO%252Fimage.png%3Falt%3Dmedia%26token%3Dea3a4047-6113-4fd6-9064-0c03bef621b8&width=400&dpr=1&quality=100&sign=be2451a9&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fw77sXVXKbGxWOTMlchDO%252Fimage.png%3Falt%3Dmedia%26token%3Dea3a4047-6113-4fd6-9064-0c03bef621b8&width=400&dpr=2&quality=100&sign=be2451a9&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fw77sXVXKbGxWOTMlchDO%252Fimage.png%3Falt%3Dmedia%26token%3Dea3a4047-6113-4fd6-9064-0c03bef621b8&width=400&dpr=3&quality=100&sign=be2451a9&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fw77sXVXKbGxWOTMlchDO%252Fimage.png%3Falt%3Dmedia%26token%3Dea3a4047-6113-4fd6-9064-0c03bef621b8&width=400&dpr=4&quality=100&sign=be2451a9&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fw77sXVXKbGxWOTMlchDO%252Fimage.png%3Falt%3Dmedia%26token%3Dea3a4047-6113-4fd6-9064-0c03bef621b8&width=768&dpr=1&quality=100&sign=be2451a9&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fw77sXVXKbGxWOTMlchDO%252Fimage.png%3Falt%3Dmedia%26token%3Dea3a4047-6113-4fd6-9064-0c03bef621b8&width=768&dpr=2&quality=100&sign=be2451a9&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fw77sXVXKbGxWOTMlchDO%252Fimage.png%3Falt%3Dmedia%26token%3Dea3a4047-6113-4fd6-9064-0c03bef621b8&width=768&dpr=3&quality=100&sign=be2451a9&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fw77sXVXKbGxWOTMlchDO%252Fimage.png%3Falt%3Dmedia%26token%3Dea3a4047-6113-4fd6-9064-0c03bef621b8&width=768&dpr=4&quality=100&sign=be2451a9&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={1123}
              height={651}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="hint p-4 transition-colors rounded-md straight-corners:rounded-none bg-dark-1/1 border-dark/3 dark:bg-light/1 dark:border-light/3 [&_.can-override-bg]:bg-dark-1/2 [&_.can-override-text]:text-dark dark:[&_.can-override-bg]:bg-light/2 dark:[&_.can-override-text]:text-light w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
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
                Before Continuing If you are WiFi Make sure to download your
                WiFi Drivers onto the USB. You Can download the drivers from
                your motherboards website. To Find your Motherboard do windows
                key + r and type msinfo32, you should be able to find it under
                here.
              </p>
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl [&_a]:text-primary-500 [&_a:hover]:text-primary-600 dark:[&_a]:text-primary-400 dark:[&_a:hover]:text-primary-300 flip-heading-hash">
                <span className="inline-flex max-w-[300px] align-middle">
                  <img
                    alt=""
                    loading="lazy"
                    fetchPriority="low"
                    className="inline"
                    src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F8kbCDdfFLjdU877pN39t%252Fimage.png%3Falt%3Dmedia%26token%3D588d6e25-1d42-4ac8-af60-cad3d6ea4702&width=300&dpr=4&quality=100&sign=d0f63235&sv=2"
                    srcSet="
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F8kbCDdfFLjdU877pN39t%252Fimage.png%3Falt%3Dmedia%26token%3D588d6e25-1d42-4ac8-af60-cad3d6ea4702&width=300&dpr=1&quality=100&sign=d0f63235&sv=2  300w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F8kbCDdfFLjdU877pN39t%252Fimage.png%3Falt%3Dmedia%26token%3D588d6e25-1d42-4ac8-af60-cad3d6ea4702&width=300&dpr=2&quality=100&sign=d0f63235&sv=2  600w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F8kbCDdfFLjdU877pN39t%252Fimage.png%3Falt%3Dmedia%26token%3D588d6e25-1d42-4ac8-af60-cad3d6ea4702&width=300&dpr=3&quality=100&sign=d0f63235&sv=2  900w,
            https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F8kbCDdfFLjdU877pN39t%252Fimage.png%3Falt%3Dmedia%26token%3D588d6e25-1d42-4ac8-af60-cad3d6ea4702&width=300&dpr=4&quality=100&sign=d0f63235&sv=2 1200w
          "
                    sizes="300px"
                    width={439}
                    height={47}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
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
                Hold <strong className="font-bold">SHIFT </strong>and click
                <strong className="font-bold">Restart</strong>
              </p>
            </div>
          </li>
        </ol>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fy8NvHVj4MFBASnG6arua%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_wnTgnaz2Uic2zyjn5u2O_image.webp%3Falt%3Dmedia%26token%3D33067e34-fa7c-43bb-b446-e31eef2dd3b0&width=768&dpr=4&quality=100&sign=ef3f1a32&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fy8NvHVj4MFBASnG6arua%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_wnTgnaz2Uic2zyjn5u2O_image.webp%3Falt%3Dmedia%26token%3D33067e34-fa7c-43bb-b446-e31eef2dd3b0&width=400&dpr=1&quality=100&sign=ef3f1a32&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fy8NvHVj4MFBASnG6arua%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_wnTgnaz2Uic2zyjn5u2O_image.webp%3Falt%3Dmedia%26token%3D33067e34-fa7c-43bb-b446-e31eef2dd3b0&width=400&dpr=2&quality=100&sign=ef3f1a32&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fy8NvHVj4MFBASnG6arua%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_wnTgnaz2Uic2zyjn5u2O_image.webp%3Falt%3Dmedia%26token%3D33067e34-fa7c-43bb-b446-e31eef2dd3b0&width=400&dpr=3&quality=100&sign=ef3f1a32&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fy8NvHVj4MFBASnG6arua%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_wnTgnaz2Uic2zyjn5u2O_image.webp%3Falt%3Dmedia%26token%3D33067e34-fa7c-43bb-b446-e31eef2dd3b0&width=400&dpr=4&quality=100&sign=ef3f1a32&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fy8NvHVj4MFBASnG6arua%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_wnTgnaz2Uic2zyjn5u2O_image.webp%3Falt%3Dmedia%26token%3D33067e34-fa7c-43bb-b446-e31eef2dd3b0&width=768&dpr=1&quality=100&sign=ef3f1a32&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fy8NvHVj4MFBASnG6arua%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_wnTgnaz2Uic2zyjn5u2O_image.webp%3Falt%3Dmedia%26token%3D33067e34-fa7c-43bb-b446-e31eef2dd3b0&width=768&dpr=2&quality=100&sign=ef3f1a32&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fy8NvHVj4MFBASnG6arua%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_wnTgnaz2Uic2zyjn5u2O_image.webp%3Falt%3Dmedia%26token%3D33067e34-fa7c-43bb-b446-e31eef2dd3b0&width=768&dpr=3&quality=100&sign=ef3f1a32&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fy8NvHVj4MFBASnG6arua%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_wnTgnaz2Uic2zyjn5u2O_image.webp%3Falt%3Dmedia%26token%3D33067e34-fa7c-43bb-b446-e31eef2dd3b0&width=768&dpr=4&quality=100&sign=ef3f1a32&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={650}
              height={641}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
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
                Select <strong className="font-bold">Use a device</strong> and
                select your Flash Drive
              </p>
            </div>
          </li>
        </ol>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fpr53NW4G8NXic5xbpmqW%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_cV4P0NWf3jLsKBr0ctI4_image.webp%3Falt%3Dmedia%26token%3D05000d9d-0ffc-4664-aa76-30bd09f80555&width=768&dpr=4&quality=100&sign=37c7af73&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fpr53NW4G8NXic5xbpmqW%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_cV4P0NWf3jLsKBr0ctI4_image.webp%3Falt%3Dmedia%26token%3D05000d9d-0ffc-4664-aa76-30bd09f80555&width=400&dpr=1&quality=100&sign=37c7af73&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fpr53NW4G8NXic5xbpmqW%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_cV4P0NWf3jLsKBr0ctI4_image.webp%3Falt%3Dmedia%26token%3D05000d9d-0ffc-4664-aa76-30bd09f80555&width=400&dpr=2&quality=100&sign=37c7af73&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fpr53NW4G8NXic5xbpmqW%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_cV4P0NWf3jLsKBr0ctI4_image.webp%3Falt%3Dmedia%26token%3D05000d9d-0ffc-4664-aa76-30bd09f80555&width=400&dpr=3&quality=100&sign=37c7af73&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fpr53NW4G8NXic5xbpmqW%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_cV4P0NWf3jLsKBr0ctI4_image.webp%3Falt%3Dmedia%26token%3D05000d9d-0ffc-4664-aa76-30bd09f80555&width=400&dpr=4&quality=100&sign=37c7af73&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fpr53NW4G8NXic5xbpmqW%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_cV4P0NWf3jLsKBr0ctI4_image.webp%3Falt%3Dmedia%26token%3D05000d9d-0ffc-4664-aa76-30bd09f80555&width=768&dpr=1&quality=100&sign=37c7af73&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fpr53NW4G8NXic5xbpmqW%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_cV4P0NWf3jLsKBr0ctI4_image.webp%3Falt%3Dmedia%26token%3D05000d9d-0ffc-4664-aa76-30bd09f80555&width=768&dpr=2&quality=100&sign=37c7af73&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fpr53NW4G8NXic5xbpmqW%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_cV4P0NWf3jLsKBr0ctI4_image.webp%3Falt%3Dmedia%26token%3D05000d9d-0ffc-4664-aa76-30bd09f80555&width=768&dpr=3&quality=100&sign=37c7af73&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fpr53NW4G8NXic5xbpmqW%252Fspaces_IRlbgGEe6FZJRx7luQsK_uploads_cV4P0NWf3jLsKBr0ctI4_image.webp%3Falt%3Dmedia%26token%3D05000d9d-0ffc-4664-aa76-30bd09f80555&width=768&dpr=4&quality=100&sign=37c7af73&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={750}
              height={538}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
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
                Select <strong className="font-bold">Windows 10 Pro</strong>
              </p>
            </div>
          </li>
        </ol>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FvEEu7ZAIIIY7lavdMq1l%252Fimage.png%3Falt%3Dmedia%26token%3D326ca9bf-bffa-4a87-9ff7-1afd3813dc88&width=768&dpr=4&quality=100&sign=79d0d09e&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FvEEu7ZAIIIY7lavdMq1l%252Fimage.png%3Falt%3Dmedia%26token%3D326ca9bf-bffa-4a87-9ff7-1afd3813dc88&width=400&dpr=1&quality=100&sign=79d0d09e&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FvEEu7ZAIIIY7lavdMq1l%252Fimage.png%3Falt%3Dmedia%26token%3D326ca9bf-bffa-4a87-9ff7-1afd3813dc88&width=400&dpr=2&quality=100&sign=79d0d09e&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FvEEu7ZAIIIY7lavdMq1l%252Fimage.png%3Falt%3Dmedia%26token%3D326ca9bf-bffa-4a87-9ff7-1afd3813dc88&width=400&dpr=3&quality=100&sign=79d0d09e&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FvEEu7ZAIIIY7lavdMq1l%252Fimage.png%3Falt%3Dmedia%26token%3D326ca9bf-bffa-4a87-9ff7-1afd3813dc88&width=400&dpr=4&quality=100&sign=79d0d09e&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FvEEu7ZAIIIY7lavdMq1l%252Fimage.png%3Falt%3Dmedia%26token%3D326ca9bf-bffa-4a87-9ff7-1afd3813dc88&width=768&dpr=1&quality=100&sign=79d0d09e&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FvEEu7ZAIIIY7lavdMq1l%252Fimage.png%3Falt%3Dmedia%26token%3D326ca9bf-bffa-4a87-9ff7-1afd3813dc88&width=768&dpr=2&quality=100&sign=79d0d09e&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FvEEu7ZAIIIY7lavdMq1l%252Fimage.png%3Falt%3Dmedia%26token%3D326ca9bf-bffa-4a87-9ff7-1afd3813dc88&width=768&dpr=3&quality=100&sign=79d0d09e&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FvEEu7ZAIIIY7lavdMq1l%252Fimage.png%3Falt%3Dmedia%26token%3D326ca9bf-bffa-4a87-9ff7-1afd3813dc88&width=768&dpr=4&quality=100&sign=79d0d09e&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={531}
              height={402}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0" />
        <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
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
                Select
                <strong className="font-bold">
                  I don't have a product key (If it doesn't show this don't
                  worry)
                </strong>
              </p>
            </div>
          </li>
        </ol>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FefIS28CF3EKvT5Oykn1j%252Fimage.png%3Falt%3Dmedia%26token%3De794479d-2d36-410c-8765-1123fef73feb&width=768&dpr=4&quality=100&sign=97083696&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FefIS28CF3EKvT5Oykn1j%252Fimage.png%3Falt%3Dmedia%26token%3De794479d-2d36-410c-8765-1123fef73feb&width=400&dpr=1&quality=100&sign=97083696&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FefIS28CF3EKvT5Oykn1j%252Fimage.png%3Falt%3Dmedia%26token%3De794479d-2d36-410c-8765-1123fef73feb&width=400&dpr=2&quality=100&sign=97083696&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FefIS28CF3EKvT5Oykn1j%252Fimage.png%3Falt%3Dmedia%26token%3De794479d-2d36-410c-8765-1123fef73feb&width=400&dpr=3&quality=100&sign=97083696&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FefIS28CF3EKvT5Oykn1j%252Fimage.png%3Falt%3Dmedia%26token%3De794479d-2d36-410c-8765-1123fef73feb&width=400&dpr=4&quality=100&sign=97083696&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FefIS28CF3EKvT5Oykn1j%252Fimage.png%3Falt%3Dmedia%26token%3De794479d-2d36-410c-8765-1123fef73feb&width=768&dpr=1&quality=100&sign=97083696&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FefIS28CF3EKvT5Oykn1j%252Fimage.png%3Falt%3Dmedia%26token%3De794479d-2d36-410c-8765-1123fef73feb&width=768&dpr=2&quality=100&sign=97083696&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FefIS28CF3EKvT5Oykn1j%252Fimage.png%3Falt%3Dmedia%26token%3De794479d-2d36-410c-8765-1123fef73feb&width=768&dpr=3&quality=100&sign=97083696&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FefIS28CF3EKvT5Oykn1j%252Fimage.png%3Falt%3Dmedia%26token%3De794479d-2d36-410c-8765-1123fef73feb&width=768&dpr=4&quality=100&sign=97083696&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={700}
              height={527}
              style={{ maxWidth: "100%", height: "auto" }}
            />
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
                Select
                <strong className="font-bold">
                  Custom: Install Windows only (advanced)
                </strong>
              </p>
            </div>
          </li>
        </ol>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4lTC9A2TFrQQSAMExTcx%252Fimage.png%3Falt%3Dmedia%26token%3D6ace8bea-5bb2-4a04-93f6-20658f54ed2b&width=768&dpr=4&quality=100&sign=70beaf91&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4lTC9A2TFrQQSAMExTcx%252Fimage.png%3Falt%3Dmedia%26token%3D6ace8bea-5bb2-4a04-93f6-20658f54ed2b&width=400&dpr=1&quality=100&sign=70beaf91&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4lTC9A2TFrQQSAMExTcx%252Fimage.png%3Falt%3Dmedia%26token%3D6ace8bea-5bb2-4a04-93f6-20658f54ed2b&width=400&dpr=2&quality=100&sign=70beaf91&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4lTC9A2TFrQQSAMExTcx%252Fimage.png%3Falt%3Dmedia%26token%3D6ace8bea-5bb2-4a04-93f6-20658f54ed2b&width=400&dpr=3&quality=100&sign=70beaf91&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4lTC9A2TFrQQSAMExTcx%252Fimage.png%3Falt%3Dmedia%26token%3D6ace8bea-5bb2-4a04-93f6-20658f54ed2b&width=400&dpr=4&quality=100&sign=70beaf91&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4lTC9A2TFrQQSAMExTcx%252Fimage.png%3Falt%3Dmedia%26token%3D6ace8bea-5bb2-4a04-93f6-20658f54ed2b&width=768&dpr=1&quality=100&sign=70beaf91&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4lTC9A2TFrQQSAMExTcx%252Fimage.png%3Falt%3Dmedia%26token%3D6ace8bea-5bb2-4a04-93f6-20658f54ed2b&width=768&dpr=2&quality=100&sign=70beaf91&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4lTC9A2TFrQQSAMExTcx%252Fimage.png%3Falt%3Dmedia%26token%3D6ace8bea-5bb2-4a04-93f6-20658f54ed2b&width=768&dpr=3&quality=100&sign=70beaf91&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F4lTC9A2TFrQQSAMExTcx%252Fimage.png%3Falt%3Dmedia%26token%3D6ace8bea-5bb2-4a04-93f6-20658f54ed2b&width=768&dpr=4&quality=100&sign=70beaf91&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={640}
              height={480}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
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
                Press <strong className="font-bold">SHIFT + F10</strong>
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
                Type
                <code className="py-[1px] px-1.5 min-w-[1.625rem] inline-flex justify-center items-center ring-1 ring-inset ring-dark/1 bg-dark/[0.06] rounded text-dark/8 dark:ring-light/1 dark:bg-light/1 dark:text-light/7 text-[.875em] leading-[calc(max(1.20em,1.25rem))]">
                  <strong className="font-bold">diskpart</strong>
                </code>
                into the CMD
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
                Type
                <code className="py-[1px] px-1.5 min-w-[1.625rem] inline-flex justify-center items-center ring-1 ring-inset ring-dark/1 bg-dark/[0.06] rounded text-dark/8 dark:ring-light/1 dark:bg-light/1 dark:text-light/7 text-[.875em] leading-[calc(max(1.20em,1.25rem))]">
                  <strong className="font-bold">select disk #</strong>
                </code>
                (# = for every disk number) and
                <code className="py-[1px] px-1.5 min-w-[1.625rem] inline-flex justify-center items-center ring-1 ring-inset ring-dark/1 bg-dark/[0.06] rounded text-dark/8 dark:ring-light/1 dark:bg-light/1 dark:text-light/7 text-[.875em] leading-[calc(max(1.20em,1.25rem))]">
                  <strong className="font-bold">clean</strong>
                </code>
                for every disk you have
                <strong className="font-bold">except your Flash Drive</strong>
              </p>
            </div>
          </li>
        </ol>
        <div className="hint p-4 transition-colors rounded-md straight-corners:rounded-none bg-dark-1/1 border-dark/3 dark:bg-light/1 dark:border-light/3 [&_.can-override-bg]:bg-dark-1/2 [&_.can-override-text]:text-dark dark:[&_.can-override-bg]:bg-light/2 dark:[&_.can-override-text]:text-light w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
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
                Your Flash Drive is likely the last drive listed
                <span className="text-red-500">(DO NOT DELETE IT)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FDZgCpJw28Jk2FMFLP1kx%252Fimage.png%3Falt%3Dmedia%26token%3D2893fc4a-a775-49d4-b71b-c60ef2343793&width=768&dpr=4&quality=100&sign=954fa25e&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FDZgCpJw28Jk2FMFLP1kx%252Fimage.png%3Falt%3Dmedia%26token%3D2893fc4a-a775-49d4-b71b-c60ef2343793&width=400&dpr=1&quality=100&sign=954fa25e&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FDZgCpJw28Jk2FMFLP1kx%252Fimage.png%3Falt%3Dmedia%26token%3D2893fc4a-a775-49d4-b71b-c60ef2343793&width=400&dpr=2&quality=100&sign=954fa25e&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FDZgCpJw28Jk2FMFLP1kx%252Fimage.png%3Falt%3Dmedia%26token%3D2893fc4a-a775-49d4-b71b-c60ef2343793&width=400&dpr=3&quality=100&sign=954fa25e&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FDZgCpJw28Jk2FMFLP1kx%252Fimage.png%3Falt%3Dmedia%26token%3D2893fc4a-a775-49d4-b71b-c60ef2343793&width=400&dpr=4&quality=100&sign=954fa25e&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FDZgCpJw28Jk2FMFLP1kx%252Fimage.png%3Falt%3Dmedia%26token%3D2893fc4a-a775-49d4-b71b-c60ef2343793&width=768&dpr=1&quality=100&sign=954fa25e&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FDZgCpJw28Jk2FMFLP1kx%252Fimage.png%3Falt%3Dmedia%26token%3D2893fc4a-a775-49d4-b71b-c60ef2343793&width=768&dpr=2&quality=100&sign=954fa25e&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FDZgCpJw28Jk2FMFLP1kx%252Fimage.png%3Falt%3Dmedia%26token%3D2893fc4a-a775-49d4-b71b-c60ef2343793&width=768&dpr=3&quality=100&sign=954fa25e&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FDZgCpJw28Jk2FMFLP1kx%252Fimage.png%3Falt%3Dmedia%26token%3D2893fc4a-a775-49d4-b71b-c60ef2343793&width=768&dpr=4&quality=100&sign=954fa25e&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={677}
              height={474}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <li className="leading-normal flex items-start">
            <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
              <div
                className="before:font-var before:content-[--pseudoBefore--content]"
                style={{
                  "--pseudoBefore--content": "'9.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                Close the CMD and click{" "}
                <strong className="font-bold">Refresh</strong>
              </p>
            </div>
          </li>
        </ol>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FGQclPhOF8dAVMAZy1dC4%252Fimage.png%3Falt%3Dmedia%26token%3D4e83e2ab-e297-43fa-a333-16cff1312f84&width=768&dpr=4&quality=100&sign=52bb9a4f&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FGQclPhOF8dAVMAZy1dC4%252Fimage.png%3Falt%3Dmedia%26token%3D4e83e2ab-e297-43fa-a333-16cff1312f84&width=400&dpr=1&quality=100&sign=52bb9a4f&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FGQclPhOF8dAVMAZy1dC4%252Fimage.png%3Falt%3Dmedia%26token%3D4e83e2ab-e297-43fa-a333-16cff1312f84&width=400&dpr=2&quality=100&sign=52bb9a4f&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FGQclPhOF8dAVMAZy1dC4%252Fimage.png%3Falt%3Dmedia%26token%3D4e83e2ab-e297-43fa-a333-16cff1312f84&width=400&dpr=3&quality=100&sign=52bb9a4f&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FGQclPhOF8dAVMAZy1dC4%252Fimage.png%3Falt%3Dmedia%26token%3D4e83e2ab-e297-43fa-a333-16cff1312f84&width=400&dpr=4&quality=100&sign=52bb9a4f&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FGQclPhOF8dAVMAZy1dC4%252Fimage.png%3Falt%3Dmedia%26token%3D4e83e2ab-e297-43fa-a333-16cff1312f84&width=768&dpr=1&quality=100&sign=52bb9a4f&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FGQclPhOF8dAVMAZy1dC4%252Fimage.png%3Falt%3Dmedia%26token%3D4e83e2ab-e297-43fa-a333-16cff1312f84&width=768&dpr=2&quality=100&sign=52bb9a4f&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FGQclPhOF8dAVMAZy1dC4%252Fimage.png%3Falt%3Dmedia%26token%3D4e83e2ab-e297-43fa-a333-16cff1312f84&width=768&dpr=3&quality=100&sign=52bb9a4f&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FGQclPhOF8dAVMAZy1dC4%252Fimage.png%3Falt%3Dmedia%26token%3D4e83e2ab-e297-43fa-a333-16cff1312f84&width=768&dpr=4&quality=100&sign=52bb9a4f&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={637}
              height={477}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <li className="leading-normal flex items-start">
            <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
              <div
                className="before:font-var before:content-[--pseudoBefore--content]"
                style={{
                  "--pseudoBefore--content": "'10.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                Select your <strong className="font-bold">main drive</strong>{" "}
                and click
                <strong className="font-bold">Next</strong>
              </p>
            </div>
          </li>
          <li className="leading-normal flex items-start">
            <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
              <div
                className="before:font-var before:content-[--pseudoBefore--content]"
                style={{
                  "--pseudoBefore--content": "'11.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                The installation process should start
              </p>
            </div>
          </li>
        </ol>
      </div>
      <div className="next-prev">
        <Link href="/" className="nav-button" id="prev-button">
          Previous
        </Link>
        <Link
          href="/1-windows-steps/windows-setup"
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
