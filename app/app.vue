<script setup lang="ts">
const { locale } = useSiteI18n()
const asset = useAsset()

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  link: [{ rel: 'icon', href: asset('logo.png'), type: 'image/png' }],
}))
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
