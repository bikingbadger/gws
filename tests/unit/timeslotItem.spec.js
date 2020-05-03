import { shallowMount } from '@vue/test-utils';
import TimeslotItem from '@/components/TimeslotItem.vue';

describe('TimeslotItem', () => {
  const spy = jest.spyOn(global.console, 'error').mockImplementation(() => {});

  it('should require props for hours, customer and date', () => {
    shallowMount(TimeslotItem, {});
    expect(spy).toBeCalled();
    // console.log(spy.mock.calls[0][0]);
    expect(spy.mock.calls[0][0]).toContain(
      '[Vue warn]: Missing required prop: "date"',
    );
    expect(spy.mock.calls[1][0]).toContain(
      '[Vue warn]: Missing required prop: "hours"',
    );
    expect(spy.mock.calls[2][0]).toContain(
      '[Vue warn]: Missing required prop: "customer"',
    );
    spy.mockRestore();
  });

  it('renders a timeslot', () => {
    const customer = 'Komit';
    const hours = 2;
    const date = '03/05/2020';
    const description = 'Example of output';
    const wrapper = shallowMount(TimeslotItem, {
      propsData: { date, customer, hours, description },
    });
    // console.log(wrapper.text());
    expect(wrapper.text()).toMatch(
      `${date} ${customer} ${hours} hours\n    [${description}]`,
    );
  });
});
