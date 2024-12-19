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
                href="fixes"
              >
                Fixes
              </a>
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl font-bold flex items-center gap-4">RAID0</h1>
        <p className="text-lg text-dark-4 dark:text-light-4">
          how to Raid0 if you are getting VAL 5 and Kicked from Fortnite/Delay
          ban
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
                For RAID0 It requires a Windows Reinstall
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg straight-corners:rounded-sm ring-1 ring-inset ring-dark/3 flex overflow-hidden flex-col dark:ring-light/2 w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          <div
            role="tablist"
            className="group/tabs inline-flex flex-row self-stretch after:flex-[1] after:bg-dark-2/1 [&:has(button.active-tab:last-of-type):after]:rounded-bl-md dark:after:bg-dark-1/5"
          >
            <button
              role="tab"
              aria-selected="true"
              aria-controls="msi"
              id="tab-msi"
              className="[&:has(+_.active-tab)]:rounded-br-md [.active-tab_+_&]:rounded-bl-md [.active-tab_+_:after]:rounded-br-md inline-block text-sm px-3.5 py-2 transition-[color] font-[500] relative after:transition-colors after:group-hover/tabs:border-transparent after:border-r after:absolute after:left-[unset] after:right-0 after:border-dark/4 after:top-[15%] after:h-[70%] after:w-[1px] last:after:border-transparent hover:text-dark-2 dark:after:border-light/2 dark:hover:text-light-3 truncate max-w-full shrink-0 active-tab text-dark-2 bg-transparent dark:text-light dark:bg-transparent after:[&.active-tab]:border-transparent after:[:has(+_&.active-tab)]:border-transparent after:[:has(&_+)]:border-transparent"
            >
              MSI
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="asus"
              id="tab-asus"
              className="[&:has(+_.active-tab)]:rounded-br-md [.active-tab_+_&]:rounded-bl-md [.active-tab_+_:after]:rounded-br-md inline-block text-sm px-3.5 py-2 transition-[color] font-[500] relative after:transition-colors after:group-hover/tabs:border-transparent after:border-r after:absolute after:left-[unset] after:right-0 after:border-dark/4 after:top-[15%] after:h-[70%] after:w-[1px] last:after:border-transparent text-dark-2/7 bg-dark-2/1 dark:bg-dark-1/5 hover:text-dark-2 dark:text-light-3/8 dark:after:border-light/2 dark:hover:text-light-3 truncate max-w-full"
            >
              ASUS
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="gigabyte"
              id="tab-gigabyte"
              className="[&:has(+_.active-tab)]:rounded-br-md [.active-tab_+_&]:rounded-bl-md [.active-tab_+_:after]:rounded-br-md inline-block text-sm px-3.5 py-2 transition-[color] font-[500] relative after:transition-colors after:group-hover/tabs:border-transparent after:border-r after:absolute after:left-[unset] after:right-0 after:border-dark/4 after:top-[15%] after:h-[70%] after:w-[1px] last:after:border-transparent text-dark-2/7 bg-dark-2/1 dark:bg-dark-1/5 hover:text-dark-2 dark:text-light-3/8 dark:after:border-light/2 dark:hover:text-light-3 truncate max-w-full"
            >
              Gigabyte
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="asrock"
              id="tab-asrock"
              className="[&:has(+_.active-tab)]:rounded-br-md [.active-tab_+_&]:rounded-bl-md [.active-tab_+_:after]:rounded-br-md inline-block text-sm px-3.5 py-2 transition-[color] font-[500] relative after:transition-colors after:group-hover/tabs:border-transparent after:border-r after:absolute after:left-[unset] after:right-0 after:border-dark/4 after:top-[15%] after:h-[70%] after:w-[1px] last:after:border-transparent text-dark-2/7 bg-dark-2/1 dark:bg-dark-1/5 hover:text-dark-2 dark:text-light-3/8 dark:after:border-light/2 dark:hover:text-light-3 truncate max-w-full"
            >
              Asrock
            </button>
          </div>
          <div
            role="tabpanel"
            id="msi"
            aria-labelledby="tab-msi"
            className="p-4"
          >
            <div className="w-full space-y-4">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                <a
                  className="underline underline-offset-2 text-primary hover:text-primary-700 transition-colors"
                  href="https://rentry.co/9smsy"
                >
                  <span className="text-red-600">MSI Tutorial</span>
                </a>
                <span className="text-red-600"> </span>- Intel &amp; AMD
              </p>
            </div>
          </div>
          <div
            role="tabpanel"
            id="asus"
            aria-labelledby="tab-asus"
            className="p-4 hidden"
          >
            <div className="w-full space-y-4">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                <a
                  className="underline underline-offset-2 text-primary hover:text-primary-700 transition-colors"
                  href="https://rentry.co/epzrf"
                >
                  <span className="text-red-600">Asus Tutorial</span>
                </a>
                <span className="text-red-600"> </span>- Intel &amp; AMD
              </p>
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                <a
                  className="underline underline-offset-2 text-primary hover:text-primary-700 transition-colors"
                  href="https://rog.asus.com/articles/crosshair-motherboards/what-is-raid-setup-guide/"
                >
                  <span className="text-red-600">ROG Asus Tutorial</span>
                </a>
                <span className="text-red-600"> </span>- Intel &amp; AMD
              </p>
            </div>
          </div>
          <div
            role="tabpanel"
            id="gigabyte"
            aria-labelledby="tab-gigabyte"
            className="p-4 hidden"
          >
            <div className="w-full space-y-4">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                <a
                  className="underline underline-offset-2 text-primary hover:text-primary-700 transition-colors"
                  href="https://rentry.co/o2qv7"
                >
                  <span className="text-red-600">Gigabyte Tutorial</span>
                </a>
                <span className="text-red-600"> </span>- Intel &amp; AMD
              </p>
            </div>
          </div>
          <div
            role="tabpanel"
            id="asrock"
            aria-labelledby="tab-asrock"
            className="p-4 hidden"
          >
            <div className="w-full space-y-4">
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                <a
                  className="underline underline-offset-2 text-primary hover:text-primary-700 transition-colors"
                  href="https://download.asrock.com/Manual/RAID/Z170%20Pro4/English.pdf"
                >
                  <span className="text-red-600">Asrock Tutorial</span>
                </a>
                - Intel
              </p>
              <p className="w-full mx-auto decoration-primary/6 max-w-3xl flip-heading-hash">
                <a
                  className="underline underline-offset-2 text-primary hover:text-primary-700 transition-colors"
                  href="https://download.asrock.com/Manual/RAID/X570S%20PG%20Riptide/English.pdf"
                >
                  <span className="text-red-600">Asrock Tutorial</span>
                </a>
                - AMD
              </p>
            </div>
          </div>
        </div>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          AMD Raid Driver -
          <a
            className="underline underline-offset-2 text-primary hover:text-primary-700 transition-colors"
            href="https://www.mediafire.com/file/fo2ybtbwxpnfhdl/Extract_this_folder_on_USB_AMD.zip/file"
          >
            <span className="text-red-600">Click Here</span>
          </a>
        </p>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          Intel Raid Driver -
          <a
            className="underline underline-offset-2 text-primary hover:text-primary-700 transition-colors"
            href="https://www.mediafire.com/file/k5v8fz0zatmpzsd/Extract_This_Folder_On_To_Your_USB_INTEL.zip/file"
          >
            <span className="text-red-600">Click Here</span>
          </a>
        </p>
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          Intel: Requires two ssd's or hdd's
        </p>
      </div>
      <div className="next-prev">
        <Link
          href="/fixes/secure-boot-violation-efi"
          className="nav-button"
          id="prev-button"
        >
          &larr; Previous
        </Link>
        <Link href="#" className="nav-button disabled" id="next-button">
          Next
        </Link>
      </div>
      <div className="last-updated">Last updated 5 months ago</div>
    </main>
  );
};

export default page;
