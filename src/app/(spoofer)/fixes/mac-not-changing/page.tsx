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
        <h1 className="text-4xl font-bold flex items-center gap-4">
          MAC Not Changing
        </h1>
        <p className="text-lg text-dark-4 dark:text-light-4">
          Do This Fix if Your Mac Address Isn't Changing
        </p>
      </header>
      <div className="[&>*+*]:mt-5 grid whitespace-pre-wrap">
        <p className="w-full mx-auto decoration-primary/6 max-w-3xl page-api-block:ml-0">
          If you're Ethernet and your Mac Address is
          <strong className="font-bold">NOT </strong>Changing Simply click on
          <strong className="font-bold">
            Unload Driver -&gt; Spoof but TURN OFF Ethernet Spoofing{" "}
          </strong>
          before hand.
        </p>
      </div>
      <div className="next-prev">
        <Link
          href="/3-spoof/after-spoofing"
          className="nav-button"
          id="prev-button"
        >
          &larr; Previous
        </Link>
        <Link
          href="/fixes/getting-kicked-from-fortnite"
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
