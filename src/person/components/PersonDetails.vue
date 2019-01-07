<template>
  <div>
    <div class="details">
        <img class="poster" :src="getPersonImage()" />
        <div class="info">
            <span class="title">{{person.name}}</span>
            <span class="overview">{{person.biography}}</span>
            <span class="title">Filmographie</span>
            <div class="more">
                <person-movies :movies="movies" />
            </div>
            <span class="title">Séries TV</span>
            <div class="more">
                <person-movies :movies="tvs" />
            </div>
        </div>
      </div>
</div>
</template>

<script>
import { getPersonDetails, getPersonTVShowCredits, getPersonMoviesCredits } from '../person.service.js';
import { IMAGE_PATH_DETAILS } from '../../utils/url.js';
import PersonMovies from './PersonMovies';

export default {
  name: 'PersonDetails',
  components: { PersonMovies },
  data: function() {
    return {
      person: {},
      movies: [],
      tvs: []
    };
  },
  methods: {
    getPersonInfos() {
      if (this.person && this.person.id !== parseInt(this.$route.params.id)) {
        getPersonDetails(this.$route.params.id).then(response => (this.person = response.data));
        getPersonTVShowCredits(this.$route.params.id).then(response => (this.tvs = response.data.cast));
        getPersonMoviesCredits(this.$route.params.id).then(response => (this.movies = response.data.cast));
      }
    },
    getPersonImage: function() {
      return `${IMAGE_PATH_DETAILS}${this.person.profile_path}`;
    }
  },
  mounted() {
    this.getPersonInfos();
  },
  watch: {
    $route() {
      this.getPersonInfos();
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
  justify-content: center;
}

.more > h4 {
  margin: 10px;
}
</style>
