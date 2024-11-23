import { ImageSourcePropType } from "react-native";

export interface RestaurantListProps {
  name: string;
  location: number;
  imgSource: ImageSourcePropType;
}

export const RestaurantList: RestaurantListProps[] = [
  {
    name: "Vegan Resto",
    location: 1,
    imgSource: require("../../../assets/images/resturant-1.png"),
  },
  {
    name: "Healthy Food",
    location: 5,
    imgSource: require("../../../assets/images/resturant-2.png"),
  },
  {
    name: "Good Food",
    location: 10,
    imgSource: require("../../../assets/images/resturant-3.png"),
  },
  {
    name: "Smart Resto",
    location: 2,
    imgSource: require("../../../assets/images/resturant-4.png"),
  },
];

export interface MenuListProps {
  name: string;
  amount: number;
  imgSource: ImageSourcePropType;
  foodCategory: FoodCategory;
}

export enum TypeCategory {
  Restaurant = "Restaurant",
  Menu = "Menu",
}

export enum FoodCategory {
  mainCourse = "Main Course",
  Appetizer = "Appetizer",
  Dessert = "Dessert",
}

export const MenuList: MenuListProps[] = [
  {
    name: "Herbal Pancake",
    amount: 10,
    imgSource: require("../../../assets/images/menu-1.png"),
    foodCategory: FoodCategory.mainCourse,
  },
  {
    name: "Healthy Food",
    amount: 50,
    imgSource: require("../../../assets/images/menu-2.png"),
    foodCategory: FoodCategory.Dessert,
  },
  {
    name: "Good Food",
    amount: 10,
    imgSource: require("../../../assets/images/menu-3.png"),
    foodCategory: FoodCategory.mainCourse,
  },
  {
    name: "Smart Resto",
    amount: 20,
    imgSource: require("../../../assets/images/resturant-4.png"),
    foodCategory: FoodCategory.Dessert,
  },
];
