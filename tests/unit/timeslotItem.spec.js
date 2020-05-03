import { shallowMount } from '@vue/test-utils';
import TimeslotItem from '@/components/TimeslotItem.vue';

describe('TimeslotItem', () => {
  it('renders Customer name when passed', () => {
    const customer = 'Komit';
    const wrapper = shallowMount(TimeslotItem, {
      propsData: { customer },
    });
    expect(wrapper.html()).toContain('<strong>Komit</strong>');
  });

  it('renders Hours when passed', () => {
    const hours = 2;
    const wrapper = shallowMount(TimeslotItem, {
      propsData: { hours },
    });
    // console.log(wrapper.text());
    expect(wrapper.text()).toMatch(`${hours} hours`);
  });

  it('renders Date when passed', () => {
    const date = '03/05/2020';
    const wrapper = shallowMount(TimeslotItem, {
      propsData: { date },
    });
    console.log(wrapper.text());
    expect(wrapper.text()).toMatch(`${date}`);
  });

  it('renders description if passed', () => {
    const description = 'Example of output';
    const wrapper = shallowMount(TimeslotItem, {
      propsData: { description },
    });
    console.log(wrapper.text());
    expect(wrapper.text()).toMatch(`[${description}]`);
  });
});
