<script lang="ts" setup>
const { data } = await useAsyncGql('getProductCategories', { first: 6 });
const productCategories = data.value?.productCategories?.nodes || [];
const runtimeConfig = useRuntimeConfig();



useHead({
  title: `Home | Vincor Ltd.`,
  meta: [{ name: 'description', content: 'The best ecommerce store in the world' }],
  link: [{ rel: 'canonical', href: runtimeConfig?.public?.FRONT_END_URL }],
});
</script>

<template>
  <main>
    <HeroBanner />
    <div class="container my-16">

      <h2 class="text-lg font-semibold md:text-2xl">Featured Brands:</h2>
    <!-- <div class="container flex flex-wrap items-center justify-center gap-8 my-16 text-center brand lg:justify-between">
      <img src="/images/brands/norsat.png" alt="Brand 1" width="200" height="35" />
      <img src="/images/brands/eti.png" alt="Brand 2" width="80" height="30" />
      <img src="/images/brands/andrew.png" alt="Brand 3" width="175" height="48" />
      <img src="/images/brands/venture.png" alt="Brand 4" width="200" height="30" />
      <img src="/images/brands/quintech.png" alt="Brand 5" width="200" height="44" />
      <img src="/images/brands/dh.png" alt="Brand 6" width="65" height="40" />
    </div> -->
</div>

    <section class="container my-16">
      <div class="flex items-end justify-between">
        <h2 class="text-lg font-semibold md:text-2xl">{{ $t('messages.shop.shopByCategory') }}</h2>
        <NuxtLink class="text-primary" to="/categories">{{ $t('messages.general.viewAll') }}</NuxtLink>
      </div>
      <div class="grid justify-center grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-6">
        <CategoryCard v-for="(category, i) in productCategories" :key="i" class="w-full" :node="category" />
      </div>

    </section>

    <!-- <section class="container grid gap-4 my-24 md:grid-cols-2 lg:grid-cols-4">
      <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
        <img src="/icons/box.svg" width="60" height="60" alt="Free Shipping" loading="lazy" />
        <div>
          <h3 class="text-xl font-semibold">Free Shipping</h3>
          <p class="text-sm">Free shipping on order over €50</p>
        </div>
      </div>
      <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
        <img src="/icons/moneyback.svg" width="60" height="60" alt="Money Back" loading="lazy" />
        <div>
          <h3 class="text-xl font-semibold">Peace of Mind</h3>
          <p class="text-sm">30 days money back guarantee</p>
        </div>
      </div>
      <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
        <img src="/icons/secure.svg" width="60" height="60" alt="Secure Payment" loading="lazy" />
        <div>
          <h3 class="text-xl font-semibold">100% Payment Secure</h3>
          <p class="text-sm">Your payment are safe with us.</p>
        </div>
      </div>
      <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
        <img src="/icons/support.svg" width="60" height="60" alt="Support 24/7" loading="lazy" />
        <div>
          <h3 class="text-xl font-semibold">Support 24/7</h3>
          <p class="text-sm">24/7 Online support</p>
        </div>
      </div>
    </section> -->
  </main>
</template>
