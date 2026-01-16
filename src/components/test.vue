<template>
  <div class="flex flex-col w-[50%] m-auto border py-4 px-6 mt-5">
    <label class="text-xl font-bold text-pink-400 text-center">INPUT</label>

    <label>Id</label>
    <input class="border px-2" v-model="txtId" />

    <label>Name</label>
    <input class="border px-2" v-model="txtName" />

    <label>Grade</label>
    <input class="border px-2" v-model="txtGrade" />

    <button class="border mt-2 bg-slate-400" @click="addItem">Click</button>
  </div>
</template> 

<script setup>
import { onMounted, ref } from "vue";
import { itemList } from "./store";

const txtId = ref(1);
const txtName = ref("");
const txtGrade = ref("");

const addItem = () => {
  itemList.value.push({
    id: txtId.value,
    name: txtName.value,
    grade: txtGrade.value,
  });
  getAutoId();
  txtName.value = "";
  txtGrade.value = "";
};
const getAutoId = () => {
  txtId.value = itemList.value.length + 1;
};
onMounted(() => {
  getAutoId();
});
</script>
