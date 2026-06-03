# HEIC to JPG 在线转换工具 — 详细落地方案（v2：纯网页 + AdSense）

## Context

用户希望搭建一个 HEIC to JPG 格式转换工具网站，使用 Cloudflare 注册域名并托管前端静态页面。盈利模式为 **Google AdSense 广告收入**，而非付费订阅。产品形态为**纯网页工具**，不做 PWA/App，降低用户使用门槛——打开浏览器就能用。

**域名已注册：`heicgo.com`** · Cloudflare Account ID: `721d867f108636e259750df2b54254e0`

经过竞品调研，市场上 WASM 客户端转换工具（HEICfree、PicShift、heic.online）都无法保留 EXIF 元数据（GPS、拍摄时间、相机参数），这成为我们的核心差异化切入点。

---

## 1. 商业模式

### 1.1 收入来源：Google AdSense

网站所有收入来自 Google AdSense 展示广告和点击广告。核心公式：

```
收入 = 流量 × 页面浏览数/访问 × 广告展示率 × RPM
```

- **RPM（每千次展示收入）**：工具类网站通常 $3-8，内容页通常 $5-15
- **页面浏览数/访问**：工具页 1-2 页，含博客内容可提升到 2-4 页
- **广告展示率**：受广告位置、页面长度影响

### 1.2 收入模型估算

| 月流量 | 页浏览量 | 假设 RPM | 月收入估算 |
|--------|---------|---------|-----------|
| 10,000 | 25,000 | $5 | ~$125/月 |
| 50,000 | 125,000 | $5 | ~$625/月 |
| 100,000 | 250,000 | $5 | ~$1,250/月 |
| 500,000 | 1,250,000 | $5 | ~$6,250/月 |

> 竞品参考：HEICfree、heic.online 等工具站主要关键词月搜索量在 50K-500K 级别。达到 50K 月访问约需 6-12 个月的 SEO 积累。

### 1.3 成本结构

| 项目 | 月成本 | 说明 |
|------|--------|------|
| 域名 | ~$0.87（.com ~$10.44/年） | Cloudflare Registrar 成本价 |
| 托管 | $0 | Cloudflare Pages 免费层（无限带宽） |
| CDN | $0 | 包含在 Pages 中 |
| 分析 | $0 | Cloudflare Web Analytics（免费） |
| **合计** | **~$0.87/月** | 几乎零运营成本 |

> 这意味着网站从一开始就盈利——即使只有几百访问量，AdSense 收入也远超域名成本。

---

## 2. 产品定位

**一句话：打开网页，拖入 HEIC，下载 JPG。保留 EXIF 位置信息，文件不上传服务器。**

与竞品的关键对比：

| 功能 | HEICfree | PicShift | heic.online | **我们** |
|------|:--------:|:--------:|:-----------:|:--------:|
| 客户端转换（不上传） | ✅ | ✅ | ✅ | ✅ |
| EXIF 保留 | ❌ | ❌ | ❌ | **✅** |
| 批量转换 | ✅ | ✅ | ✅ | ✅ |
| ZIP 下载 | ✅ | ✅ | ✅ | ✅ |
| 画质控制 | 滑块 | 完整 | ❌ | ✅ |
| Safari 原生加速 | ❌ | ✅ | ❌ | **✅** |
| 开源 | ❌ | ✅ | ❌ | 可选 |
| 广告 | 无 | 无 | 无 | AdSense |
| **差异点** | | | | **唯一保留 EXIF 的 WASM 工具** |

---

## 3. AdSense 广告策略

### 3.1 广告位布局

**转换工具页（首页）— 高流量、短停留：**

```
┌─────────────────────────────────────┐
│            Header + Logo            │
├─────────────────────────────────────┤
│  ★ 横向横幅广告 (728×90 / 响应式)    │  ← 位置 1：页眉下方
├─────────────────────────────────────┤
│                                     │
│     [拖放区域 / 转换器主体]          │
│                                     │
├─────────────────────────────────────┤
│  ★ 横向横幅广告 (728×90)            │  ← 位置 2：转换完成后展示
├─────────────────────────────────────┤
│     [转换结果 / 下载区域]            │
├─────────────────────────────────────┤
│            Footer                   │
└─────────────────────────────────────┘
```

