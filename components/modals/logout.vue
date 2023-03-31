<template>
  <div class="absolute top-0 left-0 w-full h-full bg-black/30">
    <div class="w-full h-full" @click="closeLogout">

    </div>
    <div class="center w-[512px] bg-white shadow rounded-lg p-6 flex gap-4">
      <div class="relative min-w-[40px] min-h-[40px] h-10 w-10 bg-[#FEE2E2] rounded-3xl">
        <svg fill="none" stroke="#DC2626" width="24" height="25" class="center">
          <use xlink:href="#warning"/>
        </svg>
      </div>
      <div>
        <h2 class="font-medium text-[18px] leading-6">
          Выход из аккаунта
        </h2>
        <p class="mt-2 mb-4 text-[#6B7280] text-sm h-[67px]">
          Вы уверены, что хотите выйти? <br> Все несохраненные изменения будут потеряны.
        </p>
        <div class="flex gap-3">
          <Button small warning
          @click="logout">
            Выход
          </Button>
          <Button small outlined @click="closeLogout">
            Отмена
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
import Button from '@/components/button.vue'
export default {
  name: 'LogoutComponent',
  components: {
    Button
  },
  methods: {
    ...mapMutations({
      change_state: 'CHANGE_STATE' /* Мутация меняющая state vuex */
    }),
    closeLogout() { /* Функция закрывающая модальное окно */
      let payload = {
        key: 'logout',
        body: {
          isActive: false
        }
      }
      this.change_state(payload)
    },
    logout() { /* Выход с профиля */
      this.closeLogout() /* Закрываем модальное окно */
      this.$router.push('/') /* Направляем на страницу авторизации */
    }
  }
}
</script>
<style scoped>
.shadow {
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
