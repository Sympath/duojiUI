<template>
    <div class="form-wrapper">
          <guru-form :options="options" :formData="formData" ></guru-form>
    </div>
</template>

<script>
export default {
    data() {
      return {

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
}
</script>

<style lang="sass">

</style>