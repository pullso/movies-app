<template>
  <div id="app">
    <PosterBg :poster="posterBg" />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
    <MoviesPagination
      :current-page="currentPage"
      :pre-page="moviesPerPage"
      :total="moviesLength"
      @pageChanged="onPageChanged"
    />
  </div>
</template>

<script>
import MoviesList from "@/components/MoviesList";
import { mapGetters, mapActions } from "vuex";
import PosterBg from "@/components/PosterBg";
import MoviesPagination from "@/components/MoviesPagination";
export default {
  name: "App",
  components: {
    MoviesList,
    PosterBg,
    MoviesPagination
  },
  data() {
    return {
      posterBg: ""
    };
  },

  computed: {
    ...mapGetters("movies", [
      "moviesList",
      "currentPage",
      "moviesPerPage",
      "moviesLength"
    ])
  },
  watch: {
    "$route.query": {
      handler: "onPageQueryChanged",
      immediate: true,
      deep: true
    }
  },

  methods: {
    ...mapActions("movies", ["changeCurrentPage"]),
    onPageQueryChanged({ page = 1 }) {
      this.changeCurrentPage(Number(page));
    },
    onChangePoster(poster) {
      this.posterBg = poster;
    },
    onPageChanged(page) {
      this.$router.push({ query: { page } });
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
  overflow-y: auto;
  height: 100vh;
}
</style>