**博客内容页 — 高停留、高 RPM：**

```
┌─────────────────────────────────────┐
│  ★ 页眉横幅广告                      │
├─────────────────────────────────────┤
│                                     │
│     [文章标题]                       │
│     [文章内容 ...]                   │
│                                     │
│  ★ 内容中间矩形广告 (300×250)        │  ← 位置 3：文章中部
│                                     │
│     [文章内容继续 ...]               │
│                                     │
├─────────────────────────────────────┤
│  ★ 页脚横幅广告                      │  ← 位置 4：文章底部
├─────────────────────────────────────┤
│     [相关文章]                       │
└─────────────────────────────────────┘
```

### 3.2 AdSense 政策合规要点

- **内容要求**：必须有足够原创内容（建议上线时至少 5 篇原创博客 + 完整功能页）
- **隐私政策**：必须披露 AdSense 使用 cookie 进行个性化广告
- **禁止点击诱导**：不能有"点击广告支持我们"等文案
- **广告数量限制**：每页最多 3 个展示广告 + 3 个链接广告
- **自动广告**：上线初期建议开启 Auto Ads，让 Google 自动优化位置

### 3.3 AdSense 申请时间线

```
网站上线 → 发布 5-10 篇原创内容 → 提交 AdSense 申请 → 审核（1-4 周）→ 展示广告
```

> 关键：AdSense 审核要求网站有"实质性内容"，仅有一个转换工具页通常不够。需要在申请前完成博客内容 + 隐私政策 + 关于页面。

### 3.4 AdSense 备用方案

如果 AdSense 审核被拒（新站常见），备选方案：
- **Carbon Ads**：面向开发者/设计师的单广告位，月付固定价
- **BuySellAds**：直接对接广告主，免除中间商
- **直接联系赞助商**：照片管理类 App/软件投广告

---

## 4. i18n 多语言策略：小语种蓝海

### 4.1 核心逻辑

主流竞品（CloudConvert、FreeConvert、iLoveIMG）的 UI 大多数**仅支持英文**，少数有 3-5 种大语种。HEIC 转换的关键词在小语种中**几乎零竞争**，但 iPhone 用户遍布全球——每个国家都有 HEIC 转换需求。

```
英语 "heic to jpg"     → KD 67，首页全是十年老站
日语 "heic jpg 変換"    → KD <10，首页无专业工具站
德语 "heic in jpg umwandeln" → KD <10，AdSense RPM 比英语高 30%
```

### 4.2 小语种 = 高 AdSense RPM

| 语种 | iPhone 渗透率 | AdSense RPM | 竞品覆盖 |
|------|:---:|:---:|:---:|
| 🇩🇪 德语 | 高 | **$8-18** | ❌ 无 |
| 🇯🇵 日语 | 极高 | **$6-14** | ❌ 无 |
| 🇰🇷 韩语 | 极高 | **$5-12** | ❌ 无 |
| 🇫🇷 法语 | 高 | **$5-12** | ❌ 无 |
| 🇳🇱 荷兰语 | 高 | **$6-15** | ❌ 无 |
| 🇸🇪 瑞典语 | 极高 | **$6-16** | ❌ 无 |
| 🇧🇷 葡萄牙语 | 高 | **$3-8** | ❌ 无 |
| 🇹🇭 泰语 | 中高 | **$2-6** | ❌ 无 |
| 🇻🇳 越南语 | 中 | **$2-5** | ❌ 无 |
| 🇵🇱 波兰语 | 中 | **$3-7** | ❌ 无 |

### 4.3 实现方案

**语言自动检测 + 手动切换：**

```
用户访问 heicgo.com
        │
        ▼
┌──────────────────────────┐
│ 读取 navigator.language  │  ← 浏览器语言（无需用户操作）
│ zh-CN → 简体中文          │
│ de-DE → 德语              │
│ en-US → 英语（默认）       │
└──────────────────────────┘
        │
        ▼
┌──────────────────────────┐
│ 显示对应语言 UI           │  ← 首次加载即正确语言
│ 用户可手动切换（顶部下拉）  │
└──────────────────────────┘
```

