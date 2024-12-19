'use client'

const ScrollBtns = () => {
    const scrollAmount = 100;
    const scrollUpBtnClick = async () => {
      const scrollableContent = document.getElementById("scrollableContent");
      console.log(scrollableContent)
      if (scrollableContent) {
        scrollableContent.scrollTop -= scrollAmount;
      }
    };
    const scrollDownBtnClick = async () => {
      const scrollableContent = document.getElementById("scrollableContent");
      console.log(scrollableContent)
      if (scrollableContent) {
        scrollableContent.scrollTop += scrollAmount;
      }
    };
  return (
   <>
   <button id="scrollUpBtn" className="scroll-btn" onClick={scrollUpBtnClick}>▲</button>
   <button id="scrollDownBtn" className="scroll-btn" onClick={scrollDownBtnClick}>▼</button>
   </>
  )
}

export default ScrollBtns