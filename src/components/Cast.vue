<template>
    <div class="cast">
      <span class="title">Casting</span>
      <div class="actors">
        <div v-for="cast in casts" :key="cast.id">
          <people :id="cast.id" :profile_path="cast.profile_path" :name="cast.name" :info="`Role : ${cast.character}`" />
        </div>
      </div>
    </div>
</template>

<script>
import People from './PeopleCard';

export default {
  name: 'Cast',
  components: { People },
  props: ['casts']
};
</script>

<style scoped>
.cast {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.title {
  font-size: 20px;
  font-weight: 600;
}

.actors {
  margin: 10px;
  display: flex;
  overflow: auto;
  width: 1000px;
}
</style>
