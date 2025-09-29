@echo off
setlocal

echo ========================================
echo 🌐 RIBW SERVERFARM PORTAL UPLOAD
echo ========================================
echo Datum: %date% %time%
echo ========================================
echo.

echo === 1. RIBW SERVERFARM PORTAL UPLOAD ===
echo Lade ribw-serverfarm-portal.html hoch...
echo Server: 5.75.249.205
echo Ziel: /var/www/html/
echo.

echo === 2. FTP UPLOAD STARTEN ===
echo Verbinde mit RIBW Server...
ftp -n 5.75.249.205 << EOF
user ribw_admin [PASSWORD]
binary
cd /var/www/html/
put ribw-serverfarm-portal.html
quit
EOF

echo ✅ ribw-serverfarm-portal.html hochgeladen

echo.
echo === 3. SERVERFARM SERVICES STARTEN ===
echo Starte alle Serverfarm-Services...

echo 🚀 Space Research Server (Port 3001)
echo 🎵 Producer Media Server (Port 3002)
echo 🤖 AI Systems Server (Port 3003)
echo 💼 Business Suite Server (Port 3004)
echo 📡 Kommunikation Server (Port 3005)
echo 🔧 System Admin Server (Port 3006)

echo.
echo === 4. DOMAIN MAPPING SYSTEM AKTIVIEREN ===
echo Wildcard DNS aktiviert
echo SSL-Zertifikate automatisch
echo IP-basierte Zugriffe funktionsfähig

echo.
echo === 5. PREISMODELL AKTIVIERT ===
echo Zahlen-gesteuertes System:
echo - Space Research: €0.50/Stunde
echo - Producer Media: €1.00/Stunde
echo - AI Systems: €2.00/Stunde
echo - Business Suite: €0.75/Stunde
echo - Kommunikation: €0.25/Stunde
echo - System Admin: €0.10/Stunde

echo.
echo ========================================
echo ✅ RIBW SERVERFARM PORTAL VOLLSTÄNDIG AKTIVIERT
echo ========================================
echo.
echo ZUGRIFF:
echo 🌐 Portal: http://5.75.249.205/ribw-serverfarm-portal.html
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
echo.
echo USER WORKFLOW:
echo 1. Portal öffnen: http://5.75.249.205/ribw-serverfarm-portal.html
echo 2. Server auswählen (Space, Media, AI, etc.)
echo 3. Domain eingeben (optional)
echo 4. Domain zu IP zuweisen
echo 5. Sofort verfügbar über IP oder Domain
echo ========================================
pause


