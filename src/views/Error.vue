<template>
  <Hero>
    <Banner title="404" subtitle="page not found">
      <router-link class="btn-primary" to="/">return home</router-link>
    </Banner>
  </Hero>
</template>

<script>
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default {
  name: "Error",
  components: {
    Hero,
    Banner
  }
};
</script>
