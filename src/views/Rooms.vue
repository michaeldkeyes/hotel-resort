<template>
  <div>
    <Hero hero="roomsHero">
      <Banner title="our rooms">
        <router-link class="btn-primary" :to="{ name: 'Home' }"
          >return home</router-link
        >
      </Banner>
    </Hero>
    <RoomsContainer />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import RoomsContainer from "@/components/RoomsContainer";

export default {
  name: "Rooms",
  components: {
    Hero,
    Banner,
    RoomsContainer
  }
};
</script>
