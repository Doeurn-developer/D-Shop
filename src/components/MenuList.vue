<script setup lang="ts">
import { itemList } from './store';

</script>

<template>
  <div class="flex justify-center mt-4 font-serif text-3xl">
    <h1 class=" relative inline-block text-2xl font-bold">
      Wellcome to D shop
      <span
        class="absolute left-1/2 -bottom-1 w-20 h-[3px] bg-red-500 -translate-x-1/2"
      ></span>
    </h1> 
  </div>
  <div class=" text-gray-700 w-full flex justify-center items-center mt-2 ">
    <div class=" menu md:w-[50%] lg:w-[35%] w-[70%] shadow-md rounded-sm bg-slate-200 ">
        <ul class=" flex justify-center md:gap-4 gap-5 lg:gap-16 items-center ">
          <li v-for="(item,i) in itemList" :key="i"
          class="py-2  relative cursor-pointer after:absolute after:left-0 after:bottom-2
             after:h-[2px] after:w-full after:origin-left
             after:scale-x-0 after:bg-pink-500
             after:transition-transform after:duration-300
             hover:after:scale-x-100 hover:text-white">{{ item.name }}
          </li>
        </ul>
    </div>
  </div>
</template>
<style setup>
    h1{
          font-family: "Rubik Scribble", system-ui;
    }
</style>
