<template>
  <div class="tvs">
    <tv-card v-for="tv in tvs" :key="tv.id" :tv="tv"></tv-card>
  </div>
</template>

<script>
import tvCard from './TVCard.vue';

export default {
  name: 'tvList',
  components: {
    tvCard
  },
  props: ['tvs']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tvs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
