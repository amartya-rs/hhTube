import { v4 as uuid } from "uuid";
import * as categoryImages from "../../assets/index";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
   {
      _id: uuid(),
      categoryName: "Rap music",
      imgUrl: categoryImages.eminem,
      description: "",
   },
   {
      _id: uuid(),
      categoryName: "Beatboxing",
      imgUrl: categoryImages.beatboxing,
      description: "",
   },
   {
      _id: uuid(),
      categoryName: "B-boying",
      imgUrl: categoryImages.bboying,
      description: "",
   },
];
