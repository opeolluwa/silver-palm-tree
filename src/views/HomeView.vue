<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
import AppListItem from "../components/AppListItem.vue";
import axios from "axios";
import Spinner from "@/components/Spinner.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    AppListItem,
    BaseButton,
    Icon,
    Spinner,
  },
  methods: {
    async getCourseList() {
      try {
        // use fetch api to get https://attendance.olymosbiotechs.com.ng/courses

        let result = await fetch(
          "https://attendance.olymosbiotechs.com.ng/courses"
        );

        let data = await result.json();

        // set the data to the courses variable
        this.courses = data.results;
      } catch (error) {
        console.log(error);
      }
    },

    seeAttendance(course_id) {
      this.$router.push({
        name: `weeks`,
        params: { course: course_id },
      });
    },
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.getCourseList();
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
    courses: [],
  }),
});
</script>

<template>
  <div id="loading" v-if="isLoading">
    <Spinner />
    <h3>fetching data</h3>
  </div>
  <div v-if="!isLoading && courses.length">
    <h2>Please select a course</h2>
    <div id="course__list">
      <AppListItem
        v-for="course in courses"
        :key="course.id"
        :course="course"
        @click="seeAttendance(course.id)"
      >
        <div class="content">
          <div class="course__code small">
            {{ course.course_code }}
          </div>
          <div class="course__title trim__text">
            {{ course.course_title }}
          </div>
        </div>
        <Icon icon="mdi:chevron-right" />
      </AppListItem>
    </div>
    <!--next and previous button-->
    <div id="pagination">
      <BaseButton text="prev">
        <Icon icon="mdi:chevron-left" />
      </BaseButton>
      <BaseButton text="next">
        <Icon icon="mdi:chevron-right" />
      </BaseButton>
    </div>
    <!--quotes and analytics header-->
  </div>
</template>

<style scoped>
#course__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin-top: 1rem;
}

#course__list .list__item {
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 3px 12px -9px rgba(0, 0, 0, 0.79);
  -webkit-box-shadow: 1px 3px 12px -9px rgba(0, 0, 0, 0.79);
  -moz-box-shadow: 1px 3px 12px -9px rgba(0, 0, 0, 0.79);
  align-items: center;
  cursor: pointer;
}

#course__list .list__item svg {
  color: var(--secondary);
  font-size: 1.5rem;
}

#course__list .list__item .content {
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.9rem;
}

.course__code {
  color: #6c757d;
  font-size: 8;
}

.course__title {
  width: 250px;
}

#pagination {
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  margin-bottom: 3rem;
}

#pagination button {
  width: fit-content;
  background-color: var(--border-color);
  color: var(--primary);
}

/**--------------mobile screen navigation---------- */
@media screen and (max-width: 768px) {
  #header {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 45px;
  }

  .analytics-overview {
    column-gap: 5px;
    margin: 20px 0 10px;
    display: none;
  }

  .analytics-overview > div {
    min-height: 40px;
  }
}
</style>
