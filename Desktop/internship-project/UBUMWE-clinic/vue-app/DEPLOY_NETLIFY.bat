@echo off
echo 🚀 Deploying UBUMWE Clinic to Netlify...
echo.
echo 📋 This will create your shareable link!
echo.
cd /d "%~dp0"

echo 📦 Building your app...
npm run build

echo 🌐 Opening Netlify for deployment...
echo.
echo 📝 Instructions:
echo 1. Your browser will open to Netlify
echo 2. Sign up for free account
echo 3. Drag and drop this "dist" folder into the deployment area
echo 4. Wait for deployment to complete
echo 5. Copy your new shareable link!
echo.
echo 🎯 Your link will be: https://ubumwe-clinic.netlify.app
echo.
start https://app.netlify.com/drop
echo ✅ Ready for deployment! Check your browser.
pause
