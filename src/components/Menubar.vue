<template>
  <header class="w-full bg-slate-400 h-[45px] text-white sticky top-0 z-50">
    <div class="flex relative">
      <span
        class="w-[30%] lg:w-[10%] md:w-[20%] h-[40px] flex justify-center items-center lg:text-2xl text-sm transition md:text-xl "
        >D shop</span
      >
      <ul class="w-[60%] flex lg:justify-around items-center">
        <li class="flex p-2 hover:text-gray-700 lg:hidden cursor-pointer">
          <a @click="showDrawer">
            <i class="fa-solid fa-bars fa-xl"></i>
          </a>
        </li>
        <li
          v-for="(item, i) in itemList"
          :key="i"
          class="hidden lg:flex selection:font-mono text-xl relative after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400"
        >
          <a href="">{{ item.name }}</a>
        </li>
      </ul>
      <ul class="flex w-[30%] justify-end items-center lg:text-xl text-x gap-8">
        <li class="hover:text-gray-500">
          <i class="fa-solid fa-magnifying-glass"></i>
        </li>
        <li class="hover:text-pink-500 hidden lg:flex">
          <i class="fa-solid fa-heart"></i>
        </li>
        <li class="hover:text-gray-500 cursor-pointer" 
        @click="toggleLoginModal">
          <i class="fa-regular fa-user"></i>
        </li>
        <li class="hover:text-blue-500">
          <i class="fa-solid fa-bell mr-5"></i>
        </li>
      </ul>
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";
import { isShow, itemList } from "./store";
import { isDrawer } from "./store";
const showDrawer = () => {
  isDrawer.value = !isDrawer.value;
};
import { useRouter } from 'vue-router';
const router = useRouter();
const loGin = () => {
router.push({ name:"login" }); 
};


</script>
<style setup>
  span{
      font-family: "Sekuya", system-ui;
  }
</style>
