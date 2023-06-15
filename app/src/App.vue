<template>
  <div id="app">
    <h1>Dishes App</h1>
    <Dishes :items="dishesStore.dishes" />
  </div>
</template>

<script setup>
import Dishes from "@/components/Dishes.vue";
import { onMounted } from "vue";
import { useStoreDishes } from "@/stores/dishes";

// Fetch dishes
const dishesStore = useStoreDishes();
onMounted(() => {
  dishesStore.getItems();
});
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
</style>
