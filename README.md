# AI Avatar Dashboard

A sleek, responsive React application for managing AI avatars. This single-page dashboard allows users to view existing avatars and create new ones through an intuitive interface.


## Features

- ✨ Modern UI with Tailwind CSS
- 🖼️ Avatar cards with preview images
- ➕ Floating "Create New Avatar" button with modal
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Clean component structure
- ✅ Built with React + Vite for optimal performance


## Installation

1. Clone the repository:
```bash
git clone https://github.com/bhardwajjshubh/DCVerse-AI-Dashboard.git
cd DCVerse-AI-Dashboard.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Project Structure

```
ai-avatar-dashboard/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Welcome header with greeting
│   │   ├── AvatarCard.jsx      # Individual avatar card component
│   │   ├── AvatarGrid.jsx      # Grid layout for avatars
│   │   ├── CreateAvatarButton.jsx  # Floating action button
│   │   └── CreateAvatarModal.jsx   # Modal for creating new avatars
│   ├── data/
│   │   └── avatars.json        # Local data source for avatars
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles with Tailwind directives
├── index.html
├── package.json
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── vite.config.js             # Vite configuration
```

## Technologies Used

- **React**: UI library
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Local JSON**: Data storage (can be replaced with a real API)


## Development

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint



## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [RandomUser API](https://randomuser.me/) for placeholder avatar images
