@echo off
echo 📄 Saving Your Local Server Link as Documents...
echo.
cd /d "%~dp0"

echo 📋 Creating local link documentation...
echo.

echo ✅ Created Files:
echo    📄 LOCAL_LINK.txt      - Plain text document
echo    📄 LOCAL_LINK.html     - Interactive web page with clickable links
echo.

echo 🌐 Opening your local link documents...
echo.
start LOCAL_LINK.html
start LOCAL_LINK.txt

echo.
echo 🚀 Your local server link:
echo    http://localhost:3000/
echo.
echo 💾 All local link documents saved in this folder!
echo 🖨️ You can print any document for physical copies
echo 📧 You can share the digital files with your team
echo.
echo 📱 Quick Access:
echo    • Main: http://localhost:3000/
echo    • Appointments: http://localhost:3000/appointment
echo    • Reports: http://localhost:3000/reports
echo    • Settings: http://localhost:3000/settings
echo.
pause
