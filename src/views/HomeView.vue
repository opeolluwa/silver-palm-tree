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
    Spinner
  },
  methods: {
    async getCourseList() {
      const headers = {
        'Authorization': 'Bearer ${accessToken}',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': "POST, GET, OPTIONS",
        'Access-Control-Allow-Credentials': true,
        'Sec-Fetch-Mode': "no-cors,",
        'Sec-Fetch-Site': "same-site"
      }
      try {
        // get request with custom headers

        const response = await axios.get("https://attendance.olymosbiotechs.com.ng/courses")
        console.log(JSON.stringify({ response }));

      } catch (error: any) {
        console.log({ apiError: error.message });

      }
    },

    seeAttendance() {
      this.$router.push({ name: 'weeks' })
    }
  },
  created() {
 /*    (async () => {
      axios.get('https://attendance.olymosbiotechs.com.ng/students',  {
        headers: {
          // remove headers
        }
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err.response);
      });
    })() */
    // watch the params of the route to fetch the data again
   /*  this.$watch(
      () => this.$route.params,
      () => {
        this.getCourseList()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    ) */
  },
  data: () => ({
    showModal: false,
    isLoading: false,
    hasError: false,
    courses: [
      {
        "id": 2,
        "course_title": "ELECTRIC CIRCUIT THEORY 1",
        "course_code": "ELE301",
        "level": "300",
        "created_at": "2022-10-19T16:25:00.030472Z",
        "updated_at": "2022-10-19T16:25:00.030509Z"
      },
      {
        "id": 3,
        "course_title": "ELECTROMAGNETIC FIELD THEORY 1",
        "course_code": "ELE303",
        "level": "300",
        "created_at": "2022-10-19T16:25:45.704982Z",
        "updated_at": "2022-10-19T16:25:45.705023Z"
      },
      {
        "id": 4,
        "course_title": "ELECTROMECHANICAL DEVICES & MACHINES 1",
        "course_code": "ELE305",
        "level": "300",
        "created_at": "2022-10-19T16:26:54.019527Z",
        "updated_at": "2022-10-19T16:26:54.019576Z"
      },
      {
        "id": 5,
        "course_title": "ELECTRONIC CIRCUITS 1",
        "course_code": "ELE307",
        "level": "300",
        "created_at": "2022-10-19T16:27:46.098702Z",
        "updated_at": "2022-10-19T16:27:46.098744Z"
      },
      {
        "id": 6,
        "course_title": "PHYSICAL ELECTRONICS",
        "course_code": "ELE 309",
        "level": "300",
        "created_at": "2022-10-19T16:28:28.648977Z",
        "updated_at": "2022-10-19T16:28:28.649034Z"
      },
      {
        "id": 7,
        "course_title": "NUMERICAL METHODS IN ELECTRICAL % ELECTRONICS ENGINEERING 1",
        "course_code": "ELE311",
        "level": "300",
        "created_at": "2022-10-19T16:29:12.628498Z",
        "updated_at": "2022-10-19T16:29:12.628549Z"
      }
    ]
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
      <AppListItem v-for="course in courses" :key="course.id" :course="course" @click="seeAttendance">
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
      <BaseButton text="next" @click="getCourseList">
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
  font-size: .9rem;

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

  .analytics-overview>div {
    min-height: 40px;
  }
}
</style>
