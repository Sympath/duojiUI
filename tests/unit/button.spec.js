// Vue提供的快速测试的方法
import { expect } from 'chai'
import Button from '@/packages/button/button';
import Icon from '@/packages/icon';
// @ts-ignore
import { createApp } from 'vue/dist/vue.esm-bundler.js';

describe('Button.vue', () => {
  it('测试插槽显示是否正常', () => {
    const container = document.createElement('div');
    const app = createApp({
      template: `<djButton>hello</djButton>`,
      components: {
        "djButton": Button,
      }
    }, {
      icon: 'edit',
    }).mount(container);
    let html = app.$el.innerHTML
    expect(html).to.match(/hello/)
  });

  it('测试icon是否能够正常显示', () => {
    const container = document.createElement('div');
    const app = createApp({
      ...Button,
    }, {
      icon: 'edit',
    }).use(Icon).mount(container);
    let useEle = app.$el.querySelector('use');
    let href = useEle.getAttribute('xlink:href');
    expect(href).to.eq('#icon-edit');
  });

  it('测试传入loading时 按钮为禁用态', () => {
    const container = document.createElement('div');
    const app = createApp({
      template: `<djButton></djButton>`,
      components: {
        "djButton": Button,
      }
    }, {
      loading: true,
    }).use(Icon).mount(container);
    let useEle = app.$el.querySelector('use');
    let href = useEle.getAttribute('xlink:href');
    let disabeld = app.$el.getAttribute('disabled')
    expect(href).to.eq('#icon-loading');
    expect(disabeld).not.to.eq(null);
  });
  // todo....
})