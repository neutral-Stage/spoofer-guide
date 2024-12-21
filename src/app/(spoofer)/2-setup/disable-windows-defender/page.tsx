import Link from 'next/link';

const page = () => {
  return (
    <main id="scrollableContent" className="flex-1 relative py-8 lg:px-12 break-anywhere page-api-block:xl:max-2xl:pr-0 page-api-block:max-w-[1654px] page-api-block:mx-auto">
    <header className="max-w-3xl mx-auto mb-6 space-y-3 page-api-block:ml-0">
      <nav>
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <a className="underline-offset-2 decoration-primary/6 text-primary hover:text-primary-700 transition-colors no-underline hover:underline text-xs tracking-wide font-semibold uppercase flex items-center gap-1" href="2-setup">2# Setup</a>
          </li>
        </ol>
      </nav>
      <h1 className="text-4xl font-bold flex items-center gap-4">
        Disable Windows Defender
      </h1>
      <p className="text-lg text-dark-4 dark:text-light-4">
        How to disable Windows Defender
      </p>
    </header>
    <div className="[&>*+*]:mt-5 grid whitespace-pre-wrap">
      <h2 id="disable-windows-defender-manually" className="text-3xl font-semibold group relative grid w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
        {/* <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[1em]">
          <a href="#disable-windows-defender-manually" aria-label="Direct link to heading" className="inline-flex h-full items-start dark:text-light/3 dark:shadow-none dark:ring-0 leading-tight"><svg className="gb-icon w-3.5 h-[1lh] transition-colors text-transparent group-hover:text-dark/6 dark:group-hover:text-light/5 lg:w-4" style={{"maskImage":"url('https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/hashtag.svg?v=2&token=a463935e93')","maskRepeat":"no-repeat","maskPosition":"center center"}} /></a>
        </div> */}
        <div className="grid-area-1-1 z-[1] mt-[1em]">
          Disable Windows Defender Manually
        </div>
      </h2>
      <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
        <li className="leading-normal flex items-start">
          <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
            <div className="before:font-var before:content-[--pseudoBefore--content]" style={{"--pseudoBefore--content":"'1.'","--font-family":"inherit","fontSize":"min(1em, 24px)"}} />
          </div>
          <div className="space-y-2 flex flex-col flex-1">
            <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
              Select Start and type "Windows Security"
            </p>
          </div>
        </li>
        <li className="leading-normal flex items-start">
          <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
            <div className="before:font-var before:content-[--pseudoBefore--content]" style={{"--pseudoBefore--content":"'2.'","--font-family":"inherit","fontSize":"min(1em, 24px)"}} />
          </div>
          <div className="space-y-2 flex flex-col flex-1">
            <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
              Select the Windows Security app from the search results, go to Virus
              &amp; threat protection under Virus &amp; threat protection settings
              select Manage settings
            </p>
          </div>
        </li>
        <li className="leading-normal flex items-start">
          <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
            <div className="before:font-var before:content-[--pseudoBefore--content]" style={{"--pseudoBefore--content":"'3.'","--font-family":"inherit","fontSize":"min(1em, 24px)"}} />
          </div>
          <div className="space-y-2 flex flex-col flex-1">
            <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
              Switch Real-time protection to Off
            </p>
          </div>
        </li>
      </ol>
      <h2 id="disable-windows-defender-with-dcontrol" className="text-3xl font-semibold group relative grid w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
        {/* <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[1em]">
          <a href="#disable-windows-defender-with-dcontrol" aria-label="Direct link to heading" className="inline-flex h-full items-start dark:text-light/3 dark:shadow-none dark:ring-0 leading-tight"><svg className="gb-icon w-3.5 h-[1lh] transition-colors text-transparent group-hover:text-dark/6 dark:group-hover:text-light/5 lg:w-4" style={{"maskImage":"url('https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/hashtag.svg?v=2&token=a463935e93')","maskRepeat":"no-repeat","maskPosition":"center center"}} /></a>
        </div> */}
        <div className="grid-area-1-1 z-[1] mt-[1em]">
          Disable Windows Defender with dControl
        </div>
      </h2>
      <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
        <a href="https://1747526905-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FIRlbgGEe6FZJRx7luQsK%2Fuploads%2FPzHvDvms4BIrjTrj326l%2FdControl.zip?alt=media&token=4ba74f9b-97ac-45cf-a26c-07b3817afcd8" download="dControl.zip" className="group/file flex flex-row items-center border px-5 py-3 border-dark/3 rounded-lg hover:text-primary-600 dark:border-light/3 dark:hover:text-primary-300"><div className="min-w-14 mr-5 pr-5 flex flex-col items-center gap-1 border-r border-dark/2 dark:border-light/2">
            <div>
              <svg className="gb-icon size-5 text-primary" style={{"maskImage":"url('https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/file-archive.svg?v=2&token=a463935e93')","maskRepeat":"no-repeat","maskPosition":"center center"}} />
            </div>
            <div className="text-xs text-dark-4/8 group-hover/file:text-dark dark:text-light-4/7 dark:group-hover/file:text-light">
              447KB
            </div>
          </div>
          <div>
            <div className="text-base">dControl.zip</div>
            <div className="text-sm opacity-9 dark:opacity-8">archive</div>
          </div></a>
      </div>
      <ol className="space-y-2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
        <li className="leading-normal flex items-start">
          <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
            <div className="before:font-var before:content-[--pseudoBefore--content]" style={{"--pseudoBefore--content":"'1.'","--font-family":"inherit","fontSize":"min(1em, 24px)"}} />
          </div>
          <div className="space-y-2 flex flex-col flex-1">
            <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
              Download<a className="underline underline-offset-2 text-primary hover:text-primary-700 transition-colors" href="https://www.sordum.org/files/downloads.php?st-defender-control">
              </a><strong className="font-bold">dControl </strong>above
            </p>
          </div>
        </li>
        <li className="leading-normal flex items-start">
          <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
            <div className="before:font-var before:content-[--pseudoBefore--content]" style={{"--pseudoBefore--content":"'2.'","--font-family":"inherit","fontSize":"min(1em, 24px)"}} />
          </div>
          <div className="space-y-2 flex flex-col flex-1">
            <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
              Unzip the files
            </p>
          </div>
        </li>
        <li className="leading-normal flex items-start">
          <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
            <div className="before:font-var before:content-[--pseudoBefore--content]" style={{"--pseudoBefore--content":"'3.'","--font-family":"inherit","fontSize":"min(1em, 24px)"}} />
          </div>
          <div className="space-y-2 flex flex-col flex-1">
            <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
              Run<strong className="font-bold"> dControl.exe</strong>
            </p>
          </div>
        </li>
        <li className="leading-normal flex items-start">
          <div className="text-base leading-normal flex items-center justify-center mr-1 min-h-[1lh] min-w-6 text-dark/6 dark:text-light/5">
            <div className="before:font-var before:content-[--pseudoBefore--content]" style={{"--pseudoBefore--content":"'4.'","--font-family":"inherit","fontSize":"min(1em, 24px)"}} />
          </div>
          <div className="space-y-2 flex flex-col flex-1">
            <p className="w-full mx-auto decoration-primary/6 max-w-3xl min-h-[1lh] flip-heading-hash [&:is(h2)>div]:mt-0 [&:is(h3)>div]:mt-0 [&:is(h4)>div]:mt-0">
              Disable Windows Defender
            </p>
          </div>
        </li>
      </ol>
      <div className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0 flex flex-row gap-3 justify-center">
        <div className="relative overflow-hidden rounded straight-corners:rounded-none after:block after:absolute after:-inset-[0] after:border-dark/2 after:border after:rounded straight-corners:after:rounded-none dark:after:border-light/1 dark:after:mix-blend-plus-lighter after:pointer-events-none w-fit">
          <img alt="" fetchPriority="high" className="block" src="https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fa7QO665MkWfYOyYolZEa%252Fimage.png%3Falt%3Dmedia%26token%3D04ecb7e1-26d6-41b9-b510-191f4dc7963c&width=768&dpr=4&quality=100&sign=a57f7c1d&sv=2" srcSet="
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fa7QO665MkWfYOyYolZEa%252Fimage.png%3Falt%3Dmedia%26token%3D04ecb7e1-26d6-41b9-b510-191f4dc7963c&width=400&dpr=1&quality=100&sign=a57f7c1d&sv=2  400w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fa7QO665MkWfYOyYolZEa%252Fimage.png%3Falt%3Dmedia%26token%3D04ecb7e1-26d6-41b9-b510-191f4dc7963c&width=400&dpr=2&quality=100&sign=a57f7c1d&sv=2  800w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fa7QO665MkWfYOyYolZEa%252Fimage.png%3Falt%3Dmedia%26token%3D04ecb7e1-26d6-41b9-b510-191f4dc7963c&width=400&dpr=3&quality=100&sign=a57f7c1d&sv=2 1200w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fa7QO665MkWfYOyYolZEa%252Fimage.png%3Falt%3Dmedia%26token%3D04ecb7e1-26d6-41b9-b510-191f4dc7963c&width=400&dpr=4&quality=100&sign=a57f7c1d&sv=2 1600w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fa7QO665MkWfYOyYolZEa%252Fimage.png%3Falt%3Dmedia%26token%3D04ecb7e1-26d6-41b9-b510-191f4dc7963c&width=768&dpr=1&quality=100&sign=a57f7c1d&sv=2  768w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fa7QO665MkWfYOyYolZEa%252Fimage.png%3Falt%3Dmedia%26token%3D04ecb7e1-26d6-41b9-b510-191f4dc7963c&width=768&dpr=2&quality=100&sign=a57f7c1d&sv=2 1536w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fa7QO665MkWfYOyYolZEa%252Fimage.png%3Falt%3Dmedia%26token%3D04ecb7e1-26d6-41b9-b510-191f4dc7963c&width=768&dpr=3&quality=100&sign=a57f7c1d&sv=2 2304w,
        https://spoofer.gitbook.io/~gitbook/image?url=https%3A%2F%2F1747526905-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FIRlbgGEe6FZJRx7luQsK%252Fuploads%252Fa7QO665MkWfYOyYolZEa%252Fimage.png%3Falt%3Dmedia%26token%3D04ecb7e1-26d6-41b9-b510-191f4dc7963c&width=768&dpr=4&quality=100&sign=a57f7c1d&sv=2 3072w
      " sizes="(max-width: 640px) 400px, 768px" width={402} height={177} style={{"maxWidth":"100%","height":"auto"}} />
        </div>
      </div>
    </div>
    <div className="next-prev">
          <Link href="/1-windows-steps/windows-setup" className="nav-button" id="prev-button">&larr; Previous</Link>
          <Link href="/2-setup/disable-windows-updates" className="nav-button" id="next-button">Next &rarr;</Link>
      </div>
      <div className="last-updated">Last updated 5 months ago</div>
  </main>
  )
}

export default page