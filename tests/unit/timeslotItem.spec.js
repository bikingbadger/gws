import { shallowMount } from '@vue/test-utils';
import TimeslotItem from '@/components/TimeslotItem.vue';

describe('TimeslotItem', () => {
  it('renders Customer name when passed', () => {
    const customer = 'Komit';
    const wrapper = shallowMount(TimeslotItem, {
      propsData: { customer },
    });
    console.log(wrapper.html());
    expect(wrapper.html()).toContain('<strong>Komit</strong>');
  });
});
