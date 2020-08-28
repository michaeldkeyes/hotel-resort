<template>
  <header :class="hero">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "Hero",
  props: {
    children: String,
    hero: {
      type: String,
      default: "defaultHero"
    }
  }
};
</script>

<style lang="scss" scoped>
.defaultHero,
.roomsHero {
  background: url("../assets/defaultBcg.jpeg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 66px);
}

.roomsHero {
  background-image: url("../assets/room-2.jpeg");
  min-height: 60vh;
}
</style>
