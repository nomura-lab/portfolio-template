<template>
  <div class="page1" id="page1">
    <h1>This is Page1</h1>
    <profile-item
      v-bind:title="'Title1'"
      v-bind:description="'description'"
      v-bind:comment="'comment1'"
    />
  </div>
</template>

<script>
  import ProfileItem from '../components/ProfileItem.vue'
  export default {
    components: {
      ProfileItem
    }
  }
</script>

<style scoped>
  .page1 {
    height: 1000px;
    background-color: aqua;
  }
</style>
