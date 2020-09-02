<template>
  <section class="featured-rooms">
    <Title title="featured rooms" />
    <div class="featured-rooms-center" v-if="!this.$store.state.loading">
      <Room v-for="room in featuredRooms" :key="room.id" :room="room" />
    </div>
    <Loading v-else />
  </section>
</template>

<script>
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

import { mapGetters } from "vuex";

export default {
  name: "FeaturedRooms",
  components: {
    Loading,
    Room,
    Title
  },
  computed: {
    ...mapGetters(["featuredRooms"])
  }
};
</script>

<style lang="scss" scoped>
.featured-rooms {
  padding: 5rem 0;
}

.featured-rooms-center {
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  margin: 0 auto;
  width: 80vw;
}

@media screen and (min-width: 776px) {
  .featured-rooms-center {
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    width: 90vw;
  }
}

@media screen and (min-width: 992px) {
  .featured-rooms-center {
    max-width: 1170px;
    width: 95vw;
  }
}
</style>
