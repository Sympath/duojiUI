import {
    shallowMount
} from '@vue/test-utils';
import Row from '@/packages/layout/row.vue';
import Col from '@/packages/layout/col.vue';
import {expect} from 'chai';

describe('row.vue', () => {
  it('1. 测试gutter释放ok？',async ()=>{
      let wrapper = shallowMount(Row,{
          attachToDocumnent: true,
          stubs: {
              'dj-col':Col
          },
          slots: {
              default: `<dj-col></dj-col>`
          },
          propsData: {
              gutter: 20
          }
      })
      expect(
          getComputedStyle(wrapper.removeProperty.$el).marginLeft
      ).to.eq('-10px');
      expect(
          getComputedStyle(wrapper.removeProperty.$el).marginRight
      ).to.eq('-10px');

      await wrapper.vm.$nextTick();
      let col = wrapper.vm.$el.querySelector('.dj-col');
      expect(
            getComputedStyle(col).paddingLeft
        ).to.eq('10px');
      expect(
            getComputedStyle(col).paddingRight
        ).to.eq('10px');
  })
  it('2. 测试justify是否ok？',async ()=>{
      let wrapper = shallowMount(Row,{
          attachToDocumnent: true,
          stubs: {
              'dj-col':Col
          },
          slots: {
              default: `<dj-col></dj-col>`
          },
          propsData: {
             justify: 'start'
          }
      })
      expect(
          getComputedStyle(wrapper.removeProperty.$el).justifyContent
      ).to.eq('flex-start');
      await wrapper.vm.$nextTick();
      wrapper.setProps({
          justify: 'end'
      })
      expect(
          getComputedStyle(wrapper.removeProperty.$el).justifyContent
      ).to.eq('flex-end');
      await wrapper.vm.$nextTick();
  })
})
