<template>
<div v-if="tvs.length > 0">
    <h1>Les séries les plus populaires</h1>
    <tv-list :tvs="tvs" />
</div>
</template>

<script>
import tvList from './TVList';
import { getPopularTVShow } from '../tv.service.js';

export default {
  name: 'PopularTVShow',
  components: {
    tvList
  },
  data: function() {
    return {
      tvs: []
    };
  },
  mounted() {
    getPopularTVShow().then(response => (this.tvs = response.data.results));
  }
};
</script>
