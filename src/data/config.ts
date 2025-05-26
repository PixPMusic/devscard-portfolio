import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale/en-US';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Alex Jankowiak - Senior Technical Support Engineer',
    description: '',
    faviconPath: '/src/assets/me.png',
  },
  pdf: {
    footer: '',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
