<template>
  <div id="app">
    <top-bar />
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import TopBar from './components/TopBar';

export default {
  name: 'app',
  components: {
    TopBar
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
