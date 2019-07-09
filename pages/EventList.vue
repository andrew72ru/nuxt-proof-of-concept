<template>
  <div>
    <h1>Event List</h1>
    <div
      v-if="isLoading"
      class="alert alert-info">Loading...
    </div>

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
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in items" :key="item['@id']">
          <td>{{ item['@id'] }}</td>
          <td>{{ item['title'] }}</td>
          <td>{{ item['description'] }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="speaker in item['speakers']" :key="speaker">
                <ShowName :api-route="speaker"/>
              </li>
            </ul>
          </td>
          <td>{{ item['place'] }}</td>
          <td>{{ item['manager'] }}</td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import ShowName from '../components/speaker/ShowName'

  export default {
    name: 'EventList',
    components: { ShowName },
    computed: mapGetters({
      error: 'modules/event/list/error',
      items: 'modules/event/list/items',
      isLoading: 'modules/event/list/isLoading',
      view: 'modules/event/list/view'
    }),

    async fetch ({ store }) {
      async function asyncForEach(array, callback) {
        for (let index = 0; index < array.length; index++) {
          await callback(array[index], index, array);
        }
      }

      await store.dispatch('modules/event/list/default');
      const sprks = store.state.modules.event.list.items.map(ev => { return ev.speakers.map(sp => sp)[0] });
      await asyncForEach(sprks, async spkr => {
        await store.dispatch('modules/speaker/show/retrieve', spkr);
      });
    },

    created () {
      this.getPage()
    },

    methods: {
      ...mapActions({
        getPage: 'modules/event/list/default'
      }),
    }

  }
</script>

<style scoped>

</style>
