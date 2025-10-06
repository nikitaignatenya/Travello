import Style from "../StylePage/ItemOffers.module.css";

function ItemOffers({ el }) {
  return (
    <div className={Style.element}>
      <img src={el.src}></img>
      <h4>{el.title}</h4>
      <p className={Style.descInfo}>{el.info}</p>
    </div>
  );
}

export default ItemOffers;
