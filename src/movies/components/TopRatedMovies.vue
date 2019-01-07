<template>
<div v-if="movies.length > 0">
    <h1>Les films les mieux notés</h1>
    <movie-list :movies="movies" />
</div>
</template>

<script>
import MovieList from './MovieList';
import { getTopRatedMovies } from '../movie.service.js';

export default {
  name: 'TopRatedMovies',
  components: {
    MovieList
  },
  data: function() {
    return {
      movies: []
    };
  },
  mounted() {
    getTopRatedMovies().then(response => (this.movies = response.data.results));
  }
};
</script>
