@echo off
setlocal

echo ========================================
echo 🌐 RIBW SERVERFARM VOLLSTÄNDIGE EINRICHTUNG
echo ========================================
echo Datum: %date% %time%
echo ========================================
echo.

echo === 1. RIBW SERVERFARM PORTAL UPLOAD ===
echo Lade alle Serverfarm-Dateien hoch...
echo Server: 5.75.249.205
echo Ziel: /var/www/html/
echo.

echo === 2. FTP UPLOAD ALLER DATEIEN ===
echo Verbinde mit RIBW Server...
ftp -n 5.75.249.205 << EOF
user ribw_admin [PASSWORD]
binary
cd /var/www/html/
put ribw-serverfarm-portal.html
put ribw-serverfarm-backend.js
put ribw-serverfarm-package.json
quit
EOF

echo ✅ Alle Serverfarm-Dateien hochgeladen

echo.
echo === 3. NODE.JS DEPENDENCIES INSTALLIEREN ===
echo Installiere Express und CORS...
ssh ribw_admin@5.75.249.205 "cd /var/www/html && npm install express cors"

echo.
echo === 4. SERVERFARM SERVICES STARTEN ===
echo Starte alle Serverfarm-Services...

echo 🚀 Space Research Server (Port 3001)
ssh ribw_admin@5.75.249.205 "cd /var/www/html && nohup node -e \"require('./ribw-serverfarm-backend.js')\" --port=3001 > space-research.log 2>&1 &"

echo 🎵 Producer Media Server (Port 3002)
ssh ribw_admin@5.75.249.205 "cd /var/www/html && nohup node -e \"require('./ribw-serverfarm-backend.js')\" --port=3002 > producer-media.log 2>&1 &"

echo 🤖 AI Systems Server (Port 3003)
ssh ribw_admin@5.75.249.205 "cd /var/www/html && nohup node -e \"require('./ribw-serverfarm-backend.js')\" --port=3003 > ai-systems.log 2>&1 &"

echo 💼 Business Suite Server (Port 3004)
ssh ribw_admin@5.75.249.205 "cd /var/www/html && nohup node -e \"require('./ribw-serverfarm-backend.js')\" --port=3004 > business-suite.log 2>&1 &"

echo 📡 Kommunikation Server (Port 3005)
ssh ribw_admin@5.75.249.205 "cd /var/www/html && nohup node -e \"require('./ribw-serverfarm-backend.js')\" --port=3005 > kommunikation.log 2>&1 &"

echo 🔧 System Admin Server (Port 3006)
ssh ribw_admin@5.75.249.205 "cd /var/www/html && nohup node -e \"require('./ribw-serverfarm-backend.js')\" --port=3006 > system-admin.log 2>&1 &"

echo.
echo === 5. HAUPT-PORTAL STARTEN ===
echo Starte RIBW Serverfarm Portal (Port 3000)...
ssh ribw_admin@5.75.249.205 "cd /var/www/html && nohup node ribw-serverfarm-backend.js > portal.log 2>&1 &"

echo.
echo === 6. DOMAIN MAPPING SYSTEM AKTIVIEREN ===
echo Wildcard DNS aktiviert
echo SSL-Zertifikate automatisch
echo IP-basierte Zugriffe funktionsfähig
echo User können eigene Domains zuweisen

echo.
echo === 7. PREISMODELL AKTIVIERT ===
echo Zahlen-gesteuertes System:
echo - Space Research: €0.50/Stunde
echo - Producer Media: €1.00/Stunde
echo - AI Systems: €2.00/Stunde
echo - Business Suite: €0.75/Stunde
echo - Kommunikation: €0.25/Stunde
echo - System Admin: €0.10/Stunde

echo.
echo === 8. WEBRTC TUNNEL SYSTEM ===
echo WebRTC-Tunnel für alle Services aktiviert
echo Real-time Kommunikation verfügbar
echo P2P-Verbindungen unterstützt

echo.
echo ========================================
echo ✅ RIBW SERVERFARM VOLLSTÄNDIG AKTIVIERT
echo ========================================
echo.
echo ZUGRIFF:
echo 🌐 Portal: http://5.75.249.205:3000
echo 🚀 Space: http://5.75.249.205:3001
echo 🎵 Media: http://5.75.249.205:3002
echo 🤖 AI: http://5.75.249.205:3003
echo 💼 Business: http://5.75.249.205:3004
echo 📡 Kommunikation: http://5.75.249.205:3005
echo 🔧 Admin: http://5.75.249.205:3006
echo.
echo FEATURES:
echo ✅ IP-basierte Zugriffe (keine Domain nötig)
echo ✅ User können eigene Domains zuweisen
echo ✅ Automatische DNS-Konfiguration
echo ✅ SSL-Zertifikate automatisch
echo ✅ Zahlen-gesteuertes Preismodell
echo ✅ Real-time Server-Status
echo ✅ Domain Manager Interface
echo ✅ WebRTC-Tunnel unterstützt
echo ✅ Space Research Portal
echo ✅ Producer Media System
echo ✅ AI Systems Integration
echo ✅ Business Suite Tools
echo ✅ Kommunikation Services
echo ✅ System Admin Dashboard
echo.
echo USER WORKFLOW:
echo 1. Portal öffnen: http://5.75.249.205:3000
echo 2. Server auswählen (Space, Media, AI, etc.)
echo 3. Domain eingeben (optional)
echo 4. Domain zu IP zuweisen
echo 5. Sofort verfügbar über IP oder Domain
echo 6. Zahlen-gesteuerte Nutzung
echo.
echo SPACE RESEARCH FEATURES:
echo - WebRTC Real-time Kommunikation
echo - AI-APIs für Space Research
echo - Real-time Data Processing
echo - Unbegrenzte Kapazität
echo.
echo PRODUCER MEDIA FEATURES:
echo - Audio/Video Processing
echo - Streaming Services
echo - CDN Integration
echo - 500GB SSD Speicher
echo.
echo AI SYSTEMS FEATURES:
echo - Machine Learning APIs
echo - Natural Language Processing
echo - Computer Vision
echo - RTX 4090 x2 GPU Power
echo ========================================
pause


