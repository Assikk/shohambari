<template>
  <div class="flex flex-col gap-1">
    <label class="text-sm font-medium text-[#374151]" :for="id">{{label}}</label>
    <input class="shadow border border-[#D1D5DB] rounded-md outline-0 px-3 py-2 text-[#111827]" type="password" :id="id"
    :value="value"
    @input="$emit('input', $event.target.value)">
  </div>
</template>
<script>
export default {
  name: 'InputComponent',
  props: ['label', 'id', 'value']
}
</script>
<style scoped>
.shadow {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
}
</style>
