import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="flex items-center">
            <Image
              className="h-12 w-[80px]"
              width={80}
              height={40}
              src="/logo.png"
              alt="perm guide"
            />
            <div className="perm-guide">Perm Guide</div>
          </div>
        </div>
      </header>
      <div className="separator"></div>
    </>
  );
};
export default Header;
