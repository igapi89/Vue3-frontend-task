<template>
  <div>
    <el-button
      type="primary"
      @click="dialogFormVisible = true"
      :style="{ fontSize: '18px', padding: '20px' }"
    >
      Create new dish
    </el-button>
    <el-dialog v-model="dialogFormVisible" title="Add new dish">
      <DishForm @handleFormDialog="dialogFormVisible = false" />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import DishForm from "./DishForm.vue";
import { ref } from "vue";

const dialogFormVisible = ref(false);
</script>

<style scoped>
.el-button--text {
  margin-right: 15px;
}
</style>
