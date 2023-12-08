<template>
  <div class="flex flex-col gap-1 justify-between">
    <div v-for="(addon, i) in addons" :key="i" class="flex flex-wrap py-2 relative justify-between">
      <!-- COLOR SWATCHES -->
      <div v-if="addon.name == 'pa_color' || addon.name == 'color'" class="grid gap-2">
        <div class="text-sm">
          {{ $t('messages.general.color') }}
          <span v-if="activeOptions" class="text-gray-400 capitalize">{{ decodeURIComponent(activeOptions[i].value) }}</span>
        </div>
        <div class="flex gap-2">
          <span v-for="(option, optionIndex) in addon.options" :key="option.id">
            <label>
              <input
                :ref="addon.name"
                class="hidden"
                :checked="optionIndex == 0"
                type="radio"
                :class="`name-${addon.name}`"
                :name="addon.name"
                :value="option"
                @change="updateAddons($event)" />
              <span class="color-button" :class="`color-${option}`" :title="`${addon.name}: ${option}`"></span>
            </label>
          </span>
        </div>
      </div>

      <!-- DROPDOWN -->
      <div v-else-if="addon.options.length > 8" class="grid gap-2">
        <div class="text-sm">
          {{ addon.label }}<span v-if="activeOptions" class="text-gray-400 capitalize">{{ decodeURIComponent(activeOptions[i].value) }}</span>
        </div>
        <select :id="addon.name" :ref="addon.name" :name="addon.name" required class="border-white shadow" @change="updateAddons">
          <option selected disabled hidden :value="null">{{ $t('messages.general.choose') }} {{ decodeURIComponent(addon.label) }}</option>
          <option v-for="option in addon.options" :key="option" :value="option" v-html="option" />
        </select>
      </div>

      <!-- CHECKBOXES -->
      <div v-else class="grid gap-2">
        <div class="text-sm">
          {{ addon.label }}<span v-if="activeOptions" class="text-gray-400 capitalize">: {{ decodeURIComponent(activeOptions[i].value) }}</span>
        </div>
        <div class="flex gap-2">
          <span v-for="(option, i) in addon.options" :key="option.id"></span>
            <label>
              <input :ref="addon.name" class="hidden" :checked="i == 0" type="radio" :class="`name-${addon.name}`" :name="addon.name" :value="option" @change="updateAddons($event)" />
              <span class="radio-button" :class="`picker-${option}`" :title="`${addon.name}: ${option}`">{{ decodeURIComponent(option) }}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    addons: { type: Array, required: true },
    options: { type: Array, required: true },
  },
  data() {
    return {
      activeOptions: null,
    };
  },
  mounted() {
    this.updateAddons();
  },
  methods: {
    updateAddons() {
      const selectedOptions = this.addons.map((row) => {
        const radioValue = document.querySelector(`.name-${row.name}:checked`);
        const value = radioValue ? radioValue.value : this.$refs[row.name][0].value;
        const name = row.name.toLowerCase();
        return { name, value };
      });

      this.activeOptions = selectedOptions;
      this.$emit('addons-changed', selectedOptions);
    },
  },
};
</script>

<style lang="postcss">
.radio-button {
  @apply border-transparent border-white rounded-lg cursor-pointer outline bg-gray-50 border-2 text-sm text-center outline-2 outline-gray-100 py-1.5 px-3 transition-all text-gray-800 inline-block hover:outline-gray-500;
}

.color-button {
  @apply border-transparent border-white cursor-pointer outline bg-gray-50 border-2 rounded-2xl text-sm text-center outline-2 outline-gray-100 transition-all text-gray-800 inline-block hover:outline-gray-500;
  width: 2rem;
  height: 2rem;
}

.color-green {
  @apply bg-green-500;
}

.color-blue {
  @apply bg-blue-500;
}

.color-red {
  @apply bg-red-500;
}

.color-yellow {
  @apply bg-yellow-500;
}

.color-orange {
  @apply bg-orange-500;
}

.color-purple {
  @apply bg-purple-500;
}

.color-black {
  @apply bg-black;
}

input[type='radio']:checked ~ span {
  @apply outline outline-2 outline-gray-500;
}
</style>
