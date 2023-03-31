<template>
  <header class="flex justify-end p-4 shadow">
    <div class="w-[224px] relative">
      <div class="relative w-8 h-8 bg-[#F3F4F6] rounded-[10px] cursor-pointer ml-auto"
      @click="isOpenDropdown = !isOpenDropdown">
        <svg fill="#9CA3AF" width="20" height="20" class="center">
          <use xlink:href="#dots"/>
        </svg>
      </div>
      <transition name="home">
        <div class="absolute w-full rounded-md bg-white z-10 shadow__dropdown mt-2 py-2 flex flex-col text-[#374151] text-sm"
        v-if="isOpenDropdown">
          <p class="dropdown__item">
            Профиль
          </p>
          <p class="dropdown__item"
          @click="logout">
            Выход
          </p>
        </div>
      </transition>
    </div>
  </header>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isOpenDropdown: false /* Переменная отвечающая за показ скрытие выпадающего списка */
    }
  },
  methods: {
    ...mapMutations({
      change_state: 'CHANGE_STATE'
    }),
    logout() {
      this.isOpenDropdown = false
      let payload = {
        key: 'logout',
        body: {
          isActive: true
        }
      }
      this.change_state(payload)
    }
  }
}
</script>
<style scoped>
.shadow {
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
}
.shadow__dropdown {
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.05);
}
.dropdown__item {
  cursor: pointer;
  padding: 4px 16px;
}
.dropdown__item:hover {
  background: #e5e7eb;
}
</style>
