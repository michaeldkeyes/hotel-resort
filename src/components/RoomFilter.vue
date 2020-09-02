<template>
  <section class="filter-container">
    <Title title="search rooms" />
    <form class="filter-form">
      <div class="form-group">
        <label for="type">room type</label>
        <select
          class="form-control"
          name="type"
          id="type"
          v-model="type"
          @change="filterRooms"
        >
          <option v-for="(type, index) in types" :value="type" :key="index">{{
            type
          }}</option>
          {{
            types
          }}
        </select>
      </div>
      <div class="form-group">
        <label for="capacity">guests</label>
        <select
          class="form-control"
          name="capacity"
          id="capacity"
          v-model="capacity"
          @change="filterRooms"
        >
          <option v-for="(item, index) in people" :value="item" :key="index">{{
            item
          }}</option>
          {{
            people
          }}
        </select>
      </div>
      <div class="form-group">
        <label for="price"> room price ${{ price }} </label>
        <input
          class="form-control"
          type="range"
          name="price"
          id="price"
          :min="minPrice"
          :max="maxPrice"
          v-model="price"
          @change="filterRooms"
        />
      </div>
      <div class="form-group">
        <label for="size">room size</label>
        <div class="size-inputs">
          <input
            class="size-input"
            type="number"
            name="minSize"
            id="size"
            v-model="minSize"
            @change="filterRooms"
          />
          <input
            class="size-input"
            type="number"
            name="maxSize"
            id="size"
            v-model="maxSize"
            @change="filterRooms"
          />
        </div>
      </div>
      <div class="form">
        <div class="single-extra">
          <input
            type="checkbox"
            name="breakfast"
            id="breakfast"
            v-model="breakfast"
            @change="filterRooms"
          />
          <label for="breakfast">breakfast</label>
        </div>
        <div class="single-extra">
          <input
            type="checkbox"
            name="pets"
            id="pets"
            v-model="pets"
            @change="filterRooms"
          />
          <label for="pets">pets</label>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import Title from "./Title";

import { mapState } from "vuex";

export default {
  name: "RoomFilter",
  components: {
    Title
  },
  props: {
    rooms: Array
  },
  computed: {
    ...mapState(["minPrice", "maxPrice", "breakfast", "pets"]),
    type: {
      get() {
        return this.$store.state.type;
      },
      set(value) {
        this.$store.commit("updateType", value);
      }
    },
    capacity: {
      get() {
        return this.$store.state.capacity;
      },
      set(value) {
        this.$store.commit("updateCapacity", value);
      }
    },
    price: {
      get() {
        return this.$store.state.price;
      },
      set(value) {
        this.$store.commit("updatePrice", parseInt(value));
      }
    },
    minSize: {
      get() {
        return this.$store.state.minSize;
      },
      set(value) {
        this.$store.commit("updateMinSize", parseInt(value));
      }
    },
    maxSize: {
      get() {
        return this.$store.state.maxSize;
      },
      set(value) {
        this.$store.commit("updateMaxSize", parseInt(value));
      }
    },
    breakfast: {
      get() {
        return this.$store.state.breakfast;
      },
      set() {
        this.$store.commit("updateBreakfast");
      }
    },
    pets: {
      get() {
        return this.$store.state.pets;
      },
      set() {
        this.$store.commit("updatePets");
      }
    },
    types() {
      let uniqueTypes = this.getUniques("type");
      return ["all", ...uniqueTypes];
    },
    people() {
      return this.getUniques("capacity");
    }
  },
  methods: {
    getUniques(field) {
      return [...new Set(this.rooms.map(room => room[field]))];
    },
    filterRooms() {
      let tempRooms = [...this.rooms];
      // Filter by type
      if (this.type !== "all") {
        tempRooms = tempRooms.filter(room => room.type === this.type);
      }

      // Filter by breakfast
      if (this.breakfast) {
        tempRooms = tempRooms.filter(room => room.breakfast === true);
      }

      // Filter by pets
      if (this.pets) {
        tempRooms = tempRooms.filter(room => room.pets === true);
      }

      // Filter by everything else
      tempRooms = tempRooms.filter(
        room =>
          room.capacity >= this.capacity &&
          room.price <= this.price &&
          room.size >= this.minSize &&
          room.size <= this.maxSize
      );

      this.$store.commit("setSortedRooms", tempRooms);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.filter-container {
  padding: 5rem 0;
}

.filter-form {
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
  margin: 0 auto;
  width: 60vw;
}

.form-group {
  text-transform: capitalize;

  label {
    display: block;
    letter-spacing: $mainSpacing;
    margin-bottom: 0.5rem;
  }
}

.form-control {
  background: transparent;
  font-size: 1rem;
  width: 100%;
}

.size-inputs {
  display: flex;
}

.size-input {
  border: 1px solid $mainBlack;
  border-radius: 0.3rem;
  margin-right: 0.3rem;
  padding: 0.2rem;
  width: 40%;
}

.single-extra {
  label {
    display: inline-block;
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }
}

@media screen and (min-width: 776px) {
  .filter-form {
    width: 70vw;
  }
}

@media screen and (min-width: 992px) {
  .filter-form {
    max-width: 1170px;
    width: 95vw;
  }
}
</style>
