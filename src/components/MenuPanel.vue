<template>
    <div @mouseover="togglePanel()" @mouseout="togglePanel()" class="menu">
        <span class="menu-title">{{title}}</span>
        <div v-if="showPanel" class="sub-menu">
          <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MenuPanel',
  props: ['title'],
  data: function() {
    return {
      showPanel: false
    };
  },
  methods: {
    togglePanel() {
      this.showPanel = !this.showPanel;
    }
  }
};
</script>

<style scoped>
.menu {
  position: relative;
}

.menu-title {
  padding: 20px 10px;
}

.sub-menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  top: 35px;
  left: 0;
  background-color: #081c24;
}
</style>
