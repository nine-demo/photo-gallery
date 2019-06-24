<template>
  <div class="main">
    <Row type="flex">
      <i-col span="18"></i-col>
      <i-col span="6">
        <Card class="login-card">
          <div slot="title">
            <h3>登录</h3>
          </div>
          <div style="text-align:center">
            <Form :model="formData" :rules="ruleValidate" :label-position="'right'" :label-width="100" ref="loginForm">
              <FormItem label="用户名" prop="userName">
                <i-input v-model="formData.userName"  prefix="ios-person" type="text"></i-input>
              </FormItem>
              <FormItem label="密码" prop="password">
                <i-input v-model="formData.password" prefix="ios-finger-print" type="password"></i-input>
              </FormItem>
            </Form>
            <div class="form-footer">
              <i-button type="text" ghost>忘记密码</i-button>
              <i-button type="primary" ghost :loading="loading" @click="login">登录</i-button>
            </div>
            <!--            <i-button type="dashed" ghost>注册</i-button>-->
          </div>
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      }
      if (!/^[\w\W.]{6,12}$/.test(value)) {
        callback(new Error('密码格式不正确'))
      }
      callback()
    }
    return {
      loading: false,
      ruleValidate: {
        userName: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ]
      },
      formData: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.loading = true
      this.$refs['loginForm'].validate((valid) => {
        this.loading = false
        if (valid) {
          this.$router.push({ name: 'home' })
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .main {
    height: 100%;
    background: rgba(197, 52, 45, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 10%;
    /*align-items: center;*/
    .login-card {
      /*position: relative;*/
      /*top: 100px;*/
      /*left: 100px;*/
      /*margin: 0;*/
      width: 320px;
      background: rgba(197, 52, 45, 0.27);
      .form-footer {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
</style>
