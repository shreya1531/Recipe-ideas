# 🍽️ Recipe Ideas App

A simple and elegant Recipe Search App built using **React.js** and **TheMealDB API**.  
Users can search for recipes by ingredient, view detailed recipe information, and explore new dishes with ease.

---

## 🚀 Features

- 🔍 Search recipes by ingredient (e.g., “chicken”, “paneer”, “egg”)
- 📜 Displays recipe cards with thumbnails and names
- 🧾 View full recipe details including ingredients, instructions, and video links
- ⏳ API data loads only after user searches (no preloaded results)
- 🔁 Persistent filter — if a search term is still in the bar, results stay filtered until cleared
- ⚡ Built using functional components and React Hooks (`useState`, `useEffect`, `useNavigate`)
- 🎨 Responsive and minimal UI with clean CSS styling

---

## 🧩 Folder Structure

recipe-ideas/
│
├── public/
│ ├── index.html
│ └── favicon.ico
│
├── src/
│ ├── components/
│ │ ├── SearchBar.js
│ │ ├── RecipeList.js
│ │ └── RecipeDetail.js
│ │
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ └── api.js (optional utility for fetch)
│
└── package.json

yaml
Copy code

---

## 🧠 Tech Stack

- **Frontend:** React.js (Vite or Create React App)
- **Routing:** React Router DOM
- **API:** [TheMealDB API](https://www.themealdb.com/api.php)
- **Styling:** CSS (Responsive Flexbox Layout)

---


💡 Future Enhancements

Save favorite recipes using local storage

Add dark mode

Include voice search functionality

Pagination or infinite scroll for large results




