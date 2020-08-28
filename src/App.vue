<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
@import "variables.scss";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: $mainWhite;
  color: $mainBlack;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.4;
  padding-top: 66px;
}

h1 {
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

h3 {
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 1rem;
}

h4 {
  font-size: 1.25rem;
  line-height: 1.25;
  margin-bottom: 1.25rem;
}

h5 {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

h6 {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.btn-primary {
  background: $primaryColor;
  border: 3px solid $primaryColor;
  color: $mainBlack;
  cursor: pointer;
  display: inline-block;
  letter-spacing: $mainSpacing;
  padding: 0.4rem 0.9rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: $mainTransition;

  &:hover {
    background: transparent;
    color: $primaryColor;
  }
}
</style>
