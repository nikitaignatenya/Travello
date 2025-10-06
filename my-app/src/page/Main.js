import Header from "../Components/Header";
import ItemOffers from "../Components/ItemOffers";
import TopDestinations from "../Components/TopDestinations.js";
import NextTripLeft from "../Components/NextTripLeft.js";
import NextTripRight from "../Components/NextTripRight.js";
import Style from "../StylePage/Main.module.scss";
import ItemOffers_Props from "../Components/ItemOffers_Props";
import TopDestinations_Props from "../Components/TopDestinations_Props.js";
import NextTripProps from "../Components/NextTrip_Props.js";

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
        <section className={Style.fourthSection}>
          <div className={Style.nextTripContainerLeft}>
            <p className={Style.easyText}>Easy and Fast</p>
            <h1 className={Style.titleText}>Book your next trip in 3 easy steps</h1>
            <div className={Style.cartsContainer}>
              {NextTripProps().map((el, index) => (
                <NextTripLeft key={index} el={el} />
              ))}
            </div>
          </div>
          <div className={Style.nextTripContainerRight}>
            <NextTripRight />
          </div>
        </section>
      </main>

      <div></div>
    </>
  );
}

export default Main;
