<template>
  <div>
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <router-link :to="{ name: 'Home' }">
            <img src="@/assets/logo.svg" alt="Beach Resort" />
          </router-link>
          <button class="nav-btn" type="button" @click="handleToggle">
            <i class="fas fa-align-right nav-icon"></i>
          </button>
        </div>
        <ul :class="[isOpen ? 'nav-links show-nav' : 'nav-links']">
          <li>
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Rooms' }">Rooms</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: function() {
    return {
      isOpen: false
    };
  },
  methods: {
    handleToggle: function() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/variables.scss";

.navbar {
  background: $offWhite;
  padding: 0.75rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.nav-header {
  display: flex;
  justify-content: space-between;
}

.nav-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}

.nav-icon {
  color: $primaryColor;
  font-size: 1.5rem;
}
.nav-links {
  height: 0;
  overflow: hidden;
  transition: $mainTransition;
  list-style-type: none;

  a {
    color: $mainBlack;
    display: block;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: $mainSpacing;
    padding: 1rem 0;
    text-align: center;
    text-decoration: none;
    transition: $mainTransition;

    &:hover {
      color: $primaryColor;
    }
  }
}

.show-nav {
  height: 100px;
}

@media screen and (min-width: 768px) {
  .nav-btn {
    display: none;
  }

  .nav-center {
    display: flex;
    margin: 0 auto;
    max-width: 1170px;
  }

  .nav-links {
    display: flex;
    height: auto;
    margin-left: 4rem;

    a {
      margin: 0 1rem;
      padding: 0.5rem 0;
    }
  }
}
</style>
