<template>
<!--  <a-form id="components-form-demo-normal-login" class="login-form" layout="inline">-->
<!--    <a-form-item>-->
<!--      <a-input v-model:value="user" placeholder="用户名">-->
<!--      </a-input>-->
<!--    </a-form-item>-->
<!--    <a-form-item>-->
<!--      <a-input v-model:value="password" type="password" placeholder="密码">-->
<!--      </a-input>-->
<!--    </a-form-item>-->
<!--    <a-form-item>-->
<!--      <a-button-->
<!--          type="primary"-->
<!--          html-type="submit"-->
<!--          class="login-form-button"-->
<!--          @click="login()"-->
<!--      >-->
<!--        Log in-->
<!--      </a-button>-->
<!--    </a-form-item>-->
<!--  </a-form>-->

</template>



<!--<script lang="ts">-->

<!--import {-->
<!--  defineComponent,-->
<!--  reactive,-->
<!--  toRefs,-->
<!--} from 'vue';-->
<!--import router from "../../route";-->

<!--// interface formState {-->
<!--//   user: number-->
<!--//   password : number-->
<!--// }-->
<!--export default defineComponent({-->

<!--  setup() {-->
<!--    const userinfo = reactive({-->
<!--      user: null,-->
<!--      password: null-->
<!--    })-->
<!--    let login = () => {-->
<!--      if (userinfo.user==123&&userinfo.password==123456){-->
<!--        console.log("登录成功");-->
<!--        console.log(router.push('/hello'))-->
<!--      }else {-->
<!--        console.log("账号或密码错误")-->
<!--      }-->
<!--    };-->
<!--    return {-->
<!--      ...toRefs(userinfo),-->
<!--      login,-->


<!--    }-->
<!--  }-->


<!--});-->
<!--</script>-->

<style lang="scss">
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>

