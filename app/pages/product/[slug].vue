<script setup>
const route = useRoute();
const slug = route.params.slug;

const { data, pending, error } = await useFetch(`/api/product/${slug}`);

const imgs = await data.value.gallery;
const visible = ref(false);
const visibles = ref(false);
const index = ref(0);
const mainimg = computed(() => data.value?.photo);
const imgsRef = ref([]);
const indexRef = ref(0);

const show = function (idx) {
  index.value = idx;
  visible.value = true;
};

const showSingle = (img) => {
  if (!img) return;
  imgsRef.value = [img];
  indexRef.value = 0;
  visibles.value = true;
};

const handlePrev = function (oldIndex, newIndex) {};

const handleNext = function (oldIndex, newIndex) {};

const tagsArray = computed(() => {
  return (data.value.tags || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
});

useSeoMeta({
  title: data.value.name,
  ogTitle: data.value.name,
  description: data.value.meta_description,
  ogDescription: data.value.meta_description,
  ogImage: data.value.thumbnail,
  ogType: "product",
});
</script>

<template>
  <!-- Product Details -->
  <section class="overflow-hidden bg-white py-11 font-poppins py-12">
    <Breadcrumb :data="data" />
    <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4 md:w-1/2">
          <div class="overflow-hidden">
            <div class="relative mb-6 lg:mb-10 lg:h-2/4 border">
              <NuxtImg
                :src="mainimg"
                :alt="data.name"
                @click="showSingle(mainimg)"
                class="object-cover w-full lg:h-full"
              />
            </div>
            <div class="flex-wrap hidden md:flex">
              <div
                class="w-1/2 p-2 sm:w-1/4"
                v-for="(photo, idx) in imgs"
                :key="idx"
                @click="() => show(idx)"
              >
                <span
                  class="block border border-gray-300 dark:border-transparent dark:hover:border-gray-300 hover:border-gray-300"
                >
                  <NuxtImg
                    :src="photo.src"
                    :alt="data.name"
                    class="object-cover w-full lg:h-20"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2">
          <div class="lg:pl-20">
            <div class="mb-8">
              <span
                class="text-md font-bold text-[#1CB9A0] dark:text-[#1CB9A0]"
              >
                {{ data.model }}
              </span>
              <h2
                class="max-w-xl mt-2 mb-6 text-lg font-bold dark:text-gray-500 md:text-xl"
              >
                {{ data.name }}
              </h2>

              <div
                class="max-w-md mb-8 text-lg text-gray-700 dark:text-gray-800"
                v-html="data.short"
              ></div>
            </div>

            <!-- InquiryButton -->
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 rounded-full bg-[#1CB9A0] px-5 py-2.5 text-sm font-semibold text-white hover:text-gray-900 shadow hover:bg-gray-100 mb-8 hover:border"
            >
              Inquiry
            </NuxtLink>

            <div class="flex justify-left gap-2 flex-wrap py-4">
              <span
                v-for="value in tagsArray"
                class="bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600"
              >
                {{ value }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Spec Tabs -->
  <tabs :data="data" />

  <!-- Lightbox  -->
  <client-only>
    <vue-easy-lightbox
      :visible="visible"
      :index="index"
      :imgs="imgs"
      @hide="visible = false"
      @on-prev="handlePrev"
      @on-next="handleNext"
    />

    <VueEasyLightbox
      :visible="visibles"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="visibles = false"
    />
  </client-only>
</template>
