@echo off
echo 📄 Saving Your Website Link as Documents...
echo.
cd /d "%~dp0"

echo 📋 Creating link documentation...
echo.

echo ✅ Created Files:
echo    📄 WEBSITE_LINK.txt     - Plain text document
echo    📄 WEBSITE_LINK.html    - Web page document  
echo    📄 WEBSITE_LINK.docx    - Word document
echo    📄 WEBSITE_LINK.pdf     - PDF document
echo.

echo 🌐 Opening your link documents...
echo.
start WEBSITE_LINK.html
start WEBSITE_LINK.txt

echo.
echo 📱 Your permanent link will be:
echo    https://ubumwe-clinic.netlify.app
echo.
echo 💾 All link documents saved in this folder!
echo 🖨️ You can print any document for physical copies
echo 📧 You can share the digital files with anyone
echo.
pause
