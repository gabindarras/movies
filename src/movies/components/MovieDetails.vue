<template>
  <div>
      <div class="details">
          <img class="poster" :src="getMovieImage()" />
          <div class="info">
              <span class="title">{{movie.title}}</span>
              <span class="overview">{{movie.overview}}</span>
              <div class="more">
                <h4>Date de sortie : </h4>
               {{getDate}}
                <h4 class="vote">Note moyenne : </h4>
               {{movie.vote_average}}
              </div>
              <cast :casts="casts" />
              <crew :crews="crews" />
          </div>
      </div>
      <span class="title">Films similaires</span>
      <movie-list :movies="similarMovies" />
    </div>
</template>

<script>
import Cast from '../../components/Cast';
import Crew from '../../components/Crew';
import MovieList from './MovieList';
import { getMovieDetails, getMovieCredits, getSimilarMovies } from '../movie.service.js';
import { IMAGE_PATH_DETAILS } from '../../utils/url.js';

export default {
  name: 'MovieDetails',
  components: { Cast, Crew, MovieList },
  data: function() {
    return {
      movie: {},
      similarMovies: [],
      casts: [],
      crews: []
    };
  },
  computed: {
    getDate() {
      if (this.movie) {
        const date = new Date(this.movie.release_date);
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
      }
      return '';
    }
  },
  methods: {
    getMovieInfos() {
      if (this.movie && this.movie.id !== parseInt(this.$route.params.id)) {
        getMovieDetails(this.$route.params.id).then(response => (this.movie = response.data));
        getSimilarMovies(this.$route.params.id).then(response => (this.similarMovies = response.data.results));
        getMovieCredits(this.$route.params.id).then(response => {
          this.casts = response.data.cast;
          this.crews = response.data.crew;
        });
      }
    },
    getMovieImage: function() {
      return `${IMAGE_PATH_DETAILS}${this.movie.poster_path}`;
    }
  },
  mounted() {
    this.getMovieInfos();
  },
  watch: {
    $route() {
      this.getMovieInfos();
    }
  }
};
</script>

<style scoped>
.details {
  display: flex;
  margin: 20px;
}

.poster {
  flex: 0.3;
}

.info {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0.7;
}

.title {
  margin: 20px 0;
  font-size: 30px;
  font-weight: bolder;
}

.overview {
  margin: 10px;
  font-style: italic;
}

.more {
  margin-left: 50px;
  display: flex;
  align-items: center;
}

.more > h4 {
  margin: 10px;
}
</style>
