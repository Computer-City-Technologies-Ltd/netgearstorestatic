<script setup>
useSeoMeta({
  title: "About Us",
  description:
    "At NETGEAR, we turn ideas into innovative networking products that connect people, power businesses and advance the way we live. Easy to use. Powerful. Smart. And designed just for you.",
  ogTitle: "About Us",
  ogDescription:
    "At NETGEAR, we turn ideas into innovative networking products that connect people, power businesses and advance the way we live. Easy to use. Powerful. Smart. And designed just for you.",
  ogType: "website",
});
</script>
<template>
  <!-- Hero Section -->
  <section class="relative w-full h-[70vh]">
    <NuxtImg
      src="/assets/images/about_desktop.webp"
      class="absolute inset-0 w-full h-full object-cover"
      alt=""
    />
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- CENTER WRAPPER -->
    <div class="relative z-10 flex items-center justify-center h-full px-6">
      <div class="text-white max-w-2xl text-center">
        <h5 class="font-bold tracking-widest">OUR PURPOSE</h5>
        <h1 class="text-6xl md:text-6xl font-bold mb-4 leading-tight">
          <p class="py-5">To Power</p>
          <p>Extraordinary</p>
          <p class="py-5">Experiences</p>
        </h1>
      </div>
    </div>
  </section>
  <!-- /Hero Section -->

  <!-- about section -->
  <section class="bg-gray-50 text-gray-800">
    <div class="max-w-7xl mx-auto px-6 py-20 text-center">
      <h1 class="text-5xl font-bold mb-4">
        At NETGEAR, our mission is to unleash the full potential of connectivity
        with intelligent solutions that delight and protect
      </h1>
      <p class="text-[12pt] text-gray-900 max-w-4xl mx-auto">
        We do this by delivering intelligent, award-winning networking solutions
        that combine performance, reliability, and connectivity with advanced
        built-in security — empowering enterprise, consumers, and people on the
        go to connect with confidence. Our innovations enable seamless
        entertainment, collaboration, and productivity in a world that`s always
        on. <br />
        <br />As a global company with nearly 30 years of innovation, NETGEAR
        transforms how people, enterprise, and communities connect. Through
        thoughtful design and advanced technology, we`re helping to shape a more
        connected, secure, and inspired digital future.
      </p>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-6 py-16">
    <!-- Item 1 -->
    <div class="flex flex-col md:flex-row items-center gap-10">
      <!-- Left Image -->
      <div class="md:w-1/2">
        <NuxtImg
          src="/assets/images/networking.webp"
          alt="Illustration"
          class="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      <!-- Right Text -->
      <div class="md:w-1/2 text-gray-800">
        <h4 class="text-xs text-green-600">INNOVATION</h4>
        <h2 class="text-3xl font-bold mb-4">
          Where technology meets possibility
        </h2>
        <p class="text-gray-600 mb-4 leading-relaxed">
          Innovation drives everything we do. From pioneering home WiFi to
          advancing ProAV and networking solutions for global enterprises,
          NETGEAR leads the industry in performance, reliability, and design. We
          push the boundaries of what technology can do — so our customers can
          push the boundaries of what’s possible.
        </p>
      </div>
    </div>

    <!-- Item 2 -->
    <div class="flex flex-col md:flex-row items-center gap-10">
      <!-- Right Text -->
      <div class="md:w-1/2 text-gray-800">
        <h4 class="text-xs text-green-600">PERFORMANCE</h4>
        <h2 class="text-3xl font-bold mb-4">Engineered for excellence</h2>
        <p class="text-gray-600 mb-4 leading-relaxed">
          Every NETGEAR product is built for uncompromising performance. We
          engineer every detail — speed, security, and stability — to deliver
          experiences that simply work. Whether you’re streaming, gaming, or
          managing a business network, NETGEAR ensures consistent, powerful, and
          dependable performance.
        </p>
      </div>

      <!-- Left Image -->
      <div class="md:w-1/2">
        <NuxtImg
          src="/assets/images/netgear-av-storytelling.webp"
          alt="Illustration"
          class="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>

    <!-- Item 3 -->
    <div class="flex flex-col md:flex-row items-center gap-10">
      <!-- Left Image -->
      <div class="md:w-1/2">
        <NuxtImg
          src="/assets/images/connected-home.webp"
          alt="Illustration"
          class="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      <!-- Right Text -->
      <div class="md:w-1/2 text-gray-800">
        <h4 class="text-xs text-green-600">TRUST</h4>
        <h2 class="text-3xl font-bold mb-4">Connectivity you can count on</h2>
        <p class="text-gray-600 mb-4 leading-relaxed">
          Trust is the foundation of every connection we build. With nearly
          three decades of experience and millions of customers worldwide,
          NETGEAR stands for quality, integrity, and support. Our products are
          rigorously tested and backed by a commitment to security, service, and
          lasting reliability.
        </p>
      </div>
    </div>

    <!-- Item 4 -->
    <div class="flex flex-col md:flex-row items-center gap-10">
      <!-- Right Text -->
      <div class="md:w-1/2 text-gray-800">
        <h4 class="text-xs text-green-600">CULTURE</h4>
        <h2 class="text-3xl font-bold mb-4">Engineered for excellence</h2>
        <p class="text-gray-600 mb-4 leading-relaxed">
          We are a performance-driven team committed to shaping the future of
          connectivity. The most essential building blocks of our success are
          our people. As teammates, we live our values every day:
        </p>
        <ul
          class="text-gray-600 mb-4 list-disc list-inside space-y-2 leading-relaxed"
        >
          <li>We Dare to Transform the future</li>
          <li>We Connect and Delight our customers</li>
          <li>We Communicate Courageously with each other</li>
          <li>We Collaborate to Win It Together</li>
        </ul>
      </div>

      <!-- Left Image -->
      <div class="md:w-1/2">
        <NuxtImg
          src="/assets/images/netgear_desktop.webp"
          alt="Illustration"
          class="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  </section>
  <!-- /about section -->
</template>
