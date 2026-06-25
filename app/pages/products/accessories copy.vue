<script setup>
const config = useRuntimeConfig();

const {
  data: products1,
  pending: p1,
  error: e1,
} = await useFetch(`${config.public.apiBase}/brands/Netgear/200`, {
  query: {
    "id[]": 78,
  },
  server: false,
  default: () => [],
});

const {
  data: products2,
  pending: p2,
  error: e2,
} = await useFetch(`${config.public.apiBase}/brands/Netgear/200`, {
  default: () => [],
  query: {
    "id[]": 81,
  },
  server: false,
});

// Merge safely
const products = computed(() => {
  const list1 = Array.isArray(products1.value?.data)
    ? products1.value.data
    : [];

  const list2 = Array.isArray(products2.value?.data)
    ? products2.value.data
    : [];

  return [...list1, ...list2];
});

const pending = computed(() => p1.value || p2.value);
const error = computed(() => e1.value || e2.value);

useSeoMeta({
  title: "Accessories Categories",
  ogTitle: "Accessories Categories",
  description:
    "Find genuine Netgear accessories in Bangladesh. Shop official power adapters, high-gain antennas, SFP modules, and mounting kits. Ensure 100% compatibility and performance for your network. Buy now!",
  ogDescription:
    "Find genuine Netgear accessories in Bangladesh. Shop official power adapters, high-gain antennas, SFP modules, and mounting kits. Ensure 100% compatibility and performance for your network. Buy now!",
  ogType: "website",
});
</script>

<template>
  <div class="container py-12 mx-auto p-4">
    <div v-if="pending">Loading...</div>

    <div v-else-if="error">Failed to load products</div>

    <section v-else>
      <Categories class="pb-6" />
      <div
        class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <NuxtLink
          v-for="product in products"
          :to="`/product/${product.slug}`"
          class="bg-gray-50 rounded-lg shadow transform duration-300 hover:-translate-y-2 cursor-pointer"
        >
          <div class="w-full h-80 overflow-hidden">
            <NuxtImg
              :src="product.photo"
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
    </section>
  </div>
</template>
