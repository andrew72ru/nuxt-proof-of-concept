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
            <td>title</td>
            <td>{{ item['title'] }}</td>
          </tr>
          <tr>
            <td>startDate</td>
            <td>{{ item['startDate'] }}</td>
          </tr>
          <tr>
            <td>finishDate</td>
            <td>{{ item['finishDate'] }}</td>
          </tr>
          <tr>
            <td>description</td>
            <td>{{ item['description'] }}</td>
          </tr>
          <tr>
            <td>price</td>
            <td>{{ item['price'] }}</td>
          </tr>
          <tr>
            <td>fullPrice</td>
            <td>{{ item['fullPrice'] }}</td>
          </tr>
          <tr>
            <td>externalId</td>
            <td>{{ item['externalId'] }}</td>
          </tr>
          <tr>
            <td>heading</td>
            <td>{{ item['heading'] }}</td>
          </tr>
          <tr>
            <td>type</td>
            <td>{{ item['type'] }}</td>
          </tr>
          <tr>
            <td>speakers</td>
            <td>{{ item['speakers'] }}</td>
          </tr>
          <tr>
            <td>place</td>
            <td>{{ item['place'] }}</td>
          </tr>
          <tr>
            <td>manager</td>
            <td>{{ item['manager'] }}</td>
          </tr>
          <tr>
            <td>tags</td>
            <td>{{ item['tags'] }}</td>
          </tr>
          <tr>
            <td>visualTheme</td>
            <td>{{ item['visualTheme'] }}</td>
          </tr>
          <tr>
            <td>currency</td>
            <td>{{ item['currency'] }}</td>
          </tr>
          <tr>
            <td>discounts</td>
            <td>{{ item['discounts'] }}</td>
          </tr>
          <tr>
            <td>priceVariants</td>
            <td>{{ item['priceVariants'] }}</td>
          </tr>
          <tr>
            <td>maintainer</td>
            <td>{{ item['maintainer'] }}</td>
          </tr>
          <tr>
            <td>recommendations</td>
            <td>{{ item['recommendations'] }}</td>
          </tr>
          <tr>
            <td>interviews</td>
            <td>{{ item['interviews'] }}</td>
          </tr>
          <tr>
            <td>gallery</td>
            <td>{{ item['gallery'] }}</td>
          </tr>
          <tr>
            <td>images</td>
            <td>{{ item['images'] }}</td>
          </tr>
          <tr>
            <td>schedules</td>
            <td>{{ item['schedules'] }}</td>
          </tr>
          <tr>
            <td>datesIsNotConfirmed</td>
            <td>{{ item['datesIsNotConfirmed'] }}</td>
          </tr>
          <tr>
            <td>notConfirmedMessage</td>
            <td>{{ item['notConfirmedMessage'] }}</td>
          </tr>
          <tr>
            <td>partners</td>
            <td>{{ item['partners'] }}</td>
          </tr>
          <tr>
            <td>pages</td>
            <td>{{ item['pages'] }}</td>
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
          <tr>
            <td>id</td>
            <td>{{ item['id'] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <router-link
      v-if="item"
      :to="{ name: 'EventList' }"
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
    deleteError: 'event/del/error',
    error: 'event/show/error',
    isLoading: 'event/show/isLoading',
    item: 'event/show/retrieved'
  }),

  beforeDestroy () {
    this.reset()
  },

  created () {
    this.retrieve(decodeURIComponent(this.$route.params.id))
  },

  methods: {
    ...mapActions({
      del: 'event/del/del',
      reset: 'event/show/reset',
      retrieve: 'event/show/retrieve'
    }),

    deleteItem (item) {
      if (window.confirm('Are you sure you want to delete this item?')) {
        this.del(item).then(() => this.$router.push({ name: 'EventList' }))
      }
    }
  }
}
</script>
