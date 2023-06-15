<template>
  <div>
    {{ props.items }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  items: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>
<style scoped></style>
