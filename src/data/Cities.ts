import { Cities } from "../types";
//TODO IMAGENES
import arizonaImage from "../assets/Passport Image Generated Arizona US Left Side.webp";
import koreaImage from "../assets/Passport Image Generated Jeju Island Korea Left Side.webp";
import europeImage from "../assets/Passport Image Generated Malta Europe Left Side.webp";
import newzelandImage from "../assets/Passport Image Generated New Zeland Left Side.webp";
import parisImage from "../assets/Passport Image Generated Paris France Left Side.webp";
import mexicoImage from "../assets/Passport Image Generated Teotihuacan Mexico Left Side.webp";
import unitedstatesImage from "../assets/Passport Image Generated US Hawaii Left Side.webp";
import italyImage from "../assets/Passport Image Generated Venice Italy Left Side.webp";
//TODO STAMPS
import arizonaStamp from "../assets/US Arizona Stamp.webp";
import koreaStamp from "../assets/South Korea Stamp.webp";
import europeStamp from "../assets/Europe Malta Stamp.webp";
import newzelandStamp from "../assets/New Zeland Stamp.webp";
import parisStamp from "../assets/France Paris Stamp.webp";
import mexicoStamp from "../assets/Mexico Teotihuacan Stamp.webp";
import unitedstatesStamp from "../assets/US Hawaii Stamp.webp";
import italyStamp from "../assets/Italy Stamp.webp";

export const citiesVisited: Cities[] = [
  {
    id: 1,
    name: "Arizona",
    image: arizonaImage,
    stamp: arizonaStamp,
  },
  {
    id: 2,
    name: "Korea",
    image: koreaImage,
    stamp: koreaStamp,
  },
  {
    id: 3,
    name: "Europe",
    image: europeImage,
    stamp: europeStamp,
  },
  {
    id: 4,
    name: "New Zeland",
    image: newzelandImage,
    stamp: newzelandStamp,
  },
  {
    id: 5,
    name: "Paris",
    image: parisImage,
    stamp: parisStamp,
  },
  {
    id: 6,
    name: "Mexico",
    image: mexicoImage,
    stamp: mexicoStamp,
  },
  {
    id: 7,
    name: "United States",
    image: unitedstatesImage,
    stamp: unitedstatesStamp,
  },
  {
    id: 8,
    name: "Italy",
    image: italyImage,
    stamp: italyStamp,
  },
];
