import Style from "../StylePage/TopDestinations.module.scss";
function TopDestinations({ el }) {
  return (
    <div className={Style.cartElement}>
      <img className={Style.cityImage} src={el.src}></img>
      <div className={Style.cartContainer}>
        <div className={Style.cityContainer}>
          <p className={Style.city}>{el.title}</p>
          <p className={Style.priceCity}>{el.price}</p>
        </div>
        <div className={Style.daysContainer}>
          <img className={Style.arrowGeo} src={el.arrowSrc}></img>
          <p className={Style.infoCity}>{el.info}</p>
        </div>
      </div>
    </div>
  );
}

export default TopDestinations;
