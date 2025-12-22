# Codex Labs Institute Website

A professional coding school website with Firebase authentication and student portal.

## Hosting

This site is designed for **GitHub Pages** hosting with **Firebase Authentication** and **Formspree** forms.

**GitHub Repository:** https://github.com/techandbeauty/Codex-Labs-Institute-Website

## Pages

| File | Description |
|------|-------------|
| `index.html` | Homepage |
| `programs.html` | Course catalog with quiz |
| `admissions.html` | Application process & form |
| `financial-aid.html` | Tuition & payment info |
| `login.html` | Student sign in |
| `register.html` | Create student account (for enrolled students) |
| `student-portal.html` | Student dashboard (protected) |
| `coming-soon.html` | Placeholder page |

## Firebase Setup

The site uses Firebase Authentication with these credentials already configured:
- Project: `codex-labs-institute`
- Auth Domain: `codex-labs-institute.firebaseapp.com`

### Authentication Methods Enabled:
- Email/Password
- Google Sign-In

### Demo Account
The demo account email is set to: `msmeimi@gmail.com`
This account will see sample course data in the portal.

## Formspree Setup

Forms are integrated with Formspree for submission handling.

### Required Forms to Create on Formspree:

1. **Newsletter Form** - Used on index.html, programs.html, coming-soon.html
2. **Application Form** - Used on admissions.html
3. **Financial Aid Inquiry** - Used on financial-aid.html

### How to Set Up:

1. Go to [formspree.io](https://formspree.io) and create an account
2. Create a new form for each type above
3. Copy each form's endpoint ID (e.g., `xyzabcde` from `https://formspree.io/f/xyzabcde`)
4. Replace `YOUR_NEWSLETTER_FORM_ID`, `YOUR_APPLICATION_FORM_ID`, and `YOUR_FINANCIAL_AID_FORM_ID` in the HTML files

### Files to Update:

| File | Form ID to Replace |
|------|-------------------|
| `index.html` | `YOUR_NEWSLETTER_FORM_ID` |
| `programs.html` | `YOUR_NEWSLETTER_FORM_ID` |
| `coming-soon.html` | `YOUR_NEWSLETTER_FORM_ID` |
| `admissions.html` | `YOUR_APPLICATION_FORM_ID` |
| `financial-aid.html` | `YOUR_FINANCIAL_AID_FORM_ID` |

## Deploying to GitHub Pages

1. Push files to your GitHub repository
2. Go to Settings → Pages
3. Set Source to "Deploy from a branch"
4. Select "main" branch and "/ (root)" folder
5. Click Save

## Customizing

### Demo Account Email
In `student-portal.html`, find and update:
```javascript
const DEMO_ACCOUNT_EMAIL = "msmeimi@gmail.com";
```

### Course Links
In `student-portal.html`, update the `COURSE_LINKS` object with your Canva URLs.

### Resource Links
In `student-portal.html`, update the `RESOURCE_LINKS` object with your Google Docs/Forms URLs.

## Support

For questions about the website, contact: support@codexlabsinstitute.com
