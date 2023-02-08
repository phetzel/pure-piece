import { EndorsementType } from "../types/aboutTypes";
import dgSmall from "../assets/images/dg-small.png";
import pitbull from "../assets/images/pitbull.jpg";

export const ENDORSEMENTS: EndorsementType[] = [
  {
    petName: "Lassie",
    petImage: dgSmall,
    userName: "Remy",
    userImage: "https://mui.com/static/images/avatar/1.jpg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at maximus urna. Curabitur dignissim arcu eget sagittis finibus. Vivamus sit amet lectus elementum, porttitor ligula fringilla, feugiat urna. Pellentesque non risus velit. Duis vel rhoncus mi, et sollicitudin dolor. Proin vel leo et urna iaculis maximus. Integer finibus neque in vehicula dapibus.",
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
