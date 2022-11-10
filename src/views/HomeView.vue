<script lang="ts">
import AppCard from "@/components/AppCard.vue";
import BaseButton from "@/components/BaseButton.vue";
import greetings from "@/components/greetings";
import { useAuthStore } from "@/stores/auth";
import  { Icon } from "@iconify/vue";
import { mapState } from "pinia";
import { defineComponent } from "vue";
import AppListItem from "../components/AppListItem.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    AppCard,
    AppListItem,
    BaseButton,
    Icon
  },
  data: () => ({
    showModal: false,
    greetings,
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
  computed: {
    //get the user from the store
    ...mapState(useAuthStore, { user: "userInformation" }),
    username() {
      return this.user?.username || "";
    },
  },
});
</script>

<template>
  <!--greetings-->
  <div class="d-sm-none d-none">
    <h3>
      Hi <strong style="text-transform: capitalize">{{ username }}! 😊 </strong>
    </h3>
    <small>{{ greetings }}</small>
  </div>

  <!--analytics overview-->

  <h1>Course List</h1>
  <div id="course__list">
    <AppListItem v-for="course in courses" :key="course.id" :course="course">
      <div class="course__code small">
        {{ course.course_code }}
      </div>
      <div class="course__title trim__text">
        {{ course.course_title }}
      </div>
    </AppListItem>

  </div>
  <!--next and previous button-->
  <div>
    <BaseButton text="prev">
      <Icon icon="mdi:chevron-left" />
    </BaseButton>
    <BaseButton text="next">
      <Icon icon="mdi:chevron-right" />
    </BaseButton>
  </div>
  <!--quotes and analytics header-->
</template>

<style scoped>
#course__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin-top: 1rem;
}

.course__code {
  color: #6c757d;
  font-size: 8;
}

.course__title {
  width: 97%;
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
