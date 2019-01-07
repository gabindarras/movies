<template>
    <div class="crew">
      <span class="title">Direction</span>
      <div class="actors">
        <div v-for="(crew, index) in crews" :key="index">
          <people :id="crew.id" :profile_path="crew.profile_path" :name="crew.name" :info="crew.job" />
        </div>
      </div>
    </div>
</template>

<script>
import People from './PeopleCard';

export default {
  name: 'Crew',
  components: { People },
  props: ['crews']
};
</script>

<style scoped>
.crew {
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
