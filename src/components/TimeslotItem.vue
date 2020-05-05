<template>
  <div>
    <p>
      {{ date }} <strong>{{ customer }}</strong> {{ hours }} hours
      <span v-if="description">[{{ description }}]</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    date: { type: String, required: true },
    hours: { type: Number, required: true },
    customer: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  methods: {
    selectNote() {
      this.$emit('select-timeslot', this.desc);
    },
  },
};
</script>

<style></style>