**技术实现（Astro i18n）：**

```
src/
├── i18n/
│   ├── translations.ts       # 所有翻译 key 的类型定义
│   ├── ui.ts                 # 语言检测 + 切换工具函数
│   └── locales/
│       ├── en.ts             # 英语（默认/fallback）
│       ├── zh-CN.ts          # 简体中文
│       ├── zh-TW.ts          # 繁體中文
│       ├── ja.ts             # 日本語
│       ├── ko.ts             # 한국어
│       ├── de.ts             # Deutsch
│       ├── fr.ts             # Français
│       ├── es.ts             # Español
│       ├── pt.ts             # Português
│       ├── it.ts             # Italiano
│       ├── nl.ts             # Nederlands
│       ├── sv.ts             # Svenska
│       ├── pl.ts             # Polski
│       ├── tr.ts             # Türkçe
│       ├── th.ts             # ไทย
│       └── vi.ts             # Tiếng Việt
```

**翻译文件结构（以 de.ts 为例）：**

```typescript
// src/i18n/locales/de.ts
export default {
  // SEO
  siteTitle: "HEIC zu JPG Konverter – Kostenlos, privat, kein Upload",
  siteDescription: "Konvertiere HEIC Fotos online zu JPG. 100% privat – Dateien verlassen dein Gerät nicht. EXIF-Daten bleiben erhalten.",
  
  // UI
  hero: {
    title: "HEIC zu JPG konvertieren",
    subtitle: "Kostenlos · Privat · Kein Upload nötig",
    cta: "Jetzt konvertieren",
  },
  dropZone: {
    title: "HEIC-Dateien hier ablegen",
    or: "oder",
    browse: "Dateien auswählen",
    supported: "Unterstützt HEIC, HEIF",
  },
  options: {
    quality: "Qualität",
    preserveExif: "EXIF-Daten behalten",
    autoRotate: "Automatisch drehen",
  },
  // ... 所有 UI 文案
};
```

### 4.4 SEO 语言策略

每个语种使用**子路径**（非子域名），所有语言共享 `heicgo.com` 的域名权重：

```
heicgo.com/           → 自动检测语言，重定向到 /zh-CN/ 或 /en/
heicgo.com/en/        → 英语
heicgo.com/zh-CN/     → 简体中文
heicgo.com/ja/        → 日本語
heicgo.com/de/        → Deutsch
...
```

> 相比 `de.heicgo.com` 子域名方案，子路径的 SEO 更优——所有语种的外链都汇聚到同一个域名，权重不分散。

**每个语种页面的 SEO 优化：**

```html
<!-- hreflang 标签告诉 Google 这些是同一内容的翻译版本 -->
<link rel="alternate" hreflang="en" href="https://heicgo.com/en/" />
<link rel="alternate" hreflang="zh-CN" href="https://heicgo.com/zh-CN/" />
<link rel="alternate" hreflang="de" href="https://heicgo.com/de/" />
<link rel="alternate" hreflang="ja" href="https://heicgo.com/ja/" />
<link rel="alternate" hreflang="x-default" href="https://heicgo.com/en/" />
```

### 4.5 分阶段上线

| 阶段 | 语种 | 理由 |
|------|------|------|
| **Phase 1（首批）** | en, zh-CN | 基础语言，覆盖最大市场 |
| **Phase 2（高 RPM）** | de, ja, ko, fr | 高 AdSense RPM + 零竞争 |
| **Phase 3（覆盖）** | es, pt, it, nl, sv | 覆盖欧洲/南美 |
| **Phase 4（长尾）** | pl, tr, th, vi, zh-TW | 进一步扩展 |

### 4.6 翻译策略

