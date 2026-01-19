<template>
  <Menubar />
  <Banner />
  <Drawer />
  <MenuList />
  <NavBar />
  <RouterView />
</template>
<script setup>
import Banner from "./components/Banner.vue";
import Drawer from "./components/Drawer.vue";
import Menubar from "./components/Menubar.vue";
import MenuList from "./components/MenuList.vue";
import NavBar from "./components/NavBar.vue";
import { RouterView } from "vue-router";
</script>
