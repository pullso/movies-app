<template>
  <div>
    <BContainer>
      <h3 class="list-title">IMDB Top 250</h3>
      <BRow>
        <template v-if="isExist">
          <BCol md="3" sm="4" cols="12" v-for="(movie, key) in list" :key="key">
            <MovieItem :movie="movie" @mouseover.native="onMouseOver(movie.Poster)" />
          </BCol>
        </template>
        <template v-else>
          <div>Empty List</div>
        </template>
      </BRow>
    </BContainer>
  </div>
</template>

<script>
import MovieItem from "./MovieItem";
export default {
  name: "MoviesList",
  components: {
    MovieItem
  },
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    }
  },
  methods: {
    onMouseOver(poster) {
      this.$emit("changePoster", poster);
    }
  }
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
  color: #fff;
}
</style>
