<script setup>
const {
  data: products,
  pending,
  error,
} = useFetch("https://admindash.comcitybd.com/api/brands/Netgear/200?id[]=68");

useSeoMeta({
  title: "Ethernetrouter Categories",
  ogTitle: "Ethernetrouter Categories",
  description:
    "Shop high-performance Netgear Ethernet Routers in Bangladesh. Secure wired networking, VPN support, and Gigabit speeds for businesses. Best price & official warranty in BD!",
  ogDescription:
    "Shop high-performance Netgear Ethernet Routers in Bangladesh. Secure wired networking, VPN support, and Gigabit speeds for businesses. Best price & official warranty in BD!",
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
          v-for="product in products.data"
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
