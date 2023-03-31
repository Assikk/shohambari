<template>
  <div class="flex flex-col gap-1 h-[90px]">
    <div class="flex items-center gap-1">
      <label class="text-sm font-medium text-[#374151]" :for="id">{{label}}</label>
      <svg v-if="error" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3996 7.99961C14.3996 11.5342 11.5342 14.3996 7.99961 14.3996C4.46499 14.3996 1.59961 11.5342 1.59961 7.99961C1.59961 4.46499 4.46499 1.59961 7.99961 1.59961C11.5342 1.59961 14.3996 4.46499 14.3996 7.99961ZM8.79961 11.1996C8.79961 11.6414 8.44144 11.9996 7.99961 11.9996C7.55778 11.9996 7.19961 11.6414 7.19961 11.1996C7.19961 10.7578 7.55778 10.3996 7.99961 10.3996C8.44144 10.3996 8.79961 10.7578 8.79961 11.1996ZM7.99961 3.99961C7.55778 3.99961 7.19961 4.35778 7.19961 4.79961V7.99961C7.19961 8.44144 7.55778 8.79961 7.99961 8.79961C8.44144 8.79961 8.79961 8.44144 8.79961 7.99961V4.79961C8.79961 4.35778 8.44144 3.99961 7.99961 3.99961Z" fill="#EF4444"/>
      </svg>
    </div>
    <input class="shadow border border-[#D1D5DB] rounded-md outline-0 px-3 py-2 text-[#111827]"
    :class="[
    {'error': error}
    ]"
    :placeholder="placeholder"
    :type="type"
    :id="id"
    :value="value"
    @input="$emit('input', $event.target.value)">
    <div class="text-sm text-[#EF4444]" v-if="error">
      <slot name="error"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputComponent',
  props: {
    label: {type: String}, /* Заголовок (название) инпута */
    id: {}, /* Идентефикатор инпута */
    value: {}, /* Переменная для сохранения значения в переменную */
    error: {type: Boolean, default: false}, /* Boolean тип, хранит в себе состояние инпута */
    type: {type: String, default: 'text'}, /* Тип инпута */
    placeholder: {type: String, default: ''} /* Placeholder для инпута */
    }
}
</script>
<style scoped>
.shadow {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
}
.error {
  border: 1px solid #EF4444;
}
</style>
