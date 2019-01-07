<template>
  <div>
      <div class="details">
          <img class="poster" :src="getMovieImage()" />
          <div class="info">
              <span class="title">{{tv.name}}</span>
              <span class="overview">{{tv.overview}}</span>
              <div class="more">
                <h4>Date de sortie : </h4>
               {{getDate}}
                <h4 class="vote">Note moyenne : </h4>
               {{tv.vote_average}}
              </div>
              <cast :casts="casts" />
              <crew :crews="crews" />
          </div>
      </div>
      <span class="title">Séries similaires</span>
      <tv-list :tvs="similarTvs" />
    </div>
</template>

<script>
import Cast from '../../components/Cast';
import Crew from '../../components/Crew';
import tvList from './TVList';
import { getTVShowDetails, getTVShowCredits, getSimilarTVShow } from '../tv.service.js';
import { IMAGE_PATH_DETAILS } from '../../utils/url.js';

export default {
  name: 'MovieDetails',
  components: { Cast, Crew, tvList },
  data: function() {
    return {
      tv: {},
      similarTvs: [],
      casts: [],
      crews: []
    };
  },
  computed: {
    getDate() {
      if (this.tv) {
        const date = new Date(this.tv.first_air_date);
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
      }
      return '';
    }
  },
  methods: {
    getMovieInfos() {
      if (this.tv && this.tv.id !== parseInt(this.$route.params.id)) {
        getTVShowDetails(this.$route.params.id).then(response => (this.tv = response.data));
        getSimilarTVShow(this.$route.params.id).then(response => (this.similarTvs = response.data.results));
        getTVShowCredits(this.$route.params.id).then(response => {
          this.casts = response.data.cast;
          this.crews = response.data.crew;
        });
      }
    },
    getMovieImage: function() {
      return `${IMAGE_PATH_DETAILS}${this.tv.poster_path}`;
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
