<template>
  <div class="banner">
    <h1>{{ title }}</h1>
    <div></div>
    <p>{{ subtitle }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    title: String,
    subtitle: String
  }
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.banner {
  background: rgba(0, 0, 0, 0.5);
  color: $mainWhite;
  display: inline-block;
  letter-spacing: $mainSpacing;
  padding: 2rem 1rem;
  text-align: center;
  text-transform: capitalize;

  h1 {
    font-size: 2.5rem;
  }

  div {
    background: $primaryColor;
    height: 5px;
    margin: 1.7rem auto;
    width: 10rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
}

@media screen and (min-width: 576px) {
  .banner {
    padding: 2rem 3rem;

    h1 {
      font-size: 3rem;
    }
  }
}

@media screen and (min-width: 992px) {
  .banner {
    padding: 2rem 6rem;

    h1 {
      font-size: 4rem;
    }
  }
}
</style>
