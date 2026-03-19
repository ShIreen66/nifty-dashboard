# Nifty Dashboard

This is a small dashboard project built with `Next.js` named `nifty-dashboard`. It is designed to display NIFTY stock market data and metrics in a compact UI.

## 📁 Project Structure

- `app/`
  - `page.js` — Main UI page
  - `api/nifty/route.js` — Server-side API route
- `components/`
  - `NiftyCard.js` — Data card component
  - `NiftyChart.js` — Chart component
- `lib/`
  - `fetchNifty.js` — Data fetching logic
- `app/globals.css` — Global styles

## ⚙️ Setup

1. Clone the repository:

```bash
git clone <repo-url>
cd nifty-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Run the dev server:

```bash
npm run dev
```

4. Open in browser:

- http://localhost:3000

## 🔍 Features

- Fetches NIFTY data from API route (`app/api/nifty/route.js`)
- Renders information using `NiftyCard` and `NiftyChart`
- Designed for near real-time data updates where available

## 🛠️ Key Code Points

- `lib/fetchNifty.js`:
  - HTTP requests and data normalization
- `components/NiftyCard.js`:
  - Card layouts and core metric display
- `components/NiftyChart.js`:
  - Chart rendering logic for trend visualization
- `app/api/nifty/route.js`:
  - API endpoint serving JSON data to the frontend

## ✅ Customization

- Update the fetch URL in `app/api/nifty/route.js` to point to your own data source
- Modify `app/globals.css` for styling changes
- Add new metrics in `NiftyCard` and `NiftyChart` as needed

## 🚀 Deployment

The easiest deployment path is Vercel:

```bash
npx vercel
```

or use GitHub Pages / Netlify as an alternative.

## 🧩 Helpful Commands

- `npm run lint` (if configured)
- `npm run build` to create production build

---

## Contributing

- Create a Pull Request to contribute
- Open issues for bugs and feature requests


