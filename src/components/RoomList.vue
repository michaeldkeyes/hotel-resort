<template>
  <div>
    <div class="empty-search" v-if="rooms.length === 0">
      <h3>
        unfortunately no rooms matched your search parameters
      </h3>
    </div>
    <section class="roomslist" v-else>
      <div class="roomslist-center">
        <Room v-for="item in rooms" :key="item.id" :room="item" />
      </div>
    </section>
  </div>
</template>

<script>
import Room from "./Room";

export default {
  name: "RoomList",
  components: {
    Room
  },
  props: {
    rooms: Array
  }
};
</script>

<style lang="scss" scoped>
.roomslist {
  padding: 5rem 0;
}

.roomslist-center {
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  margin: 0 auto;
  width: 80vw;
}

@media screen and (min-width: 776px) {
  .roomslist-center {
    width: 90vw;
  }
}

@media screen and (min-width: 992px) {
  .roomslist-center {
    max-width: 1170px;
    width: 95vw;
  }
}
</style>
