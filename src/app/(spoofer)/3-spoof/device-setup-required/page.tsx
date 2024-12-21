import Link from "next/link";

const page = () => {
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
                href="3-spoof"
              >
                3# Spoof
              </a>
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl font-bold flex items-center gap-4">
          Device Setup (Required)
        </h1>
        <p className="text-lg text-dark-4 dark:text-light-4">
          How to set up your device to avoid getting banned
        </p>
      </header>
      <div className="[&>*+*]:mt-5 grid whitespace-pre-wrap">
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
                FOR EAC DISABLE TPM &amp; SECURE BOOT (REQUIRED)
              </p>
            </div>
          </div>
        </div>
        <h2
          id="disable-hidden-devices"
          className="text-3xl font-semibold group relative grid w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0"
        >
          {/* <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[1em]">
            <a
              href="#disable-hidden-devices"
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
            Disable Hidden Devices
          </div>
        </h2>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              fetchPriority="high"
              className="block"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQS1yGxXZlYEX5IH5yrvo%252Fimage.png%3Falt%3Dmedia%26token%3Defde0594-5991-4743-8558-c6c54c6a3fe4&width=768&dpr=4&quality=100&sign=15bf76ec&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQS1yGxXZlYEX5IH5yrvo%252Fimage.png%3Falt%3Dmedia%26token%3Defde0594-5991-4743-8558-c6c54c6a3fe4&width=400&dpr=1&quality=100&sign=15bf76ec&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQS1yGxXZlYEX5IH5yrvo%252Fimage.png%3Falt%3Dmedia%26token%3Defde0594-5991-4743-8558-c6c54c6a3fe4&width=400&dpr=2&quality=100&sign=15bf76ec&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQS1yGxXZlYEX5IH5yrvo%252Fimage.png%3Falt%3Dmedia%26token%3Defde0594-5991-4743-8558-c6c54c6a3fe4&width=400&dpr=3&quality=100&sign=15bf76ec&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQS1yGxXZlYEX5IH5yrvo%252Fimage.png%3Falt%3Dmedia%26token%3Defde0594-5991-4743-8558-c6c54c6a3fe4&width=400&dpr=4&quality=100&sign=15bf76ec&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQS1yGxXZlYEX5IH5yrvo%252Fimage.png%3Falt%3Dmedia%26token%3Defde0594-5991-4743-8558-c6c54c6a3fe4&width=768&dpr=1&quality=100&sign=15bf76ec&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQS1yGxXZlYEX5IH5yrvo%252Fimage.png%3Falt%3Dmedia%26token%3Defde0594-5991-4743-8558-c6c54c6a3fe4&width=768&dpr=2&quality=100&sign=15bf76ec&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQS1yGxXZlYEX5IH5yrvo%252Fimage.png%3Falt%3Dmedia%26token%3Defde0594-5991-4743-8558-c6c54c6a3fe4&width=768&dpr=3&quality=100&sign=15bf76ec&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FQS1yGxXZlYEX5IH5yrvo%252Fimage.png%3Falt%3Dmedia%26token%3Defde0594-5991-4743-8558-c6c54c6a3fe4&width=768&dpr=4&quality=100&sign=15bf76ec&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={609}
              height={567}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          Now, delete every single thing that is Grey. For example : (The USB
          DISK USB Device is Grey) Do it for every single Grey device NOT ONLY
          DISKS, EVERYTHING)
        </p>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FReQLRcHJfKpTCZhqE0g0%252Fimage.png%3Falt%3Dmedia%26token%3Dcb058e1a-1793-477f-8692-ff9aaf9abdf8&width=768&dpr=4&quality=100&sign=62cc8b0c&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FReQLRcHJfKpTCZhqE0g0%252Fimage.png%3Falt%3Dmedia%26token%3Dcb058e1a-1793-477f-8692-ff9aaf9abdf8&width=400&dpr=1&quality=100&sign=62cc8b0c&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FReQLRcHJfKpTCZhqE0g0%252Fimage.png%3Falt%3Dmedia%26token%3Dcb058e1a-1793-477f-8692-ff9aaf9abdf8&width=400&dpr=2&quality=100&sign=62cc8b0c&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FReQLRcHJfKpTCZhqE0g0%252Fimage.png%3Falt%3Dmedia%26token%3Dcb058e1a-1793-477f-8692-ff9aaf9abdf8&width=400&dpr=3&quality=100&sign=62cc8b0c&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FReQLRcHJfKpTCZhqE0g0%252Fimage.png%3Falt%3Dmedia%26token%3Dcb058e1a-1793-477f-8692-ff9aaf9abdf8&width=400&dpr=4&quality=100&sign=62cc8b0c&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FReQLRcHJfKpTCZhqE0g0%252Fimage.png%3Falt%3Dmedia%26token%3Dcb058e1a-1793-477f-8692-ff9aaf9abdf8&width=768&dpr=1&quality=100&sign=62cc8b0c&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FReQLRcHJfKpTCZhqE0g0%252Fimage.png%3Falt%3Dmedia%26token%3Dcb058e1a-1793-477f-8692-ff9aaf9abdf8&width=768&dpr=2&quality=100&sign=62cc8b0c&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FReQLRcHJfKpTCZhqE0g0%252Fimage.png%3Falt%3Dmedia%26token%3Dcb058e1a-1793-477f-8692-ff9aaf9abdf8&width=768&dpr=3&quality=100&sign=62cc8b0c&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FReQLRcHJfKpTCZhqE0g0%252Fimage.png%3Falt%3Dmedia%26token%3Dcb058e1a-1793-477f-8692-ff9aaf9abdf8&width=768&dpr=4&quality=100&sign=62cc8b0c&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={309}
              height={229}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FlJ25ucAewsECFd3bBWhG%252Fimage.png%3Falt%3Dmedia%26token%3D83183819-ad5d-4ade-971b-5f8885e23016&width=768&dpr=4&quality=100&sign=88893380&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FlJ25ucAewsECFd3bBWhG%252Fimage.png%3Falt%3Dmedia%26token%3D83183819-ad5d-4ade-971b-5f8885e23016&width=400&dpr=1&quality=100&sign=88893380&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FlJ25ucAewsECFd3bBWhG%252Fimage.png%3Falt%3Dmedia%26token%3D83183819-ad5d-4ade-971b-5f8885e23016&width=400&dpr=2&quality=100&sign=88893380&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FlJ25ucAewsECFd3bBWhG%252Fimage.png%3Falt%3Dmedia%26token%3D83183819-ad5d-4ade-971b-5f8885e23016&width=400&dpr=3&quality=100&sign=88893380&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FlJ25ucAewsECFd3bBWhG%252Fimage.png%3Falt%3Dmedia%26token%3D83183819-ad5d-4ade-971b-5f8885e23016&width=400&dpr=4&quality=100&sign=88893380&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FlJ25ucAewsECFd3bBWhG%252Fimage.png%3Falt%3Dmedia%26token%3D83183819-ad5d-4ade-971b-5f8885e23016&width=768&dpr=1&quality=100&sign=88893380&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FlJ25ucAewsECFd3bBWhG%252Fimage.png%3Falt%3Dmedia%26token%3D83183819-ad5d-4ade-971b-5f8885e23016&width=768&dpr=2&quality=100&sign=88893380&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FlJ25ucAewsECFd3bBWhG%252Fimage.png%3Falt%3Dmedia%26token%3D83183819-ad5d-4ade-971b-5f8885e23016&width=768&dpr=3&quality=100&sign=88893380&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FlJ25ucAewsECFd3bBWhG%252Fimage.png%3Falt%3Dmedia%26token%3D83183819-ad5d-4ade-971b-5f8885e23016&width=768&dpr=4&quality=100&sign=88893380&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={678}
              height={377}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <h2
          id="change-adapter-properties"
          className="text-3xl font-semibold group relative grid w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0"
        >
          {/* <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[1em]">
            <a
              href="#change-adapter-properties"
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
            Change adapter properties
          </div>
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
                Press<strong className="font-bold"> Win + R</strong>, type
                <strong className="font-bold">ncpa.cpl</strong> and click
                <strong className="font-bold">Ok</strong>
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
              className="block ZoomImage_zoomImg__teSyL"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHMACxZrXD4QCEqTU9N7V%252Fimage.png%3Falt%3Dmedia%26token%3D5df39f48-a175-4802-abf5-7909e1556c0d&width=768&dpr=4&quality=100&sign=a88a3c52&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHMACxZrXD4QCEqTU9N7V%252Fimage.png%3Falt%3Dmedia%26token%3D5df39f48-a175-4802-abf5-7909e1556c0d&width=400&dpr=1&quality=100&sign=a88a3c52&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHMACxZrXD4QCEqTU9N7V%252Fimage.png%3Falt%3Dmedia%26token%3D5df39f48-a175-4802-abf5-7909e1556c0d&width=400&dpr=2&quality=100&sign=a88a3c52&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHMACxZrXD4QCEqTU9N7V%252Fimage.png%3Falt%3Dmedia%26token%3D5df39f48-a175-4802-abf5-7909e1556c0d&width=400&dpr=3&quality=100&sign=a88a3c52&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHMACxZrXD4QCEqTU9N7V%252Fimage.png%3Falt%3Dmedia%26token%3D5df39f48-a175-4802-abf5-7909e1556c0d&width=400&dpr=4&quality=100&sign=a88a3c52&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHMACxZrXD4QCEqTU9N7V%252Fimage.png%3Falt%3Dmedia%26token%3D5df39f48-a175-4802-abf5-7909e1556c0d&width=768&dpr=1&quality=100&sign=a88a3c52&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHMACxZrXD4QCEqTU9N7V%252Fimage.png%3Falt%3Dmedia%26token%3D5df39f48-a175-4802-abf5-7909e1556c0d&width=768&dpr=2&quality=100&sign=a88a3c52&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHMACxZrXD4QCEqTU9N7V%252Fimage.png%3Falt%3Dmedia%26token%3D5df39f48-a175-4802-abf5-7909e1556c0d&width=768&dpr=3&quality=100&sign=a88a3c52&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHMACxZrXD4QCEqTU9N7V%252Fimage.png%3Falt%3Dmedia%26token%3D5df39f48-a175-4802-abf5-7909e1556c0d&width=768&dpr=4&quality=100&sign=a88a3c52&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={1124}
              height={629}
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
                Right-Click your active connection and click on
                <strong className="font-bold">Properties</strong>
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
                Configure it as shown below:
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
              className="block ZoomImage_zoomImg__teSyL"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fo6thHcEDfEsOv3ZH4kaV%252Fimage.png%3Falt%3Dmedia%26token%3Dabb47dd3-eb40-4e3c-99da-c407057311b5&width=768&dpr=4&quality=100&sign=88aeeee2&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fo6thHcEDfEsOv3ZH4kaV%252Fimage.png%3Falt%3Dmedia%26token%3Dabb47dd3-eb40-4e3c-99da-c407057311b5&width=400&dpr=1&quality=100&sign=88aeeee2&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fo6thHcEDfEsOv3ZH4kaV%252Fimage.png%3Falt%3Dmedia%26token%3Dabb47dd3-eb40-4e3c-99da-c407057311b5&width=400&dpr=2&quality=100&sign=88aeeee2&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fo6thHcEDfEsOv3ZH4kaV%252Fimage.png%3Falt%3Dmedia%26token%3Dabb47dd3-eb40-4e3c-99da-c407057311b5&width=400&dpr=3&quality=100&sign=88aeeee2&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fo6thHcEDfEsOv3ZH4kaV%252Fimage.png%3Falt%3Dmedia%26token%3Dabb47dd3-eb40-4e3c-99da-c407057311b5&width=400&dpr=4&quality=100&sign=88aeeee2&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fo6thHcEDfEsOv3ZH4kaV%252Fimage.png%3Falt%3Dmedia%26token%3Dabb47dd3-eb40-4e3c-99da-c407057311b5&width=768&dpr=1&quality=100&sign=88aeeee2&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fo6thHcEDfEsOv3ZH4kaV%252Fimage.png%3Falt%3Dmedia%26token%3Dabb47dd3-eb40-4e3c-99da-c407057311b5&width=768&dpr=2&quality=100&sign=88aeeee2&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fo6thHcEDfEsOv3ZH4kaV%252Fimage.png%3Falt%3Dmedia%26token%3Dabb47dd3-eb40-4e3c-99da-c407057311b5&width=768&dpr=3&quality=100&sign=88aeeee2&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fo6thHcEDfEsOv3ZH4kaV%252Fimage.png%3Falt%3Dmedia%26token%3Dabb47dd3-eb40-4e3c-99da-c407057311b5&width=768&dpr=4&quality=100&sign=88aeeee2&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={768}
              height={1065}
              style={{ maxWidth: "100%", width: "375px", height: "auto" }}
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
                Click Configure
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
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FejWt5vVeNW4VdhvryIpC%252Fimage.png%3Falt%3Dmedia%26token%3D32fb065b-fe05-4a7a-b546-709c77a46d76&width=768&dpr=4&quality=100&sign=a212906a&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FejWt5vVeNW4VdhvryIpC%252Fimage.png%3Falt%3Dmedia%26token%3D32fb065b-fe05-4a7a-b546-709c77a46d76&width=400&dpr=1&quality=100&sign=a212906a&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FejWt5vVeNW4VdhvryIpC%252Fimage.png%3Falt%3Dmedia%26token%3D32fb065b-fe05-4a7a-b546-709c77a46d76&width=400&dpr=2&quality=100&sign=a212906a&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FejWt5vVeNW4VdhvryIpC%252Fimage.png%3Falt%3Dmedia%26token%3D32fb065b-fe05-4a7a-b546-709c77a46d76&width=400&dpr=3&quality=100&sign=a212906a&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FejWt5vVeNW4VdhvryIpC%252Fimage.png%3Falt%3Dmedia%26token%3D32fb065b-fe05-4a7a-b546-709c77a46d76&width=400&dpr=4&quality=100&sign=a212906a&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FejWt5vVeNW4VdhvryIpC%252Fimage.png%3Falt%3Dmedia%26token%3D32fb065b-fe05-4a7a-b546-709c77a46d76&width=768&dpr=1&quality=100&sign=a212906a&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FejWt5vVeNW4VdhvryIpC%252Fimage.png%3Falt%3Dmedia%26token%3D32fb065b-fe05-4a7a-b546-709c77a46d76&width=768&dpr=2&quality=100&sign=a212906a&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FejWt5vVeNW4VdhvryIpC%252Fimage.png%3Falt%3Dmedia%26token%3D32fb065b-fe05-4a7a-b546-709c77a46d76&width=768&dpr=3&quality=100&sign=a212906a&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FejWt5vVeNW4VdhvryIpC%252Fimage.png%3Falt%3Dmedia%26token%3D32fb065b-fe05-4a7a-b546-709c77a46d76&width=768&dpr=4&quality=100&sign=a212906a&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={363}
              height={468}
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
                Switch to <strong className="font-bold">Advanced </strong>and
                configure the following properties:
              </p>
            </div>
          </li>
        </ol>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <strong className="font-bold">Advanced EEE - Disabled </strong>
        </p>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <strong className="font-bold">ARP Offload - Disabled </strong>
        </p>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <strong className="font-bold">Flow Control - Disabled </strong>
        </p>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <strong className="font-bold">
            IPv4 Checksum Offload - Disabled{" "}
          </strong>
        </p>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <strong className="font-bold">
            Large Send offload v2 (IPv6) - Disabled
          </strong>
        </p>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <strong className="font-bold">Network Address - Not Present </strong>
        </p>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <strong className="font-bold">
            TCP Checksum Offload (IPv6 ) - Disabled
          </strong>
        </p>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <strong className="font-bold">
            UDP Checksum Offload (IPv6 ) - Disabled
          </strong>
        </p>
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
                If you don't have some of these options skip them and move on to
                the next step.
              </p>
            </div>
          </div>
        </div>
        <h2
          id="disable-unused-network-adapters"
          className="text-3xl font-semibold group relative grid w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0"
        >
          {/* <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[1em]">
            <a
              href="#disable-unused-network-adapters"
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
            Disable Unused Network Adapters
          </div>
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
                Press Win + R, type{" "}
                <strong className="font-bold">ncpa.cpl </strong>and click{" "}
                <strong className="font-bold">Ok</strong>
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
              className="block ZoomImage_zoomImg__teSyL"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwtkDocFXVaqyRY0ixxEB%252Fimage.png%3Falt%3Dmedia%26token%3D35ff53eb-0357-4feb-9cec-5ad2961fc6da&width=768&dpr=4&quality=100&sign=efb0867c&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwtkDocFXVaqyRY0ixxEB%252Fimage.png%3Falt%3Dmedia%26token%3D35ff53eb-0357-4feb-9cec-5ad2961fc6da&width=400&dpr=1&quality=100&sign=efb0867c&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwtkDocFXVaqyRY0ixxEB%252Fimage.png%3Falt%3Dmedia%26token%3D35ff53eb-0357-4feb-9cec-5ad2961fc6da&width=400&dpr=2&quality=100&sign=efb0867c&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwtkDocFXVaqyRY0ixxEB%252Fimage.png%3Falt%3Dmedia%26token%3D35ff53eb-0357-4feb-9cec-5ad2961fc6da&width=400&dpr=3&quality=100&sign=efb0867c&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwtkDocFXVaqyRY0ixxEB%252Fimage.png%3Falt%3Dmedia%26token%3D35ff53eb-0357-4feb-9cec-5ad2961fc6da&width=400&dpr=4&quality=100&sign=efb0867c&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwtkDocFXVaqyRY0ixxEB%252Fimage.png%3Falt%3Dmedia%26token%3D35ff53eb-0357-4feb-9cec-5ad2961fc6da&width=768&dpr=1&quality=100&sign=efb0867c&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwtkDocFXVaqyRY0ixxEB%252Fimage.png%3Falt%3Dmedia%26token%3D35ff53eb-0357-4feb-9cec-5ad2961fc6da&width=768&dpr=2&quality=100&sign=efb0867c&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwtkDocFXVaqyRY0ixxEB%252Fimage.png%3Falt%3Dmedia%26token%3D35ff53eb-0357-4feb-9cec-5ad2961fc6da&width=768&dpr=3&quality=100&sign=efb0867c&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwtkDocFXVaqyRY0ixxEB%252Fimage.png%3Falt%3Dmedia%26token%3D35ff53eb-0357-4feb-9cec-5ad2961fc6da&width=768&dpr=4&quality=100&sign=efb0867c&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={1555}
              height={657}
              style={{ maxWidth: "100%", height: "auto" }}
            />
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
                Remeber the name of the active connection
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
                Right-Click the Windows logo, select
                <strong className="font-bold">Device Manager</strong>
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
                Right-Click and select
                <strong className="font-bold">Uninstall device</strong> on all
                other Network adapters
              </p>
            </div>
          </li>
        </ul>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block ZoomImage_zoomImg__teSyL"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FaJV6fsiRLoolWp9HNRyQ%252Fimage.png%3Falt%3Dmedia%26token%3D15c3d2d7-6137-4011-aaaf-76e52ffcde6c&width=768&dpr=4&quality=100&sign=c4ae89a1&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FaJV6fsiRLoolWp9HNRyQ%252Fimage.png%3Falt%3Dmedia%26token%3D15c3d2d7-6137-4011-aaaf-76e52ffcde6c&width=400&dpr=1&quality=100&sign=c4ae89a1&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FaJV6fsiRLoolWp9HNRyQ%252Fimage.png%3Falt%3Dmedia%26token%3D15c3d2d7-6137-4011-aaaf-76e52ffcde6c&width=400&dpr=2&quality=100&sign=c4ae89a1&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FaJV6fsiRLoolWp9HNRyQ%252Fimage.png%3Falt%3Dmedia%26token%3D15c3d2d7-6137-4011-aaaf-76e52ffcde6c&width=400&dpr=3&quality=100&sign=c4ae89a1&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FaJV6fsiRLoolWp9HNRyQ%252Fimage.png%3Falt%3Dmedia%26token%3D15c3d2d7-6137-4011-aaaf-76e52ffcde6c&width=400&dpr=4&quality=100&sign=c4ae89a1&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FaJV6fsiRLoolWp9HNRyQ%252Fimage.png%3Falt%3Dmedia%26token%3D15c3d2d7-6137-4011-aaaf-76e52ffcde6c&width=768&dpr=1&quality=100&sign=c4ae89a1&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FaJV6fsiRLoolWp9HNRyQ%252Fimage.png%3Falt%3Dmedia%26token%3D15c3d2d7-6137-4011-aaaf-76e52ffcde6c&width=768&dpr=2&quality=100&sign=c4ae89a1&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FaJV6fsiRLoolWp9HNRyQ%252Fimage.png%3Falt%3Dmedia%26token%3D15c3d2d7-6137-4011-aaaf-76e52ffcde6c&width=768&dpr=3&quality=100&sign=c4ae89a1&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FaJV6fsiRLoolWp9HNRyQ%252Fimage.png%3Falt%3Dmedia%26token%3D15c3d2d7-6137-4011-aaaf-76e52ffcde6c&width=768&dpr=4&quality=100&sign=c4ae89a1&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={779}
              height={569}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          Now You Should Only Have One Device Being Your Network
        </p>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block ZoomImage_zoomImg__teSyL"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FPkPj4EYxYrV9ekRQLGK3%252Fimage.png%3Falt%3Dmedia%26token%3D03cf9a78-a41f-47c3-bf42-f4212c585b55&width=768&dpr=4&quality=100&sign=f160b7e8&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FPkPj4EYxYrV9ekRQLGK3%252Fimage.png%3Falt%3Dmedia%26token%3D03cf9a78-a41f-47c3-bf42-f4212c585b55&width=400&dpr=1&quality=100&sign=f160b7e8&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FPkPj4EYxYrV9ekRQLGK3%252Fimage.png%3Falt%3Dmedia%26token%3D03cf9a78-a41f-47c3-bf42-f4212c585b55&width=400&dpr=2&quality=100&sign=f160b7e8&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FPkPj4EYxYrV9ekRQLGK3%252Fimage.png%3Falt%3Dmedia%26token%3D03cf9a78-a41f-47c3-bf42-f4212c585b55&width=400&dpr=3&quality=100&sign=f160b7e8&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FPkPj4EYxYrV9ekRQLGK3%252Fimage.png%3Falt%3Dmedia%26token%3D03cf9a78-a41f-47c3-bf42-f4212c585b55&width=400&dpr=4&quality=100&sign=f160b7e8&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FPkPj4EYxYrV9ekRQLGK3%252Fimage.png%3Falt%3Dmedia%26token%3D03cf9a78-a41f-47c3-bf42-f4212c585b55&width=768&dpr=1&quality=100&sign=f160b7e8&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FPkPj4EYxYrV9ekRQLGK3%252Fimage.png%3Falt%3Dmedia%26token%3D03cf9a78-a41f-47c3-bf42-f4212c585b55&width=768&dpr=2&quality=100&sign=f160b7e8&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FPkPj4EYxYrV9ekRQLGK3%252Fimage.png%3Falt%3Dmedia%26token%3D03cf9a78-a41f-47c3-bf42-f4212c585b55&width=768&dpr=3&quality=100&sign=f160b7e8&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FPkPj4EYxYrV9ekRQLGK3%252Fimage.png%3Falt%3Dmedia%26token%3D03cf9a78-a41f-47c3-bf42-f4212c585b55&width=768&dpr=4&quality=100&sign=f160b7e8&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={1289}
              height={737}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <h2
          id="disabling-bluetooth"
          className="text-3xl font-semibold group relative grid w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0"
        >
          {/* <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[1em]">
            <a
              href="#disabling-bluetooth"
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
            Disabling Bluetooth
          </div>
        </h2>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none">
          <a
            className="group flex flex-row justify-between items-center gap-4 ring-1 ring-dark/3 rounded straight-corners:rounded-none px-5 py-3 transition-shadow hover:ring-primary/8 dark:ring-light/2 dark:hover:text-light dark:hover:ring-primary-300/4"
            href="https://mega.nz/file/nZMQiYLC#-eNYRwFkoYpCdDfCp7jsuSrGQEwVpHk5h1cFXH3LpjQ"
          >
            <img
              src="https://mega.nz/favicon.ico?v=3"
              className="w-5 h-5"
              alt="Logo"
            />
            <span className="flex flex-col flex-1">
              <span className="text-base transition-colors group-hover:text-primary">
                1.2 KB file on MEGA
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
                After Running This As Admin Restart PC
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
              className="block ZoomImage_zoomImg__teSyL"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FSDH4m3W7ksJne04XOKrq%252Fimage.png%3Falt%3Dmedia%26token%3D0e9e9755-fb25-48de-842b-4c790d1c756b&width=768&dpr=4&quality=100&sign=b085f2a4&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FSDH4m3W7ksJne04XOKrq%252Fimage.png%3Falt%3Dmedia%26token%3D0e9e9755-fb25-48de-842b-4c790d1c756b&width=400&dpr=1&quality=100&sign=b085f2a4&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FSDH4m3W7ksJne04XOKrq%252Fimage.png%3Falt%3Dmedia%26token%3D0e9e9755-fb25-48de-842b-4c790d1c756b&width=400&dpr=2&quality=100&sign=b085f2a4&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FSDH4m3W7ksJne04XOKrq%252Fimage.png%3Falt%3Dmedia%26token%3D0e9e9755-fb25-48de-842b-4c790d1c756b&width=400&dpr=3&quality=100&sign=b085f2a4&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FSDH4m3W7ksJne04XOKrq%252Fimage.png%3Falt%3Dmedia%26token%3D0e9e9755-fb25-48de-842b-4c790d1c756b&width=400&dpr=4&quality=100&sign=b085f2a4&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FSDH4m3W7ksJne04XOKrq%252Fimage.png%3Falt%3Dmedia%26token%3D0e9e9755-fb25-48de-842b-4c790d1c756b&width=768&dpr=1&quality=100&sign=b085f2a4&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FSDH4m3W7ksJne04XOKrq%252Fimage.png%3Falt%3Dmedia%26token%3D0e9e9755-fb25-48de-842b-4c790d1c756b&width=768&dpr=2&quality=100&sign=b085f2a4&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FSDH4m3W7ksJne04XOKrq%252Fimage.png%3Falt%3Dmedia%26token%3D0e9e9755-fb25-48de-842b-4c790d1c756b&width=768&dpr=3&quality=100&sign=b085f2a4&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FSDH4m3W7ksJne04XOKrq%252Fimage.png%3Falt%3Dmedia%26token%3D0e9e9755-fb25-48de-842b-4c790d1c756b&width=768&dpr=4&quality=100&sign=b085f2a4&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={1145}
              height={849}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          Should Look Like This
        </p>
        <h2
          id="change-monitor-serials"
          className="text-3xl font-semibold group relative grid w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0"
        >
          {/* <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[1em]">
            <a
              href="#change-monitor-serials"
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
            Change Monitor Serials
          </div>
        </h2>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none">
          <a
            className="group flex flex-row justify-between items-center gap-4 ring-1 ring-dark/3 rounded straight-corners:rounded-none px-5 py-3 transition-shadow hover:ring-primary/8 dark:ring-light/2 dark:hover:text-light dark:hover:ring-primary-300/4"
            href="https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU"
          >
            <img
              src="https://www.monitortests.com/favicon.ico"
              className="w-5 h-5"
              alt="Logo"
            />
            <span className="flex flex-col flex-1">
              <span className="text-base transition-colors group-hover:text-primary">
                Custom Resolution Utility (CRU)
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
                Download CRU above
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
                <strong className="font-bold">Disable </strong>G-SYNC if your
                monitor support that - IMPORTANT OR YOU WILL BLACK SCREEN
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
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F3OGarbh4vU1HQHIDADTs%252Fimage.png%3Falt%3Dmedia%26token%3D1f6fa77a-a163-4bf2-9e1b-dded6c859b19&width=768&dpr=4&quality=100&sign=6961d5f6&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F3OGarbh4vU1HQHIDADTs%252Fimage.png%3Falt%3Dmedia%26token%3D1f6fa77a-a163-4bf2-9e1b-dded6c859b19&width=400&dpr=1&quality=100&sign=6961d5f6&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F3OGarbh4vU1HQHIDADTs%252Fimage.png%3Falt%3Dmedia%26token%3D1f6fa77a-a163-4bf2-9e1b-dded6c859b19&width=400&dpr=2&quality=100&sign=6961d5f6&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F3OGarbh4vU1HQHIDADTs%252Fimage.png%3Falt%3Dmedia%26token%3D1f6fa77a-a163-4bf2-9e1b-dded6c859b19&width=400&dpr=3&quality=100&sign=6961d5f6&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F3OGarbh4vU1HQHIDADTs%252Fimage.png%3Falt%3Dmedia%26token%3D1f6fa77a-a163-4bf2-9e1b-dded6c859b19&width=400&dpr=4&quality=100&sign=6961d5f6&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F3OGarbh4vU1HQHIDADTs%252Fimage.png%3Falt%3Dmedia%26token%3D1f6fa77a-a163-4bf2-9e1b-dded6c859b19&width=768&dpr=1&quality=100&sign=6961d5f6&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F3OGarbh4vU1HQHIDADTs%252Fimage.png%3Falt%3Dmedia%26token%3D1f6fa77a-a163-4bf2-9e1b-dded6c859b19&width=768&dpr=2&quality=100&sign=6961d5f6&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F3OGarbh4vU1HQHIDADTs%252Fimage.png%3Falt%3Dmedia%26token%3D1f6fa77a-a163-4bf2-9e1b-dded6c859b19&width=768&dpr=3&quality=100&sign=6961d5f6&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252F3OGarbh4vU1HQHIDADTs%252Fimage.png%3Falt%3Dmedia%26token%3D1f6fa77a-a163-4bf2-9e1b-dded6c859b19&width=768&dpr=4&quality=100&sign=6961d5f6&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={768}
              height={568}
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
                Follow the video to change serials for all your monitors
              </p>
            </div>
          </li>
        </ol>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none">
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
                  src="https://cdn.iframe.ly/gf1dj7k"
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
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0" />
      </div>
      <div className="next-prev">
        <Link
          href="/3-spoof/spoof-hwid"
          className="nav-button"
          id="prev-button"
        >
          &larr; Previous
        </Link>
        <Link
          href="/3-spoof/after-spoofing"
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
