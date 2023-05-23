<template>
  <div class="w-full border border-[#D1D5DB] rounded-md py-2 px-3 flex items-center gap-4"
  @keypress.enter="$emit('search', $event.target.value)">
    <svg fill="#9CA3AF" width="20" height="20" class="cursor-pointer"
    @click="$emit('search', $event.target.value)">
      <use xlink:href="#search"/>
    </svg>
    <input type="text" class="outline-0 w-full text-sm"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)">
  </div>
</template>
<script>
export default {
  name: 'SearchComponent',
  props: {
    placeholder: { /* Подсказка для поля */
      type: String,
      default: ''
    },
    value: {} /* Переменная для сохранения значения в переменную */
  }
}
</script>
