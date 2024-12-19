

const page = () => {
  return (
    <main id="scrollableContent" className="flex-1 relative py-8 lg:px-12 break-anywhere page-api-block:xl:max-2xl:pr-0 page-api-block:max-w-[1654px] page-api-block:mx-auto">
  <header className="max-w-3xl mx-auto mb-6 space-y-3 page-api-block:ml-0">
    <nav>
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <a className="underline-offset-2 decoration-primary/6 text-primary hover:text-primary-700 transition-colors no-underline hover:underline text-xs tracking-wide font-semibold uppercase flex items-center gap-1" href="/spoofer/fixes">Fixes</a>
        </li>
      </ol>
    </nav>
    <h1 className="text-4xl font-bold flex items-center gap-4">MAC Not Changing</h1>
    <p className="text-lg text-dark-4 dark:text-light-4">
      Do This Fix if Your Mac Address Isn't Changing
    </p>
  </header>
  <div className="[&>*+*]:mt-5 grid whitespace-pre-wrap">
    <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
      If you're Ethernet and your Mac Address is
      <strong className="font-bold">NOT </strong>Changing Simply click on<strong className="font-bold">
        Unload Driver -&gt; Spoof but TURN OFF Ethernet Spoofing </strong>before hand.
    </p>
  </div>
  <div className="flex flex-col md:flex-row mt-6 gap-2 max-w-3xl mx-auto page-api-block:ml-0">
    <a className="group text-sm p-2.5 flex gap-4 flex-1 flex-row-reverse items-center pl-4 border border-dark/3 rounded straight-corners:rounded-none hover:border-primary/6 dark:border-light/2 text-pretty dark:hover:border-primary-300/4 md:p-4 md:text-base" href="/spoofer/3-spoof/after-spoofing"><span className="flex flex-col flex-1 text-right"><span className="text-xs">Previous</span><span className="text-dark dark:text-light/6 group-hover:text-primary line-clamp-2">After Spoofing</span></span><svg className="gb-icon hidden size-4 text-dark/5 group-hover:text-primary dark:text-light/4 md:block" style={{"maskImage":"url('https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/chevron-left.svg?v=2&token=a463935e93')","maskRepeat":"no-repeat","maskPosition":"center center"}} /></a><a className="group text-sm p-2.5 flex gap-4 flex-1 flex-row items-center pr-4 border border-dark/3 rounded straight-corners:rounded-none hover:border-primary/6 dark:border-light/2 text-pretty dark:hover:border-primary-300/4 md:p-4 md:text-base" href="/spoofer/fixes/getting-kicked-from-fortnite"><span className="flex flex-col flex-1"><span className="text-xs">Next</span><span className="text-dark dark:text-light/6 group-hover:text-primary line-clamp-2">Getting Kicked From Fortnite</span></span><svg className="gb-icon hidden size-4 text-dark/5 group-hover:text-primary dark:text-light/4 md:block" style={{"maskImage":"url('https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/chevron-right.svg?v=2&token=a463935e93')","maskRepeat":"no-repeat","maskPosition":"center center"}} /></a>
  </div>
  <div className="flex flex-row items-center mt-6 max-w-3xl mx-auto page-api-block:ml-0">
    <p className="flex-1 text-sm text-dark/6 dark:text-light/5">
      Last updated
      <time data-visual-test="transparent" dateTime="2024-07-02T05:07:31.877Z" title="02/07/2024, 11:07:31">5 months ago</time>
    </p>
  </div>
</main>
  )
}

export default page