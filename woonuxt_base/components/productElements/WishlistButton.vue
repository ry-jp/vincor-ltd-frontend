<script setup lang="ts">
const { addToWishlist, removeFromWishlist, isInList } = useWishlist();

const { product } = defineProps<{ product: Product }>();

const isWishlisted = computed(() => (product.databaseId ? isInList(product.databaseId) : false));

const toggleWishlist = () => (isWishlisted.value && product.databaseId ? removeFromWishlist(product.databaseId) : addToWishlist(product));
</script>

<template>
  <a class="cursor-pointer flex mt-4 text-sm text-red-400 gap-2 items-center" @click="toggleWishlist">
    <Icon v-if="isWishlisted" name="ion:heart" size="18" class="text-red-400" />
    <Icon v-else name="ion:bookmark-outline" size="18" />
    <span>{{ isWishlisted ? $t('messages.shop.wishlistRemove') : $t('messages.shop.wishlistAdd') }}</span>
  </a>
</template>
