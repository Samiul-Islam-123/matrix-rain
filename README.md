# Matrix Rain

![Matrix Rain Preview](matrix_rain_preview.gif)

Matrix Rain is a simple web application that creates a mesmerizing matrix rain effect with customizable symbols and color. Inspired by the iconic "falling code" scenes in the movie "The Matrix," this project uses HTML canvas and JavaScript to render a dynamic animation on your webpage.

## Features

- **Customizable Symbols:** Choose from a combination of Katakana characters, English alphabets, and numbers to create your unique matrix rain.

- **Dynamic Color Scheme:** The matrix rain comes with a subtle color-breathing effect, making it visually appealing. Customize the color scheme to match your preferences.

- **Responsive Design:** The web application automatically adjusts to the size of your browser window, providing a seamless experience on various devices.

## Getting Started

### Prerequisites

- Web browser (Google Chrome, Mozilla Firefox, Safari, etc.)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Samiul-Islam-123/matrix-rain.git

## Usage

1. **Open the `index.html` file in your preferred web browser.**

2. **Experience the matrix rain effect with the default settings.**

3. **Customize the symbols, color scheme, and other parameters by modifying the `script.js` file.**

## Customization

Adjust the following variables in the `script.js` file to customize the matrix rain:

- `katakana`, `alphabets`, `numbers`: Sets of characters used in the matrix rain.
- `fontSize`: Font size of the matrix rain symbols.
- `fps`: Frames per second for the animation.
- `interval`: Interval between each frame in milliseconds.
- `context.fillStyle`: Background color of the canvas.
- `context.fillStyle`: Color of the matrix rain symbols.

```javascript
const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン';
const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';

const symbols = katakana + alphabets + numbers;

const fontSize = 14;
const colums = canvas.width / fontSize;
const raindrops = [];
const fps = 20;
const interval = 1000 / fps;

