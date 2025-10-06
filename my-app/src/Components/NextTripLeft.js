import Style from "../StylePage/NextTrip.module.scss";

function NextTripLeft({ el }) {
  return (
    <div className={Style.Cart}>
      <img src={el.src} style={{ backgroundColor: el.color }}></img>
      <div className={Style.infoCartcontainer}>
        <h4>{el.title}</h4>
        <p>{el.description}</p>
      </div>
    </div>
  );
}

export default NextTripLeft;
