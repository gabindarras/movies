<template>
    <router-link :to="`/person/${id}`" class="people">
        <img v-if="profile_path" :src="getProfilImage(profile_path)" class="image"/>
        <img v-else src="../assets/avatar.png" class="image" />
        <span class="name">{{name}}</span>
        <i>{{info}}</i>
    </router-link>
</template>


<script>
import { IMAGE_PATH_ACTOR } from '../utils/url';

export default {
  name: 'PeopleCard',
  props: ['id', 'profile_path', 'name', 'info'],
  methods: {
    getProfilImage: function(profile_path) {
      return `${IMAGE_PATH_ACTOR}${profile_path}`;
    }
  }
};
</script>

<style scoped>
.people {
  margin: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.image {
  height: 200px;
}

.name {
  font-size: 12px;
  margin-top: 10px;
}

i {
  font-size: 12px;
}
</style>

