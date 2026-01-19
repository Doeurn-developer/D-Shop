<template>
  <nav
    class="w-full bg-black flex gap-1"
    @mouseover="stopAutoslide"
    @mouseleave="runAutoSlide"
  >
    <!-- banner -->
    <div
      v-for="(item, i) in itemList"
      :key="i"
      v-show="i == slideInd"
      class="w-full"
    >
      <img :src="item.img" alt="" class="h-64 lg:h-[370px] w-full relative" />
    </div>
    <!-- bar back or next -->
    <div
      class="absolute lg:top-[30%] top-[23%] left-[20px] lg:text-2xl text-xl hover:text-red-500"
    >
      <i class="fa-solid fa-angle-left" @click="backSilde"></i>
    </div>
    <div
      class="absolute lg:top-[30%] top-[23%] right-[20px] lg:text-2xl text-xl hover:text-red-500"
    >
      <i class="fa-solid fa-angle-right" @click="nextSlide"></i>
    </div>
  </nav>
</template>
<script setup>
import { itemList } from "./store";
import { ref, stop } from "vue";
const slideInd = ref(0);
const nextSlide = () => {
  slideInd.value++;
  if (slideInd.value >= itemList.value.length) {
    slideInd.value = 0;
  }
};
const backSilde = () => {
  slideInd.value--;
  if (slideInd.value < 0) {
    slideInd.value = itemList.value.length - 1;
  }
};
var myAutoslide = setInterval(nextSlide, 1000);
const stopAutoslide = () => {
  clearInterval(myAutoslide);
};
const runAutoSlide = () => {
  myAutoslide = setInterval(nextSlide, 1000);
};
</script>
