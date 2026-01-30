# ReadJourney Proje Yapısı

## 📁 Klasör Yapısı

```
ReadJourney/
├── public/                      # Statik dosyalar
│   ├── favicon.svg             # Site ikonu
│   └── sprite.svg              # SVG icon sprite
│
├── src/                        # Kaynak kodlar
│   ├── assets/                 # Görseller ve ikonlar
│   │   ├── icons/             # SVG ve PNG ikonlar
│   │   └── images/            # Resim dosyaları
│   │
│   ├── components/            # React bileşenleri
│   │   ├── common/            # Ortak bileşenler
│   │   │   ├── PrivateRoute/  # Yetkili kullanıcı rotası
│   │   │   └── PublicRoute/   # Yetkisiz kullanıcı rotası
│   │   └── layout/            # Sayfa düzeni bileşenleri
│   │       ├── Header/        # Üst menü
│   │       └── MainLayout/    # Ana sayfa düzeni
│   │
│   ├── features/              # Redux slices
│   │   ├── auth/             # Authentication yönetimi
│   │   │   └── authSlice.ts
│   │   └── books/            # Kitap yönetimi
│   │       └── booksSlice.ts
│   │
│   ├── hooks/                 # Custom React hooks
│   │   └── redux.ts          # Redux hook'ları
│   │
│   ├── pages/                 # Sayfa bileşenleri
│   │   ├── WelcomePage/      # Karşılama sayfası
│   │   ├── RegisterPage/     # Kayıt sayfası
│   │   ├── LoginPage/        # Giriş sayfası
│   │   ├── RecommendedPage/  # Önerilen kitaplar
│   │   ├── MyLibraryPage/    # Kütüphanem
│   │   └── ReadingPage/      # Okuma sayfası
│   │
│   ├── services/             # API servisleri
│   │   └── api/
│   │       ├── api.client.ts  # Axios instance
│   │       ├── auth.api.ts    # Authentication API
│   │       └── books.api.ts   # Books API
│   │
│   ├── store/                # Redux store
│   │   └── store.ts
│   │
│   ├── styles/               # Global stiller
│   │   └── index.css
│   │
│   ├── types/                # TypeScript tipleri
│   │   ├── auth.types.ts
│   │   └── book.types.ts
│   │
│   ├── utils/                # Yardımcı fonksiyonlar
│   │   └── validation.ts     # Form validasyonları
│   │
│   ├── App.tsx               # Ana uygulama bileşeni
│   ├── main.tsx              # Giriş noktası
│   └── vite-env.d.ts         # TypeScript tanımlamaları
│
├── .env                       # Ortam değişkenleri
├── .env.example              # Ortam değişkenleri örneği
├── .gitignore                # Git ignore dosyası
├── index.html                # Ana HTML dosyası
├── package.json              # NPM paketleri
├── README.md                 # Proje dokümantasyonu
├── tsconfig.json             # TypeScript konfigürasyonu
├── tsconfig.node.json        # Node için TypeScript
└── vite.config.ts            # Vite konfigürasyonu
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js v18+
- npm veya yarn

### Adımlar

1. **Bağımlılıkları yükleyin:**
\`\`\`bash
npm install
\`\`\`

2. **Ortam değişkenlerini ayarlayın:**
\`\`\`bash
cp .env.example .env
\`\`\`
`.env` dosyasını düzenleyerek gerekli değişkenleri doldurun.

3. **Geliştirme sunucusunu başlatın:**
\`\`\`bash
npm run dev
\`\`\`
Uygulama http://localhost:3000 adresinde çalışacaktır.

4. **Production build oluşturun:**
\`\`\`bash
npm run build
\`\`\`

5. **Production build'i önizleyin:**
\`\`\`bash
npm run preview
\`\`\`

## 📦 Kullanılan Teknolojiler

### Ana Teknolojiler
- **React 18** - UI kütüphanesi
- **TypeScript** - Tip güvenli geliştirme
- **Vite** - Build tool ve dev server

### State Management
- **Redux Toolkit** - Global state yönetimi
- **Redux Persist** - State'i localStorage'da saklama

### Routing
- **React Router v6** - Sayfa yönlendirmeleri

### Form Yönetimi
- **React Hook Form** - Form yönetimi
- **Yup** - Form validasyonu

### API & Backend
- **Axios** - HTTP istekleri
- **Firebase** - Authentication (opsiyonel)

### UI & Styling
- **CSS Modules** - Component-scoped CSS
- **React Toastify** - Bildirimler

## 🎨 Stil Sistemi

Proje CSS Variables kullanarak tema yönetimi yapmaktadır:

### Renkler
- `--color-primary`: #F9F9F9
- `--color-secondary`: #262626
- `--color-accent`: #30B94D
- `--color-background`: #1F1F1F
- `--color-error`: #E90516

### Breakpoints
- Mobile: 375px+
- Tablet: 768px+
- Desktop: 1440px+

## 🔐 Authentication Flow

1. Kullanıcı `/register` veya `/login` sayfasına gider
2. Form validasyonu yapılır (Yup schema)
3. Backend'e istek atılır
4. Başarılı olursa token Redux store'a kaydedilir
5. Kullanıcı `/recommended` sayfasına yönlendirilir
6. Token localStorage'da persist edilir

## 📚 Kitap Yönetimi

### Recommended Books
- Backend'den önerilen kitaplar çekilir
- Pagination ile sayfalama
- Filtre (title, author)
- Kitaba tıklayınca modal açılır

### My Library
- Kullanıcının kendi kitapları
- Kitap ekleme/silme
- Durum filtreleme (unread, in-progress, done)
- Kitaba tıklayınca okuma sayfasına geçiş

### Reading Page
- Okuma ilerlemesi takibi
- Sayfa başlat/durdur
- Günlük (diary) görünümü
- İstatistik grafikleri

## 🛠️ Geliştirme Notları

### Yapılması Gerekenler (To-Do)

#### Yüksek Öncelik
- [ ] Firebase konfigürasyonu (opsiyonel)
- [ ] Filtre formlarını tamamla (RecommendedPage)
- [ ] Kitap ekleme formunu tamamla (MyLibraryPage)
- [ ] Modal bileşenleri oluştur (BookDetails, AddBook, Success)
- [ ] Pagination component'i ekle
- [ ] Reading page kontrollerini tamamla
- [ ] Diary ve Statistics bileşenlerini oluştur

#### Orta Öncelik
- [ ] Loading spinner/skeleton ekle
- [ ] Error boundary ekle
- [ ] 404 sayfası ekle
- [ ] Responsive tasarımı optimize et
- [ ] Accessibility (a11y) iyileştirmeleri
- [ ] SEO meta tag'leri ekle

#### Düşük Öncelik
- [ ] Unit testler yaz
- [ ] E2E testler ekle
- [ ] Storybook entegrasyonu
- [ ] Dark/Light tema switcher
- [ ] PWA desteği
- [ ] Çoklu dil desteği (i18n)

### API Endpoints

Backend URL: https://readjourney.b.goit.study/api

#### Authentication
- POST `/users/signup` - Kayıt ol
- POST `/users/signin` - Giriş yap
- POST `/users/signout` - Çıkış yap
- GET `/users/current` - Mevcut kullanıcı bilgisi

#### Books
- GET `/books/recommend` - Önerilen kitaplar (pagination, filters)
- GET `/books/{id}` - Kitap detayı
- POST `/books/add` - Kitap ekle
- GET `/books/own` - Kendi kitaplarım
- DELETE `/books/remove/{id}` - Kitap sil

#### Reading
- POST `/books/reading/start` - Okumaya başla
- POST `/books/reading/finish` - Okumayı bitir
- DELETE `/books/reading` - Okuma kaydını sil

## 📱 Responsive Tasarım

### Mobile (320px - 767px)
- Single column layout
- Burger menu
- Touch-friendly buttons
- Simplified forms

### Tablet (768px - 1439px)
- Two column layout
- Expanded navigation
- Grid layouts for books

### Desktop (1440px+)
- Full sidebar
- Multi-column layouts
- Hover effects
- Large imagery

## 🎯 Kalite Kriterleri

- ✅ Semantic HTML5
- ✅ Valid HTML/CSS
- ✅ No console errors
- ✅ Responsive design
- ✅ TypeScript strict mode
- ✅ Clean code (formatted, no unused code)
- ✅ README documentation
- ⏳ Deploy on hosting (Netlify/Vercel/GitHub Pages)

## 🚢 Deployment

### Netlify
\`\`\`bash
npm run build
# Netlify'a deploy et
\`\`\`

### Vercel
\`\`\`bash
vercel
\`\`\`

### GitHub Pages
\`\`\`bash
npm run build
# dist klasörünü gh-pages branch'ine push et
\`\`\`

## 📞 Destek

Sorun bildirmek veya öneride bulunmak için GitHub Issues kullanın.

---

**Not:** Bu proje GoIT bootcamp'inin final projesi olarak geliştirilmiştir.
