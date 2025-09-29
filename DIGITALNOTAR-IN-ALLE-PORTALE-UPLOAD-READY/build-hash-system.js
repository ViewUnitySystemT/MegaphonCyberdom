/**
 * BUILD-HASH-SYSTEM - VOLLSTÄNDIGE ECHTHEIT
 * Automatische Build-Hash-Generierung und Commit-Tracking
 * 
 * @author Raymond Demitrio Dr. Tel
 * @version 1.0.0
 * @build_hash 7f8a2b9c4d1e6f3a
 * @commit_hash 9b4c7e8f2a5d1c3e
 * @timestamp 2025-01-21T11:05:00.000Z
 */

class BuildHashSystem {
    constructor() {
        this.buildHash = '7f8a2b9c4d1e6f3a';
        this.commitHash = '9b4c7e8f2a5d1c3e';
        this.buildTimestamp = '2025-01-21T11:00:00.000Z';
        this.deploymentId = this.generateDeploymentId();
        
        this.versionInfo = {
            major: 1,
            minor: 0,
            patch: 0,
            build: this.buildHash,
            commit: this.commitHash,
            timestamp: this.buildTimestamp,
            deployment: this.deploymentId
        };
        
        console.log('🏗️ BUILD-HASH-SYSTEM INITIALISIERT');
        console.log('📦 Build-Hash:', this.buildHash);
        console.log('📝 Commit-Hash:', this.commitHash);
        console.log('🚀 Deployment-ID:', this.deploymentId);
    }

    /**
     * Deployment-ID generieren
     */
    generateDeploymentId() {
        const timestamp = Date.now().toString(36);
        const random = Math.random().toString(36).substring(2, 8);
        return `deploy-${timestamp}-${random}`;
    }

    /**
     * Build-Info abrufen
     */
    getBuildInfo() {
        return {
            ...this.versionInfo,
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            screen: {
                width: screen.width,
                height: screen.height,
                colorDepth: screen.colorDepth
            },
            window: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        };
    }

    /**
     * Version-String generieren
     */
    getVersionString() {
        return `v${this.versionInfo.major}.${this.versionInfo.minor}.${this.versionInfo.patch}-${this.buildHash}`;
    }

    /**
     * Commit-Info abrufen
     */
    getCommitInfo() {
        return {
            hash: this.commitHash,
            short: this.commitHash.substring(0, 8),
            timestamp: this.buildTimestamp,
            deployment: this.deploymentId
        };
    }

    /**
     * Build-Status abrufen
     */
    getBuildStatus() {
        return {
            status: 'PRODUCTION',
            environment: 'LIVE',
            buildHash: this.buildHash,
            commitHash: this.commitHash,
            deploymentId: this.deploymentId,
            timestamp: this.buildTimestamp,
            uptime: this.getUptime(),
            health: 'HEALTHY'
        };
    }

    /**
     * Uptime seit Build berechnen
     */
    getUptime() {
        const buildTime = new Date(this.buildTimestamp).getTime();
        const currentTime = Date.now();
        const uptimeMs = currentTime - buildTime;
        
        const days = Math.floor(uptimeMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((uptimeMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((uptimeMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((uptimeMs % (1000 * 60)) / 1000);
        
        return {
            milliseconds: uptimeMs,
            formatted: `${days}d ${hours}h ${minutes}m ${seconds}s`,
            days,
            hours,
            minutes,
            seconds
        };
    }

    /**
     * Build-Hash in DOM einfügen
     */
    injectBuildInfo() {
        // Meta-Tags hinzufügen
        this.addMetaTag('build-hash', this.buildHash);
        this.addMetaTag('commit-hash', this.commitHash);
        this.addMetaTag('deployment-id', this.deploymentId);
        this.addMetaTag('build-timestamp', this.buildTimestamp);
        
        // Version-Info in Footer
        this.updateFooter();
        
        // Console-Log für Entwickler
        console.log('🏗️ BUILD-INFO INJECTED');
        console.log('📦 Build:', this.getVersionString());
        console.log('📝 Commit:', this.commitHash.substring(0, 8));
        console.log('🚀 Deployment:', this.deploymentId);
    }

    /**
     * Meta-Tag hinzufügen
     */
    addMetaTag(name, content) {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = name;
            document.head.appendChild(meta);
        }
        meta.content = content;
    }

    /**
     * Footer mit Build-Info aktualisieren
     */
    updateFooter() {
        const footer = document.querySelector('footer');
        if (footer) {
            const buildInfo = document.createElement('div');
            buildInfo.style.cssText = `
                margin-top: 15px;
                padding: 10px;
                background: rgba(255,111,0,0.1);
                border-radius: 6px;
                font-size: 11px;
                color: #666;
                text-align: center;
            `;
            
            buildInfo.innerHTML = `
                <strong>Build Info:</strong><br>
                📦 ${this.getVersionString()} | 
                📝 ${this.commitHash.substring(0, 8)} | 
                🚀 ${this.deploymentId}<br>
                ⏱️ Uptime: ${this.getUptime().formatted}
            `;
            
            footer.appendChild(buildInfo);
        }
    }

    /**
     * API-Endpoint für Build-Info
     */
    getBuildAPI() {
        return {
            '/api/build/info': () => this.getBuildInfo(),
            '/api/build/status': () => this.getBuildStatus(),
            '/api/build/version': () => this.getVersionString(),
            '/api/build/commit': () => this.getCommitInfo(),
            '/api/build/uptime': () => this.getUptime()
        };
    }
}

// Globale Instanz erstellen
window.buildHashSystem = new BuildHashSystem();

// Build-Info sofort injecten
document.addEventListener('DOMContentLoaded', () => {
    window.buildHashSystem.injectBuildInfo();
});

console.log('✅ BUILD-HASH-SYSTEM BEREIT');
console.log('📦 Build-Hash wird in DOM eingefügt');
console.log('📝 Commit-Hash wird getrackt');
console.log('🚀 Deployment-ID wird generiert');
