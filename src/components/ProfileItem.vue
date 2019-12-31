<template>
  <div
    class="profile-item card text-center w-100"
    ontouchstart=""
    v-on:click="turn()"
  >
    <div v-if="!is_reversed">
      <div class="profile-title card-header">
        {{ title }}
      </div>

      <div class="profile-body card-body p-2">
        {{ description }}
      </div>
    </div>

    <div v-else>
      <p
        style="white-space: pre-line;"
        v-text="comment"
        class="card-body p-2"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProfileItem',
    props: {
      title: String,
      description: String,
      comment: String
    },
    data() {
      return {
        is_reversed: false
      }
    },
    methods: {
      turn() {
        this.is_reversed = !this.is_reversed
      }
    }
  }
</script>

<style>
  .profile-item {
    filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.6));
    margin-top: 10px;
  }
  .profile-item:active {
    background-color: rgb(102, 102, 102);
  }
</style>