- **AI 翻译 + 人工校对**：首批用 Claude/GPT-4 翻译（质量足够），后期收集用户反馈修正
- **Key 少而精**：整个工具 UI 约 80-100 个翻译 key，不是负担
- **博客不翻译**：博客文章仅用英语和中文，小语种不做博客（ROI 不够）
- **语言检测 cookie**：用户手动切语言后保存偏好，下次访问记住

---

## 5. 技术栈

| 层 | 技术 | 理由 |
|---|------|------|
| 框架 | Astro 5.x | 内容页零 JS、内置 MDX 博客、完美匹配 Cloudflare Pages |
| UI | Preact + Signals | 仅转换器部分加载 JS（3KB），其余页面纯静态 |
| 样式 | Tailwind CSS v4 | 原子化 CSS，最小化输出 |
| 构建 | Vite (Astro 内置) | WASM 原生支持 |
| 测试 | Vitest + Playwright | 单元 + E2E |
| 部署 | Cloudflare Pages | 免费、无限带宽、全球 CDN |
| 域名 | Cloudflare Registrar | 成本价 |
| 分析 | Google Analytics + Cloudflare Web Analytics | GA 用于 AdSense，CF 作为备份 |
| 广告 | Google AdSense | 自动广告 + 手动广告位 |

### 核心转换库

| 库 | 用途 | 大小 |
|---|------|------|
| `heic2any`（WASM 回退） | 非 Safari 浏览器的 HEIC 解码 | ~600KB-1.3MB |
| `createImageBitmap`（优先） | Safari 17.6+ 原生 HEIC 解码，17-39x 更快 | 0（浏览器内置） |
| `exifr` | 从 HEIC 原始字节提取 EXIF | ~50KB |
| `piexifjs` | 将 EXIF 注入输出 JPEG | ~30KB |
| `JSZip` | 客户端 ZIP 打包 | ~100KB |

> 📦 **首屏 JS 体积**：仅加载 exifr（50KB）。WASM 二进制（1.3MB）在用户拖入文件时才动态加载。内容页（博客、FAQ）零 JS。

---

## 6. 核心转换流水线

```
用户拖入 HEIC 文件
        │
        ▼
┌──────────────────────────┐
│ 1. 提取 EXIF 元数据      │  ← exifr（在解码前，从原始字节提取）
│    保留 GPS、相机、时间   │
└──────────────────────────┘
        │
        ▼
┌──────────────────────────┐
│ 2. 选择解码路径           │
│    Safari 17.6+ →        │  原生 createImageBitmap（超快）
│    其他浏览器 →           │  heic2any WASM 回退
└──────────────────────────┘
        │
        ▼
┌──────────────────────────┐
│ 3. Canvas 处理            │  ← 缩放、旋转（根据用户选项）
└──────────────────────────┘
        │
        ▼
┌──────────────────────────┐
│ 4. JPEG 编码              │  ← Canvas.toBlob('image/jpeg', quality)
└──────────────────────────┘
        │
        ▼
┌──────────────────────────┐
│ 5. EXIF 注入              │  ← piexifjs 注入到 JPEG（核心差异）
└──────────────────────────┘
        │
        ▼
    输出 JPEG Blob → 下载
```

---

## 7. 项目结构

