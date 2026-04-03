export default defineAppConfig({
  title: 'PinoySeoul',
  github: 'https://github.com/pinoyseoul/linkshortener',
  coffee: 'https://a.pinoyseoul.com/coffee',
  twitter: 'https://a.pinoyseoul.com/x',
  telegram: 'https://a.pinoyseoul.com/telegram',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://a.pinoyseoul.com/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
