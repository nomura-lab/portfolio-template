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
        profileItems: []
      }
    },
    computed: {
      tableDatabase: () => firebase.firestore().collection('profileitems')
    },
    methods: {
      listenData: function() {
        return new Promise(resolve => {
          resolve(
            this.tableDatabase.get().then(snapshot => {
              snapshot.forEach(doc => {
                this.profileItems.push(doc.data())
              })
            })
          )
        })
      }
    },
    created() {
      this.listenData()
    }
  }
</script>

<style scoped>
  .page1 {
    height: 1000px;
    background-color: aqua;
  }
</style>
