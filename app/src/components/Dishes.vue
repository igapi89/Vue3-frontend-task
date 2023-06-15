<template>
  <div>
    <el-table :data="items" border style="width: 100%">
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="description" label="Address" />
      <el-table-column prop="price" label="Price" />
      <el-table-column prop="category" label="Category" />
      <el-table-column prop="availability" label="Serving for" />
      <el-table-column prop="deactivate" label="Dish deactivated" />
      <el-table-column prop="waitTime" label="Waiting time" />
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialogFormVisible" title="Update dish data">
      <DishForm :items="form" @handleFormDialog="dialogFormVisible = false" />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import DishForm from "./DishForm.vue";
import { useStoreDishes } from "../stores/dishes";
import { ref, reactive } from "vue";

let form = reactive({});

const dishesStore = useStoreDishes();
const props = defineProps({
  items: {
    type: Array,
    default() {
      return [];
    },
  },
});

interface Item {
  name: string;
  description: string;
  price: number;
  category: string;
  availability: string;
  deactivate: boolean;
  waitTime: number;
}

// Edit dish
const dialogFormVisible = ref(false);
const handleEdit = (index: number, row: Item) => {
  console.log("edit dish");
  dialogFormVisible.value = true;
};

// Delete dish
const handleDelete = async (index: number, row: Item) => {
  console.log("delete dish");
};
</script>
<style scoped></style>
