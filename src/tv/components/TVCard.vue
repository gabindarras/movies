<template>
    <router-link :to="`/tv/${tv.id}`" class="tv">
        <img :src="getImagePath" />
        <div>{{tv.name}}</div>
    </router-link>
</template>

<script>
import { IMAGE_PATH_LIST } from '../../utils/url.js';

export default {
  name: 'TVCard',
  props: ['tv'],
  computed: {
    getImagePath: function() {
      return `${IMAGE_PATH_LIST}${this.tv.poster_path}`;
    }
  }
};
</script>

<style scoped>
.tv {
  margin: 10px;
  width: 200px;
  cursor: pointer;
}
</style>