```
heic-to-jpg/
├── src/
│   ├── components/
│   │   ├── converter/           # 转换器组件（Preact Island）
│   │   │   ├── DropZone.tsx          # 拖放上传区
│   │   │   ├── FileList.tsx          # 文件列表 + 缩略图
│   │   │   ├── ConversionOptions.tsx # 画质滑块 + 尺寸设置
│   │   │   ├── ConvertButton.tsx     # 转换按钮 + 进度
│   │   │   ├── ResultList.tsx        # 转换结果（含 EXIF 预览）
│   │   │   └── DownloadAllButton.tsx # ZIP 批量下载
│   │   ├── ads/                 # 广告组件
│   │   │   ├── AdBanner.astro        # 横幅广告位
│   │   │   └── AdSidebar.astro       # 侧边栏矩形广告
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── SEO.astro             # 统一 SEO head 标签
│   │   └── ui/                  # 通用 UI 组件
│   ├── lib/
│   │   └── conversion/
│   │       ├── heic-decoder.ts       # 双层解码器
│   │       ├── exif-extractor.ts     # EXIF 提取
│   │       ├── exif-injector.ts      # EXIF 注入（关键）
│   │       ├── image-processor.ts    # Canvas 缩放、旋转
│   │       └── batch-processor.ts    # 批量处理 + ZIP
│   ├── pages/
│   │   ├── index.astro               # 首页 = 转换工具
│   │   ├── privacy.astro             # 隐私政策
│   │   ├── terms.astro               # 使用条款
│   │   ├── about.astro               # 关于页面
│   │   ├── faq.astro                 # FAQ
│   │   └── blog/
│   │       ├── index.astro           # 博客列表
│   │       └── [slug].astro          # 博客文章
│   ├── content/
│   │   └── blog/                     # MDX 博客文章
│   │       ├── how-to-convert-heic-to-jpg.md
│   │       ├── heic-vs-jpeg-comparison.md
│   │       ├── open-heic-files-windows.md
│   │       ├── batch-convert-heic.md
│   │       ├── preserve-exif-heic-conversion.md
│   │       ├── free-heic-converters-comparison.md
│   │       ├── what-is-heic.md
│   │       └── heic-quality-loss-myth.md
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.ico
│   └── wasm/                    # WASM 文件（动态加载）
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── wrangler.toml
```

---

## 8. AdSense 集成方案

### 7.1 自动广告（推荐 MVP）

```html
<!-- src/components/ads/AdAuto.astro -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
```

Google 自动广告会自动在合适位置插入广告，无需手动规划每个广告位。适合上线初期，后续可根据数据优化。

### 7.2 手动广告位（优化期）

```html
<!-- src/components/ads/AdBanner.astro -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXX"
     data-ad-slot="1234567890"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

### 7.3 广告位 ID 管理

将所有广告位 ID 集中到配置文件：

```typescript
// src/config.ts
export const ADSENSE = {
  clientId: 'ca-pub-XXXXXXXXXXXXXX',
  slots: {
    converterTop: '1234567890',    // 工具页顶部横幅
    converterBottom: '2345678901', // 工具页结果区横幅
    blogInContent: '3456789012',   // 博客内容中矩形
    blogFooter: '4567890123',      // 博客底部横幅
  },
};
```

---

## 9. GitHub → Cloudflare Pages 部署配置

### 8.1 现有环境

| 配置项 | 值 |
|--------|-----|
| GitHub 用户名 | `13735430910` |
| Git 邮箱 | `13735430910@163.com` |
| 连接方式 | SSH (`git@github.com`) |
| Cloudflare Account ID | `721d867f108636e259750df2b54254e0` |
| Cloudflare API Token | `cfat_...` (Account API Token，2026 新格式) |
| 域名 | `heicgo.com`（已在 Cloudflare Registrar 注册） |

### 8.2 GitHub 操作（网页端）

**步骤 1：创建仓库**

```
1. 打开 https://github.com/13735430910
2. 点击右上角 "+" → "New repository"
3. 填写：
   Repository name:  heicgo
   Description:       HEIC to JPG Converter - Free, private, no upload
   Visibility:        Public
   ☐ 不勾选 "Add a README file"（本地已有代码）
   ☐ 不勾选 ".gitignore"
   ☐ 不勾选 "Choose a license"
4. 点击 "Create repository"
5. 记下仓库地址：git@github.com:13735430910/heicgo.git
```

**步骤 2：添加 SSH Key（如果尚未配置）**

```
1. 打开 https://github.com/settings/keys
2. 点击 "New SSH key"
3. Title:  heicgo-server
4. Key:   粘贴 cat ~/.ssh/id_rsa.pub 的输出
5. 点击 "Add SSH key"
```

> 验证：运行 `ssh -T git@github.com`，看到 "Hi 13735430910!" 即成功

### 8.3 Cloudflare Pages 操作（网页端）

**步骤 1：创建 Pages 项目并连接 GitHub**

```
1. 打开 https://dash.cloudflare.com/721d867f108636e259750df2b54254e0/pages
2. 点击 "创建项目" / "Create a project"
3. 选择 "连接到 Git" / "Connect to Git"
4. 授权 Cloudflare 访问 GitHub 账户
5. 选择仓库: 13735430910 / heicgo
6. 点击 "Begin setup"
```

**步骤 2：配置构建设置**

```
构建配置：
┌─────────────────────────────────────────────────────┐
│ Production branch:  main                            │
│ Framework preset:   Astro                           │
│ Build command:      npm run build                   │
│ Build output dir:   dist                            │
│ Root directory:     /                               │
└─────────────────────────────────────────────────────┘

