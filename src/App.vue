<template>
  <div id="app">
   <h1>按钮类型</h1>
    <dj-button iconPosition="left" type="warning">默认按钮</dj-button>
    <dj-button iconPosition="right" type="primary">默认按钮</dj-button>
    <dj-button iconPosition="right" type="danger">默认按钮</dj-button>
    <dj-button iconPosition="right" type="default">默认按钮</dj-button>
    <dj-button iconPosition="right" type="success">默认按钮</dj-button>
    <h1>带icon的按钮</h1>
    <dj-button :icon='icon' iconPosition="left" type="warning">默认按钮</dj-button>
    <dj-button :icon='icon' iconPosition="right" type="warning">默认按钮</dj-button>
     <h1>loading的按钮</h1>
    <dj-button :icon='icon'  loading iconPosition="right" type="warning">默认按钮</dj-button>
     <h1>loading的按钮</h1>
    <dj-button :icon='icon' @click="handleClick" iconPosition="right" type="warning">默认按钮</dj-button>
     <h1>按钮组</h1>
      <dj-button-group>
        <dj-button icon='leftarrow' iconPosition="left" type="warning">默认按钮</dj-button>
        <dj-button icon='youjiantou' @click="handleClick" iconPosition="right" type="warning">默认按钮</dj-button>
      </dj-button-group>
   <div> <dj-icon
        :icon="icon"
        v-if="icon"
        class="icon"
    ></dj-icon></div>
    <guru-form :options="options" :formData="formData" ></guru-form>

    <dj-row>
      <dj-col :span="12">111</dj-col>
      <dj-col :span="12">222</dj-col>
    </dj-row>
    <dj-row>
      <dj-col :span="8">333</dj-col>
      <dj-col :span="8" :offset="8">333</dj-col>
    </dj-row>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
      return {
        icon: 'sousuo',
        // 表单数据 必需
        formData: {
          accout: '',
          pwd: '',
          mail: '',
          gender: '',
          msg: '',
          phone: '',
          color: 'red',
        },
        options: {
            // 表单属性 非必需
          formProps:{
            'label-width': 60
          },
          // 表单项组件数据 必需
          formItem: [
            {
              type: 'input',
              key: 'accout',
              label: '账号',
              props: {
                placeholder: '请输入账号...'
              },
              rules: {
                required: true,
                message: '请输入账号',
                trigger: 'blur'
              }
            },
            {
              type: 'input',
              key: 'pwd',
              label: '密码',
              props: {
                placeholder: '请输入密码...',
                type: 'password'
              },
              rules: {
                required: true,
                message: '请输入密码',
                trigger: 'blur'
              }
            },
            {
              type: 'input',
              key: 'mail',
              label: '邮箱',
              props: {
                placeholder: '请输入邮箱...',
              },
              rules: {
                required: true,
                message: '请输入邮箱',
                trigger: 'blur'
              }
            },
            {
              type: 'radioGroup',
              key: 'gender',
              label: '性别',
              children: [
                {
                  label: '女'
                },
                {
                  label: '男'
                }
              ],
              rules: {
                required: true,
                message: '请选择性别',
                trigger: 'change'
              }
            },
            {
              type: 'input',
              key: 'phone',
              label: '手机',
              props: {
                placeholder: '请输入手机号...',
              },
              rules: {
                required: true,
                trigger: 'blur',
                validator(rule, value, callback) {
                    if (value === '') {
                        callback(new Error('请输入手机号'))
                    } else if (value.length != 11) {
                        callback(new Error('请输入正确的手机号'))
                    } else {
                        callback()
                    }
                }
              }
            },
            {
              type: 'input',
              label: '留言',
              key: 'msg',
              props: {
                placeholder: '留言...',
                type: 'textarea'
              },
              rules: {
                required: true,
                trigger: 'blur',
                message: '请留下您宝贵的意见'
              }
            },
            {
              label: '颜色',
              key: 'color',
              type: 'colorPicker',
            },
          ],
          // 提交按钮 必需
          submit:{
            text: '提交',
            props: {
              type: 'primary'
            },
            success(formData) {
              alert(JSON.stringify(formData))
            },
            fail(formData) {
              alert('验证失败')
            }
          }
        }

      }
  },
  mounted(){
    window.$vm = this;
  },
  methods: {
    handleClick(){
      alert('11')
    }
  }
}
</script>

<style lang="scss">

</style>
