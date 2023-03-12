import { EndorsementType } from "../types/aboutTypes";
import dgSmall from "../assets/images/dg-small.png";
import pitbull from "../assets/images/pitbull.jpg";
import endorsedog1 from "../assets/images/endorse-dog-1.png";
import endorsePerson1 from "../assets/images/endorse-person-1.png";

export const ABOUT: string =
  "Pure piece treats sole objective is to provide a human grade organic product for our animals to enjoy.  I noticed that none of the products in stores were organic and most comparable products weren’t produced on the United States.  I knew I could make high quality local, organic and affordable treats.";

export const ENDORSEMENTS: EndorsementType[] = [
  {
    petName: "Lassie",
    petImage: endorsedog1,
    userName: "Danielle",
    userImage: endorsePerson1,
    review:
      "Pure piece treats are perfect for my pup’s sensitive stomach. Not only are they simple and healthy but they taste amazing and are hands down her favorite treat!",
  },
  {
    petName: "Spot",
    petImage: pitbull,
    userName: "Cindy",
    userImage: "https://mui.com/static/images/avatar/3.jpg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed neque in dolor placerat consequat nec eget dui. Praesent ut interdum orci. Vivamus fermentum nibh eu fringilla pharetra. Nam in iaculis lorem, vitae mollis enim. Maecenas elementum egestas viverra. Nullam commodo, augue in gravida ultrices, mauris est feugiat risus, eu mattis orci dolor eu justo.",
  },
];
