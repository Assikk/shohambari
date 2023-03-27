<template>
  <div class="flex min-h-screen items-center">
    <div class="max-w-[448px] mx-auto">
      <img width="448" height="80" src="blue-logo.svg" alt="Logo">
      <form @submit.prevent="test" class="flex flex-col gap-6 mt-8 border border-[#D1D5DB] rounded-lg py-8 px-10">
        <h1 class="text-center text-2xl font-bold">
          Авторизация
        </h1>
        <Input
        label="Логин"
        id="login"
        v-model="form.login"/>
        <Password
        label="Пароль"
        id="password"
        v-model="form.password"/>
        <Button
        isFull
        :disabled="isDisabledButton">
          Войти
        </Button>
      </form>
    </div>
  </div>
</template>

<script>
import Input from '@/components/inputs/default'
import Password from '@/components/inputs/password'
import Button from '@/components/buttton.vue'
export default {
  name: 'IndexPage',
  layout: 'login',
  components: {
    Input,
    Password,
    Button
  },
  data() {
    return {
      form: {
        login: '',
        password: ''
      },
      isDisabledButton: true
    }
  },
  methods: {
    test() {
      console.log(this.form);
      this.$router.push('/main')
    }
  },
  watch: {
    form: {
      handler(val) {
        if(Object.values(val).filter(f => f == '').length) {
          this.isDisabledButton = true
        } else this.isDisabledButton = false
      },
      deep: true
    }
  }
}
</script>
