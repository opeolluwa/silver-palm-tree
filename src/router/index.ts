import { createRouter, createWebHistory } from "vue-router";
import AuthenticationView from "@/views/auth/AuthIndexView.vue";
import BaseLayout from "@/views/IndexView.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/auth/LoginView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "auth",
      path: "/",
      component: AuthenticationView,
      children: [
        {
          path: "",
          name: "login",
          component: LoginView,
          alias: "login",
        },
      ],
    },
    {
      path: "/u",
      component: BaseLayout,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },

        {
          path: "projects",
          name: "projects",
          component: () => import("@/views/ProjectsView.vue"),
        },

        {
          path: "setup",
          name: "setup",
          component: () => import("@/views/SetupView.vue"),
        },

        {
          path: "settings",
          name: "settings",
          component: () => import("@/views/SettingsView.vue"),
        },

        {
          path: "profile",
          name: "profile",
          component: () => import("@/views/ProfileView.vue"),
        },
        {
          path: "weeks/:course",
          name: "weeks",
          component: () => import("@/views/WeeksView.vue"),
        },

        {
          // student routes has a query param of course and week
          path: "student/:course/:week",
          name: "student",
          component: () => import("@/views/StudentView.vue"),
        },

        {
          path: "notification",
          name: "notification",
          component: () => import("@/views/NotificationView.vue"),
        },
        {
          path: "todo",
          name: "todo",
          component: () => import("@/views/todo/TodoIndexView.vue"),
          children: [
            {
              name: "all-task",
              path: "",
              component: () => import("@/views/todo/AllTodoViews.vue"),
            },
            {
              name: "add-task",
              path: "new",
              component: () => import("@/views/todo/CreateTodoView.vue"),
            },
            /* {
              name: "edit-task",
              path: "edit/:taskId",
              props: true,
              component: () => import("@/views/todo/EditTodoView.vue"),
            }, */
          ],
        },
      ],
      //add navigation guards here
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

// console.log({ routes: JSON.stringify(router.getRoutes()) });

// router.
//   beforeEach((to, from, next) => {
//     const store = useAuthStore()
//     if (to.meta.requiresAuth && !store.isAuthenticated) {
//       next({
//         name: 'login'
//       })
//     } else {
//       next()
//     }
//   })

export default router;
