<template>
  <div class="page1" id="page1">
    <h1>This is Page1</h1>
    <div class="card-deck">
      <div v-for="(item, key) in profileItems" v-bind:key="key">
        <profile-item v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script>
  import ProfileItem from '../components/ProfileItem.vue'
  export default {
    components: {
      ProfileItem
    },
    data() {
      return {
        profileItems: [
          { title: 'title1', description: 'description1', comment: 'comment1' },
          { title: 'title2', description: 'description2', comment: 'comment2' },
          { title: 'title3', description: 'description3', comment: 'comment3' }
        ]
      }
    }
  }
</script>

<style scoped>
  .page1 {
    height: 1000px;
    background-color: aqua;
  }
</style>
