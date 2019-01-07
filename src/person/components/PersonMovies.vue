<template>
    <div class="movies">
        <div v-for="movie in movies" :key="movie.id" :title="movie.title" >
            <router-link :to="`/movies/${movie.id}`" class="movie">
                <img v-if="movie.poster_path" :src="getImagePath(movie.poster_path)" class="image"/>
                <img v-else src="../../assets/avatar.png" class="image" />
            </router-link>
            <i>Rôle : {{movie.character}}</i>
        </div>
    </div>
</template>

<script>
import { IMAGE_PATH_LIST } from '../../utils/url';

export default {
  name: 'PeopleMovies',
  props: ['movies'],
  methods: {
    getImagePath: function(poster_path) {
      return `${IMAGE_PATH_LIST}${poster_path}`;
    }
  }
};
</script>

<style scoped>
.movies {
  display: flex;
  overflow: auto;
  width: 1000px;
}

.movie {
  margin: 10px;
}

i {
  color: black;
  text-decoration: none;
}
</style>

