<template>
  <div class="w-[768px] mx-auto my-8 flex flex-col gap-6">
    <h1 class="text-[24px] leading-6 font-medium text-[#111827]">
      Редактировать данные пользователя
    </h1>
    <div class="grid grid-cols-3 gap-6">
      <Input
      label="Фамилия"
      id="surname"
      v-model="form.surname">
      </Input>
      <Input
      label="Имя"
      id="name"
      v-model="form.name">
      </Input>
      <Input
      label="Отчество"
      id="patronymic"
      v-model="form.patronymic">
      </Input>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <Input
      label="Номер телефона"
      id="phone"
      v-model="form.phone">
      </Input>
      <Input
      label="Email"
      id="mail"
      v-model="form.email">
      </Input>
      <Select label="Должность" :list="posts" :valueList="valuePost" :textList="textPost"
      v-model="form.post"/>
    </div>
    <div class="grid grid-cols-2 gap-6">
      <Select label="Статус" :list="statuses" :valueList="valueStatus" :textList="textStatus"
      v-model="form.status"/>
      <Select label="Роль" :list="roles" :valueList="valueRole" :textList="textRole"
      v-model="form.role"/>
    </div>
    <div class="grid grid-cols-2 gap-6">
      <Input
      label="Логин"
      id="login"
      v-model="form.login">
      </Input>
      <Input
      label="Пароль"
      id="password"
      type="password"
      v-model="form.password">
      </Input>
    </div>
    <div class="flex gap-6">
      <Button @click="addUser">
        Сохранить
      </Button>
      <Button outlined
      @click="$router.push('/users')">
        Закрыть
      </Button>
    </div>
  </div>
</template>
<script>
import Input from '@/components/input.vue'
import Select from '@/components/select.vue'
import Button from '@/components/button.vue'
export default {
  name: 'UserEditPage',
  components: {
    Input,
    Select,
    Button
  },
  data() {
    return {
      posts: [ /* Список должностей */
        {
          id: 1,
          value: 'Должность №1',
          text: 'Должность 1'
        },
        {
          id: 2,
          value: 'Должность №2',
          text: 'Должность 2'
        }
      ],
      valuePost: 'value', /* Название ключа value списка должностей */
      textPost: 'text', /* Название ключа для отображение значений списка должностей */
      form: { /* Форма значений */
        surname: '',
        name: '',
        patronymic: '',
        phone: '',
        email: '',
        post: '',
        status: '',
        login: '',
        password: '',
        role: ''
      },
      statuses: [ /* Список статусов */
        {
          id: 1,
          value: 'активный 1',
          name: 'Активный'
        },
        {
          id: 2,
          value: 'неактивный 2',
          name: 'Неактивный'
        }
      ],
      valueStatus: 'value', /* Название ключа value списка статусов */
      textStatus: 'name', /* Название ключа для отображение значений списка статусов */
      roles: [ /* Список ролей */
        {
          id: 1,
          value: 'Роль №1',
          title: 'роль 1'
        },
        {
          id: 1,
          value: 'Роль №2',
          title: 'роль 2'
        }
      ],
      valueRole: 'value', /* Название ключа value списка ролей */
      textRole: 'title' /* Название ключа для отображение значений списка ролей */
    }
  },
  methods: {
    addUser() { /* Функция добавления нового пользователя */
      console.log(this.form);
    }
  }
}
</script>
