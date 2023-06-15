<template>
  <div :style="{ marginLeft: '20px' }">
    <el-button
      type="warning"
      @click="dialogVisible = true"
      :style="{ fontSize: '18px', padding: '20px' }"
      >Clear dishes</el-button
    >
    <el-dialog v-model="dialogVisible" width="30%" title="Clear dishes">
      <div :style="{ display: 'flex', justifyContent: 'space-between' }">
        <p>Are you sure you want to clear the dishes?</p>
        <el-button
          type="primary"
          :style="{ marginTop: '50px' }"
          @click="clearDishes()"
        >
          Confirm
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useStoreDishes } from "../stores/dishes";

// Clearing the dishes
const dialogVisible = ref(false);
const dishesStore = useStoreDishes();

const clearDishes = () => {
  dialogVisible.value = false;
  dishesStore.clearItems();
};
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