环境变量（添加）：
┌─────────────────────────────────────────────────────┐
│ PUBLIC_SITE_URL = https://heicgo.com                 │
└─────────────────────────────────────────────────────┘

点击 "Save and Deploy"
```

**步骤 3：绑定自定义域名**

```
1. 部署完成后，进入项目 → "Custom domains" 标签
2. 点击 "Set up a custom domain"
3. 输入: heicgo.com
4. 点击 "Continue"
5. Cloudflare 会自动配置 DNS（因为域名已在 Cloudflare 上）
6. 等待 SSL 证书自动签发（约 1-5 分钟）
7. 同时也添加 www.heicgo.com（自动重定向到 heicgo.com）
```

**步骤 4：验证部署**

```
1. 访问 https://heicgo.com → 应显示网站首页
2. 检查 SSL：浏览器地址栏显示 🔒
3. 测试自动部署：git push main 分支 → 等待 1-2 分钟 → 刷新网站
```

### 8.4 本地项目初始化（CLI 操作）

```bash
# 1. 创建项目目录
mkdir -p /root/heic_to_jpg
cd /root/heic_to_jpg

# 2. 初始化 Astro 项目（由 Claude 执行）
npm create astro@latest . -- \
  --template minimal \
  --typescript strict \
  --install \
  --git false

# 3. 初始化 Git 并连接远程仓库
git init
git config user.name "13735430910"
git config user.email "13735430910@163.com"
git remote add origin git@github.com:13735430910/heicgo.git

# 4. 首次提交
git add -A
git commit -m "feat: initialize heicgo.com Astro project"
git push -u origin main
```

### 8.5 域名 DNS 确认

注册 `heicgo.com` 后，Cloudflare 自动配置了基础 DNS。需确认：

```
1. 打开 https://dash.cloudflare.com/721d867f108636e259750df2b54254e0/heicgo.com/dns
2. 确认有 CNAME 记录: heicgo.com → heicgo.pages.dev（Cloudflare Pages 自动添加）
3. DNS only (灰色云) 或 Proxied (橙色云) 都可以，推荐 Proxied
```

### 8.6 完整部署流程总结

```
开发者 push 代码           GitHub          Cloudflare Pages        用户
─────────────           ────────          ────────────────        ────
                       
git push origin main  → 收到 push       → 检测到 main 分支变更
                                     → npm install
                                     → npm run build (astro build)
                                     → 部署 dist/ 到全球 CDN
                                     → 自动签发/续期 SSL
                                     → heicgo.com 更新        → 访问最新版
                       
                  ⏱️ 全程自动，约 2-3 分钟
