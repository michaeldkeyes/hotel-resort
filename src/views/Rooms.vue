<template>
  <div>
    <Hero hero="roomsHero">
      <Banner title="our rooms">
        <router-link class="btn-primary" to="/">return home</router-link>
      </Banner>
    </Hero>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";

export default {
  name: "Rooms",
  components: {
    Hero,
    Banner
  }
};
</script>
