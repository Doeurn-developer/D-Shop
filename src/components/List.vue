<script setup >
import { itemList } from './store';
import {ref} from'vue'
</script>

<template>
   <table class="mt-5 w-[70%] m-auto">
    <thead class=" bg-gray-300">
        <tr>
            <th class="border px-4 py-2">ID</th>
            <th class="border px-4 py-2">Name</th>
            <th class="border px-4 py-2">Grade</th>
        </tr>
    </thead >
    <tbody class=" bg-gray-300">
        <tr v-for="(item,i) in itemList" :key="i">
            <td class="border px-4 py-2">{{ item.id }}</td>
            <td class="border px-4 py-2">{{ item.name }}</td> 
            <td class="border px-4 py-2">{{ item.grade }}</td>
        </tr>
    </tbody>
   </table>
</template>