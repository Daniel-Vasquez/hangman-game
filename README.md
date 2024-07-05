# Hangman game

This is a Hangman game made with React, Vite and Tailwind CSS. The game allows users to guess letters to discover a hidden word before exhausting the maximum number of guesses allowed.

## Characteristics

- Developed with React and Vite for a fast and efficient development experience.
- Styles with Tailwind CSS for a modern and responsive design.
- Game results stored in `localStorage` to maintain a history of games won and lost.

## Facility

Follow these steps to install and run the project locally:

1. **Clone the repository:**
```bash
git clone git@github.com:Daniel-Vasquez/hangman-game.git

cd hangman-game
```

2. **Install the dependencies:**

```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. Open your browser and go to http://localhost:3000 to see the application working.


## Project Structure
```
hangman-game/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── API/
│   │   └── index.js
│   ├── Components/
│   │   ├── icons/
│   │   └── Keyboard.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Used technology
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida para proyectos web modernos.
- **Tailwind CSS**: Framework de CSS para un diseño rápido y personalizable.

