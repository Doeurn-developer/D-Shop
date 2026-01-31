import { ref } from "vue";

// drawer states
export const isDrawer = ref(false);
export const isShow = ref(true);

// banner images
import banner from "@/assets/img/banner.png";
import banner1 from "@/assets/img/banner1.jpg";
import banner2 from "@/assets/img/banner2.jpg";
import banner3 from "@/assets/img/banner3-5.jpg"; // rename file: banner3.5.jpg → banner3-5.jpg

export const itemList = ref([
  { id: 1, name: "Women", img: banner, isShow: false },
  { id: 2, name: "Men", img: banner1, isShow: false },
  { id: 3, name: "Baby", img: banner2, isShow: false },
  { id: 4, name: "Contact Me", img: banner3, isShow: false },
]);

// Gucci products
import gucci1 from "@/assets/img/gocci-lucci.jpg";
import gucci2 from "@/assets/img/Polo-gocii.jpg";
import gucci3 from "@/assets/img/Gocci-black.jpg";
import gucci4 from "@/assets/img/Gocci-green.jpg";
import gucci5 from "@/assets/img/Gocci-new.jpg";
import gucci6 from "@/assets/img/Gocci-blue-mode.jpg";
import gucci7 from "@/assets/img/Gocci-red.jpg";
import gucci8 from "@/assets/img/Gocci-sky.jpg";
import gucci9 from "@/assets/img/Gocci-duckred.jpg";

// LV products (check capitalization!)
import LV1 from "@/assets/img/Lv1.jpg";
import LV2 from "@/assets/img/Lv2.jpg";
import LV3 from "@/assets/img/Lv3.jpg";
import LV4 from "@/assets/img/Lv4.jpg";
import LV5 from "@/assets/img/Lv5.jpg";
import LV6 from "@/assets/img/Lv6.jpg";
import LV7 from "@/assets/img/Lv7.jpg";

export const imgList = ref([
  { id: 1, name: "Gucci Luccii", img: gucci1, pos: 50 },
  { id: 2, name: "Polo Gocci", img: gucci2, pos: 21 },
  { id: 3, name: "Gocci Black", img: gucci3, pos: 65 },
  { id: 4, name: "Gocii Green", img: gucci4, pos: 57 },
  { id: 5, name: "Gocii Blue", img: gucci5, pos: 65 },
  { id: 6, name: "Gocii Blue Mode", img: gucci6, pos: 12 },
  { id: 7, name: "Gocii Red", img: gucci7, pos: 87 },
  { id: 8, name: "Gocii Sky", img: gucci8, pos: 80 },
  { id: 9, name: "Louis Vuitton 1", img: LV1, pos: 20 },
  { id: 10, name: "Louis Vuitton 2", img: LV2, pos: 43 },
  { id: 11, name: "Louis Vuitton 3", img: LV3, pos: 90 },
  { id: 12, name: "Louis Vuitton 4", img: LV4, pos: 58 },
  { id: 13, name: "Louis Vuitton 5", img: LV5, pos: 40 },
  { id: 14, name: "Louis Vuitton 6", img: LV6, pos: 60 },
  { id: 15, name: "Louis Vuitton 7", img: LV7, pos: 10 },
  { id: 16, name: "Gocci Duck Red", img: gucci9, pos: 70 },
]);
