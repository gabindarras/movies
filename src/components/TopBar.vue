<template>
    <div class="topbar">
        <div class="title">MOVIES</div>
        <div class="nav">
          <menu-panel :title="'Films'">
            <router-link :to="{ name: 'Popular Movies' }">Populaires</router-link>
            <router-link :to="{ name: 'Upcoming Movies' }">A venir</router-link>
            <router-link :to="{ name: 'Top Rated Movies' }">Les mieux notés</router-link>
          </menu-panel>
          <menu-panel :title="'Séries'">
            <router-link :to="{ name: 'Popular TV Show' }">Populaires</router-link>
            <router-link :to="{ name: 'Top Rated TV Show' }">Les mieux notés</router-link>
          </menu-panel>
        </div>
    </div>
</template>

<script>
import MenuPanel from './MenuPanel';

export default {
  name: 'TopBar',
  components: {
    MenuPanel
  }
};
</script>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #081c24;
  color: white;
}

.title {
  padding-left: 20px;
  font-size: 20px;
  font-weight: 900;
  color: #01d277;
}

.nav {
  display: flex;
  align-items: center;
  font-weight: 700;
  padding: 10px;
  color: white;
  text-decoration: none;
}

a {
  font-weight: 700;
  padding: 10px;
  color: white;
  text-decoration: none;
  white-space: nowrap;
  width: 200px;
}

a:hover {
  background-color: white;
  color: #081c24;
}
</style>
