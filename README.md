# ML/DL Visualizer

An interactive educational platform to help you understand machine learning and deep learning concepts through intuitive visual demonstrations and hands-on experimentation.

## 🚀 Main Features

### 1. **Linear Regression Visualizer**
- Interactive gradient descent animation
- Real-time parameter adjustment (learning rate, slope, intercept)
- Visualize how the algorithm converges to find the best-fit line
- Generate random datasets to test the algorithm
- View regression metrics (R², MSE, slope, intercept)

### 2. **Decision Boundaries**
- Visualize how classification algorithms create decision boundaries
- Compare multiple algorithms (Logistic Regression, SVM, KNN)
- Create your own datasets interactively
- Adjust algorithm parameters and observe boundary changes in real-time
- Understand how different algorithms separate data into classes

### 3. **Neural Networks Visualizer**
- Visualize neural network architecture and signal propagation
- Customize layers and nodes dynamically
- Experiment with different activation functions
- Watch animated signal propagation through layers
- Understand how networks process information

### 4. **CNN Visualizer**
- Visualize how Convolutional Neural Networks process images
- Draw digits and see the network in action
- See filters detecting edges and patterns
- Visualize pooling operations and feature extraction
- Follow step-by-step digit recognition process

### 5. **Model Comparison**
- Side-by-side comparison of Linear Regression, Neural Networks, and CNNs
- Add custom data points and watch how different models fit the data
- Animated training progress for each model
- Real-time accuracy metrics
- Interactive play/pause controls for each model

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Visualization Libraries**:
  - Chart.js & react-chartjs-2
  - Plotly.js & react-plotly.js
  - Recharts
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: React Icons, Font Awesome, Lucide React

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js) or **yarn**

## 🚀 Getting Started

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd zeeyan-ml-visualizer
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:5173
   ```
   (The port may vary - check the terminal output for the exact URL)

3. **Build for production** (optional):
   ```bash
   npm run build
   ```

4. **Preview production build** (optional):
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
zeeyan-ml-visualizer/
├── src/
│   ├── components/       # Reusable components (Navbar, Footer)
│   ├── context/          # React Context (ThemeContext)
│   ├── pages/            # Main page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── LinearRegression.tsx
│   │   ├── DecisionBoundaries.tsx
│   │   ├── NeuralNetworks.tsx
│   │   ├── CNNVisualizer.tsx
│   │   └── Compare.tsx
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main app component with routing
│   └── main.tsx          # Entry point
├── public/               # Static assets
├── package.json          # Dependencies and scripts
└── vite.config.ts        # Vite configuration
```

## 🎯 Usage

1. **Navigate through visualizations**: Use the navigation bar to switch between different ML/DL visualizations
2. **Interact with parameters**: Adjust sliders, inputs, and controls to see real-time changes
3. **Explore features**: Each visualization has unique interactive features - experiment and learn!
4. **Compare models**: Visit the Compare page to see how different models handle the same data
5. **Dark/Light mode**: Toggle between themes using the theme switcher (if available)

## 🎓 Educational Benefits

- **For Students**: Visualize abstract mathematical concepts, experiment with parameters, and develop algorithmic intuition
- **For Educators**: Use visualizations in class demos, show complex concepts interactively, and guide students through examples

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Features Highlights

- ✨ Modern, responsive UI with dark/light theme support
- 🎨 Beautiful gradient designs and smooth animations
- 📊 Interactive charts and visualizations
- 🔄 Real-time parameter updates
- 📱 Mobile-friendly interface
- 🚀 Fast performance with Vite

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available for educational purposes.

---

**Built with ❤️ for students, educators, and ML/DL enthusiasts**

