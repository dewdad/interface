<template>
  <div class="dvs-p-8 dvs-bg-green dvs-text-white">
    <h2 class="dvs-mb-4">Congratulations!</h2>
    <p class="dvs-mb-4">You are finished with the required elements of your Devise install. Click below to complete your install. If you ever want to come back simple delete the "DVS_MODE=active" from your .env file.</p>
    <button
      class="dvs-btn dvs-bg-white dvs-text-green"
      @click.prevent="attemptCompleteInstall()"
    >Complete Install</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    finished: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    ...mapActions('devise', ['completeInstall']),
    attemptCompleteInstall () {
      this.completeInstall().then(() => {
        window.location.reload();
      });
    }
  },
};
</script>