import Style from "../StylePage/NextTrip.module.scss";
import Woman_Image from "../files/Woman_Image.jpg";
import Icon_1 from "../files/Icon_1.svg";
import Icon_2 from "../files/Icon_2.svg";
import Icon_3 from "../files/Icon_3.svg";
import building from "../files/building.svg";
import Town from "../files/Town.png";

function NextTripRight() {
  const imageArray = [Icon_1, Icon_2, Icon_3];
  return (
    <div className={Style.rightContainer}>
      <div className={Style.mainRightContainer}>
        <img src={Woman_Image} className={Style.womanImage}></img>
        <h5>Trip To Greece</h5>
        <div className={Style.dataContainer}>
          <p>14-29 June</p>
          <p>by Robbin joseph</p>
        </div>
        <div className={Style.iconContainer}>
          {imageArray.map((el) => (
            <img src={el}></img>
          ))}
        </div>
        <div className={Style.peopleContainer}>
          <img src={building}></img>
          <p>24 people going</p>
        </div>
      </div>
      <div className={Style.addRightContainer}>
        <img src={Town}></img>
        <div className={Style.ongoingContainer}>
          <p className={Style.ongoinText}>Ongoing</p>
          <h5 className={Style.tripText}>Trip to rome</h5>
          <p className={Style.procent}>
            40%
            <span>completed</span>
          </p>
          <div className={Style.lineFull}>
            <div className={Style.line}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextTripRight;
