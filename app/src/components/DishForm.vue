<template>
  <el-form :model="form" ref="formRef" :rules="rules">
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
      <el-button type="primary" @click="submitForm(formRef)">
        Confirm
      </el-button>
      <el-button @click="resetForm(formRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, toRaw } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useStoreDishes } from "../stores/dishes";

const props = defineProps({
  items: {
    type: Object,
    default() {
      return {};
    },
  },
});

const formLabelWidth = "140px";
const formRef = ref<FormInstance>();

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

// Custom validation rules for number type inputs
const validatePrice = (rule: any, value: any, callback: any) => {
  if (value == null) {
    return callback(new Error("Please input dish price"));
  } else {
    if (value < 1) {
      callback(new Error("Waiting time value cannot be below 1"));
    } else {
      callback();
    }
  }
};

const validateWaitTime = (rule: any, value: any, callback: any) => {
  if (value == null) {
    return callback(new Error("Please input dish waiting time"));
  } else {
    if (value < 5) {
      callback(new Error("Waiting time value cannot be below 5"));
    } else {
      callback();
    }
  }
};

// Validation rules
const rules = reactive<FormRules>({
  name: [
    { required: true, message: "Please input dish name", trigger: "change" },
  ],
  description: [
    {
      required: true,
      message: "Please input dish description",
      trigger: "change",
    },
  ],
  price: [{ validator: validatePrice, required: true, trigger: "change" }],
  category: [
    {
      required: true,
      message: "Please select dish category",
      trigger: "change",
    },
  ],
  availability: [
    {
      required: true,
      message: "Please select dish availability",
      trigger: "change",
    },
  ],
  waitTime: [
    { validator: validateWaitTime, required: true, trigger: "change" },
  ],
});

// Defining emit event for manipulating form dialog visibility
const emit = defineEmits(["handleFormDialog"]);

// Getting the dishes from store
const dishesStore = useStoreDishes();

// Form submit function
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      dishesStore.insertItem(toRaw(form));

      emit("handleFormDialog", false);

      resetForm(formEl);
    } else {
      console.log("error submit!", fields);
    }
  });

  dishesStore.getItems();
};

// Resetting form fields values
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
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
