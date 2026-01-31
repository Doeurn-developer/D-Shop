<script setup>
import { imgList } from "./store";
</script>
<template>
  <nav class="w-full flex justify-center">
    <div class="w-[90%] mt-4 lg:flex lg:gap-2 lg:flex-wrap">
      <!-- box -->
      <div
        class="lg:w-[24.1%] mt-3 w-full bg-transparent shadow relative"
        v-for="(img, i) in imgList"
        :key="i"
      >
        <img
          :src="img.img"
          alt=""
          class="w-full h-[250px] rounded-md transition duration-500 hover:scale-[0.9]"
        />
        <div
          class="Position absolute top-2 left-2 w-[50px] text-white rounded-md bg-red-500 flex justify-center items-center text-xl"
        >
          {{ img.pos }}%
        </div>
      </div>
    </div>
  </nav>
</template>
