<template>
  <div class="loading">
    <h4>rooms data loading...</h4>
    <img src="@/assets/loading-arrow.gif" />
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style lang="scss" scoped>
.loading {
  margin-top: 3rem;
  text-align: center;
  text-transform: capitalize;
}
</style>
