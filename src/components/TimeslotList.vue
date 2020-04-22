<template>
  <div>
    <!-- <TimeslotItem
      v-for="(timeslot, index) in timeslots"
      :key="index"
      v-bind="timeslot"
      @select-timeslot="selectTimeslot($event, timeslot)"
    ></TimeslotItem> -->
    <ul>
        <TimeslotItem 
        v-for="(timeslot, index) in timeslots"
        :key="index"
        v-bind="timeslot"
        >
        </TimeslotItem>
    </ul>
  </div>
</template>

<script>
import TimeslotItem from './TimeslotItem';
export default {
  props: {
    timeslots: {
      type: Array,
    },
  },
  components: {
    TimeslotItem,
  },
  methods: {
    selectTimeslot($event, timeslot) {
      this.$emit('select-timeslot', timeslot.desc);
    },
  },
};
</script>

<style></style>
