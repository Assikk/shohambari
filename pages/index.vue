<template>
  <div class="flex min-h-screen items-center">
    <div class="max-w-[448px] mx-auto">
      <img width="448" height="80" src="blue-logo.svg" alt="Logo">
      <form @submit.prevent="login" class="flex flex-col gap-6 mt-8 border border-[#D1D5DB] rounded-lg py-8 px-10">
        <h1 class="text-center text-2xl font-bold">
          Авторизация
        </h1>
        <Input
        label="Логин"
        id="login"
        v-model="form.login"
        :error="$v.form.login.$dirty && !$v.form.login.required">
        <template #error>
          <span v-if="!$v.form.login.required">
            Это поле обязательно для заполнения
          </span>
        </template>
        </Input>
        <Input
        label="Пароль"
        id="password"
        type="password"
        v-model="form.password"
        :error="$v.form.password.$dirty && !$v.form.password.required">
        <template #error>
          <span v-if="!$v.form.password.required">
            Это поле обязательно для заполнения
          </span>
        </template>
        </Input>
        <Button
        isFull>
          Войти
        </Button>
      </form>
    </div>
  </div>
</template>

<script>
import {required} from 'vuelidate/lib/validators'
import Input from '@/components/input'
import Button from '~/components/button.vue'
export default {
  name: 'IndexPage',
  layout: 'login',
  components: {
    Input,
    Button
  },
  data() {
    return {
      form: { /* Объект, который хранит в себе логин и пароль введенные в форме */
        login: '',
        password: ''
      },
    }
  },
  validations: {
    form: {
      login: { required },
      password: { required }
    }
  },
  methods: {
    login() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      console.log(this.form);
      this.$router.push('/main') /* Отправляем юзера на главную страницу */
    },
  },
  mounted() {
    console.log(this.$v);
  }
}
</script>
