# ⚡ PinoySeoul Link Shortener

**A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.**

[<img src="https://devin.ai/assets/deepwiki-badge.png" alt="DeepWiki" height="20"/>](https://deepwiki.com/pinoyseoul/linkshortener)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F69652?style=flat&logo=cloudflare&logoColor=white)
![Nuxt](https://img.shields.io/badge/Nuxt-00DC82?style=flat&logo=nuxtdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat&logo=shadcnui&logoColor=white)

![Hero](./public/image.png)

---

## ✨ Features

- **🔗 URL Shortening:** Compress your URLs to their minimal length.
- **📈 Analytics:** Monitor link analytics and gather insightful statistics.
- **☁️ Serverless:** Deploy without the need for traditional servers.
- **🎨 Customizable Slug:** Support for personalized slugs and case sensitivity.
- **🪄 AI Slug:** Leverage AI to generate slugs.
- **⏰ Link Expiration:** Set expiration dates for your links.
- **📱 Device Routing:** Redirect iOS/Android users to different URLs (App Store links).
- **🖼️ OpenGraph Preview:** Custom social media previews with title, description, and image.
- **📊 Real-time Analytics:** Live 3D globe visualization and real-time event logs.
- **🔲 QR Code:** Generate QR codes for your short links.
- **📦 Import/Export:** Bulk migration via JSON/CSV files.
- **🌍 Multi-language:** Full i18n support for the dashboard.
- **🌙 Dark Mode:** Light, dark, and system theme support.

## 🪧 Demo

Experience the demo at [a.pinoyseoul.com](https://a.pinoyseoul.com/dashboard). Log in using the Site Token below:

```txt
Site Token: PinoySeoulCool
```

<details>
  <summary><b>Screenshots</b></summary>
  <img alt="Analytics" src="./docs/images/a.pinoyseoul.com_dashboard.png"/>
  <img alt="Links" src="./docs/images/a.pinoyseoul.com_dashboard_links.png"/>
  <img alt="Link Analytics" src="./docs/images/a.pinoyseoul.com_dashboard_link_slug.png"/>
</details>

## 🧱 Technologies Used

- **Framework**: [Nuxt](https://nuxt.com/)
- **Database**: [Cloudflare Workers KV](https://developers.cloudflare.com/kv/)
- **Analytics Engine**: [Cloudflare Workers Analytics Engine](https://developers.cloudflare.com/analytics/)
- **UI Components**: [shadcn-vue](https://www.shadcn-vue.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Cloudflare](https://www.cloudflare.com/)

## 🚗 Roadmap [WIP]

We welcome your contributions and PRs.

- [x] Browser Extension - [PinoySeoul Tool](https://github.com/zhuzhuyule/PinoySeoul-extension)
- [x] Chrome Extension - [PinoySeoul Quick Shorten](https://chromewebstore.google.com/detail/PinoySeoul-quick-shorten/emlojomjpenjgkaphajcokijobpkejih)
- [x] Raycast Extension - [Raycast-PinoySeoul](https://github.com/foru17/raycast-PinoySeoul)
- [x] Apple Shortcuts - [PinoySeoul Shortcuts](https://s.search1api.com/PinoySeoul001)
- [x] iOS App - [PinoySeoul](https://apps.apple.com/app/id6745417598)
- [ ] Enhanced Link Management (with Cloudflare D1)
- [ ] Analytics Enhancements (Support for merging filter conditions)
- [ ] Dashboard Performance Optimization (Infinite loading)
- [ ] Units Test

## 🏗️ Deployment

> Video tutorial: [Watch here](https://www.youtube.com/watch?v=MkU23U2VE9E)

We currently support deployment to [Cloudflare Workers](./docs/deployment/workers.md) (recommended) and [Cloudflare Pages](./docs/deployment/pages.md).

## ⚒️ Configuration

[Configuration Docs](./docs/configuration.md)

## 🔌 API

[API Docs](./docs/api.md)

## 🤖 AI Skills

Install PinoySeoul AI Skills for enhanced coding assistance:

```bash
npx skills add pinoyseoul/linkshortener
```

## 🧰 MCP

We currently do not support native MCP Server, but we have OpenAPI documentation, and you can use the following method to support MCP.

> Replace the domain name in `OPENAPI_SPEC_URL` with your own domain name.
>
> The `API_KEY` is the same as the `NUXT_SITE_TOKEN` in the environment variables.

```json
{
  "mcpServers": {
    "PinoySeoul": {
      "command": "uvx",
      "args": [
        "mcp-openapi-proxy"
      ],
      "env": {
        "OPENAPI_SPEC_URL": "https://a.pinoyseoul.com/_docs/openapi.json",
        "API_KEY": "PinoySeoulCool",
        "TOOL_WHITELIST": "/api/link"
      }
    }
  }
}
```

## 🙋🏻 FAQs

[FAQs](./docs/faqs.md)

## 💖 Credits

1. [**miantiao (Original Author)**](([https://github.com/miantiao-me/sink))
2. [**Cloudflare**](https://www.cloudflare.com/)
3. [**NuxtHub**](https://hub.nuxt.com/)
4. [**Astroship**](https://astroship.web3templates.com/)
5. [**Tailark**](https://tailark.com/)


