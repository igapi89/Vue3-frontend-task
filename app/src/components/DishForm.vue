<template>
  <el-form :model="form" ref="formRef">
    <el-form-item label="Name" :label-width="formLabelWidth" prop="name">
      <el-input v-model="form.name" autocomplete="off" />
    </el-form-item>
    <el-form-item
      label="Short description"
      :label-width="formLabelWidth"
      prop="description"
    >
      <el-input v-model="form.description" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Price" :label-width="formLabelWidth" prop="price">
      <el-input-number v-model="form.price" autocomplete="off" />
    </el-form-item>
    <el-form-item
      label="Dish category"
      :label-width="formLabelWidth"
      prop="category"
    >
      <el-select v-model="form.category" placeholder="Select dish category">
        <el-option label="Starter" value="Starter" />
        <el-option label="Main course" value="Main course" />
        <el-option label="Dessert" value="Dessert" />
        <el-option label="Beverage" value="Beverage" />
      </el-select>
    </el-form-item>
    <el-form-item
      label="Dish availability"
      :label-width="formLabelWidth"
      prop="availability"
    >
      <el-select
        v-model="form.availability"
        placeholder="Select dish availability"
      >
        <el-option label="Breakfast" value="Breakfast" />
        <el-option label="Dinner" value="Dinner" />
        <el-option label="Lunch" value="Lunch" />
        <el-option label="Weekdays" value="Weekdays" />
        <el-option label="Weekends" value="Weekends" />
      </el-select>
    </el-form-item>
    <el-form-item
      label="Deactivate dish"
      :label-width="formLabelWidth"
      :style="{ display: 'flex', alignItems: 'center' }"
    >
      <el-checkbox v-model="form.deactivate" size="large" />
    </el-form-item>
    <el-form-item
      label="Wait time"
      :label-width="formLabelWidth"
      prop="waitTime"
    >
      <el-input-number v-model="form.waitTime" autocomplete="off" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary"> Confirm </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const props = defineProps({
  items: {
    type: Object,
    default() {
      return {};
    },
  },
});

const formLabelWidth = "140px";

// Form data
let form = reactive(
  props.items
    ? props.items
    : {
        name: "",
        description: "",
        price: null,
        category: "",
        availability: "",
        deactivate: false,
        waitTime: null,
      }
);
</script>

<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
