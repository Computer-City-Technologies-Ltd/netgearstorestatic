<script setup>
const { data, pending, error } = await useFetch("/api/menus");

useSeoMeta({
  title: "Product Categories",
  ogTitle: "Contact Us",
  description:
    "Shop genuine Netgear routers and Orbi Mesh systems at the best prices in Bangladesh. Enjoy official warranty and fast delivery in Dhaka. Upgrade your WiFi today",
  ogDescription:
    "Shop genuine Netgear routers and Orbi Mesh systems at the best prices in Bangladesh. Enjoy official warranty and fast delivery in Dhaka. Upgrade your WiFi today",
  ogType: "website",
});
</script>

<template>
  <div class="container py-12 mx-auto p-4">
    <div v-if="pending">Loading...</div>

    <div v-else-if="error">Failed to load products</div>

    <section v-else>
      <Breadcrumb class="pb-6" />
      <div
        class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <NuxtLink
          v-for="product in data.menus[1].children"
          :to="`/products/${product.url}`"
          :aria-label="product.name"
          class="bg-purple-50 rounded-lg shadow transform duration-300 hover:-translate-y-2 cursor-pointer"
        >
          <div class="w-full h-80 overflow-hidden bg-white">
            <NuxtImg
              :src="product.thumbnail"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4 text-left">
            <h1 class="text-sm font-bold my-4">{{ product.name }}</h1>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
