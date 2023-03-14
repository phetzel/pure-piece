import { EndorsementType } from "../types/aboutTypes";
import endorsedog1 from "../assets/images/endorse-dog-1.png";
import endorsePerson1 from "../assets/images/endorse-person-1.png";
import endorsedog2 from "../assets/images/endorse-dog-2.jpg";
import endorsePerson2 from "../assets/images/endorse-person-2.jpg";

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
    petImage: endorsedog2,
    userName: "Robin",
    userImage: endorsePerson2,
    review:
      "Pure Pieces are like caring an extremely high reward treat like bacon or sardines, but not as messy! My dogs recall is 110% when he knows I have the treats. They don’t crumble, but can be broken up by hand for smaller chompers. They’re extremely nutritious. My dogs coat is healthier feeling and looking when he’s getting the Pure Pieces. And I love supporting small businesses. No brainer, they’re best treats ever!",
  },
];
