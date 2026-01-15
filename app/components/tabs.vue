<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const { data } = props;

const downloadAvailable = data.datasheet && data.datasheet.length > 0;

const tabs = [
  { key: "description", label: "Description" },
  { key: "specification", label: "Specification" },
  { key: "download", label: "Download" },
];

const activeTab = ref("description");
</script>

<template>
  <div class="container mx-auto">
    <!-- Tabs Header -->
    <div class="border-b border-gray-200">
      <nav class="-mb-px flex gap-6">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          v-show="tab.key !== 'download' || downloadAvailable"
          @click="activeTab = tab.key"
          :class="[
            'py-3 px-1 border-b-2 font-medium text-sm',
            activeTab === tab.key
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
          ]"
        >
          {{ tab.label }}
        </button>
      </nav>
    </div>

    <!-- Tabs Content -->
    <div class="mt-6">
      <!-- Description -->
      <div v-if="activeTab === 'description'">
        <div class="text-gray-700" v-html="data.details"></div>
      </div>

      <!-- Datasheet -->
      <div v-if="activeTab === 'specification'">
        <div class="text-gray-700" v-html="data.specification"></div>
      </div>

      <!-- Download -->
      <div v-if="activeTab === 'download' && downloadAvailable">
        <a
          href="#"
          class="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Download Datasheet
        </a>
      </div>
    </div>
  </div>
</template>
