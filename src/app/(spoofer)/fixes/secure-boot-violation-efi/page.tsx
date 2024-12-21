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
                href="fixes"
              >
                Fixes
              </a>
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl font-bold flex items-center gap-4">
          Secure Boot Violation (EFI)
        </h1>
        <p className="text-lg text-dark-4 dark:text-light-4">
          This is the fix for secure boot violation
        </p>
      </header>
      <div className="[&>*+*]:mt-5 grid whitespace-pre-wrap">
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <span className="inline-flex max-w-[300px] align-middle">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="inline ZoomImage_zoomImg__teSyL"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FiLyWmue6fYS0X0WJmhnv%252Fimage.png%3Falt%3Dmedia%26token%3D93a627b0-b34f-4839-b570-0073e8315b63&width=300&dpr=4&quality=100&sign=93ef341f&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FiLyWmue6fYS0X0WJmhnv%252Fimage.png%3Falt%3Dmedia%26token%3D93a627b0-b34f-4839-b570-0073e8315b63&width=300&dpr=1&quality=100&sign=93ef341f&sv=2  300w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FiLyWmue6fYS0X0WJmhnv%252Fimage.png%3Falt%3Dmedia%26token%3D93a627b0-b34f-4839-b570-0073e8315b63&width=300&dpr=2&quality=100&sign=93ef341f&sv=2  600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FiLyWmue6fYS0X0WJmhnv%252Fimage.png%3Falt%3Dmedia%26token%3D93a627b0-b34f-4839-b570-0073e8315b63&width=300&dpr=3&quality=100&sign=93ef341f&sv=2  900w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FiLyWmue6fYS0X0WJmhnv%252Fimage.png%3Falt%3Dmedia%26token%3D93a627b0-b34f-4839-b570-0073e8315b63&width=300&dpr=4&quality=100&sign=93ef341f&sv=2 1200w
    "
              sizes="300px"
              width={768}
              height={1024}
            />
          </span>
        </p>
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
                Press OK
              </p>
            </div>
          </li>
        </ol>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-start">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              fetchPriority="high"
              className="block ZoomImage_zoomImg__teSyL"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwVp4ZfRSuTkeSprJWVXz%252Fimage.png%3Falt%3Dmedia%26token%3D836c2ebc-9e3a-452c-a10c-a11ee211b580&width=768&dpr=4&quality=100&sign=fe1bb7e7&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwVp4ZfRSuTkeSprJWVXz%252Fimage.png%3Falt%3Dmedia%26token%3D836c2ebc-9e3a-452c-a10c-a11ee211b580&width=400&dpr=1&quality=100&sign=fe1bb7e7&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwVp4ZfRSuTkeSprJWVXz%252Fimage.png%3Falt%3Dmedia%26token%3D836c2ebc-9e3a-452c-a10c-a11ee211b580&width=400&dpr=2&quality=100&sign=fe1bb7e7&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwVp4ZfRSuTkeSprJWVXz%252Fimage.png%3Falt%3Dmedia%26token%3D836c2ebc-9e3a-452c-a10c-a11ee211b580&width=400&dpr=3&quality=100&sign=fe1bb7e7&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwVp4ZfRSuTkeSprJWVXz%252Fimage.png%3Falt%3Dmedia%26token%3D836c2ebc-9e3a-452c-a10c-a11ee211b580&width=400&dpr=4&quality=100&sign=fe1bb7e7&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwVp4ZfRSuTkeSprJWVXz%252Fimage.png%3Falt%3Dmedia%26token%3D836c2ebc-9e3a-452c-a10c-a11ee211b580&width=768&dpr=1&quality=100&sign=fe1bb7e7&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwVp4ZfRSuTkeSprJWVXz%252Fimage.png%3Falt%3Dmedia%26token%3D836c2ebc-9e3a-452c-a10c-a11ee211b580&width=768&dpr=2&quality=100&sign=fe1bb7e7&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwVp4ZfRSuTkeSprJWVXz%252Fimage.png%3Falt%3Dmedia%26token%3D836c2ebc-9e3a-452c-a10c-a11ee211b580&width=768&dpr=3&quality=100&sign=fe1bb7e7&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FwVp4ZfRSuTkeSprJWVXz%252Fimage.png%3Falt%3Dmedia%26token%3D836c2ebc-9e3a-452c-a10c-a11ee211b580&width=768&dpr=4&quality=100&sign=fe1bb7e7&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={768}
              height={1024}
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
                  "--pseudoBefore--content": "'2.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                Press Any Key
              </p>
            </div>
          </li>
        </ol>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <span className="inline-flex max-w-[300px] align-middle">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="inline ZoomImage_zoomImg__teSyL"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FW4JxOr7WUQGO6IyVBW98%252Fimage.png%3Falt%3Dmedia%26token%3D2e89b2b2-37fa-4178-bebe-7cbbbf7b9f20&width=300&dpr=4&quality=100&sign=f34ee6a2&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FW4JxOr7WUQGO6IyVBW98%252Fimage.png%3Falt%3Dmedia%26token%3D2e89b2b2-37fa-4178-bebe-7cbbbf7b9f20&width=300&dpr=1&quality=100&sign=f34ee6a2&sv=2  300w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FW4JxOr7WUQGO6IyVBW98%252Fimage.png%3Falt%3Dmedia%26token%3D2e89b2b2-37fa-4178-bebe-7cbbbf7b9f20&width=300&dpr=2&quality=100&sign=f34ee6a2&sv=2  600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FW4JxOr7WUQGO6IyVBW98%252Fimage.png%3Falt%3Dmedia%26token%3D2e89b2b2-37fa-4178-bebe-7cbbbf7b9f20&width=300&dpr=3&quality=100&sign=f34ee6a2&sv=2  900w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FW4JxOr7WUQGO6IyVBW98%252Fimage.png%3Falt%3Dmedia%26token%3D2e89b2b2-37fa-4178-bebe-7cbbbf7b9f20&width=300&dpr=4&quality=100&sign=f34ee6a2&sv=2 1200w
    "
              sizes="300px"
              width={768}
              height={1024}
            />
          </span>
        </p>
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
                Enroll key from disk
              </p>
            </div>
          </li>
        </ol>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-start">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block ZoomImage_zoomImg__teSyL"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYuFrQS3xmNbLeRUUkCMT%252Fimage.png%3Falt%3Dmedia%26token%3D755f9ac7-dcf6-40d6-9ecf-9b2519b7e5d3&width=768&dpr=4&quality=100&sign=fafd1f8c&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYuFrQS3xmNbLeRUUkCMT%252Fimage.png%3Falt%3Dmedia%26token%3D755f9ac7-dcf6-40d6-9ecf-9b2519b7e5d3&width=400&dpr=1&quality=100&sign=fafd1f8c&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYuFrQS3xmNbLeRUUkCMT%252Fimage.png%3Falt%3Dmedia%26token%3D755f9ac7-dcf6-40d6-9ecf-9b2519b7e5d3&width=400&dpr=2&quality=100&sign=fafd1f8c&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYuFrQS3xmNbLeRUUkCMT%252Fimage.png%3Falt%3Dmedia%26token%3D755f9ac7-dcf6-40d6-9ecf-9b2519b7e5d3&width=400&dpr=3&quality=100&sign=fafd1f8c&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYuFrQS3xmNbLeRUUkCMT%252Fimage.png%3Falt%3Dmedia%26token%3D755f9ac7-dcf6-40d6-9ecf-9b2519b7e5d3&width=400&dpr=4&quality=100&sign=fafd1f8c&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYuFrQS3xmNbLeRUUkCMT%252Fimage.png%3Falt%3Dmedia%26token%3D755f9ac7-dcf6-40d6-9ecf-9b2519b7e5d3&width=768&dpr=1&quality=100&sign=fafd1f8c&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYuFrQS3xmNbLeRUUkCMT%252Fimage.png%3Falt%3Dmedia%26token%3D755f9ac7-dcf6-40d6-9ecf-9b2519b7e5d3&width=768&dpr=2&quality=100&sign=fafd1f8c&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYuFrQS3xmNbLeRUUkCMT%252Fimage.png%3Falt%3Dmedia%26token%3D755f9ac7-dcf6-40d6-9ecf-9b2519b7e5d3&width=768&dpr=3&quality=100&sign=fafd1f8c&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FYuFrQS3xmNbLeRUUkCMT%252Fimage.png%3Falt%3Dmedia%26token%3D755f9ac7-dcf6-40d6-9ecf-9b2519b7e5d3&width=768&dpr=4&quality=100&sign=fafd1f8c&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={768}
              height={1024}
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
                EFI (The Partition Name)
              </p>
            </div>
          </li>
        </ol>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-start">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block ZoomImage_zoomImg__teSyL"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FmcrzHPMZnx3xyUsBBITa%252Fimage.png%3Falt%3Dmedia%26token%3D0baa1e63-048b-4bd0-abe1-0476633fe867&width=768&dpr=4&quality=100&sign=1507c2ab&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FmcrzHPMZnx3xyUsBBITa%252Fimage.png%3Falt%3Dmedia%26token%3D0baa1e63-048b-4bd0-abe1-0476633fe867&width=400&dpr=1&quality=100&sign=1507c2ab&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FmcrzHPMZnx3xyUsBBITa%252Fimage.png%3Falt%3Dmedia%26token%3D0baa1e63-048b-4bd0-abe1-0476633fe867&width=400&dpr=2&quality=100&sign=1507c2ab&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FmcrzHPMZnx3xyUsBBITa%252Fimage.png%3Falt%3Dmedia%26token%3D0baa1e63-048b-4bd0-abe1-0476633fe867&width=400&dpr=3&quality=100&sign=1507c2ab&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FmcrzHPMZnx3xyUsBBITa%252Fimage.png%3Falt%3Dmedia%26token%3D0baa1e63-048b-4bd0-abe1-0476633fe867&width=400&dpr=4&quality=100&sign=1507c2ab&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FmcrzHPMZnx3xyUsBBITa%252Fimage.png%3Falt%3Dmedia%26token%3D0baa1e63-048b-4bd0-abe1-0476633fe867&width=768&dpr=1&quality=100&sign=1507c2ab&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FmcrzHPMZnx3xyUsBBITa%252Fimage.png%3Falt%3Dmedia%26token%3D0baa1e63-048b-4bd0-abe1-0476633fe867&width=768&dpr=2&quality=100&sign=1507c2ab&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FmcrzHPMZnx3xyUsBBITa%252Fimage.png%3Falt%3Dmedia%26token%3D0baa1e63-048b-4bd0-abe1-0476633fe867&width=768&dpr=3&quality=100&sign=1507c2ab&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FmcrzHPMZnx3xyUsBBITa%252Fimage.png%3Falt%3Dmedia%26token%3D0baa1e63-048b-4bd0-abe1-0476633fe867&width=768&dpr=4&quality=100&sign=1507c2ab&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={768}
              height={1024}
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
                  "--pseudoBefore--content": "'5.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                Press LWAY.cer
              </p>
            </div>
          </li>
        </ol>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-start">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block ZoomImage_zoomImg__teSyL"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FdgQI1XduBqa1o2GCc5Kk%252Fimage.png%3Falt%3Dmedia%26token%3D87747879-5654-4a34-9900-ef28f8a20bc9&width=768&dpr=4&quality=100&sign=58108553&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FdgQI1XduBqa1o2GCc5Kk%252Fimage.png%3Falt%3Dmedia%26token%3D87747879-5654-4a34-9900-ef28f8a20bc9&width=400&dpr=1&quality=100&sign=58108553&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FdgQI1XduBqa1o2GCc5Kk%252Fimage.png%3Falt%3Dmedia%26token%3D87747879-5654-4a34-9900-ef28f8a20bc9&width=400&dpr=2&quality=100&sign=58108553&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FdgQI1XduBqa1o2GCc5Kk%252Fimage.png%3Falt%3Dmedia%26token%3D87747879-5654-4a34-9900-ef28f8a20bc9&width=400&dpr=3&quality=100&sign=58108553&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FdgQI1XduBqa1o2GCc5Kk%252Fimage.png%3Falt%3Dmedia%26token%3D87747879-5654-4a34-9900-ef28f8a20bc9&width=400&dpr=4&quality=100&sign=58108553&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FdgQI1XduBqa1o2GCc5Kk%252Fimage.png%3Falt%3Dmedia%26token%3D87747879-5654-4a34-9900-ef28f8a20bc9&width=768&dpr=1&quality=100&sign=58108553&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FdgQI1XduBqa1o2GCc5Kk%252Fimage.png%3Falt%3Dmedia%26token%3D87747879-5654-4a34-9900-ef28f8a20bc9&width=768&dpr=2&quality=100&sign=58108553&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FdgQI1XduBqa1o2GCc5Kk%252Fimage.png%3Falt%3Dmedia%26token%3D87747879-5654-4a34-9900-ef28f8a20bc9&width=768&dpr=3&quality=100&sign=58108553&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FdgQI1XduBqa1o2GCc5Kk%252Fimage.png%3Falt%3Dmedia%26token%3D87747879-5654-4a34-9900-ef28f8a20bc9&width=768&dpr=4&quality=100&sign=58108553&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={768}
              height={1024}
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
                  "--pseudoBefore--content": "'6.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                Press Continue
              </p>
            </div>
          </li>
        </ol>
        <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-start">
          <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
            <img
              alt=""
              loading="lazy"
              fetchPriority="low"
              className="block ZoomImage_zoomImg__teSyL"
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FIWtFfoadLLboJhDUF462%252Fimage.png%3Falt%3Dmedia%26token%3D423e607c-4b8d-4442-9559-9678537510e1&width=768&dpr=4&quality=100&sign=d451b698&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FIWtFfoadLLboJhDUF462%252Fimage.png%3Falt%3Dmedia%26token%3D423e607c-4b8d-4442-9559-9678537510e1&width=400&dpr=1&quality=100&sign=d451b698&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FIWtFfoadLLboJhDUF462%252Fimage.png%3Falt%3Dmedia%26token%3D423e607c-4b8d-4442-9559-9678537510e1&width=400&dpr=2&quality=100&sign=d451b698&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FIWtFfoadLLboJhDUF462%252Fimage.png%3Falt%3Dmedia%26token%3D423e607c-4b8d-4442-9559-9678537510e1&width=400&dpr=3&quality=100&sign=d451b698&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FIWtFfoadLLboJhDUF462%252Fimage.png%3Falt%3Dmedia%26token%3D423e607c-4b8d-4442-9559-9678537510e1&width=400&dpr=4&quality=100&sign=d451b698&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FIWtFfoadLLboJhDUF462%252Fimage.png%3Falt%3Dmedia%26token%3D423e607c-4b8d-4442-9559-9678537510e1&width=768&dpr=1&quality=100&sign=d451b698&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FIWtFfoadLLboJhDUF462%252Fimage.png%3Falt%3Dmedia%26token%3D423e607c-4b8d-4442-9559-9678537510e1&width=768&dpr=2&quality=100&sign=d451b698&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FIWtFfoadLLboJhDUF462%252Fimage.png%3Falt%3Dmedia%26token%3D423e607c-4b8d-4442-9559-9678537510e1&width=768&dpr=3&quality=100&sign=d451b698&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FIWtFfoadLLboJhDUF462%252Fimage.png%3Falt%3Dmedia%26token%3D423e607c-4b8d-4442-9559-9678537510e1&width=768&dpr=4&quality=100&sign=d451b698&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={768}
              height={1024}
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
                  "--pseudoBefore--content": "'7.'",
                  "--font-family": "inherit",
                  fontSize: "min(1em, 24px)",
                }}
              />
            </div>
            <div className="space-y-2 flex flex-col flex-1">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
                Now Finally Reboot
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
                Then you should see this screen:
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
              src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHXJT4DXCTXxKihrrq74p%252Fimage.png%3Falt%3Dmedia%26token%3D6c7241b7-db25-440a-a650-acdb720d8c73&width=768&dpr=4&quality=100&sign=bfaded3e&sv=2"
              srcSet="
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHXJT4DXCTXxKihrrq74p%252Fimage.png%3Falt%3Dmedia%26token%3D6c7241b7-db25-440a-a650-acdb720d8c73&width=400&dpr=1&quality=100&sign=bfaded3e&sv=2  400w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHXJT4DXCTXxKihrrq74p%252Fimage.png%3Falt%3Dmedia%26token%3D6c7241b7-db25-440a-a650-acdb720d8c73&width=400&dpr=2&quality=100&sign=bfaded3e&sv=2  800w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHXJT4DXCTXxKihrrq74p%252Fimage.png%3Falt%3Dmedia%26token%3D6c7241b7-db25-440a-a650-acdb720d8c73&width=400&dpr=3&quality=100&sign=bfaded3e&sv=2 1200w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHXJT4DXCTXxKihrrq74p%252Fimage.png%3Falt%3Dmedia%26token%3D6c7241b7-db25-440a-a650-acdb720d8c73&width=400&dpr=4&quality=100&sign=bfaded3e&sv=2 1600w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHXJT4DXCTXxKihrrq74p%252Fimage.png%3Falt%3Dmedia%26token%3D6c7241b7-db25-440a-a650-acdb720d8c73&width=768&dpr=1&quality=100&sign=bfaded3e&sv=2  768w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHXJT4DXCTXxKihrrq74p%252Fimage.png%3Falt%3Dmedia%26token%3D6c7241b7-db25-440a-a650-acdb720d8c73&width=768&dpr=2&quality=100&sign=bfaded3e&sv=2 1536w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHXJT4DXCTXxKihrrq74p%252Fimage.png%3Falt%3Dmedia%26token%3D6c7241b7-db25-440a-a650-acdb720d8c73&width=768&dpr=3&quality=100&sign=bfaded3e&sv=2 2304w,
      https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252FHXJT4DXCTXxKihrrq74p%252Fimage.png%3Falt%3Dmedia%26token%3D6c7241b7-db25-440a-a650-acdb720d8c73&width=768&dpr=4&quality=100&sign=bfaded3e&sv=2 3072w
    "
              sizes="(max-width: 640px) 400px, 768px"
              width={768}
              height={439}
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
                Now Check Serials and Confirm they've changed
              </p>
            </div>
          </li>
        </ol>
      </div>
      <div className="next-prev">
        <Link
          href="/3-spoof/after-spoofing"
          className="nav-button"
          id="prev-button"
        >
          &larr; Previous
        </Link>
        <Link href="/fixes/raid0" className="nav-button" id="next-button">
          Next &rarr;
        </Link>
      </div>
      <div className="last-updated">Last updated 5 months ago</div>
    </main>
  );
};

export default page;
