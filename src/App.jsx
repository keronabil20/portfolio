/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: #04133E;
  --secondary: #2C87F4;
  --accent: #B444FF;
  --light: #FFFFFA;
  --dark: #030A1F;
  --gold: #FFD700;
}

body {
  margin: 0;
  font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--light);
  color: var(--primary);
  overflow-x: hidden;
}

h1, h2, h3, h4 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.skill-progress {
  transition: width 1.5s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}