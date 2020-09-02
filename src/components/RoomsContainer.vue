<template>
  <div>
    <Loading v-if="$store.state.loading" />
    <div v-else>
      <RoomFilter :rooms="rooms" />
      <RoomList :rooms="sortedRooms" />
    </div>
  </div>
</template>

<script>
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";

import { mapState } from "vuex";

export default {
  name: "RoomsContainer",
  components: {
    RoomFilter,
    RoomList,
    Loading
  },
  computed: {
    ...mapState(["rooms", "sortedRooms"])
  }
};
</script>
