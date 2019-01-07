<template>
<div v-if="movies.length > 0">
    <h1>Les films les plus populaires</h1>
    <movie-list :movies="movies" />
</div>
</template>

<script>
import MovieList from './MovieList';
import { getPopularMovies } from '../movie.service.js';

export default {
  name: 'PopularMovies',
  components: {
    MovieList
  },
  data: function() {
    return {
      movies: []
    };
  },
  mounted() {
    getPopularMovies().then(response => (this.movies = response.data.results));
  }
};
</script>