```

---

## 10. 开发阶段

### Phase 0：项目搭建（第 1 周）

- [ ] 初始化 Astro + Preact + Tailwind 项目（本地 CLI）
- [ ] 配置 Cloudflare Pages 适配器 + wrangler.toml
- [ ] GitHub 创建仓库 `13735430910/heicgo`
- [ ] Cloudflare Pages 连接 GitHub 仓库 + 配置构建
- [ ] 绑定域名 heicgo.com + SSL 验证
- [ ] 本地 git push → 验证首次自动部署成功
- [ ] 基础布局组件（Header、Footer、SEO）

### Phase 1：核心转换 MVP（第 2-3 周）

- [ ] 实现双层 HEIC 解码（Safari 原生优先 + WASM 回退，WASM 懒加载）
- [ ] 实现 EXIF 提取 + 注入（核心差异化）
- [ ] 单文件转换流程（拖入 → 提取 EXIF → 解码 → Canvas → 编码 → 注入 EXIF → 下载）
- [ ] 画质滑块 + 尺寸控制
- [ ] 批量处理 + ZIP 下载
- [ ] 移动端适配（响应式拖放区、触控优化）
- [ ] 全状态覆盖：空状态（鼓励上传）、加载中（进度条）、成功（结果展示）、错误（友好提示）

### Phase 2：内容 + AdSense + SEO（第 4-5 周）

- [ ] 建立 MDX 博客系统
- [ ] 撰写 5-8 篇原创 SEO 博文
- [ ] FAQ 页面（含 FAQ Schema JSON-LD）
- [ ] 隐私政策、使用条款、关于页面
- [ ] 集成 Google AdSense（先自动广告）
- [ ] 提交 AdSense 审核
- [ ] SEO 结构化数据（HowTo、Breadcrumb、Article Schema）
- [ ] OpenGraph / Twitter Card
- [ ] 提交 Google Search Console + 生成 sitemap

### Phase 3：优化迭代（第 6-7 周）

- [ ] 根据 AdSense 数据优化广告位
- [ ] 根据 Search Console 数据优化关键词
- [ ] 补充博客内容（目标 12-15 篇）
- [ ] Lighthouse 性能优化（目标 90+）
- [ ] 错误监控（Cloudflare Web Analytics）
- [ ] A/B 测试广告位置
- [ ] 用户行为分析（转化率、跳出率）

---

## 11. SEO 策略

### 10.1 关键词金字塔

```
                    ┌─────────────┐
                    │ heic to jpg │  ← 首页主攻，高搜索量、高竞争
                    │ convert heic│     长期积累
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
     ┌────────▼─────┐ ┌───▼──────┐ ┌───▼──────────┐
     │ heic to jpg  │ │batch     │ │heic to jpg   │  ← 二级关键词
     │ free online  │ │convert   │ │preserve exif │     功能/长尾
     └──────┬───────┘ └───┬──────┘ └──────┬───────┘
            │             │               │
   ┌────────┼─────────────┼───────────────┼──────────┐
   │        │             │               │          │
   ▼        ▼             ▼               ▼          ▼
 "how to  "windows    "heic vs    "best free   "why are"
  open     heic        jpeg        heic con-    iphone
  heic     viewer"     quality"    verters"     photos
  files"                                       heic"
  ← 信息类长尾，低竞争，博客覆盖 →
```

### 11.2 内容日历

| 周 | 文章 | 目标关键词 | 类型 |
|----|------|-----------|------|
| 4 | How to Convert HEIC to JPG (Free, No Upload) | "convert heic to jpg free" | 教程 |
| 4 | What is a HEIC File? Everything You Need to Know | "what is heic" | 科普 |
| 4 | How to Open HEIC Files on Windows 10/11 | "open heic files windows" | 教程 |
| 5 | How to Open HEIC Files on Mac | "open heic mac" | 教程 |
| 5 | Preserve EXIF Data When Converting HEIC | "preserve exif heic" | 深度 |
| 5 | HEIC vs JPEG: Quality and File Size Compared | "heic vs jpeg" | 对比 |
| 6 | Best Free HEIC Converters Comparison | "best free heic converter" | 评测 |
| 6 | Batch Convert HEIC to JPG: Complete Guide | "batch convert heic" | 教程 |
| 6 | Does Converting HEIC to JPG Lose Quality? | "heic quality loss" | 科普 |
| 7 | How to Convert HEIC to JPG on iPhone | "heic to jpg iphone" | 教程 |
| 7 | HEIC Photos Dark on Windows? Here's Why | "heic dark windows" | 问题解决 |
| 7 | Convert HEIC to JPG Without Uploading Files | "heic no upload" | 隐私角度 |

### 11.3 技术 SEO Checklist

- [ ] 每页唯一 `<title>`（50-60 字符，含主关键词）
- [ ] 每页 `<meta description>`（150-160 字符，号召性用语）
- [ ] 文章页 `<h1>` 只一个，层级正确
- [ ] 图片全部有 `alt` 描述
- [ ] 内链策略：博客文章链回工具页，相关文章互链
- [ ] Canonical URL 防止重复内容
- [ ] robots.txt + sitemap.xml 自动生成
- [ ] Core Web Vitals：LCP 优化（预加载 WASM）、CLS 优化（广告位固定高度）

---

## 12. 广告收入优化路线图

```
Phase A: 上线初期（0-3 个月）
  └→ Google AdSense 自动广告
     └→ 目标：覆盖域名成本

