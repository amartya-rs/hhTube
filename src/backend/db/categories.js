import { v4 as uuid } from "uuid";
import * as categoryImages from "../../assets/index";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
   {
      _id: uuid(),
      categoryName: "All",
      featured: false,
   },
   {
      _id: uuid(),
      categoryName: "Rap music",
      featured: true,
      imgUrl: categoryImages.eminem,
      description: "",
   },
   {
      _id: uuid(),
      categoryName: "Beatboxing",
      featured: true,
      imgUrl: categoryImages.beatboxing,
      description: "",
   },
   {
      _id: uuid(),
      categoryName: "B boying",
      featured: true,
      imgUrl: categoryImages.bboying,
      description: "",
   },
   {
      _id: uuid(),
      categoryName: "Desi hiphop",
      featured: false,
   },
   {
      _id: uuid(),
      categoryName: "Old school",
      featured: false,
   },
];
