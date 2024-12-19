'use client'

import { useEffect } from "react"

const Script = () => {
    useEffect(()=>{
        // Create multiple stars and append them to the container
function createStar() {

    const star = document.createElement("div");
    star.classList.add("star");
  
    // Randomize star size
    const size = 1 + Math.random() * 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
  
    // Start near the center
    const centerX = 50;
    const centerY = 50;
    star.style.left = `${centerX}vw`;
    star.style.top = `${centerY}vh`;
  
    // Calculate direction to the edges of the screen
    const angle = Math.random() * Math.PI * 2; // Random angle in radians
    const distance = 150; // Distance far enough to go off-screen
    const endX = Math.cos(angle) * distance;
    const endY = Math.sin(angle) * distance;
  
    // Set custom properties for animation
    star.style.setProperty("--x", `${endX}vw`);
    star.style.setProperty("--y", `${endY}vh`);

    const skyElement = document.getElementById("sky");
    if (skyElement !== null) {
        skyElement.appendChild(star);
    }
  
  
    // Remove star after animation
    setTimeout(() => {
      star.remove();
    }, 20000); // Match duration of the animation
  }

  
  // Generate stars frequently
 const interval = setInterval(createStar, 30);
 return () => {
   clearInterval(interval);
 }
    })



    

  return null
}



export default Script