Phase B: 流量增长期（3-6 个月）
  └→ 数据分析，切换到手动广告位
     └→ 广告位 A/B 测试
        └→ 目标：RPM $5 → $8

Phase C: 规模化（6-12 个月）
  └→ 多语言（中文简/繁、日语、韩语）
     └→ 申请 Premium 广告网络（Mediavine / Ezoic）
        └→ 目标：月收入 $1,000+

Phase D: 多元化（12 个月+）
  └→ 扩展工具矩阵（HEIC→PNG、HEIC→WebP、图片压缩……）
     └→ 多域名矩阵运营
        └→ 目标：月收入 $3,000-5,000+
```

### AdSense vs Premium 广告网络切换时机

- **AdSense**：新站即可用，RPM 偏低（$3-8），审批简单
- **Mediavine**：月访问 ≥50K 可申请，RPM $10-25，合同制
- **Ezoic**：无最低流量要求，但需用其 DNS（与 Cloudflare 冲突，需评估）

> 推荐路径：AdSense 起步 → 月访问 50K 后切换到 Mediavine（RPM 翻 2-3 倍）

---

## 13. 风险评估

| 风险 | 概率 | 影响 | 缓解措施 |
|------|------|------|---------|
| AdSense 审核被拒（内容不足） | 中 | 高 | 上线时确保 5+ 篇原创博客 + 完整隐私政策 + About 页面 |
| heic2any 停止维护 | 高 | 中 | 抽象解码层可切换 libheif-js；Safari 原生路径不依赖此库 |
| WASM 首次加载慢（1.3MB） | 中 | 中 | 仅用户拖入文件时才加载；Brotli 压缩；Service Worker 缓存 |
| SEO 竞争激烈，排名慢 | 高 | 中 | 先攻低竞争长尾关键词（如 "preserve exif heic"），积累域名权重 |
| 广告影响用户体验 | 中 | 中 | 限制每页 2-3 个广告；移动端用响应式广告单元；不弹出 |
| 大文件 WASM 内存溢出 | 中 | 低 | 50MB+ 文件警告；顺序处理不并行 |
| Cloudflare Pages 免费层限制变化 | 低 | 中 | 目前无限带宽，即使收费也极低 |

---

## 14. 关键决策总结

1. **纯网页，无 App** — 降低用户使用门槛，打开浏览器即用
2. **Google AdSense 唯一收入** — 不搞会员付费，专注流量变现
3. **EXIF 保留是核心护城河** — 所有 WASM 竞品都做不到的独家功能
4. **内容驱动增长** — 博客 SEO 是流量主要引擎，工具页是转化终点
5. **零成本运营** — Cloudflare 免费层 + 客户端转换 = 仅有域名成本
6. **渐进式优化** — 先 AdSense 自动广告，数据积累后再手动优化广告位

---

## Verification Plan

1. **功能验证**：用真实 iPhone HEIC 文件测试，确认输出 JPEG 中 GPS、拍摄时间、相机型号 EXIF 数据完整
2. **兼容性**：Safari 17.6+（原生解码）、Chrome/Firefox/Edge（WASM 回退）均正常工作
3. **移动端**：iPhone Safari 和 Android Chrome 完整流程测试
4. **SEO**：结构化数据通过 Google Rich Results Test 验证
5. **AdSense**：广告正常展示，无违反政策的内容
6. **性能**：Lighthouse Performance ≥ 90，首屏加载 < 2 秒
7. **批量**：20 个文件同时转换 + ZIP 下载，内存不溢出
