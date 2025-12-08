# Codex Labs Institute Website

A professional university-style website for Codex Labs Institute, an online coding school launching February 2026.

## 🚀 Live Site

[View Live Site](https://codexlabsinstitute.netlify.app) *(update with your actual URL)*

## 📁 Project Structure

```
codex-labs-site/
├── index.html          # Homepage
├── programs.html       # Course catalog with recommendation quiz
├── admissions.html     # Admission process and application form
├── financial-aid.html  # Tuition rates and financial aid info
├── coming-soon.html    # Placeholder for pages under development
├── styles.css          # Shared stylesheet
├── netlify.toml        # Netlify configuration
├── images/             # Image assets (add your own or use Cloudinary)
└── README.md           # This file
```

## ✨ Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **University Aesthetic** - Professional navy/gold color scheme
- **Netlify Forms** - All forms connected to Netlify for submissions
- **Program Quiz** - Interactive questionnaire to recommend courses
- **SEO Ready** - Semantic HTML structure

## 📝 Forms Included

| Form Name | Location | Purpose |
|-----------|----------|---------|
| `newsletter` | Homepage | Email signup |
| `newsletter-programs` | Programs page | Email signup |
| `application` | Admissions page | Full application |
| `financial-aid-inquiry` | Financial Aid page | Aid request |
| `notify-me` | Coming Soon page | Launch notifications |

## 🛠️ Setup

### Deploy to Netlify

1. Push this repo to GitHub
2. Connect to Netlify:
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Select your GitHub repo
   - Deploy!

### Configure Form Notifications

1. In Netlify dashboard, go to **Site settings > Forms**
2. Click **Form notifications**
3. Add email notification for each form
4. Enter your email address (e.g., admissions@codexlabsinstitute.com)

### Custom Domain

1. In Netlify dashboard, go to **Domain settings**
2. Add your custom domain
3. Update DNS records as instructed

## 🖼️ Images

### Option 1: Cloudinary (Recommended)
1. Create a [Cloudinary](https://cloudinary.com) account
2. Upload images to your media library
3. Replace image URLs in HTML files with Cloudinary URLs

Example:
```html
<img src="https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/hero-image.jpg" alt="...">
```

### Option 2: Local Images
1. Add images to the `/images` folder
2. Reference them in HTML:
```html
<img src="images/hero-image.jpg" alt="...">
```

### Option 3: Stock Photos (Current)
The site currently uses emoji icons. To add stock photos:
- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://pexels.com) - Free stock photos

## 🎨 Customization

### Colors (in styles.css)
```css
:root {
    --primary: #1a3a5c;      /* Deep navy */
    --accent: #c9a227;       /* Gold */
    --off-white: #f8f9fa;    /* Background */
}
```

### Fonts
- Headings: Source Serif 4
- Body: Source Sans 3

## 📧 Contact

For questions about this website, contact: admissions@codexlabsinstitute.com

---

© 2025 Codex Labs Institute. All rights reserved.
