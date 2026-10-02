<script setup lang="ts">
const { locale, t, toggleLocale } = useSiteI18n()
const asset = useAsset()
const menuOpen = ref(false)

const links = [
  { href: '#mission', key: 'nav-mission' },
  { href: '#services', key: 'nav-services' },
  { href: '#accueil', key: 'nav-access' },
  { href: '#horaires', key: 'nav-info' },
  { href: '#histoire', key: 'nav-history' },
] as const

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-4 border-gold-500 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-24">
        <a href="#top" class="flex items-center gap-3 group">
          <img :src="asset('logo.png')" alt="Cent Buttek" class="h-16 w-16 rounded-full object-cover gold-ring group-hover:scale-105 transition-transform">
          <div class="hidden sm:block">
            <span class="text-xl font-extrabold tracking-tight text-ink block leading-tight">Cent Buttek</span>
            <span class="text-xs font-bold text-lime-700 tracking-wider uppercase block">Lamadelaine / Pétange</span>
          </div>
        </a>

        <nav class="hidden xl:flex items-center gap-5 text-sm">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="text-ink/70 hover:text-ink font-semibold transition-colors"
          >{{ t(link.key) }}</a>
        </nav>

        <div class="hidden xl:flex items-center">
          <button type="button" class="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-200 bg-gold-50 hover:bg-gold-100 font-bold text-sm text-ink transition-all shadow-sm" @click="toggleLocale">
            <i class="fa-solid fa-globe text-gold-700" />
            <span>{{ locale.toUpperCase() }}</span>
            <span class="text-xs text-ink/40">| {{ locale === 'fr' ? 'EN' : 'FR' }}</span>
          </button>
        </div>

        <div class="flex xl:hidden items-center gap-3">
          <button type="button" class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-gold-200 bg-gold-50 font-bold text-xs text-ink" @click="toggleLocale">
            <i class="fa-solid fa-globe text-gold-700" />
            <span>{{ locale.toUpperCase() }}</span>
          </button>
          <button type="button" class="p-2 rounded-lg text-ink hover:bg-gold-50 focus:outline-none" @click="menuOpen = !menuOpen">
            <i class="fa-solid fa-bars text-xl" />
          </button>
        </div>
      </div>
    </div>

    <div v-show="menuOpen" class="xl:hidden border-b border-gold-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="block py-2 text-base font-semibold text-ink hover:text-gold-800 border-b border-gold-100"
        @click="closeMenu"
      >{{ t(link.key) }}</a>
    </div>
  </header>
</template>
