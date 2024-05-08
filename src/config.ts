import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Buenas Prácticas Digitales',
  subtitle: 'En el Hogar.',
  lang: 'es', // 'es', 'en', 'zh_CN', 'zh_TW', 'ja'
  themeColor: {
    hue: 195, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: true, // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/banner.svg', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  },
  favicon: [
    // Leave this array empty to use the default favicon
    {
      src: '/favicon/icon.svg', // Path of the favicon, relative to the /public directory
      sizes: '32x32', // (Optional) Size of the favicon, set only if you have favicons of different sizes
    },
  ],
}

export const navBarConfig: NavBarConfig = {
  links: [LinkPreset.Home, LinkPreset.Archive, LinkPreset.About],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.svg', // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Buenas Prácticas Digitales',
  bio: 'Aprende más en',
  links: [
    {
      name: 'YouTube',
      icon: 'fa6-brands:youtube',
      url: '#',
    },
    {
      name: 'Telegram',
      icon: 'fa6-brands:telegram',
      url: '#',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
