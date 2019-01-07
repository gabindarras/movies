<template>
  <div class="movies">
    <movie-card v-for="movie in movies" :key="movie.id" :movie="movie"></movie-card>
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue';

export default {
  name: 'MovieList',
  components: {
    MovieCard
  },
  props: ['movies']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movies {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
