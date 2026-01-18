<script setup>
const photos = [
  {
    image:
      "https://assets.netgear.com/transform/slant-hero-desktop/1c326332-0d6d-45c7-bbe2-a48d9c9df624/Enterprise_Desktop",
    name: "Enterprise",
  },
  {
    image:
      "https://assets.netgear.com/transform/slant-hero-desktop/0cf3451e-972f-442a-b166-00ed2d4379af/AV_Desktop",
    name: "AV",
  },
  {
    image:
      "https://assets.netgear.com/transform/slant-hero-desktop/5deb4d79-6cee-47a3-93af-7970ae2501f0/Home_Desktop",
    name: "WIFI",
  },
];
</script>

<template>
  <div
    class="container mx-auto flex flex-col md:flex-row items-stretch justify-center gap-5 py-10"
  >
    <div
      v-for="data in photos"
      class="relative flex md:flex-1 aspect-[1.08/1] overflow-hidden sm:[clip-path:polygon(40%_0,_100%_0,_60%_100%,_0_100%)] md:[clip-path:polygon(40%_0,_100%_0,_60%_100%,_0%_100%)] [&:not(:first-child)]:ml-[-13%]"
    >
      <div data-dj="true" class="w-full h-full">
        <a
          class="flex-1 cursor-pointer text-inherit no-underline outline-none outline-2 outline-transparent outline-offset-2 transition duration-150 ease-out"
          href="#"
        >
          <img
            :alt="data.name"
            :src="data.image"
            class="block w-full h-full hover:scale-105 object-cover brightness-50 hover:brightness-100 transition-[filter,transform] duration-[200ms,750ms] ease-in-out origin-center will-change-[transform,filter] [backface-visibility:hidden] [transform:translateZ(0)]"
          />
          <div
            class="absolute left-[50%] top-[50%] z-[2] -translate-x-1/2 -translate-y-1/2"
          >
            <p>
              <span
                class="text-white p-2 rounded-xl bg-black hover-color-teal text-3xl css-1vxj0b9"
              >
                {{ data.name }}
              </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
