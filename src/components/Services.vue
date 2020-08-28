<template>
  <section class="services">
    <Title title="services" />
    <div class="services-center">
      <article class="service" v-for="(item, index) in services" :key="index">
        <span>
          <i :class="item.icon"></i>
        </span>
        <h6>{{ item.title }}</h6>
        <p>{{ item.info }}</p>
      </article>
    </div>
  </section>
</template>

<script>
import Title from "./Title";

export default {
  name: "Services",
  components: {
    Title
  },
  data: function() {
    return {
      services: [
        {
          icon: "fas fa-cocktail",
          title: "Free Cocktails",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facere."
        },
        {
          icon: "fas fa-hiking",
          title: "Endless Hiking",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facere."
        },
        {
          icon: "fas fa-shuttle-van",
          title: "Free Shuttle",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facere."
        },
        {
          icon: "fas fa-beer",
          title: "Best Beer",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facere."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.services {
  background: $darkGrey;
  padding: 5rem 0;
  text-align: center;
}

.services-center {
  display: grid;
  grid-column-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  grid-row-gap: 2rem;
  margin: 0 auto;
  width: 90vw;
}

.service {
  span {
    color: $primaryColor;
    display: inline-block;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  h6 {
    letter-spacing: $mainSpacing;
    text-transform: capitalize;
  }

  p {
    margin: 0 auto;
    width: 80%;
  }
}

@media screen and (min-width: 992px) {
  .services-center {
    max-width: 1170px;
    width: 95vw;
  }
}

@media screen and (min-width: 1200px) {
  .service {
    p {
      width: 100%;
    }
  }
}
</style>
