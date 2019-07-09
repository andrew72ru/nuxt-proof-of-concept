<template>
  <div>
    <h1>Event List</h1>

    <div
      v-if="isLoading"
      class="alert alert-info">Loading...</div>
    <div
      v-if="deletedItem"
      class="alert alert-success">{{ deletedItem['@id'] }} deleted.</div>
    <div
      v-if="error"
      class="alert alert-danger">{{ error }}</div>

    <span v-if="view">
      <button
        :disabled="!view['hydra:previous']"
        type="button"
        class="btn btn-basic btn-sm"
        @click="getPage(view['hydra:first'])">First</button>
      &nbsp;
      <button
        :disabled="!view['hydra:previous']"
        type="button"
        class="btn btn-basic btn-sm"
        @click="getPage(view['hydra:previous'])">Previous</button>
      &nbsp;
      <button
        :disabled="!view['hydra:next']"
        type="button"
        class="btn btn-basic btn-sm"
        @click="getPage(view['hydra:next'])">Next</button>
      &nbsp;
      <button
        :disabled="!view['hydra:last']"
        type="button"
        class="btn btn-basic btn-sm"
        @click="getPage(view['hydra:last'])">Last</button>
      &nbsp;
    </span>

    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>title</th>
            <th>description</th>
            <th>speakers</th>
            <th>place</th>
            <th>manager</th>
            <th colspan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in items"
            :key="item['@id']">
            <td>
              <router-link
                v-if="item"
                :to="{name: 'EventShow', params: { id: item['@id'] }}">
                {{ item['@id'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'EventShow', params: { id: item['@id'] }}">
                {{ item['title'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'EventShow', params: { id: item['@id'] }}">
                {{ item['description'] }}
              </router-link>
            </td>
            <td>
              <ul>
                <li v-for="speaker in item['speakers']" :key="speaker">
                  <ShowName :api-route="speaker" />
                </li>
              </ul>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'EventShow', params: { id: item['@id'] }}">
                {{ item['place'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'EventShow', params: { id: item['@id'] }}">
                {{ item['manager'] }}
              </router-link>
            </td>
            <td>
              <router-link
                :to="{name: 'EventShow', params: { id: item['@id'] }}">
                <span
                  class="fa fa-search"
                  aria-hidden="true"></span>
                <span class="sr-only">Show</span>
              </router-link>
            </td>
            <td>
              <router-link :to="{name: 'EventUpdate', params: { id: item['@id'] }}">
                <span
                  class="fa fa-pencil"
                  aria-hidden="true"></span>
                <span class="sr-only">Edit</span>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ShowName from '../speaker/ShowName'

export default {
  components: { ShowName },
  computed: mapGetters({
    deletedItem: 'modules/event/del/deleted',
    error: 'modules/event/list/error',
    items: 'modules/event/list/items',
    isLoading: 'modules/event/list/isLoading',
    view: 'modules/event/list/view'
  }),

  async fetch({ store, params }) {
    store.dispatch('EVENT_LIST_SET_ITEMS')
  },

  created () {
    this.getPage()
  },

  methods: mapActions({
    getPage: 'modules/event/list/default'
  })
}
</script>
