import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {

  
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    let Ctor = Vue.extend(HelloWorld);
    let vm = new Ctor({
      propsData: {msg}
    })
    console.log(vm.$el.innerHTML).to.include(msg);
  
  })
})
