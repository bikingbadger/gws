<template>
  <div>
    <p>
      {{ date }} <strong>{{ customer }}</strong> {{ hours }} hours [{{
        description
      }}]
    </p>
  </div>
</template>

<script>
export default {
  props: {
    date: { type: String },
    hours: { type: Number },
    customer: {
      type: String,
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
