<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="event_title"
        class="form-control-label">title</label>
      <input
        id="event_title"
        v-model="item.title"
        :class="['form-control', isInvalid('title') ? 'is-invalid' : '']"
        type="text"
        required="true"
        placeholder=""
        @input="handleUpdateField('title', $event.target.value)">
      <div
        v-if="isInvalid('title')"
        class="invalid-feedback">{{ violations.title }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_startDate"
        class="form-control-label">startDate</label>
      <input
        id="event_startDate"
        v-model="item.startDate"
        :class="['form-control', isInvalid('startDate') ? 'is-invalid' : '']"
        type="dateTime"
        required="true"
        placeholder=""
        @input="handleUpdateField('startDate', $event.target.value)">
      <div
        v-if="isInvalid('startDate')"
        class="invalid-feedback">{{ violations.startDate }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_finishDate"
        class="form-control-label">finishDate</label>
      <input
        id="event_finishDate"
        v-model="item.finishDate"
        :class="['form-control', isInvalid('finishDate') ? 'is-invalid' : '']"
        type="dateTime"
        required="true"
        placeholder=""
        @input="handleUpdateField('finishDate', $event.target.value)">
      <div
        v-if="isInvalid('finishDate')"
        class="invalid-feedback">{{ violations.finishDate }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_description"
        class="form-control-label">description</label>
      <input
        id="event_description"
        v-model="item.description"
        :class="['form-control', isInvalid('description') ? 'is-invalid' : '']"
        type="text"
        required="true"
        placeholder=""
        @input="handleUpdateField('description', $event.target.value)">
      <div
        v-if="isInvalid('description')"
        class="invalid-feedback">{{ violations.description }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_price"
        class="form-control-label">price</label>
      <input
        id="event_price"
        v-model="item.price"
        :class="['form-control', isInvalid('price') ? 'is-invalid' : '']"
        type="number"
        required="true"
        placeholder=""
        @input="handleUpdateField('price', $event.target.value)">
      <div
        v-if="isInvalid('price')"
        class="invalid-feedback">{{ violations.price }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_fullPrice"
        class="form-control-label">fullPrice</label>
      <input
        id="event_fullPrice"
        v-model="item.fullPrice"
        :class="['form-control', isInvalid('fullPrice') ? 'is-invalid' : '']"
        type="number"
        placeholder=""
        @input="handleUpdateField('fullPrice', $event.target.value)">
      <div
        v-if="isInvalid('fullPrice')"
        class="invalid-feedback">{{ violations.fullPrice }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_externalId"
        class="form-control-label">externalId</label>
      <input
        id="event_externalId"
        v-model="item.externalId"
        :class="['form-control', isInvalid('externalId') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('externalId', $event.target.value)">
      <div
        v-if="isInvalid('externalId')"
        class="invalid-feedback">{{ violations.externalId }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_heading"
        class="form-control-label">heading</label>
      <input
        id="event_heading"
        v-model="item.heading"
        :class="['form-control', isInvalid('heading') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('heading', $event.target.value)">
      <div
        v-if="isInvalid('heading')"
        class="invalid-feedback">{{ violations.heading }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_type"
        class="form-control-label">type</label>
      <input
        id="event_type"
        v-model="item.type"
        :class="['form-control', isInvalid('type') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('type', $event.target.value)">
      <div
        v-if="isInvalid('type')"
        class="invalid-feedback">{{ violations.type }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_speakers"
        class="form-control-label">speakers</label>
      <input
        id="event_speakers"
        v-model="item.speakers"
        :class="['form-control', isInvalid('speakers') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('speakers', $event.target.value)">
      <div
        v-if="isInvalid('speakers')"
        class="invalid-feedback">{{ violations.speakers }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_place"
        class="form-control-label">place</label>
      <input
        id="event_place"
        v-model="item.place"
        :class="['form-control', isInvalid('place') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('place', $event.target.value)">
      <div
        v-if="isInvalid('place')"
        class="invalid-feedback">{{ violations.place }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_manager"
        class="form-control-label">manager</label>
      <input
        id="event_manager"
        v-model="item.manager"
        :class="['form-control', isInvalid('manager') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('manager', $event.target.value)">
      <div
        v-if="isInvalid('manager')"
        class="invalid-feedback">{{ violations.manager }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_tags"
        class="form-control-label">tags</label>
      <input
        id="event_tags"
        v-model="item.tags"
        :class="['form-control', isInvalid('tags') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('tags', $event.target.value)">
      <div
        v-if="isInvalid('tags')"
        class="invalid-feedback">{{ violations.tags }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_visualTheme"
        class="form-control-label">visualTheme</label>
      <input
        id="event_visualTheme"
        v-model="item.visualTheme"
        :class="['form-control', isInvalid('visualTheme') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('visualTheme', $event.target.value)">
      <div
        v-if="isInvalid('visualTheme')"
        class="invalid-feedback">{{ violations.visualTheme }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_currency"
        class="form-control-label">currency</label>
      <input
        id="event_currency"
        v-model="item.currency"
        :class="['form-control', isInvalid('currency') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('currency', $event.target.value)">
      <div
        v-if="isInvalid('currency')"
        class="invalid-feedback">{{ violations.currency }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_discounts"
        class="form-control-label">discounts</label>
      <input
        id="event_discounts"
        v-model="item.discounts"
        :class="['form-control', isInvalid('discounts') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('discounts', $event.target.value)">
      <div
        v-if="isInvalid('discounts')"
        class="invalid-feedback">{{ violations.discounts }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_priceVariants"
        class="form-control-label">priceVariants</label>
      <input
        id="event_priceVariants"
        v-model="item.priceVariants"
        :class="['form-control', isInvalid('priceVariants') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('priceVariants', $event.target.value)">
      <div
        v-if="isInvalid('priceVariants')"
        class="invalid-feedback">{{ violations.priceVariants }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_maintainer"
        class="form-control-label">maintainer</label>
      <input
        id="event_maintainer"
        v-model="item.maintainer"
        :class="['form-control', isInvalid('maintainer') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('maintainer', $event.target.value)">
      <div
        v-if="isInvalid('maintainer')"
        class="invalid-feedback">{{ violations.maintainer }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_recommendations"
        class="form-control-label">recommendations</label>
      <input
        id="event_recommendations"
        v-model="item.recommendations"
        :class="['form-control', isInvalid('recommendations') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('recommendations', $event.target.value)">
      <div
        v-if="isInvalid('recommendations')"
        class="invalid-feedback">{{ violations.recommendations }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_interviews"
        class="form-control-label">interviews</label>
      <input
        id="event_interviews"
        v-model="item.interviews"
        :class="['form-control', isInvalid('interviews') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('interviews', $event.target.value)">
      <div
        v-if="isInvalid('interviews')"
        class="invalid-feedback">{{ violations.interviews }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_gallery"
        class="form-control-label">gallery</label>
      <input
        id="event_gallery"
        v-model="item.gallery"
        :class="['form-control', isInvalid('gallery') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('gallery', $event.target.value)">
      <div
        v-if="isInvalid('gallery')"
        class="invalid-feedback">{{ violations.gallery }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_images"
        class="form-control-label">images</label>
      <input
        id="event_images"
        v-model="item.images"
        :class="['form-control', isInvalid('images') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('images', $event.target.value)">
      <div
        v-if="isInvalid('images')"
        class="invalid-feedback">{{ violations.images }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_schedules"
        class="form-control-label">schedules</label>
      <input
        id="event_schedules"
        v-model="item.schedules"
        :class="['form-control', isInvalid('schedules') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('schedules', $event.target.value)">
      <div
        v-if="isInvalid('schedules')"
        class="invalid-feedback">{{ violations.schedules }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_datesIsNotConfirmed"
        class="form-control-label">datesIsNotConfirmed</label>
      <input
        id="event_datesIsNotConfirmed"
        v-model="item.datesIsNotConfirmed"
        :class="['form-control', isInvalid('datesIsNotConfirmed') ? 'is-invalid' : '']"
        type="checkbox"
        required="true"
        placeholder=""
        @input="handleUpdateField('datesIsNotConfirmed', $event.target.value)">
      <div
        v-if="isInvalid('datesIsNotConfirmed')"
        class="invalid-feedback">{{ violations.datesIsNotConfirmed }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_notConfirmedMessage"
        class="form-control-label">notConfirmedMessage</label>
      <input
        id="event_notConfirmedMessage"
        v-model="item.notConfirmedMessage"
        :class="['form-control', isInvalid('notConfirmedMessage') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('notConfirmedMessage', $event.target.value)">
      <div
        v-if="isInvalid('notConfirmedMessage')"
        class="invalid-feedback">{{ violations.notConfirmedMessage }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_partners"
        class="form-control-label">partners</label>
      <input
        id="event_partners"
        v-model="item.partners"
        :class="['form-control', isInvalid('partners') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('partners', $event.target.value)">
      <div
        v-if="isInvalid('partners')"
        class="invalid-feedback">{{ violations.partners }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_pages"
        class="form-control-label">pages</label>
      <input
        id="event_pages"
        v-model="item.pages"
        :class="['form-control', isInvalid('pages') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('pages', $event.target.value)">
      <div
        v-if="isInvalid('pages')"
        class="invalid-feedback">{{ violations.pages }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_active"
        class="form-control-label">active</label>
      <input
        id="event_active"
        v-model="item.active"
        :class="['form-control', isInvalid('active') ? 'is-invalid' : '']"
        type="checkbox"
        required="true"
        placeholder=""
        @input="handleUpdateField('active', $event.target.value)">
      <div
        v-if="isInvalid('active')"
        class="invalid-feedback">{{ violations.active }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_slug"
        class="form-control-label">slug</label>
      <input
        id="event_slug"
        v-model="item.slug"
        :class="['form-control', isInvalid('slug') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('slug', $event.target.value)">
      <div
        v-if="isInvalid('slug')"
        class="invalid-feedback">{{ violations.slug }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_position"
        class="form-control-label">position</label>
      <input
        id="event_position"
        v-model="item.position"
        :class="['form-control', isInvalid('position') ? 'is-invalid' : '']"
        type="number"
        placeholder=""
        @input="handleUpdateField('position', $event.target.value)">
      <div
        v-if="isInvalid('position')"
        class="invalid-feedback">{{ violations.position }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_createdAt"
        class="form-control-label">createdAt</label>
      <input
        id="event_createdAt"
        v-model="item.createdAt"
        :class="['form-control', isInvalid('createdAt') ? 'is-invalid' : '']"
        type="dateTime"
        placeholder=""
        @input="handleUpdateField('createdAt', $event.target.value)">
      <div
        v-if="isInvalid('createdAt')"
        class="invalid-feedback">{{ violations.createdAt }}</div>
    </div>
    <div class="form-group">
      <label
        for="event_updatedAt"
        class="form-control-label">updatedAt</label>
      <input
        id="event_updatedAt"
        v-model="item.updatedAt"
        :class="['form-control', isInvalid('updatedAt') ? 'is-invalid' : '']"
        type="dateTime"
        placeholder=""
        @input="handleUpdateField('updatedAt', $event.target.value)">
      <div
        v-if="isInvalid('updatedAt')"
        class="invalid-feedback">{{ violations.updatedAt }}</div>
    </div>

    <button
      type="submit"
      class="btn btn-success">Submit</button>
  </form>
</template>

<script>
export default {
  props: {
    handleSubmit: {
      type: Function,
      required: true
    },

    handleUpdateField: {
      type: Function,
      required: true
    },

    values: {
      type: Object,
      required: true
    },

    errors: {
      type: Object,
      default: () => {}
    },

    initialValues: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    // eslint-disable-next-line
    item () {
      return this.initialValues || this.values
    },

    violations () {
      return this.errors || {}
    }
  },

  methods: {
    isInvalid (key) {
      return Object.keys(this.violations).length > 0 && this.violations[key]
    }
  }
}
</script>
