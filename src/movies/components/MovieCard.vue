<template>
    <router-link :to="`/movies/${movie.id}`" class="movie">
        <img :src="getImagePath" />
        <div>{{movie.title}}</div>
    </router-link>
</template>

<script>
import { IMAGE_PATH_LIST } from '../../utils/url.js';

export default {
  name: 'MovieCard',
  props: ['movie'],
  computed: {
    getImagePath: function() {
      return `${IMAGE_PATH_LIST}${this.movie.poster_path}`;
    }
  }
};
</script>

<style scoped>
.movie {
  margin: 10px;
  width: 200px;
  cursor: pointer;
}
</style>
