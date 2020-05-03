<template>
  <div>
    <button type="submit">Add</button>
    <TimeslotList
    :timeslots="timeslots"
    ></TimeslotList>
  </div>
</template>

<script>
import TimeslotList from './TimeslotList';
import axios from 'axios';

export default {
  data() {
    return {
      timeslots: [],
      currentTimeslot: null,
    };
  },
  components: {
    TimeslotList,
  },
  mounted() {
    axios.get('.netlify/functions/timeslot-read-all').then((response) => {
      this.timeslots = response.data.map((timeslot) => timeslot.data);
    });
  },
  methods: {
    selectTimeslot(timeslot) {
      this.currentTimeslot = timeslot;
    },
  },
};
</script>

<style></style>
