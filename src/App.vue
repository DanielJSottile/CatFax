<template>
  <div class="app" :class="mode">
    <div id="nav">
      <nav>
        <router-link
          :class="mode === 'dark' ? 'button-dark' : 'button-light'"
          to="/"
          >Home <i class="fas fa-igloo"></i
        ></router-link>
        <router-link
          :class="mode === 'dark' ? 'button-dark' : 'button-light'"
          to="/facts"
          >All Facts <i class="fas fa-journal-whills"></i
        ></router-link>
        <router-link
          :class="mode === 'dark' ? 'button-dark' : 'button-light'"
          to="/about"
          >About <i class="fas fa-cookie-bite"></i
        ></router-link>
      </nav>
      <button @click="toggle()" v-if="mode === 'dark'" class="toggle-light">
        Toggle Light Mode <i class="fas fa-sun"></i>
      </button>
      <button @click="toggle()" v-else class="toggle">
        Toggle Dark Mode <i class="fas fa-moon"></i>
      </button>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <footer>Daniel Sottile | Cat Fax © 2020</footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      mode: "dark"
    };
  },
  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap");

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: Avenir, Arial, Helvetica, sans-serif;
}

.app {
  width: 100vw;
  min-height: 100vh;
  padding: 15px;
  color: #444444;
  background-color: #eeeeee;
  transition: 0.5s;
}

.dark {
  color: #eeeeee;
  background-color: #222222;
  transition: 0.5s;
}

.button-dark {
  background-color: #eeeeee;
  transition: 0.5s;
}

#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 5px;
  margin: 5px;
  margin-bottom: 30px;
}

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #444444;
  color: #eeeeee;
  text-align: center;
}

h1 {
  font-size: 56px;
  padding: 0px;
  margin: 0px;
}

h3 {
  font-size: 26px;
  word-spacing: 2px;
  letter-spacing: 1.2px;
  line-height: 1.5;
  font-family: "Nothing You Could Do", cursive;
}

a,
.toggle,
.toggle-light {
  margin: 5px;
  padding: 5px;
  font-size: 18px;
  color: #444444;
  text-decoration: none;
  border: 3px solid #999999;
  border-radius: 14px;
}

.toggle,
.toggle-light {
  position: fixed;
  right: 5px;
  top: 10px;
  color: #eeeeee;
  background-color: #444444;
}

.toggle-light {
  background-color: #eeeeee;
  color: #444444;
}

a:visited {
  color: none;
}

a:hover,
.toggle-light:hover {
  color: #eeeeee;
  background-color: #444444;
  transition: 0.8s;
}

.toggle:hover {
  color: #444444;
  background-color: #eeeeee;
  transition: 0.8s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
