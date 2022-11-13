<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NotificationView",
  components: {},
  methods: {
    seeAttendance(week: number) {
      let { course } = this.$route.params;
      this.$router.push({ name: `student`, params: { course, week } });
    },
  },
});
</script>

<template>
  <h2 class="sub__hero__text title">Please select a week</h2>
  <div id="weeks__container">
    <div @click="seeAttendance(counter)" class="week" v-for="counter in 13">
      week {{ String(counter).padStart(2, "0") }}
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 2rem;
}

#weeks__container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.week {
  background-color: #fff;
  border-radius: 5px;
  padding: 15px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-size: 0.9rem;
  border: 1px solid var(--border-color);
  margin: 10px 0;
  box-shadow: 1px 3px 12px -9px rgba(0, 0, 0, 0.79);
  -webkit-box-shadow: 1px 3px 12px -9px rgba(0, 0, 0, 0.79);
  -moz-box-shadow: 1px 3px 12px -9px rgba(0, 0, 0, 0.79);
  align-items: center;
  cursor: pointer;
  width: fit-content;
}
</style>
