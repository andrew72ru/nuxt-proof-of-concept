<template>
  <div>
    <h1>Show {{ item && item['@id'] }}</h1>

    <div
      v-if="isLoading"
      class="alert alert-info"
      role="status">Loading...</div>
    <div
      v-if="error"
      class="alert alert-danger"
      role="alert">
      <span
        class="fa fa-exclamation-triangle"
        aria-hidden="true" /> {{ error }}
    </div>
    <div
      v-if="deleteError"
      class="alert alert-danger"
      role="alert">
      <span
        class="fa fa-exclamation-triangle"
        aria-hidden="true" /> {{ deleteError }}
    </div>
    <div
      v-if="item"
      class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>events</td>
            <td>{{ item['events'] }}</td>
          </tr>
          <tr>
            <td>shortDescription</td>
            <td>{{ item['shortDescription'] }}</td>
          </tr>
          <tr>
            <td>longDescription</td>
            <td>{{ item['longDescription'] }}</td>
          </tr>
          <tr>
            <td>socialLinks</td>
            <td>{{ item['socialLinks'] }}</td>
          </tr>
          <tr>
            <td>files</td>
            <td>{{ item['files'] }}</td>
          </tr>
          <tr>
            <td>articles</td>
            <td>{{ item['articles'] }}</td>
          </tr>
          <tr>
            <td>interviews</td>
            <td>{{ item['interviews'] }}</td>
          </tr>
          <tr>
            <td>schedules</td>
            <td>{{ item['schedules'] }}</td>
          </tr>
          <tr>
            <td>id</td>
            <td>{{ item['id'] }}</td>
          </tr>
          <tr>
            <td>active</td>
            <td>{{ item['active'] }}</td>
          </tr>
          <tr>
            <td>slug</td>
            <td>{{ item['slug'] }}</td>
          </tr>
          <tr>
            <td>firstName</td>
            <td>{{ item['firstName'] }}</td>
          </tr>
          <tr>
            <td>lastName</td>
            <td>{{ item['lastName'] }}</td>
          </tr>
          <tr>
            <td>avatar</td>
            <td>{{ item['avatar'] }}</td>
          </tr>
          <tr>
            <td>position</td>
            <td>{{ item['position'] }}</td>
          </tr>
          <tr>
            <td>createdAt</td>
            <td>{{ item['createdAt'] }}</td>
          </tr>
          <tr>
            <td>updatedAt</td>
            <td>{{ item['updatedAt'] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <router-link
      v-if="item"
      :to="{ name: 'SpeakerList' }"
      class="btn btn-default">Back to list</router-link>
    <button
      class="btn btn-danger"
      @click="deleteItem(item)">Delete</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    deleteError: 'speaker/del/error',
    error: 'speaker/show/error',
    isLoading: 'speaker/show/isLoading',
    item: 'speaker/show/retrieved'
  }),

  beforeDestroy () {
    this.reset()
  },

  created () {
    this.retrieve(decodeURIComponent(this.$route.params.id))
  },

  methods: {
    ...mapActions({
      del: 'speaker/del/del',
      reset: 'speaker/show/reset',
      retrieve: 'speaker/show/retrieve'
    }),

    deleteItem (item) {
      if (window.confirm('Are you sure you want to delete this item?')) {
        this.del(item).then(() => this.$router.push({ name: 'SpeakerList' }))
      }
    }
  }
}
</script>
