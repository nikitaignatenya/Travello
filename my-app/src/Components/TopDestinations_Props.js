import Rome_Image1 from "../files/Rome_Image.png";
import London_Image from "../files/London_Image.jpg";
import Europe_Image from "../files/Europe_Image.png";
import ArrowGeo from "../files/ArrowGeo.svg";

function TopDestinations_Props() {
  return [
    {
      src: Rome_Image1,
      title: "Rome, Italty",
      price: "$5,42k",
      arrowSrc: ArrowGeo,
      info: "10 Days Trip",
    },
    {
      src: London_Image,
      title: "London, UK",
      price: "$4.2k",
      arrowSrc: ArrowGeo,
      info: "12 Days Trip",
    },
    {
      src: Europe_Image,
      title: "Full Europe",
      price: "$15k",
      arrowSrc: ArrowGeo,
      info: "28 Days Trip",
    },
  ];
}

export default TopDestinations_Props;
