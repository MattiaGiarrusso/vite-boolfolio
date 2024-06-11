<script>
import ProjectList from './pages/ProjectList.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    ProjectList,
    AppHeader
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>

</template>

<style lang="scss">

@use './style/generic';

</style>
