<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const { data } = props;
console.log(data.details);
</script>

<template>
  <div class="pb-16">
    <div
      class="mb-4 border-b border-gray-200 dark:border-gray-700 container mx-auto"
    >
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="default-tab"
        data-tabs-toggle="#default-tab-content"
        role="tablist"
      >
        <li class="me-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg"
            id="profile-tab"
            data-tabs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Description
          </button>
        </li>
        <li class="me-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="dashboard-tab"
            data-tabs-target="#dashboard"
            type="button"
            role="tab"
            aria-controls="dashboard"
            aria-selected="false"
          >
            Specification
          </button>
        </li>
        <li v-if="data.datasheet[0]" class="me-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="settings-tab"
            data-tabs-target="#settings"
            type="button"
            role="tab"
            aria-controls="settings"
            aria-selected="false"
          >
            Download
          </button>
        </li>
        <li role="presentation" v-if="data.youtube">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="contacts-tab"
            data-tabs-target="#contacts"
            type="button"
            role="tab"
            aria-controls="contacts"
            aria-selected="false"
          >
            Video
          </button>
        </li>
      </ul>
    </div>
    <div id="default-tab-content">
      <div
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 container mx-auto"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div
          class="text-sm text-gray-500 dark:text-gray-400"
          v-html="data.details"
        ></div>
      </div>
      <div
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 container mx-auto"
        id="dashboard"
        role="tabpanel"
        aria-labelledby="dashboard-tab"
      >
        <div
          class="text-sm text-gray-500 dark:text-gray-400"
          v-html="data.specification"
        ></div>
      </div>
      <div
        v-if="data.datasheet[0]"
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 container mx-auto"
        id="settings"
        role="tabpanel"
        aria-labelledby="settings-tab"
      >
        <div class="text-sm text-gray-500 dark:text-gray-400">
          <div v-for="datasheet in data.datasheet">
            <a :href="datasheet.src" class="hover: underline">
              {{ data.model }} Datasheet
            </a>
          </div>
        </div>
      </div>
      <div
        v-if="data.youtube"
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 container mx-auto"
        id="contacts"
        role="tabpanel"
        aria-labelledby="contacts-tab"
      >
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            :src="
              'https://www.youtube.com/embed/' +
              data.youtube.replace('https://www.youtube.com/watch?v=', '')
            "
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
