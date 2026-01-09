# Read Journey 📚

Read Journey, kullanıcıların okuma alışkanlıklarını takip etmelerine, yeni kitaplar keşfetmelerine ve okuma ilerlemelerini izlemelerine olanak tanıyan modern bir web uygulamasıdır.

## 🚀 Özellikler

- **Kullanıcı Kimlik Doğrulama**: Güvenli kayıt ve giriş sistemi
- **Kitap Önerileri**: Geniş kitap koleksiyonundan öneriler
- **Kişisel Kütüphane**: Kullanıcıların kendi kitap koleksiyonlarını yönetme
- **Okuma Takibi**: Sayfa bazında okuma ilerlemesi kaydı
- **İstatistikler**: Okuma hızı ve ilerleme grafikleri
- **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm

## 🛠️ Kullanılan Teknolojiler

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM v6
- **Form Validation**: React Hook Form + Yup
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **Styling**: CSS Modules

## 📋 Teknik Gereksinimler

- Node.js (v18 veya üzeri)
- npm veya yarn

## 🔧 Kurulum

1. Repository'yi klonlayın:
```bash
git clone [repository-url]
cd ReadJourney
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda `http://localhost:5173` adresine gidin.

## 📦 Build

Production build oluşturmak için:
```bash
npm run build
```

Build edilen dosyalar `dist/` klasöründe olacaktır.

## 🎨 Tasarım

Tasarım dosyasına [Figma](https://www.figma.com/file/z3m0rdBcEfLTJUBDkAKhWQ/BOOKS-READING?type=design&node-id=18743%3A4973&mode=design&t=Hi1KTaUJMogWXZzz-1) üzerinden erişebilirsiniz.

## 🔗 Backend API

Backend API dokümantasyonu: [ReadJourney API](https://readjourney.b.goit.study/api-docs/)

## 📱 Responsive Breakpoints

- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1439px
- **Desktop**: 1440px ve üzeri

## 📄 Proje Yapısı

```
src/
├── components/      # React bileşenleri
├── pages/          # Sayfa bileşenleri
├── store/          # Redux store ve slice'lar
├── services/       # API servisleri
├── utils/          # Yardımcı fonksiyonlar
├── hooks/          # Custom React hooks
├── types/          # TypeScript tip tanımlamaları
├── styles/         # Global stiller
└── assets/         # Statik dosyalar
```

## 👨‍💻 Geliştirici

[Adınız]

## 📝 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.
