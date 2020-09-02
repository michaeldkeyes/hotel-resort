<template>
  <article class="room">
    <div class="img-container">
      <img :src="room.images[0]" alt="single room" />
      <div class="price-top">
        <h6>${{ room.price }}</h6>
        <p>per night</p>
      </div>
      <router-link
        class="btn-primary room-link"
        :to="{ name: 'SingleRoom', params: { slug: room.slug } }"
      >
        Features</router-link
      >
    </div>
    <p class="room-info">{{ room.name }}</p>
  </article>
</template>

<script>
export default {
  name: "Room",
  props: {
    room: {
      name: {
        type: String,
        required: true
      },
      slug: {
        type: String,
        required: true
      },
      images: {
        type: Array,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../variables.scss";

.room {
  box-shadow: $lightShadow;
  transition: $mainTransition;

  &:hover {
    box-shadow: $darkShadow;
  }
}

.img-container {
  position: relative;

  img {
    display: block;
    transition: $mainTransition;
    width: 100%;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.8);

    img {
      opacity: 0.3;
    }

    .price-top {
      opacity: 0;
    }

    .room-link {
      transform: translate(-50%, -50%) scale(1);
    }
  }
}

.price-top {
  background: rgba(0, 0, 0, 0.8);
  border-bottom-right-radius: 1rem;
  color: $mainWhite;
  font-size: 0.5rem;
  padding: 0.3rem 0.6rem 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  transition: $mainTransition;

  h6 {
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: $mainSpacing;
    margin-bottom: 0;
  }
}

.room-link {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: scale(0);
  transition: all 0.3s linear;
}

.room-info {
  background: $darkGrey;
  font-weight: 700;
  letter-spacing: $mainSpacing;
  padding: 0.5rem 0;
  text-align: center;
  text-transform: capitalize;
}
</style>
