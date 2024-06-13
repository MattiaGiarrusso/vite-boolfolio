<script>
import ProjectList from './pages/ProjectList.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    ProjectList,
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <AppFooter></AppFooter>  
</template>

<style lang="scss">

@use './style/generic';

</style>
