import React, { useEffect } from "react";
import "../components/ForthSection.css";
import ScrollImage1 from "../Images/Hero1.jpg";
import ScrollImage2 from "../Images/Rail1.jpg";
import ScrollImage3 from "../Images/IG1.jpg";

// const ForthSection = () => {
//   useEffect(() => {
//     const scrollers = document.querySelectorAll(".scroller");

//     function addAnimation() {
//       scrollers.forEach((scroller) => {
//         // Check if the animation has already been applied to avoid duplication
//         if (!scroller.getAttribute("data-animated")) {
//           scroller.setAttribute("data-animated", true);

//           const scrollerInner = scroller.querySelector(".scroller__inner");
//           const scrollerContent = Array.from(scrollerInner.children);

//           scrollerContent.forEach((item) => {
//             const duplicatedItem = item.cloneNode(true);
//             duplicatedItem.setAttribute("aria-hidden", true);
//             scrollerInner.appendChild(duplicatedItem);
//           });
//         }
//       });
//     }

//     function handleTouchMove() {
//       if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//         addAnimation();
//       }
//     }

//     // Call the addAnimation function only once after the initial render
//     if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       addAnimation();
//       document.addEventListener("touchmove", handleTouchMove);
//     }

//     // Cleanup the event listener on component unmount
//     return () => {
//       document.removeEventListener("touchmove", handleTouchMove);
//     };
//   }, []);

//   return (
//     <React.Fragment>
//       <section className="section">
//         <div className="scroller">
//           <div className="scroller__inner">
//             <img src={ScrollImage1} />
//             <img src={ScrollImage2} />
//             <img src={ScrollImage3} />
//             <img src={ScrollImage1} />
//             <img src={ScrollImage1} />
//             <img src={ScrollImage2} />
//             <img src={ScrollImage3} />
//             <img src={ScrollImage1} />
//             <img src={ScrollImage1} />
//             <img src={ScrollImage2} />
//             <img src={ScrollImage3} />
//             <img src={ScrollImage1} />
//             <img src={ScrollImage1} />
//             <img src={ScrollImage2} />
//             <img src={ScrollImage3} />
//             <img src={ScrollImage1} />
//           </div>
//         </div>
//       </section>
//     </React.Fragment>
//   );
// };

// export default ForthSection;

const ForthSection = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // Check if the animation has already been applied to avoid duplication
        if (!scroller.getAttribute("data-animated")) {
          scroller.setAttribute("data-animated", true);

          const scrollerInner = scroller.querySelector(".scroller__inner");
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }

    addAnimation(); // Call the addAnimation function once after the initial render

    // Cleanup the interval on component unmount
    return () => {
      // You can add cleanup logic if needed
    };
  }, []);

  return (
    <React.Fragment>
      <section className="section">
        <div className="scroller">
          <div className="scroller__inner">
            <img src={ScrollImage1} alt="Image 1" />
            <img src={ScrollImage2} alt="Image 2" />
            <img src={ScrollImage3} alt="Image 3" />
            <img src={ScrollImage1} alt="Image 1" />
            <img src={ScrollImage2} alt="Image 2" />
            <img src={ScrollImage3} alt="Image 3" />
            <img src={ScrollImage1} alt="Image 1" />
            <img src={ScrollImage2} alt="Image 2" />
            <img src={ScrollImage3} alt="Image 3" />
            <img src={ScrollImage1} alt="Image 1" />
            <img src={ScrollImage2} alt="Image 2" />
            <img src={ScrollImage3} alt="Image 3" />
            <img src={ScrollImage1} alt="Image 1" />
            <img src={ScrollImage2} alt="Image 2" />
            <img src={ScrollImage3} alt="Image 3" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ForthSection;
