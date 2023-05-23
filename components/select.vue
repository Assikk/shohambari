<template>
  <div class="flex flex-col gap-1 h-[90px] text-sm">
    <label class=" font-medium text-[#374151]" :for="id">{{label}}</label>
    <select class="shadow border border-[#D1D5DB] rounded-md outline-0 px-3 py-2 text-[#111827]" :name="id" :id="id"
    :class="[
    {'error': error}]"
    :value="value"
    @input="$emit('input', $event.target.value)">
    <option :selected="item[valueList] == active" v-for="(item, index) in list" :key="index" :value="item[valueList]">{{item[textList]}}</option>
    </select>
    <div class="text-[#EF4444]" v-if="error">
      <slot name="error"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SelectComponent',
  props: {
    id: {}, /* Идентефикатор селекта */
    label: {type: String}, /* Заголовок (название) селекта */
    error: {type: Boolean, default: false}, /* Boolean тип, хранит в себе состояние инпута */
    list: {type: Array}, /* Список значений */
    value: {}, /* Переменная для сохранения значения в переменную */
    valueList: {}, /* Название ключа для атрибута value */
    textList: {}, /* Название ключа для отображения значений списка */
    active: {}, /* Активное значение листа */
  }
}
</script>
<style scoped>
select {
  appearance: none;
  background: url('/icons/arrowDown.svg') no-repeat right;
}
.shadow {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
}
.error {
  border: 1px solid #EF4444;
}
</style>
