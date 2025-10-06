import Style from "../StylePage/Header.module.css";
import Logo from "../files/Travello.svg";
import Arrow from "../files/ArrowRightHeader.svg";

function Header({ el }) {
  const menuArray = ["Hotels", "Flights", "Bookings", "Login"];
  return (
    <>
      <header className={Style.header}>
        <div className={Style.headerContainer}>
          <img src={Logo}></img>
          <div className={Style.headerMenuContainer}>
            {menuArray.map((el, index) => (
              <p key={index}>{el}</p>
            ))}
            <button>Sign up</button>
            <p>
              EN
              <img className={Style.arrowRight} src={Arrow}></img>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
