<script setup lang="ts">
const { t } = useSiteI18n()
const asset = useAsset()

const history = [
  { date: '09.03.2009', key: 'hist-2009' },
  { date: '22.12.2009', key: 'hist-bett' },
  { date: '19.08.2010', key: 'hist-beggen' },
  { date: '24.06.2014', key: 'hist-utility' },
  { date: '18.05.2015', key: 'hist-lama' },
] as const
</script>

<template>
  <main id="top">
    <section class="relative text-ink hero-pattern overflow-hidden py-20 lg:py-28">
      <div class="absolute bottom-0 right-0 w-40 h-40 lime-corner pointer-events-none" aria-hidden="true" />
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-w-0">
        <div class="grid lg:grid-cols-12 gap-12 items-center min-w-0">
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left min-w-0">
            <div class="mx-auto lg:mx-0 flex w-fit max-w-full items-center gap-2 px-4 py-2 rounded-full bg-lime-500 text-ink text-[11px] sm:text-xs font-extrabold tracking-wide uppercase">
              <i class="fa-solid fa-heart shrink-0" />
              <span class="leading-snug text-left min-w-0">{{ t('hero-badge') }}</span>
            </div>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink leading-tight">{{ t('hero-title') }}</h1>
            <p class="text-base sm:text-lg text-ink/70 max-w-2xl leading-relaxed mx-auto lg:mx-0">{{ t('hero-subtitle') }}</p>
            <div class="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#horaires" class="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-ink font-extrabold text-base shadow-lg hover:shadow-xl transition-all gap-2 transform hover:-translate-y-0.5">
                <i class="fa-regular fa-clock" />
                <span>{{ t('hero-cta-hours') }}</span>
              </a>
            </div>
          </div>

          <div class="lg:col-span-5 min-w-0">
            <div class="bg-white text-ink rounded-3xl p-6 sm:p-8 shadow-2xl border border-gold-200 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-16 h-16 lime-corner" aria-hidden="true" />
              <div class="flex justify-center mb-5">
                <img :src="asset('logo.png')" alt="Logo Cent Buttek" class="h-36 w-36 rounded-full object-cover gold-ring">
              </div>
              <h3 class="text-xl font-extrabold text-ink mb-4 border-b border-gold-100 pb-3 flex items-center gap-2">
                <i class="fa-solid fa-circle-info text-gold-700" />
                <span>{{ t('quick-info-title') }}</span>
              </h3>
              <ul class="space-y-4 text-sm">
                <li class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-full bg-gold-100 text-gold-800 flex items-center justify-center shrink-0 mt-0.5"><i class="fa-solid fa-location-dot" /></div>
                  <div>
                    <strong class="block text-ink">{{ t('quick-location-label') }}</strong>
                    <span class="text-ink/70">8 Grand-Rue, L-4874 Lamadelaine / Pétange</span>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-full bg-gold-100 text-gold-800 flex items-center justify-center shrink-0 mt-0.5"><i class="fa-solid fa-calendar-days" /></div>
                  <div>
                    <strong class="block text-ink">{{ t('quick-hours-label') }}</strong>
                    <span class="text-ink/70">{{ t('quick-hours-val') }}</span>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center shrink-0 mt-0.5"><i class="fa-solid fa-phone" /></div>
                  <div>
                    <strong class="block text-ink">{{ t('quick-phone-label') }}</strong>
                    <a href="tel:+35226501305" class="text-gold-800 font-bold hover:underline">+352 26 50 13 05</a>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-full bg-lime-100 text-lime-700 flex items-center justify-center shrink-0 mt-0.5"><i class="fa-solid fa-users" /></div>
                  <div>
                    <strong class="block text-ink">{{ t('quick-beneficiary-label') }}</strong>
                    <span class="text-ink/70">{{ t('quick-beneficiary-val') }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <figure class="mt-14">
          <img :src="asset('images/hero-harvest.jpg')" alt="Pain, blé et légumes frais" class="w-full h-56 sm:h-80 object-cover rounded-3xl border border-gold-200 shadow-sm">
        </figure>
      </div>
    </section>

    <section id="mission" class="py-20 bg-gold-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-xs font-extrabold text-gold-800 uppercase tracking-widest mb-2">{{ t('section-mission-tag') }}</h2>
          <h3 class="text-3xl font-extrabold text-ink sm:text-4xl">{{ t('section-mission-title') }}</h3>
          <p class="mt-4 text-ink/70 text-lg leading-relaxed">{{ t('section-mission-desc') }}</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-3xl p-8 shadow-sm border border-gold-100 hover:shadow-md transition-all group relative overflow-hidden">
            <div class="absolute top-0 right-0 w-12 h-12 lime-corner opacity-80" aria-hidden="true" />
            <div class="w-14 h-14 rounded-full bg-gold-500 text-ink flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform"><i class="fa-solid fa-recycle" /></div>
            <h4 class="text-xl font-extrabold text-ink mb-3">{{ t('card1-title') }}</h4>
            <p class="text-ink/70 leading-relaxed text-sm">{{ t('card1-desc') }}</p>
          </div>
          <div class="bg-white rounded-3xl p-8 shadow-sm border border-gold-100 hover:shadow-md transition-all group">
            <div class="w-14 h-14 rounded-full bg-lime-500 text-ink flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform"><i class="fa-solid fa-cart-shopping" /></div>
            <h4 class="text-xl font-extrabold text-ink mb-3">{{ t('card2-title') }}</h4>
            <p class="text-ink/70 leading-relaxed text-sm">{{ t('card2-desc') }}</p>
          </div>
          <div class="bg-white rounded-3xl p-8 shadow-sm border border-gold-100 hover:shadow-md transition-all group">
            <div class="w-14 h-14 rounded-full bg-ink text-gold-500 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform"><i class="fa-solid fa-handshake-angle" /></div>
            <h4 class="text-xl font-extrabold text-ink mb-3">{{ t('card3-title') }}</h4>
            <p class="text-ink/70 leading-relaxed text-sm">{{ t('card3-desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-xs font-extrabold text-gold-800 uppercase tracking-widest mb-2">{{ t('services-tag') }}</h2>
          <h3 class="text-3xl font-extrabold text-ink sm:text-4xl">{{ t('services-title') }}</h3>
          <p class="mt-4 text-ink/70 text-lg leading-relaxed">{{ t('services-desc') }}</p>
        </div>
        <div class="grid md:grid-cols-2 gap-4 mb-10">
          <img :src="asset('images/morning-crates.jpg')" alt="Caisses de pain, de fruits et de légumes pour la collecte du matin" class="w-full h-64 object-cover rounded-3xl border border-gold-100">
          <img :src="asset('images/sorting-table.jpg')" alt="Tri de pommes, de pain et de carottes sur une table" class="w-full h-64 object-cover rounded-3xl border border-gold-100">
        </div>
        <div class="grid md:grid-cols-3 gap-6 mb-10">
          <div class="rounded-3xl border border-gold-200 bg-gold-50 p-6">
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 font-extrabold text-ink">1</span>
            <h4 class="mt-4 text-lg font-extrabold text-ink">{{ t('step1-title') }}</h4>
            <p class="mt-2 text-sm leading-relaxed text-ink/70">{{ t('step1-desc') }}</p>
          </div>
          <div class="rounded-3xl border border-lime-400/40 bg-lime-50 p-6">
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lime-500 font-extrabold text-ink">2</span>
            <h4 class="mt-4 text-lg font-extrabold text-ink">{{ t('step2-title') }}</h4>
            <p class="mt-2 text-sm leading-relaxed text-ink/70">{{ t('step2-desc') }}</p>
          </div>
          <div class="rounded-3xl border border-gold-200 bg-white p-6">
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink font-extrabold text-gold-500">3</span>
            <h4 class="mt-4 text-lg font-extrabold text-ink">{{ t('step3-title') }}</h4>
            <p class="mt-2 text-sm leading-relaxed text-ink/70">{{ t('step3-desc') }}</p>
          </div>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="rounded-2xl bg-ink text-white p-5">
            <p class="text-2xl font-extrabold text-gold-500">18.05.2015</p>
            <p class="mt-1 text-sm text-white/70">{{ t('stat-open') }}</p>
          </div>
          <div class="rounded-2xl bg-gold-500 text-ink p-5">
            <p class="text-2xl font-extrabold">28</p>
            <p class="mt-1 text-sm">{{ t('stat-volunteers') }}</p>
          </div>
          <div class="rounded-2xl bg-lime-500 text-ink p-5">
            <p class="text-2xl font-extrabold">11</p>
            <p class="mt-1 text-sm">{{ t('stat-drivers') }}</p>
          </div>
          <div class="rounded-2xl border border-gold-200 bg-gold-50 p-5">
            <p class="text-2xl font-extrabold text-ink">550 t</p>
            <p class="mt-1 text-sm text-ink/70">{{ t('stat-tonnes') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="accueil" class="py-20 bg-gold-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-12">
          <h2 class="text-xs font-extrabold text-gold-800 uppercase tracking-widest mb-2">{{ t('access-tag') }}</h2>
          <h3 class="text-3xl font-extrabold text-ink sm:text-4xl">{{ t('access-title') }}</h3>
          <p class="mt-4 text-ink/70 text-lg leading-relaxed">{{ t('access-desc') }}</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="rounded-3xl bg-white border border-gold-100 p-6">
            <div class="w-12 h-12 rounded-full bg-gold-500 text-ink flex items-center justify-center text-xl mb-4"><i class="fa-solid fa-id-card" /></div>
            <h4 class="text-lg font-extrabold text-ink mb-2">{{ t('access1-title') }}</h4>
            <p class="text-sm text-ink/70 leading-relaxed">{{ t('access1-desc') }}</p>
          </div>
          <div class="rounded-3xl bg-white border border-gold-100 p-6">
            <div class="w-12 h-12 rounded-full bg-lime-500 text-ink flex items-center justify-center text-xl mb-4"><i class="fa-solid fa-scale-balanced" /></div>
            <h4 class="text-lg font-extrabold text-ink mb-2">{{ t('access2-title') }}</h4>
            <p class="text-sm text-ink/70 leading-relaxed">{{ t('access2-desc') }}</p>
          </div>
          <div class="rounded-3xl bg-white border border-gold-100 p-6">
            <div class="w-12 h-12 rounded-full bg-ink text-gold-500 flex items-center justify-center text-xl mb-4"><i class="fa-solid fa-coins" /></div>
            <h4 class="text-lg font-extrabold text-ink mb-2">{{ t('access3-title') }}</h4>
            <p class="text-sm text-ink/70 leading-relaxed">{{ t('access3-desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="horaires" class="py-20 bg-white border-y border-gold-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-6 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500 text-ink text-xs font-extrabold uppercase">
              <i class="fa-solid fa-clock" />
              <span>{{ t('hours-tag') }}</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">{{ t('hours-title') }}</h2>
            <p class="text-ink/70 text-base leading-relaxed">{{ t('hours-desc') }}</p>
            <div class="bg-gold-50 rounded-2xl p-6 border border-gold-200 space-y-4">
              <div class="flex justify-between items-center pb-3 border-b border-gold-200">
                <div class="flex items-center gap-3">
                  <span class="w-3 h-3 rounded-full bg-lime-500" />
                  <span class="font-extrabold text-ink">{{ t('day-monday') }}</span>
                </div>
                <span class="font-bold text-ink">{{ t('hours-monday-val') }}</span>
              </div>
              <div class="flex justify-between items-center pb-3 border-b border-gold-200">
                <div class="flex items-center gap-3">
                  <span class="w-3 h-3 rounded-full bg-lime-500" />
                  <span class="font-extrabold text-ink">{{ t('day-thursday') }}</span>
                </div>
                <span class="font-bold text-ink">{{ t('hours-thursday-val') }}</span>
              </div>
              <div class="flex justify-between items-center pt-1 text-xs text-ink/50 gap-4">
                <span>{{ t('days-closed') }}</span>
                <span class="font-bold text-ink/40 uppercase shrink-0">{{ t('closed-badge') }}</span>
              </div>
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="p-4 rounded-2xl bg-gold-100 border border-gold-200">
                <i class="fa-solid fa-map-pin text-gold-800 text-lg mb-2" />
                <h5 class="font-extrabold text-ink text-sm">{{ t('info-addr-title') }}</h5>
                <p class="text-ink/70 text-xs mt-1">8, Grand Rue<br>L-4874 Lamadelaine</p>
              </div>
              <div class="p-4 rounded-2xl bg-lime-100 border border-lime-400/40">
                <i class="fa-solid fa-phone text-lime-700 text-lg mb-2" />
                <h5 class="font-extrabold text-ink text-sm">{{ t('info-phone-title') }}</h5>
                <p class="text-ink/70 text-xs mt-1">
                  <a href="tel:+35226501305" class="font-extrabold text-ink hover:underline">+352 26 50 13 05</a><br>
                  <a href="tel:+352691893732" class="hover:underline">+352 691 893 732</a><br>
                  <span>{{ t('info-phone-note') }}</span>
                </p>
              </div>
              <div class="p-4 rounded-2xl bg-white border border-gold-200">
                <i class="fa-solid fa-envelope text-gold-800 text-lg mb-2" />
                <h5 class="font-extrabold text-ink text-sm">{{ t('info-email-title') }}</h5>
                <p class="text-ink/70 text-xs mt-1"><a href="mailto:CBLam@pt.lu" class="font-extrabold text-ink hover:underline">CBLam@pt.lu</a></p>
              </div>
              <div class="p-4 rounded-2xl bg-white border border-gold-200">
                <i class="fa-solid fa-id-card text-lime-700 text-lg mb-2" />
                <h5 class="font-extrabold text-ink text-sm">{{ t('info-lead-title') }}</h5>
                <p class="text-ink/70 text-xs mt-1">Isabelle Metzler-Zaurrini<br>Viviane Roos</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="bg-gold-50 rounded-3xl overflow-hidden border border-gold-200 shadow-sm relative min-h-[380px] flex flex-col justify-between p-6">
              <iframe
                class="absolute inset-0 w-full h-full border-0 opacity-80"
                title="Cent Buttek Lamadelaine"
                src="https://maps.google.com/maps?q=8%20Grand%20Rue%20Lamadelaine%20Luxembourg&t=&z=14&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              />
              <div class="relative z-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-md border border-gold-200 max-w-sm">
                <h4 class="font-extrabold text-ink text-sm flex items-center gap-2">
                  <i class="fa-solid fa-diamond-turn-right text-gold-700" />
                  <span>{{ t('map-card-title') }}</span>
                </h4>
                <p class="text-xs text-ink/70 mt-1">{{ t('map-card-desc') }}</p>
              </div>
              <a href="https://maps.google.com/?q=8+Grand+Rue+Lamadelaine+Luxembourg" target="_blank" rel="noopener noreferrer" class="relative z-10 self-end inline-flex items-center gap-2 bg-ink hover:bg-black text-gold-500 font-extrabold text-xs px-4 py-2.5 rounded-full shadow transition-colors">
                <span>{{ t('map-open-google') }}</span>
                <i class="fa-solid fa-arrow-up-right-from-square text-xs" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="histoire" class="py-20 bg-gold-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-12">
          <h2 class="text-xs font-extrabold text-gold-800 uppercase tracking-widest mb-2">{{ t('history-tag') }}</h2>
          <h3 class="text-3xl font-extrabold text-ink sm:text-4xl">{{ t('history-title') }}</h3>
          <p class="mt-4 text-ink/70 text-lg leading-relaxed">{{ t('history-desc') }}</p>
        </div>
        <ol class="space-y-4">
          <li
            v-for="(item, index) in history"
            :key="item.key"
            class="grid sm:grid-cols-12 gap-4 rounded-2xl p-5"
            :class="index === history.length - 1 ? 'bg-lime-500' : 'bg-white border border-gold-100'"
          >
            <span class="sm:col-span-3 font-extrabold" :class="index === history.length - 1 ? 'text-ink' : 'text-gold-800'">{{ item.date }}</span>
            <p class="sm:col-span-9 text-sm leading-relaxed" :class="index === history.length - 1 ? 'text-ink' : 'text-ink/80'">{{ t(item.key) }}</p>
          </li>
        </ol>
      </div>
    </section>
  </main>
</template>
