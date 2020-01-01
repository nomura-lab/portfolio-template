<template>
  <div class="page1 container" id="page1">
    <h1>This is Page1</h1>
    <div class="card-deck row">
      <div
        v-for="(item, key) in profileItems"
        v-bind:key="key"
        class="col-xs-12 col-md-4"
      >
        <profile-item v-bind="item" />
      </div>
    </div>
    <button v-on:click="listenData">ADD DATA</button>
  </div>
</template>

<script>
  import ProfileItem from '../components/ProfileItem.vue'
  import firebase from '../firebase.js'
  export default {
    components: {
      ProfileItem
    },
    data() {
      return {
        profileItems: [
          { title: 'title1', description: 'description1', comment: 'comment1' },
          { title: 'title2', description: 'description2', comment: 'comment2' },
          { title: 'title3', description: 'description3', comment: 'comment3' },
          { title: 'title4', description: 'description4', comment: 'comment4' },
          { title: 'title5', description: 'description5', comment: 'comment5' },
          { title: 'title6', description: 'description6', comment: 'comment6' }
        ]
      }
    },
    computed: {
      tableDatabase: () =>
        firebase
          .firestore()
          .collection('profileitems')
          .doc('page1')
    },
    methods: {
      listenData: function() {
        return new Promise(resolve => {
          resolve(
            this.tableDatabase.onSnapshot(data => {
              this.profileItems.push(data.data())
            })
          )
        })
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
