<template>
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
</template>

<script>
export default {

}
</script>

<style lang="scss">
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