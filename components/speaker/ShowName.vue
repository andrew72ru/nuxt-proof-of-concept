<template>
  <div v-if="item">
    <p>{{ item['firstName'] }} {{ item['lastName'] }}</p>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'ShowName',

    props: {
      apiRoute: String,
    },

    computed: mapGetters({
      error: 'modules/speaker/show/error',
      isLoading: 'modules/speaker/show/isLoading',
      item: 'modules/speaker/show/retrieved'
    }),

    mounted () {
      this.retrieve(this.apiRoute);
    },

    beforeDestroy () {
      this.reset()
    },

    async fetch ({ store }) {
      await store.dispatch('modules/speaker/show/retrieve');
    },

    methods: {
      ...mapActions({
        del: 'modules/speaker/del/del',
        reset: 'modules/speaker/show/reset',
        retrieve: 'modules/speaker/show/retrieve'
      }),
    }

  }
</script>

<style scoped>

</style>
