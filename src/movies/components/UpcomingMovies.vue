<template>
<div v-if="movies.length > 0">
    <h1>Les films à venir</h1>
    <movie-list :movies="movies" />
</div>
</template>

<script>
import MovieList from './MovieList';
import { getUpcomingMovies } from '../movie.service.js';

export default {
  name: 'UpcomingMovies',
  components: {
    MovieList
  },
  data: function() {
    return {
      movies: []
    };
  },
  mounted() {
    getUpcomingMovies().then(response => (this.movies = response.data.results));
  }
};
</script>
