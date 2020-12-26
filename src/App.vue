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
    <div class="grid-demo-wrap">
      <h1>Grid</h1>
      <p>
        栅格布局：我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。
      </p>
      <h2>子项目属性</h2>
      <h3>span控制所占空间，一行总数24</h3>
      <dj-row>
        <dj-col :span="12"> <div>12：50%</div></dj-col>
        <dj-col :span="12"> <div>12：50%</div></dj-col>
      </dj-row>
      <h3>offset控制元素间距，设置offset会空出元素右侧对应数量的空间</h3>
      <dj-row>
        <dj-col :span="8" > <div>8：33.33%</div></dj-col>
        <dj-col :span="8" > <div :offset="8">8：33.33%</div></dj-col>
      </dj-row>
      <h2>容器属性</h2>
      <h3>gutter控制子项目间间距，单位px</h3>
      <dj-row :gutter="16">
        <dj-col :span="12"> <div>111</div></dj-col>
        <dj-col :span="12"> <div>222</div></dj-col>
      </dj-row>
      <h3>弹性布局 justify设置主轴排布 end则靠右排布</h3>
      <dj-row justify="end">
        <dj-col :span="4"> <div>col-4</div></dj-col>
        <dj-col :span="4"> <div>col-4</div></dj-col>
      </dj-row>
      <h3>响应式布局</h3>
      <dj-row>
        <dj-col :xs="2" :sm="4" :md="6" :lg="8"><div>Col</div></dj-col>
        <dj-col :xs="20" :sm="16" :md="12" :lg="8"><div>Col</div></dj-col>
        <dj-col :xs="2" :sm="4" :md="6" :lg="8"><div>Col</div></dj-col>
      </dj-row>
    </div>

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
    }
  }
}
</script>

<style lang="scss">
#app {
   overflow-x: hidden;
   padding-bottom: 1000px;
}
p {
    margin: 5px;
    font-size: 14px
}
.grid-demo-wrap {
  .dj-col {
    div {
      color: #fff;
      padding: 10px 0;
      text-align: center;
      background: rgba(0,153,229,.9)
    }
    &:nth-child(odd) div {
        background: rgba(0,153,229,.7);
    }
  }
}
</style>
