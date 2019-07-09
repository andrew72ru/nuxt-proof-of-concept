<template>
  <div>
    <h1>Speaker List</h1>

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
            <th>events</th>
            <th>shortDescription</th>
            <th>longDescription</th>
            <th>socialLinks</th>
            <th>files</th>
            <th>articles</th>
            <th>interviews</th>
            <th>schedules</th>
            <th>id</th>
            <th>active</th>
            <th>slug</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>avatar</th>
            <th>position</th>
            <th>createdAt</th>
            <th>updatedAt</th>
            <th colspan="2" />
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in items"
            :key="item['@id']">
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['@id'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['events'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['shortDescription'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['longDescription'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['socialLinks'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['files'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['articles'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['interviews'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['schedules'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['id'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['active'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['slug'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['firstName'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['lastName'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['avatar'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['position'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['createdAt'] }}
              </router-link>
            </td>
            <td>
              <router-link
                v-if="item"
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                {{ item['updatedAt'] }}
              </router-link>
            </td>
            <td>
              <router-link
                :to="{name: 'SpeakerShow', params: { id: item['@id'] }}">
                <span
                  class="fa fa-search"
                  aria-hidden="true" />
                <span class="sr-only">Show</span>
              </router-link>
            </td>
            <td>
              <router-link :to="{name: 'SpeakerUpdate', params: { id: item['@id'] }}">
                <span
                  class="fa fa-pencil"
                  aria-hidden="true" />
                <span class="sr-only">Edit</span>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <router-link
      :to="{ name: 'SpeakerCreate' }"
      class="btn btn-primary">Create</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    deletedItem: 'modules/speaker/del/deleted',
    error: 'modules/speaker/list/error',
    items: 'modules/speaker/list/items',
    isLoading: 'modules/speaker/list/isLoading',
    view: 'modules/speaker/list/view'
  }),

  created () {
    this.getPage()
  },

  methods: mapActions({
    getPage: 'modules/speaker/list/default'
  })
}
</script>
