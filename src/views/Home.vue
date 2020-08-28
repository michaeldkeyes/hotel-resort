<template>
  <div>
    <Hero>
      <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        <router-link class="btn-primary" to="/rooms">our rooms</router-link>
      </Banner>
    </Hero>
    <Services />
    <FeaturedRooms />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import FeaturedRooms from "@/components/FeaturedRooms";

export default {
  name: "Home",
  components: {
    Hero,
    Banner,
    Services,
    FeaturedRooms
  }
};
</script>
