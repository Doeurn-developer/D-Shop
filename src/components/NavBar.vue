<script setup>
import { imgList } from "./store";
</script>
<template>
  <nav class="w-full flex justify-center">
    <div class="w-[90%] mt-4 lg:flex lg:gap-2 lg:flex-wrap">
      <!-- box -->
      <div
        class="lg:w-[24.1%] mt-3 w-full bg-black shadow"
        v-for="(img, i) in imgList"
        :key="i"
      >
        <img :src="img.img" alt="" class="w-[100%] h-[250px] rounded-md" />
      </div>
    </div>
  </nav>
</template>
