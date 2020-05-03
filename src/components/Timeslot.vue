<template>
  <div>
    <TimeslotCreate v-if="showModal" @close="showModal = false">
      
    </TimeslotCreate>
    <button @click="createTimeslot">Add</button>
    <TimeslotList
    :timeslots="timeslots"
    ></TimeslotList>
  </div>
</template>

<script>
import TimeslotList from './TimeslotList';
import TimeslotCreate from './TimeslotCreate';
import axios from 'axios';

export default {
  data() {
    return {
      showModal: false,
      timeslots: [],
      currentTimeslot: null,
    };
  },
  components: {
    TimeslotList,
    TimeslotCreate,
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
    createTimeslot() {
      console.log("Create");
      this.showModal = true;
    }
  },
};
</script>

<style></style>
