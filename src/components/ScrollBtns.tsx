'use client'

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollBtns = () => {
    const pathname = usePathname();
    const scrollAmount = 100;
    const scrollUpBtnClick = async () => {
      const scrollableContent = document.getElementById("scrollableContent");
      if (scrollableContent) {
        scrollableContent.scrollTop -= scrollAmount;
      }
    };
    const scrollDownBtnClick = async () => {
      const scrollableContent = document.getElementById("scrollableContent");
      if (scrollableContent) {
        scrollableContent.scrollTop += scrollAmount;
      }
    };
    useEffect(()=>{
        const scrollableContent = document.getElementById("scrollableContent");
        if(scrollableContent){

          let vs = scrollableContent.scrollHeight > scrollableContent.clientHeight; 
          if(!vs){
            document.getElementById("scrollUpBtn")?.classList.add("hidden");
            document.getElementById("scrollDownBtn")?.classList.add("hidden");
          }
          else{
            document.getElementById("scrollUpBtn")?.classList.remove("hidden");
            document.getElementById("scrollDownBtn")?.classList.remove("hidden");
          }
        }
    },[pathname])
  return (
   <>
   <button id="scrollUpBtn" className="scroll-btn hidden" onClick={scrollUpBtnClick}>▲</button>
   <button id="scrollDownBtn" className="scroll-btn hidden" onClick={scrollDownBtnClick}>▼</button>
   </>
  )
}

export default ScrollBtns