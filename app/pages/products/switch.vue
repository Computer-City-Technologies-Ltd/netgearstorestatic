<script setup>
import { ref, onMounted } from "vue";

const config = useRuntimeConfig();
const pending = ref(true);
const error = ref(null);

const productsList = ref([]);
const attributes = ref([]);

const selectedAttributes = ref([]);

const catid = 71;

const getdata = async function () {
  pending.value = true;
  error.value = null;

  try {
    const attParams = selectedAttributes.value.join(",");

    const response = await $fetch(
      `${config.public.apiBase}/brands/Netgear/200?id=${catid}&att=${attParams}`,
    );

    productsList.value = response?.products?.data || [];

    if (attributes.value.length === 0 && response?.attributes) {
      attributes.value = response.attributes;
    }
  } catch (err) {
    error.value = err;
  } finally {
    pending.value = false;
  }
};

const passatt = async function (id) {
  await getdata();
};

onMounted(async () => {
  await getdata();
});

useSeoMeta({
  title: "Switch Categories",
  ogTitle: "Switch Categories",
  description:
    "Upgrade your network with Netgear Switches in Bangladesh. Shop Unmanaged, Smart Managed, and PoE switches at the best prices. Official warranty & fast delivery in BD!",
  ogDescription:
    "Upgrade your network with Netgear Switches in Bangladesh. Shop Unmanaged, Smart Managed, and PoE switches at the best prices. Official warranty & fast delivery in BD!",
  ogType: "website",
});
</script>

<template>
  <div class="container mx-auto py-12 p-4">
    <section class="flex flex-col lg:flex-row gap-6">
      <aside v-if="attributes && attributes.length" class="w-full lg:w-1/4">
        <div
          v-if="attributes.length != 0"
          class="rounded-lg p-4 sticky top-4 shadow mt-4 bg-white border border-gray-100"
          v-for="attribute in attributes"
          :key="attribute.id"
        >
          <h2 class="text-xl font-bold mb-4 text-gray-800">
            {{ attribute.name }}
          </h2>

          <ul class="space-y-2">
            <li
              v-for="subattribute in attribute.attribute"
              :key="subattribute.id"
            >
              <div class="flex items-center">
                <!-- v-model="selectedAttributes" ব্যবহারের ফলে টিকচিহ্ন কখনোই হারিয়ে যাবে না -->
                <input
                  :id="'attr-' + subattribute.id"
                  type="checkbox"
                  v-model="selectedAttributes"
                  :value="subattribute.id"
                  @change="passatt(subattribute.id)"
                  class="w-4 h-4 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                <label
                  :for="'attr-' + subattribute.id"
                  class="select-none ms-2 text-sm font-medium text-gray-700 cursor-pointer"
                >
                  {{ subattribute.name }}
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div
          v-else
          class="rounded-lg p-4 sticky top-4 shadow mt-4 bg-white border border-gray-100"
        >
          <h2 class="text-xl font-bold mb-4 text-gray-800">No filter found!</h2>
        </div>
      </aside>

      <div :class="attributes?.length ? 'w-full lg:w-3/4' : 'w-full'">
        <Categories class="pb-6" />

        <div v-if="pending" class="py-20 text-center text-gray-500 font-medium">
          <div class="animate-pulse flex flex-col items-center">
            <span class="text-lg">Updating products...</span>
          </div>
        </div>

        <div
          v-else-if="error"
          class="py-20 text-center text-red-500 font-medium"
        >
          Failed to load products. Please try again.
        </div>

        <div
          v-else
          class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
        >
          <NuxtLink
            v-for="product in productsList"
            :key="product.id"
            :to="`/product/${product.slug}`"
            class="bg-gray-50 rounded-lg shadow transform duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
          >
            <div class="w-full h-80 overflow-hidden bg-gray-200">
              <NuxtImg
                :src="product.photo"
                :alt="product.name"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="p-4 text-left">
              <h1 class="text-sm font-bold my-4 text-gray-900 line-clamp-2">
                {{ product.name }}
              </h1>
              <div
                class="text-sm text-gray-600 mb-4 line-clamp-3"
                v-html="product.short"
              ></div>
            </div>
          </NuxtLink>

          <div
            v-if="productsList.length === 0"
            class="col-span-full text-center py-10 text-gray-500"
          >
            No products found matching the criteria.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
