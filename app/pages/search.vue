<script setup>
const route = useRoute();
const { search, result } = useMeiliSearch("products");

onMounted(async () => {
  await console.log(route.query.q);
  await search("netgear " + route.query.q);
});

watch(
  () => route.query.q,
  async () => {
    await search("netgear " + route.query.q);
  },
);
</script>
<template>
  <div class="bg-white">
    <Breadcrumb />
    <div class="mx-auto container px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
      <h2 class="text-lg font-semibold tracking-tight text-gray-900 capitalize">
        search result - "{{ route.query.q }}"
      </h2>

      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8"
      >
        <NuxtLink
          v-for="product in result?.hits"
          :to="`/product/${product.slug}`"
          class="bg-gray-50 rounded-lg shadow transform duration-300 hover:-translate-y-2 cursor-pointer"
        >
          <div class="w-full h-80 overflow-hidden">
            <NuxtImg
              :src="product.thumbnail"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4 text-left">
            <h1 class="text-sm font-bold my-4">{{ product.name }}</h1>
            <div
              class="text-sm text-gray-900 mb-4"
              v-html="product.short"
            ></div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
