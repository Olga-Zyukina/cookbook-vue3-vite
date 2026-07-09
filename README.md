# Cookbook - Recipe website, multi-page website
An application for accessing API recipes from around the world, created using **Vue 3 + TypeScript + Vite**.
The application extracts current data from the API FoodDB and provides an interactive interface for viewing recipes, categories, and areas.

## Features

- Multi-page website
- Real-time recipe updates
- Adaptive design
- View categories and areas

## Technologies Used

-  Vue 3
-  TypeScript
-  Vite
-  [API FoodDB](https://themealdb-inky.vercel.app/)
-  Vue-router
-  Axios
-  Pinia
-  Docker
-  ElementPlus
-  Sass

## Live Demo

Check out the live demo: [Cookbook](https://olga-zyukina.github.io/cookbook-vue3-vite/dist/)

## Project Structure

```
src/
├── components/     # Vue components
├── pages/          # Vue pages
├── layouts/        # Page layout
├── types/          # TypeScript type definitions
├── services/       # Functions
├── assets/         # Static assets
└── App.vue         # Root component
```
## Development
- Make sure you have Node.js installed.
- Clone the repo to your machine.
- Install all dependencies
`npm install`
- Development:
`npm run dev`
- Production:
`npm run build`
	
## Docker
- Building image
`docker build .`
- Building images & run containers
`docker compose up`<br/>
Open browser in Development mode: localhost:5173<br/>
Open browser in Production mode: localhost:5174

<div><img src="https://github.com/Olga-Zyukina/cookbook-vue3-vite/blob/master/Screenshot.png" title="Cookbook" alt="Cookbook"/></div>
<div><img src="https://github.com/Olga-Zyukina/cookbook-vue3-vite/blob/master/Screenshot_Recipe.png" title="Cookbook" alt="Cookbook"/></div>
