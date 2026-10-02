<script setup lang="ts">
const { t } = useSiteI18n()
const asset = useAsset()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-ink text-white/80 py-12 mt-auto border-t-8 border-lime-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <div class="md:col-span-2 space-y-4">
          <div class="flex items-center gap-3">
            <img :src="asset('logo.png')" alt="Cent Buttek" class="h-14 w-14 rounded-full object-cover gold-ring">
            <span class="text-xl font-extrabold text-white">Cent Buttek Lamadelaine</span>
          </div>
          <p class="text-white/60 text-sm max-w-md leading-relaxed">{{ t('footer-about') }}</p>
        </div>

        <div>
          <h5 class="text-gold-500 font-extrabold text-sm uppercase tracking-wider mb-4">{{ t('footer-links-title') }}</h5>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="https://www.centbuttek.lu/" target="_blank" rel="noopener" class="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                <i class="fa-solid fa-arrow-up-right-from-square text-xs" /> Cent Buttek Luxembourg
              </a>
            </li>
            <li><a href="#accueil" class="hover:text-gold-400 transition-colors">{{ t('nav-access') }}</a></li>
            <li><a href="#horaires" class="hover:text-gold-400 transition-colors">{{ t('nav-info') }}</a></li>
            <li><a href="#histoire" class="hover:text-gold-400 transition-colors">{{ t('nav-history') }}</a></li>
          </ul>
        </div>

        <div>
          <h5 class="text-gold-500 font-extrabold text-sm uppercase tracking-wider mb-4">{{ t('footer-contact-title') }}</h5>
          <ul class="space-y-2 text-sm text-white/70">
            <li><i class="fa-solid fa-location-dot text-lime-500 w-5" /> 8, Grand Rue, Lamadelaine</li>
            <li><i class="fa-solid fa-phone text-lime-500 w-5" /> +352 26 50 13 05</li>
            <li><i class="fa-solid fa-envelope text-lime-500 w-5" /> CBLam@pt.lu</li>
            <li><i class="fa-solid fa-clock text-lime-500 w-5" /> {{ t('day-monday') }} & {{ t('day-thursday') }} : {{ t('hours-monday-val') }}</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-white/50 gap-4">
        <p>&copy; {{ year }} den Cent Buttek a.s.b.l. {{ t('footer-rights') }}</p>
        <p>{{ t('footer-craft') }}</p>
      </div>
    </div>
  </footer>
</template>
