<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "StudentView",
  components: {},
  methods: {
    async getStudentsAttendance() {
      try {
        // use fetch api to get https://attendance.olymosbiotechs.com.ng/courses

        // get the course id and week from the route params
        let { course, week } = this.$route.params;

        let result = await fetch(
          `https://attendance.olymosbiotechs.com.ng/attendance/search/${course}/${week}/?page=1`
        );

        let data = await result.json();
        // set the data to the courses variable
        this.students = data.results;
        this.week = week;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.getStudentsAttendance();
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    );
  },
  data: () => ({
    showModal: false,
    isLoading: false,
    hasError: false,
    students: [],
    week: "",
  }),
});
</script>

<template>
  <h2 class="sub__hero__text title">Student Attendance for week {{ week }}</h2>
  <div id="course__list">
    <!-- Table with 3 columns -->
    <table class="table">
      <thead class="table_head">
        <tr class="table_row">
          <th class="table_row_no">#</th>
          <th class="table_row_name">Student Name</th>
          <th class="table_row_card_id">Card Id</th>
          <th class="table_row_card_status">Status</th>
        </tr>
      </thead>
      <tbody class="table_body">
        <tr class="table_row" v-for="student in students" :key="student.id">
          <th class="table_row_no">{{ students.indexOf(student) + 1 }}</th>
          <th class="table_row_name">
            {{ student.last_name }} {{ student.first_name }}
          </th>
          <th class="table_row_card_id">{{ student.card_id }}</th>
          <th class="table_row_card_status_row">{{ student.status }}</th>
        </tr>
      </tbody>
    </table>
    <AppListItem
      v-for="student in students"
      :key="student.id"
      :course="student"
    >
      <!-- Create a vue table with 3 columns -->

      <!-- 1. Student Name -->
      <!-- 2. Student Email -->
      <!-- 3. Student Attendance -->

      <div class="content">
        <div class="course__code small">
          {{ student.course_code }}
        </div>
        <div class="course__title trim__text">
          {{ student.course_title }}
        </div>
      </div>
      <Icon icon="mdi:chevron-right" />
    </AppListItem>
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
.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 3px 12px -9px rgba(0, 0, 0, 0.79);
  -webkit-box-shadow: 1px 3px 12px -9px rgba(0, 0, 0, 0.79);
  -moz-box-shadow: 1px 3px 12px -9px rgba(0, 0, 0, 0.79);
}
.table_head {
  background-color: var(--primary-color);
  font-weight: 600 !important;
}
.table_row_card_status_row {
  color: green;
  text-transform: lowercase;
}
.table_row {
}
</style>
