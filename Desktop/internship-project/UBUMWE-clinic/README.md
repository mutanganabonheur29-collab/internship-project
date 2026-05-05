# UBUMWE CLINIC - Vue.js Application

## Project Structure

The project has been organized into two main folders:

### 📁 html-files/
Contains the original HTML files:
- `index.html` - Original home page
- `Dashboard.html` - Dashboard page
- `registration.html` - Patient registration
- `management.html` - Patient management
- `appointment.html` - Appointment scheduling
- `report.html` - Reports generation
- `setting.html` - Settings configuration
- `style.css` - Original styles
- `Script.js` - Original JavaScript functionality
- `healthcare-logo.svg` - Clinic logo

### 📁 vue-app/
Contains the Vue.js application:
- `index.html` - Vue app entry point
- `main.js` - Vue app initialization and routing
- `App.vue` - Main Vue component
- `package.json` - Dependencies and scripts
- `vite.config.js` - Vite configuration
- `assets/` - Static assets (CSS, images)
- `components/` - Reusable Vue components
- `views/` - Page components
- `node_modules/` - Installed dependencies

## Running the Vue Application

1. Navigate to the vue-app folder:
   ```bash
   cd vue-app
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:3000`

## Features

- Patient registration and management
- Appointment scheduling system
- Dashboard with statistics
- Reports with export functionality
- Settings for clinic configuration
- Responsive sidebar navigation
- Data persistence using localStorage

## Technologies Used

- Vue 3
- Vue Router
- Vite (build tool)
- LocalStorage for data persistence
