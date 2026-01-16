import { ref } from "vue";
export const isDrawer = ref(false);
export const isShow = ref(true);
export const itemList = ref([
  {
    id: 1,
    name: "Women",
    img: "src/assets/img/banner.png",
    isShow:false
  },
  {
    id: 2,
    name: "Men ",
    img: "src/assets/img/banner1.jpg",
    isShow:false
  },
  {
    id: 3,
    name: "Baby",
    img: "src/assets/img/banner2.jpg",
    isShow:false
  },
  {
    id: 4,
    name: "Contact Me",
    img: "src/assets/img/banner3.5.jpg",
    isShow:false,
  },
]);
export const imgList = ref([
  {
    id : 1,
    name : "Gucci Luccii",
    img : "/src/assets/img/gocci-lucci.jpg" 
  },
  {
    id : 2,
    name : "Polo Gocci",
    img : "/src/assets/img/Polo-gocii.jpg"
  },
  {
    id : 3,
    name : "Gocci Black",
    img : "/src/assets/img/Gocci-black.jpg"
  },
  {
    id : 4 ,
    name : "Gocii Green",
    img : "/src/assets/img/Gocci-green.jpg"
  }
])
