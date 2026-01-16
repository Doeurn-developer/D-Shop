<template>
  <div class="lg:w-[20%] w-[22%] h-full fixed top-0 -left-[20%] bg-transparent lg:text-xl mt-11 transition-all duration-300"
  :class="{'left-0':isDrawer}">
    <ul>
      <li v-for="(item,j) in itemList" :key="j" class=" font-thin text-white px-3 py-2 hover:text-black hover:font-bold lg:hidden ">
        <a href="">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>
<script setup>
    import { itemList,isDrawer } from './store';
</script>