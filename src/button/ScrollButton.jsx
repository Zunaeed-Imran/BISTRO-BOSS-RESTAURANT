import { useEffect, useState } from "react";
import { LiaHandPointUp } from "react-icons/lia";


function ScrollButton() {

  const [visable, setVisable] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHight = document.getElementById('hero').clientHeight;

      // condation, show button if the hero section end.
      if (window.screenY > heroHight) {
        setVisable(true);
      } else {
        setVisable(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {/* hero section */}
      <section id="hero"></section>

      {/* scroll to top button */}
      {visable && (
        <button
          className="z-50 bottom-5 right-7 fixed bg-black p-2 rounded-md"
          onClick={scrollToTop}
        >
          <LiaHandPointUp size={'1.5rem'} color="white" />
        </button>
      )}
    </div>
  );
}

export default ScrollButton
