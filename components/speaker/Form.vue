<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="speaker_events"
        class="form-control-label">events</label>
      <input
        id="speaker_events"
        v-model="item.events"
        :class="['form-control', isInvalid('events') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('events', $event.target.value)">
      <div
        v-if="isInvalid('events')"
        class="invalid-feedback">{{ violations.events }}</div>
    </div>
    <div class="form-group">
      <label
        for="speaker_shortDescription"
        class="form-control-label">shortDescription</label>
      <input
        id="speaker_shortDescription"
        v-model="item.shortDescription"
        :class="['form-control', isInvalid('shortDescription') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('shortDescription', $event.target.value)">
      <div
        v-if="isInvalid('shortDescription')"
        class="invalid-feedback">{{ violations.shortDescription }}</div>
    </div>
    <div class="form-group">
      <label
        for="speaker_longDescription"
        class="form-control-label">longDescription</label>
      <input
        id="speaker_longDescription"
        v-model="item.longDescription"
        :class="['form-control', isInvalid('longDescription') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('longDescription', $event.target.value)">
      <div
        v-if="isInvalid('longDescription')"
        class="invalid-feedback">{{ violations.longDescription }}</div>
    </div>
    <div class="form-group">
      <label
        for="speaker_socialLinks"
        class="form-control-label">socialLinks</label>
      <input
        id="speaker_socialLinks"
        v-model="item.socialLinks"
        :class="['form-control', isInvalid('socialLinks') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('socialLinks', $event.target.value)">
      <div
        v-if="isInvalid('socialLinks')"
        class="invalid-feedback">{{ violations.socialLinks }}</div>
    </div>
    <div class="form-group">
      <label
        for="speaker_files"
        class="form-control-label">files</label>
      <input
        id="speaker_files"
        v-model="item.files"
        :class="['form-control', isInvalid('files') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('files', $event.target.value)">
      <div
        v-if="isInvalid('files')"
        class="invalid-feedback">{{ violations.files }}</div>
    </div>
    <div class="form-group">
      <label
        for="speaker_articles"
        class="form-control-label">articles</label>
      <input
        id="speaker_articles"
        v-model="item.articles"
        :class="['form-control', isInvalid('articles') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('articles', $event.target.value)">
      <div
        v-if="isInvalid('articles')"
        class="invalid-feedback">{{ violations.articles }}</div>
    </div>
    <div class="form-group">
      <label
        for="speaker_interviews"
        class="form-control-label">interviews</label>
      <input
        id="speaker_interviews"
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
        for="speaker_schedules"
        class="form-control-label">schedules</label>
      <input
        id="speaker_schedules"
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
        for="speaker_active"
        class="form-control-label">active</label>
      <input
        id="speaker_active"
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
        for="speaker_slug"
        class="form-control-label">slug</label>
      <input
        id="speaker_slug"
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
        for="speaker_firstName"
        class="form-control-label">firstName</label>
      <input
        id="speaker_firstName"
        v-model="item.firstName"
        :class="['form-control', isInvalid('firstName') ? 'is-invalid' : '']"
        type="text"
        required="true"
        placeholder=""
        @input="handleUpdateField('firstName', $event.target.value)">
      <div
        v-if="isInvalid('firstName')"
        class="invalid-feedback">{{ violations.firstName }}</div>
    </div>
    <div class="form-group">
      <label
        for="speaker_lastName"
        class="form-control-label">lastName</label>
      <input
        id="speaker_lastName"
        v-model="item.lastName"
        :class="['form-control', isInvalid('lastName') ? 'is-invalid' : '']"
        type="text"
        required="true"
        placeholder=""
        @input="handleUpdateField('lastName', $event.target.value)">
      <div
        v-if="isInvalid('lastName')"
        class="invalid-feedback">{{ violations.lastName }}</div>
    </div>
    <div class="form-group">
      <label
        for="speaker_avatar"
        class="form-control-label">avatar</label>
      <input
        id="speaker_avatar"
        v-model="item.avatar"
        :class="['form-control', isInvalid('avatar') ? 'is-invalid' : '']"
        type="text"
        placeholder=""
        @input="handleUpdateField('avatar', $event.target.value)">
      <div
        v-if="isInvalid('avatar')"
        class="invalid-feedback">{{ violations.avatar }}</div>
    </div>
    <div class="form-group">
      <label
        for="speaker_position"
        class="form-control-label">position</label>
      <input
        id="speaker_position"
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
        for="speaker_createdAt"
        class="form-control-label">createdAt</label>
      <input
        id="speaker_createdAt"
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
        for="speaker_updatedAt"
        class="form-control-label">updatedAt</label>
      <input
        id="speaker_updatedAt"
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
