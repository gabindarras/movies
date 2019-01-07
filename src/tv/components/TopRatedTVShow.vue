<template>
<div v-if="tvs.length > 0">
    <h1>Les séries les mieux notés</h1>
    <tv-list :tvs="tvs" />
</div>
</template>

<script>
import tvList from './TVList';
import { getTopRatedTVShow } from '../tv.service.js';

export default {
  name: 'TopRatedMovies',
  components: { tvList },
  data: function() {
    return {
      tvs: []
    };
  },
  mounted() {
    getTopRatedTVShow().then(response => (this.tvs = response.data.results));
  }
};
</script>
