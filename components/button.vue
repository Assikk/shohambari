<template>
  <button class="flex items-center justify-center gap-2 text-sm w-fit rounded-md py-2.5 px-4 shadow bg-[#4F46E5] text-white font-medium"
  :disabled="disabled"
  :class="[
  {'full' : isFull},
  {'outlined' : outlined},
  {'disabled' : disabled},
  {'min-w-[140px]': !small},
  {'warning' : warning}
  ]"
  @click="$emit('click')">
    <template>
      <slot name="prev-icon"/>
    </template>
    <slot/>
    <template>
      <slot name="next-icon"/>
    </template>
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    isFull: {  /* Если задан такой props то кнопка принимает всю ширину */
      type: Boolean,
      default: false
    },
    outlined: { /* Если задан такой props то кнопка принимает прозрачный вид */
      type: Boolean,
      default: false
    },
    disabled: { /* Если задан такой props то кнопка принимает неактивное состояние */
      type: Boolean,
      default: false
    },
    small: { /* Если задан такой props то кнопка принимает маленький вид */
      type: Boolean,
      default: false
    },
    warning: { /* Если задан такой props то кнопка принимает предупреждающий (красный) вид */
      type: Boolean,
      default: false
    }
  },
}
</script>
<style scoped>
.shadow {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
}
.full {
  width: 100%;
}
.outlined {
  border: 1px solid #D1D5DB;
  background: white;
  color: #374151;
}
.disabled {
  background: #C7D2FE;
  color: #4338CA;
}
.warning {
  background: #DC2626;
}
</style>
