<script setup>
const route = useRoute();
const props = defineProps({
  data: {
    type: Object,
  },
});
const { data } = props;

onMounted(async () => {
  // await console.log(route.path);
});
</script>

<template>
  <div class="container mx-auto pt-4 pl-4">
    <ol
      class="flex items-center whitespace-nowrap flex-wrap"
      aria-label="Breadcrumb"
    >
      <li class="inline-flex items-center">
        <NuxtLink
          aria-label="Home"
          to="/"
          class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
        >
          Home
        </NuxtLink>
        <svg
          class="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400 dark:text-neutral-600"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </li>
      <li class="inline-flex items-center">
        <NuxtLink
          aria-label="categories"
          :to="'/categories'"
          class="capitalize flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
        >
          Categories
          <svg
            v-if="route.path.split('/')[2]"
            class="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400 dark:text-neutral-600"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </NuxtLink>
      </li>
      <li class="inline-flex items-center">
        <span
          class="capitalize flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
        >
          {{ route.path.split("/")[2] }}
        </span>
      </li>
    </ol>
  </div>
</template>
