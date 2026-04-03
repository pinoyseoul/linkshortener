export default defineAppConfig({
  title: 'a',
  coffee: 'https://www.pinoyseoul.com/p/contact.html',
  twitter: 'https://twitter.com/pinoyseoul',
  facebook: 'https://facebook.com/pinoyseoulcom',
  description: 'Link shortener for PinoySeoul',
  image: 'https://a.pinoyseoul.com/banner.png',
  previewTTL: 300,
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
