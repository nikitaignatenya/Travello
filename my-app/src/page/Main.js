import Header from "../Components/Header";
import ItemOffers from "../Components/ItemOffers";
import TopDestinations from "../Components/TopDestinations.js";
import Style from "../StylePage/Main.module.css";
import ItemOffers_Props from "../Components/ItemOffers_Props";
import TopDestinations_Props from "../Components/TopDestinations_Props.js";

function Main() {
  return (
    <>
      <Header />
      <main className={Style.main}>
        <section className={Style.secondSection}>
          <p className={Style.SecondSectionCategory}>CATEGORY</p>
          <h1>We Offer Best Services</h1>
          <div className={Style.infoElements}>
            {ItemOffers_Props().map((el, index) => (
              <ItemOffers key={index} el={el} />
            ))}
          </div>
        </section>
        <section className={Style.thirdSection}>
          <p>Top Selling</p>
          <h1>Top Destinations</h1>
          <div className={Style.mainCartElements}>
            {TopDestinations_Props().map((el, index) => (
              <TopDestinations key={index} el={el} />
            ))}
          </div>
        </section>
      </main>

      <div></div>
    </>
  );
}

export default Main;
