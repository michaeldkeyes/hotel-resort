<template>
  <header :class="hero" :style="{ background: img() }">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "Hero",
  props: {
    hero: {
      type: String,
      default: "defaultHero"
    },
    image: String
  },
  methods: {
    img() {
      if (this.image) {
        return `url(${this.image}) center/cover no-repeat`;
      }
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
