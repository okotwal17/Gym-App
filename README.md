# Gym App

The Gym App is a React-based application designed to help users create personalized workout plans. The app allows users to input their fitness goals, preferences, and available equipment, and then generates a workout plan tailored to their needs. This project was created to practice React concepts, handle user input, and manage state in an interactive web application.

## Features

### 1. **Personalized Workout Plans**
- Users can input their fitness goals (e.g., weight loss, strength building, muscle gain).
- The app generates a workout plan based on the user’s goals, preferences, and available equipment.

### 2. **User Input**
- Users can select different workout categories (e.g., cardio, strength, flexibility).
- Input forms allow users to specify their fitness level (beginner, intermediate, advanced) and any restrictions they may have (e.g., injuries).

### 3. **Dynamic Plan Generation**
- The app creates a customized workout schedule based on the data input by the user.
- Displays a weekly plan with specific exercises, sets, and reps.

### 4. **Exercise Database**
- Provides a list of exercises based on the selected categories and goals.
- Each exercise includes instructions, images, and estimated time.

### 5. **Interactive UI**
- Provides a clean, user-friendly interface to input data, view the workout plan, and interact with the generated results.

## Tech Stack

- **Frontend**: React
- **State Management**: React `useState` and `useEffect` hooks
- **Form Handling**: React form elements for user input
- **Styling**: CSS (for responsive and clean layout)

## Process and What I Learned

### 1. **Setting Up the Project**
- Used `create-react-app` to quickly initialize the project and set up the development environment.
- Structured the app into components: input forms, workout plan display, and exercise details.

### 2. **Handling User Input**
- Implemented multiple input forms to allow users to specify their goals, fitness level, and available equipment.
- Managed form states with React’s `useState` hook to capture and store user input.

### 3. **Generating Dynamic Workout Plans**
- Based on the user input, the app dynamically generates a personalized workout plan by mapping selected exercises to specific categories and goals.
- Used conditional logic to adjust the plan based on fitness level and preferences.

### 4. **Exercise Database**
- Created an exercise database with a list of predefined exercises, including descriptions and difficulty levels.
- Displayed relevant exercises based on the user’s chosen workout categories and fitness goals.

### 5. **Styling and User Experience**
- Focused on a clean, intuitive design with a responsive layout for desktop and mobile devices.
- Used CSS to style the components and create visually appealing UI elements for a better user experience.

### 6. **Debugging and Optimization**
- Worked on debugging user input handling and ensuring that the workout plan was generated based on correct logic.
- Optimized the app to handle various input scenarios and edge cases.

## Lessons Learned

- **React Basics**: Gained practical experience with React components, `useState`, and `useEffect` hooks.
- **User Input Handling**: Learned how to handle and validate complex user input, which is essential for creating interactive apps.
- **Conditional Rendering**: Applied conditional rendering techniques to dynamically adjust the workout plan based on user preferences and goals.
- **Styling**: Improved CSS skills to create a responsive, user-friendly design.
- **App Optimization**: Focused on making the app lightweight and efficient, ensuring smooth user interactions.

## Getting Started

1. **Clone the Repository**
   - Clone the repository to your local machine using `git clone`.

2. **Install Dependencies**
   - Run `npm install` to install all required dependencies.

3. **Run the App**
   - Run `npm start` to launch the app in your default browser.

4. **Input Your Goals**
   - Enter your fitness goals, preferences, and available equipment to generate your personalized workout plan.
