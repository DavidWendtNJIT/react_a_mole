import { useEffect } from "react";
import moleImg from "../mole.png";

const Mole = (props) => {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 2000);
    let timer = setTimeout(() => {
      props.toggle(false);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div className="Mole">
      <img src={moleImg} onClick={props.handleClick} />
    </div>
  );
};

export default Mole;
