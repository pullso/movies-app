<template>
  <BPagination
    v-model="currentPageModel"
    class="movies-pagination d-flex justify-content-center"
    :per-page="perPage"
    :total-rows="total"
    prev-text="Prev"
    next-text="Next"
  />
</template>

<script>
export default {
  name: "MoviesPagination",

  props: {
    currentPage: { type: Number, default: 1 },
    total: { type: Number, default: 1 },
    perPage: { type: Number, default: 1 }
  },
  computed: {
    currentPageModel: {
      get() {
        return this.currentPage;
      },
      set(value) {
        console.log(value);
        this.$emit("pageChanged", value);
      }
    }
  }
};
</script>

<style scoped>
.movies-pagination {
  margin-top: 30px;
}
.movies-pagination >>> .page-item .page-link {
  background-color: transparent;
  font-size: 12px;
  color: #fff;
  box-shadow: none;
}
.movies-pagination >>> .page-item .page-link .active {
  border-color: #fff;
  background-color: #000;
  color: #000;
}
.movies-pagination >>>     .page-item .disabled .page-link {
  color: lightgray;
}
</style>
