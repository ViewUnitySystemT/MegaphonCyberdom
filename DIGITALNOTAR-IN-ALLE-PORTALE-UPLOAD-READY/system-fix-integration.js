// SYSTEM FIX INTEGRATION - Automatische Integration in alle HTML-Seiten
console.log('🔧 SYSTEM FIX INTEGRATION gestartet...');

class SystemFixIntegration {
    constructor() {
        this.integratedPages = new Set();
        this.systemFixLoaded = false;
    }

    // System Fix in alle HTML-Seiten integrieren
    async integrateSystemFix() {
        console.log('🔧 Integriere System Fix in alle HTML-Seiten...');
        
        try {
            // System Fix Script laden
            await this.loadSystemFixScript();
            
            // Alle HTML-Seiten finden und erweitern
            await this.extendAllHTMLPages();
            
            // Integration bestätigen
            this.systemFixLoaded = true;
            console.log('✅ System Fix erfolgreich integriert');
            
            return true;
        } catch (error) {
            console.error('❌ System Fix Integration fehlgeschlagen:', error);
            return false;
        }
    }

    // System Fix Script laden
    async loadSystemFixScript() {
        console.log('📜 Lade System Fix Script...');
        
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = '/komplettes-system-fix.js';
            script.async = true;
            script.onload = () => {
                console.log('✅ System Fix Script geladen');
                resolve(true);
            };
            script.onerror = (error) => {
                console.error('❌ System Fix Script konnte nicht geladen werden:', error);
                reject(error);
            };
            document.head.appendChild(script);
        });
    }

    // Alle HTML-Seiten erweitern
    async extendAllHTMLPages() {
        console.log('📄 Erweitere alle HTML-Seiten...');
        
        // Aktuelle Seite erweitern
        this.extendCurrentPage();
        
        // Navigation erweitern für andere Seiten
        this.extendNavigation();
        
        console.log('✅ Alle HTML-Seiten erweitert');
    }

    // Aktuelle Seite erweitern
    extendCurrentPage() {
        console.log('📄 Erweitere aktuelle Seite...');
        
        const currentPage = window.location.pathname;
        this.integratedPages.add(currentPage);
        
        // System Fix Status anzeigen
        this.addSystemFixStatus();
        
        // Event Listener für System Fix Events
        this.addSystemFixEventListeners();
        
        console.log('✅ Aktuelle Seite erweitert:', currentPage);
    }

    // System Fix Status hinzufügen
    addSystemFixStatus() {
        // Status-Indikator erstellen
        const statusIndicator = document.createElement('div');
        statusIndicator.id = 'system-fix-status';
        statusIndicator.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: rgba(0, 0, 0, 0.8);
            color: #00ff88;
            padding: 8px 12px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 12px;
            z-index: 10000;
            border: 1px solid #00ff88;
            backdrop-filter: blur(10px);
        `;
        statusIndicator.textContent = '🔧 System Fix: Initialisiere...';
        document.body.appendChild(statusIndicator);
        
        // Status aktualisieren
        this.updateSystemFixStatus();
    }

    // System Fix Status aktualisieren
    updateSystemFixStatus() {
        const statusElement = document.getElementById('system-fix-status');
        if (!statusElement) return;
        
        // Event Listener für System Fix Complete
        window.addEventListener('systemFixComplete', (event) => {
            const result = event.detail;
            const successCount = result.initialized.length;
            const totalCount = result.initialized.length + result.failed.length;
            
            if (result.failed.length === 0) {
                statusElement.textContent = `✅ System Fix: ${successCount}/${totalCount} Systeme aktiv`;
                statusElement.style.borderColor = '#00ff88';
                statusElement.style.color = '#00ff88';
            } else {
                statusElement.textContent = `⚠️ System Fix: ${successCount}/${totalCount} Systeme aktiv`;
                statusElement.style.borderColor = '#ff6b35';
                statusElement.style.color = '#ff6b35';
            }
            
            // Status nach 5 Sekunden ausblenden
            setTimeout(() => {
                statusElement.style.opacity = '0.3';
            }, 5000);
        });
    }

    // System Fix Event Listeners hinzufügen
    addSystemFixEventListeners() {
        // WebRTC Events
        window.addEventListener('webrtcInitialized', (event) => {
            console.log('🌐 WebRTC System initialisiert:', event.detail);
        });
        
        // Matrix Bridge Events
        window.addEventListener('matrixBridgeConnected', (event) => {
            console.log('🔗 Matrix Bridge verbunden:', event.detail);
        });
        
        // Search System Events
        window.addEventListener('searchSystemReady', (event) => {
            console.log('🔍 Search System bereit:', event.detail);
        });
        
        // Test System Events
        window.addEventListener('testSystemReady', (event) => {
            console.log('🧪 Test System bereit:', event.detail);
        });
        
        // Monitoring System Events
        window.addEventListener('monitoringSystemReady', (event) => {
            console.log('📊 Monitoring System bereit:', event.detail);
        });
    }

    // Navigation erweitern
    extendNavigation() {
        console.log('🧭 Erweitere Navigation...');
        
        // Alle Links finden und erweitern
        const links = document.querySelectorAll('a[href*=".html"]');
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                // System Fix Status für nächste Seite vorbereiten
                this.prepareNextPage(link.href);
            });
        });
        
        console.log('✅ Navigation erweitert');
    }

    // Nächste Seite vorbereiten
    prepareNextPage(url) {
        console.log('📄 Bereite nächste Seite vor:', url);
        
        // System Fix Status in localStorage speichern
        localStorage.setItem('systemFixStatus', JSON.stringify({
            initialized: true,
            timestamp: new Date().toISOString(),
            currentPage: window.location.pathname,
            nextPage: url
        }));
    }

    // System Fix Status aus localStorage laden
    loadSystemFixStatus() {
        const status = localStorage.getItem('systemFixStatus');
        if (status) {
            try {
                const statusData = JSON.parse(status);
                console.log('📊 System Fix Status geladen:', statusData);
                return statusData;
            } catch (error) {
                console.error('❌ System Fix Status konnte nicht geladen werden:', error);
            }
        }
        return null;
    }

    // System Fix Funktionen verfügbar machen
    makeSystemFixFunctionsAvailable() {
        console.log('🔧 Mache System Fix Funktionen verfügbar...');
        
        // Globale Funktionen hinzufügen
        window.runSystemFix = () => {
            if (window.systemFix) {
                return window.systemFix.initializeAllSystems();
            } else {
                console.error('❌ System Fix nicht verfügbar');
                return Promise.reject('System Fix nicht verfügbar');
            }
        };
        
        window.getSystemFixStatus = () => {
            return {
                loaded: this.systemFixLoaded,
                integratedPages: Array.from(this.integratedPages),
                status: this.loadSystemFixStatus()
            };
        };
        
        window.testAllSystems = async () => {
            if (window.testSystem) {
                return await window.testSystem.runAllTests();
            } else {
                console.error('❌ Test System nicht verfügbar');
                return Promise.reject('Test System nicht verfügbar');
            }
        };
        
        window.searchApps = async (query) => {
            if (window.searchSystem) {
                return await window.searchSystem.search(query);
            } else {
                console.error('❌ Search System nicht verfügbar');
                return Promise.reject('Search System nicht verfügbar');
            }
        };
        
        window.startScreenShare = async () => {
            if (window.androidScreenShare) {
                return await window.androidScreenShare.startScreenShare();
            } else {
                console.error('❌ Android Screen Share nicht verfügbar');
                return Promise.reject('Android Screen Share nicht verfügbar');
            }
        };
        
        window.checkAllTargets = async () => {
            if (window.monitoringSystem) {
                return await window.monitoringSystem.checkAllTargets();
            } else {
                console.error('❌ Monitoring System nicht verfügbar');
                return Promise.reject('Monitoring System nicht verfügbar');
            }
        };
        
        console.log('✅ System Fix Funktionen verfügbar gemacht');
    }

    // Integration initialisieren
    async init() {
        console.log('🚀 System Fix Integration initialisiert...');
        
        try {
            // System Fix Status laden
            this.loadSystemFixStatus();
            
            // System Fix integrieren
            await this.integrateSystemFix();
            
            // Funktionen verfügbar machen
            this.makeSystemFixFunctionsAvailable();
            
            console.log('✅ System Fix Integration vollständig initialisiert');
            return true;
        } catch (error) {
            console.error('❌ System Fix Integration Initialisierung fehlgeschlagen:', error);
            return false;
        }
    }
}

// Automatische Integration beim Laden der Seite
document.addEventListener('DOMContentLoaded', async () => {
    console.log('📄 DOM geladen - starte System Fix Integration...');
    
    const integration = new SystemFixIntegration();
    await integration.init();
    
    console.log('🎉 System Fix Integration abgeschlossen!');
});

// Export für Module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SystemFixIntegration;
}


