# Assets Klasörü

Bu klasör projedeki tüm görsel ve statik dosyaları içerir.

## Klasör Yapısı

```
src/assets/
├── images/          # Görseller (ikonlar, arka plan resimleri, vs.)
│   ├── logo.svg     # Ana logo
│   ├── logo-white.svg  # Beyaz logo (dark theme için)
│   └── ...
├── icons/           # İkonlar (SVG veya PNG)
│   ├── book.svg
│   ├── user.svg
│   └── ...
└── README.md        # Bu dosya
```

## Logo Dosyalarını Nereye Koymalısınız?

### 1. **Ana Logo (Header için)**
- **Dosya:** `logo.svg` veya `logo.png`
- **Konum:** `src/assets/images/logo.svg`
- **Kullanım:** Header component'inde

### 2. **Favicon (Tarayıcı sekmesi için)**
- **Dosya:** `favicon.ico`, `favicon.svg` veya `favicon.png`
- **Konum:** `public/favicon.ico`
- **Not:** public klasöründe olmalı

### 3. **Diğer İkonlar**
- **Konum:** `src/assets/icons/`
- **Örnekler:** 
  - `src/assets/icons/book.svg`
  - `src/assets/icons/user.svg`
  - `src/assets/icons/logout.svg`

## Kullanım Örneği

```tsx
// Logo import etme
import logo from '@/assets/images/logo.svg';
import icon from '@/assets/icons/book.svg';

// Component içinde kullanma
<img src={logo} alt="Read Journey" />
<img src={icon} alt="Book icon" />
```

## Not
- SVG formatı tercih edilir (ölçeklenebilir)
- PNG kullanıyorsanız, yüksek çözünürlükte olmalı (en az 2x boyut)
- Favicon için 32x32, 64x64 veya daha büyük boyutlar kullanın
