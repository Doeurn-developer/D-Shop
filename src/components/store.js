import { ref } from "vue";
export const isDrawer = ref(false);
export const isShow = ref(true);
import banner from "@/assets/img/banner.png"
import banner1 from "@/assets/img/banner1.jpg"
import banner2 from "@/assets/img/banner2.jpg"
import banner3 from "@/assets/img/banner3.5.jpg"
export const itemList = ref([
  {
    id: 1,
    name: "Women",
    img: banner,
    isShow:false
  },
  {
    id: 2,
    name: "Men ",
     img: banner1,
    isShow:false
  },
  {
    id: 3,
    name: "Baby",
    img: banner2,
    isShow:false
  },
  {
    id: 4,
    name: "Contact Me",
    img: banner3,
    isShow:false,
  },
]);
import gucci1 from "@/assets/img/gocci-lucci.jpg"
import gucci2 from "@/assets/img/Polo-gocii.jpg"
import gucci3 from "@/assets/img/Gocci-black.jpg"
import gucci4 from "@/assets/img/Gocci-green.jpg"

export const imgList = ref([
  {
    id: 1,
    name: "Gucci Luccii",
    img: gucci1
  },
  {
    id: 2,
    name: "Polo Gocci",
    img: gucci2
  },
  {
    id: 3,
    name: "Gocci Black",
    img: gucci3
  },
  {
    id: 4,
    name: "Gocii Green",
    img: gucci4
  }
])
