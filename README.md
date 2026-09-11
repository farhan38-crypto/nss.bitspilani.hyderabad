# NSS BITS Pilani — Hyderabad Campus

Official website for the **National Service Scheme (NSS), BITS Pilani Hyderabad Campus**.

The website presents the NSS unit, its activities, student leadership, upcoming events, and ways to get involved.

## 🌐 Website

This is a static website built using:

- **HTML5** — Website structure
- **CSS3** — Styling and responsive design
- **JavaScript** — Navigation, animations, and interactions
- **Google Fonts** — DM Sans & Space Grotesk

## 📁 Project Structure

```text
NSS-BITS-Hyderabad/
│
├── index.html
├── about.html
├── events.html
├── gallery.html
├── team.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
└── images/
    ├── bits-pilani-logo.png
    ├── nss-logo.png
    ├── person-placeholder.png
    └── ... 
```

## ✨ Features

- Responsive design for desktop and mobile
- NSS and BITS Pilani branding
- Navigation between all major sections
- Animated content reveals
- Upcoming Events section on the homepage
- NSS events and activities
- Student leadership / POR section
- Team member photographs
- Direct Gmail compose links for team email addresses
- Contact page
- Mobile-friendly navigation menu

## 🚀 Running Locally

No server or database is required.

Simply open:

```text
index.html
```

in a browser.

For development, you can use **VS Code + Live Server**.

## 🌍 Hosting

Because this is a static website, it can be hosted using:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel

### GitHub Pages

1. Create a GitHub repository.
2. Upload all project files.
3. Make sure `index.html` is in the repository root.
4. Open **Settings → Pages**.
5. Select:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
6. Save the settings.

GitHub will provide a public URL for the website.

## 📧 Team Emails

The email buttons on the Team page open a Gmail compose window for the respective NSS POR.

No backend or mail server is required for these links.

## 📝 Updating the Website

### Adding or changing an upcoming event

Edit:

```text
index.html
```

and update the **Upcoming Events** section.

### Updating team members

Edit:

```text
team.html
```

Place new photographs inside:

```text
images/
```

and update the member's name, role, photograph, and email.

### Updating events

Edit:

```text
events.html
```

and place required event images inside:

```text
images/
```

## ⚠️ Important

Keep the relative folder structure intact.

For example:

```html
<img src="images/nss-logo.png">
```

requires `nss-logo.png` to remain inside the `images` folder.

Likewise:

```html
<link rel="stylesheet" href="css/style.css">
<script src="js/main.js"></script>
```

require the `css` and `js` folders to remain in the project root.

## 🤝 Credits

**NSS Unit**  
BITS Pilani, Hyderabad Campus

> *“Not me, but you.”*
