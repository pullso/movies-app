<template>
  <div id="app">
    <PosterBg :poster="posterBg" />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
  </div>
</template>

<script>
import MoviesList from "@/components/MoviesList";
import { mapGetters } from "vuex";
import PosterBg from "@/components/PosterBg";
export default {
  name: "App",
  components: {
    MoviesList,
    PosterBg
  },
  data() {
    return {
      posterBg: ""
    };
  },
  computed: {
    ...mapGetters("movies", ["moviesList"])
  },

  methods: {
    onChangePoster(poster) {
      console.log(poster);
      this.posterBg = poster;
    }
  }
};
</script>

<style>
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
