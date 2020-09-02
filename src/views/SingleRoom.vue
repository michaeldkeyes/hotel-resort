<template>
  <div>
    <div class="error" v-if="!room">
      <h3>no such room could be found...</h3>
      <router-link class="btn-primary" :to="{ name: 'Rooms' }"
        >back to rooms</router-link
      >
    </div>
    <Hero hero="roomsHero" :image="room.images[0]" v-else>
      <Banner :title="room.name + ' Room'">
        <router-link class="btn-primary" :to="{ name: 'Rooms' }"
          >back to rooms</router-link
        >
      </Banner>
    </Hero>
    <section class="single-room">
      <div class="single-room-images">
        <img
          :src="item"
          alt="item.name"
          v-for="(item, index) in images"
          :key="index"
        />
      </div>
      <div class="single-room-info">
        <article class="desc">
          <h3>details</h3>
          <p>{{ room.description }}</p>
        </article>
        <article class="info">
          <h3>info</h3>
          <h6>price : ${{ room.price }}</h6>
          <h6>size: {{ room.size }} SQFT</h6>
          <h6>
            max capacity :
            {{
              room.capacity > 1
                ? room.capacity + " people"
                : room.capacity + " person"
            }}
          </h6>
          <h6>{{ room.pets ? "pets allowed" : "no pets allowed" }}</h6>
          <h6>{{ room.breakfast && "free breakfast included" }}</h6>
        </article>
      </div>
    </section>
    <section class="room-extras">
      <h6>extras</h6>
      <ul class="extras">
        <li v-for="(item, index) in room.extras" :key="index">- {{ item }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Banner from "@/components/Banner.vue";

export default {
  name: "SingleRoom",
  components: {
    Hero,
    Banner
  },
  data: function() {
    return {
      slug: this.$route.params.slug,
      defaultBcg: "../assets/defaultBcg.jpeg"
    };
  },
  computed: {
    room() {
      return this.$store.getters.getRoom(this.slug);
    },
    images() {
      return this.room.images.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.single-room {
  padding: 5rem 0 0 0;
}

.single-room-images {
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin: 0 auto;
  width: 80vw;

  img {
    display: block;
    width: 100%;
  }
}

.single-room-info {
  display: grid;
  grid-template-columns: 1fr;
  margin: 2rem auto;
  width: 80vw;
}

.desc,
.info {
  margin: 1rem 0;
}

.desc {
  h3 {
    letter-spacing: $mainSpacing;
    text-transform: capitalize;
  }

  p {
    line-height: 1.5;
  }
}

.info {
  h3,
  h6 {
    letter-spacing: $mainSpacing;
    text-transform: capitalize;
  }

  h6 {
    font-weight: 300;
  }
}

.room-extras {
  margin: 0 auto 3rem auto;
  width: 80vw;

  h6 {
    letter-spacing: $mainSpacing;
    text-transform: capitalize;
  }
}

.extras {
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  list-style-type: none;
}

@media screen and(min-width: 992px) {
  .single-room-images,
  .single-room-info,
  .room-extras {
    max-width: 1170px;
    width: 95vw;
  }

  .single-room-info {
    display: grid;
    grid-column-gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }

  .info {
    padding-left: 3rem;
  }
}
</style>
