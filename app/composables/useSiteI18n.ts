import { messages, type MessageKey } from '~/i18n/messages'

export function useSiteI18n() {
  const locale = useState<'fr' | 'en'>('locale', () => 'fr')

  function t(key: MessageKey) {
    return messages[locale.value][key]
  }

  function toggleLocale() {
    locale.value = locale.value === 'fr' ? 'en' : 'fr'
  }

  return { locale, t, toggleLocale }
}
