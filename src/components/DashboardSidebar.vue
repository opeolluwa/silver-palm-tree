<script lang="ts">
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth";
import { mapActions, mapState } from "pinia";
export default defineComponent({
  name: "AppNavigation",
  components: {
    Icon,
  },
  data: () => ({
    showMobileMenu: true,
    routes: [
      {
        name: "Dashboard",
        icon: "mdi:home-variant-outline",
        path: "home",
      },
      {
        name: "Set-up",
        icon: "mdi:code-tags",
        path: "setup",
      },
      {
        name: "notification",
        icon: "mdi:bell-outline",
        path: "notification",
      },

      {
        name: "profile",
        icon: "mdi:account",
        path: "profile",
      },
      {
        name: "settings",
        icon: "mdi:cog-outline",
        path: "settings",
      },
      {
        name: "help",
        icon: "mdi:help-circle-outline",
        path: "settings",
      },
    ],
  }),
  computed: {
    ...mapState(useAuthStore, ["userInformation", "isLoading"]),
    fullname() {
      return String(this.userInformation?.fullname) || "Jane Doe";
    },
    username() {
      return String(this.userInformation?.username) || "username";
    },
    email() {
      return String(this.userInformation?.email) || "jane@mailer.com";
    },
    currentRouteName() {
      const route = this.$route.name;
      return String(route) || "360 Devs";
    },
  },
  mounted() {
    //display dropdown on click or on mouse over parent container
    const dropdown = document.querySelectorAll(".dropdown");
    dropdown.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        item.nextElementSibling?.classList.toggle("show");
      });
    });

    //hide nav on click outside nav__content if device is mobile device
    const isMobileDevice = window.matchMedia("(max-width: 600px)").matches;
    const navigation = document.querySelector("nav");
    if (isMobileDevice) {
      navigation?.addEventListener("click", (e) => {
        e.stopPropagation();
        this.$emit("close-sidebar");
      });
    }
  },
  methods: {
    //get the logout action from the store
    ...mapActions(useAuthStore, ["logoutRequest"]),
    logout() {
      //exec the call to the store mapped logout action
      // this.$router.push({ name: "login" });
      this.logoutRequest();
    },

    closeSidebar() {
      /**
       * check if the device is mobile
       * if true, close the sidebar when a nav link is clicked
       * if not do nothing
       */
      const isMobileDevice = window.matchMedia("(max-width: 600px)").matches;
      if (isMobileDevice) {
        this.$emit("close-sidebar");
      }
      return;
    },
    goToProfile() {
      this.$router.push({ name: "profile" });
      this.closeSidebar();
    },
  },
});
</script>

<template>
  <nav>
    <div id="nav__content">
      <!-- nave header-->
      <div id="nav__header">
        <div id="avatar">
          <!--icon-->
          <img
            src="@/assets/img/illustration/default_user.png"
            alt="avatar"
            @click="goToProfile"
          />
          <!---name and email-->
          <div id="user">
            <h3>{{ fullname }}</h3>
            <small>{{ email }}</small>
          </div>
        </div>
      </div>

      <div id="routes">
        <!--the links-->
        <div v-for="route in routes.sort()" :key="route.name">
          <!-- <hr class=divider> -->
          <RouterLink
            :to="{ name: route.path }"
            class="link__item"
            :class="[
              route.name === currentRouteName ? 'active' : '',
              'capitalize',
            ]"
            @click="closeSidebar"
          >
            <Icon :icon="route.icon" />
            <span>{{ route.name }}</span>
          </RouterLink>
        </div>
        <!-- the last out logout button-->
        <div class="link__item" @click="logout" id="logout__btn">
          <Icon icon="mdi:logout" />
          <span>logout</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#nav__header {
  display: none;
}

.dividter {
  border: 0.5px solid var(--border-color);
}

nav {
  padding-top: 100px;
  background-color: var(--primary);
  color: var(--light-text);
  top: 0;
  left: 0;
  transition: display 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  height: 100vh;
  overflow-y: hidden;
  scroll-behavior: smooth;
  cursor: pointer;
  padding-bottom: 40px;
}

.children__routes {
  margin-left: 80px;
  list-style: disc;
  display: none;
  transition: all 200ms ease;
}

.children__routes li.child__route {
  /* margin-bottom: 25px; */
  padding: 15px 5px;
}

.show {
  display: block !important;
}

nav .link__item {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 20px 30px;
  border-radius: 5px;
  display: inline-flex;
  align-items: flex-end;
  text-decoration: none;
  color: var(--light-text);
  column-gap: 15px;
  font-size: 17px;
  transition: all 0.2s ease-in-out;
  position: relative;
  margin: 3px 0;
}

nav .link__item:hover,
.link__item:active,
.link__item:focus,
.active {
  background-color: rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.close {
  display: none;
}

.show__mobile__menu {
  display: block;
  transition: display 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.hide__mobile__menu {
  display: none;
  transition: display 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

/**---------------mobile scree styling----------------- */
@media screen and (max-width: 768px) {
  nav {
    /* padding: 65px 0; */
    padding: 0;
    margin: 0;
    height: auto;
    background-color: rgba(0, 0, 0, 0.45);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5000;
  }

  nav #nav__header {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 20px 30px;
    min-height: 150px;
    border-radius: 0 0 7px 7px;
    background-color: var(--primary);
    background-image: url("@/assets/img/bg/sidebar-avatar.svg");
    background-size: cover;
    background-position: top center;
    max-height: 40vh;
    position: sticky;
  }

  #nav__header #avatar {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
    position: relative;
  }

  #nav__header #user {
    margin-top: 15px;
  }

  #nav__header #avatar img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  nav #nav__content {
    max-width: 75%;
    overflow-y: scroll;
    width: 100%;
    min-height: 100vh;
    background-color: var(--light-text);
    padding: 0;
    margin: 0;
  }

  nav #routes {
    height: 60vh !important;
    overflow-y: scroll;
  }

  nav .link__item {
    padding: 7.5px 30px;
    color: var(--default-dark);
  }

  .children__routes {
    color: var(--default-dark);
  }

  .children__routes li.child__route {
    /* margin-bottom: 25px; */
    padding: 10px 3px;
  }

  nav .link__item:first-child {
    margin-top: 20px;
  }

  #logout__btn {
    margin-top: 15px;
    /* margin-top: 35px; */
  }

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    display: block;
  }

  nav svg {
    color: var(--secondary);
  }
}
</style>
