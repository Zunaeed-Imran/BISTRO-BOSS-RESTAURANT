import { LiaHandPointUp } from "react-icons/lia";


function ScrollButton() {
  
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button onClick={scrollToTop}>
      <LiaHandPointUp size={'2rem'} color="white"/>
    </button>
  );
}

export default ScrollButton
