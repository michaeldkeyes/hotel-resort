<template>
  <div class="section-title">
    <h4>{{ title }}</h4>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.section-title {
  margin-bottom: 4rem;
  text-align: center;

  h4 {
    font-size: 2rem;
    letter-spacing: $mainSpacing;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }

  div {
    background: $primaryColor;
    height: 5px;
    margin: 0 auto;
    width: 5rem;
  }
}
</style>
