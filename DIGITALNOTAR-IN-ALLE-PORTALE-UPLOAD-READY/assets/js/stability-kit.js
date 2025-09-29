// ===============================
// 🛡️ STABILITY-KIT: Self-Healing & Feature-Module
// ===============================
// Autor: Raymond Demitrio Tel
// Datum: 2025-09-21
// Zweck: Globale Fehlerheilung, Back-Button-Dedupe, Studio, Suche

(function() {
    'use strict';
    
    console.log('🛡️ Stability-Kit initialisiert');
    
    // ===============================
    // 1. BACK-BUTTON DEDUPE & FIX
    // ===============================
    
    function fixBackButton() {
        const backButtons = document.querySelectorAll('button[data-action="back"], a[href*="back"], .back-button');
        let lastBackButton = null;
        
        backButtons.forEach((btn, index) => {
            if (index > 0 && btn.textContent.trim() === backButtons[0].textContent.trim()) {
                btn.style.display = 'none';
                console.log('🔧 Doppelter Back-Button entfernt:', btn);
            } else {
                lastBackButton = btn;
            }
        });
        
        // History-Fix für Home-Navigation
        if (lastBackButton) {
            lastBackButton.addEventListener('click', function(e) {
                if (window.location.pathname === '/') {
                    e.preventDefault();
                    history.replaceState(null, null, '/');
                }
            });
        }
    }
    
    // ===============================
    // 2. SELF-HEAL FÜR /apps/apps/... PFADE
    // ===============================
    
    function selfHealAppsPaths() {
        const currentPath = window.location.pathname;
        const appsPattern = /^(\/apps\/)+(.+)$/;
        
        if (appsPattern.test(currentPath)) {
            const match = currentPath.match(appsPattern);
            const cleanPath = '/apps/' + match[2];
            
            if (currentPath !== cleanPath) {
                console.log('🔧 Self-Heal: Pfad korrigiert', currentPath, '→', cleanPath);
                history.replaceState(null, null, cleanPath);
                window.location.reload();
                return;
            }
        }
        
        // Alle Links reparieren
        document.querySelectorAll('a[href*="/apps/apps/"]').forEach(link => {
            const originalHref = link.getAttribute('href');
            const cleanHref = originalHref.replace(/^(\/apps\/)+/, '/apps/');
            if (originalHref !== cleanHref) {
                link.setAttribute('href', cleanHref);
                console.log('🔧 Link repariert:', originalHref, '→', cleanHref);
            }
        });
    }
    
    // ===============================
    // 3. SUCHE (CLIENTSEITIG, FUZZY)
    // ===============================
    
    function initSearch() {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;
        
        let searchTimeout;
        let searchResults = [];
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.trim();
            
            searchTimeout = setTimeout(() => {
                if (query.length < 2) {
                    searchResults = [];
                } else {
                    searchResults = performFuzzySearch(query);
                }
                
                // Ergebnisse in Data-Attribut speichern
                this.setAttribute('data-search-results', JSON.stringify(searchResults));
                
                // Event für UI-Updates
                this.dispatchEvent(new CustomEvent('searchResults', {
                    detail: { results: searchResults, query: query }
                }));
                
                console.log('🔍 Suche abgeschlossen:', searchResults.length, 'Ergebnisse');
            }, 250);
        });
        
        // Keyboard-Shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.key === '/' && !searchInput.matches(':focus')) {
                e.preventDefault();
                searchInput.focus();
            }
            if (e.key === 'Escape' && searchInput.matches(':focus')) {
                searchInput.value = '';
                searchInput.blur();
            }
        });
    }
    
    function performFuzzySearch(query) {
        const results = [];
        const searchableElements = document.querySelectorAll('[data-searchable], h1, h2, h3, p, .description');
        
        searchableElements.forEach(element => {
            const text = element.textContent.toLowerCase();
            const queryLower = query.toLowerCase();
            
            if (text.includes(queryLower)) {
                const relevance = calculateRelevance(text, queryLower);
                results.push({
                    element: element,
                    text: element.textContent,
                    relevance: relevance,
                    type: element.tagName.toLowerCase()
                });
            }
        });
        
        return results.sort((a, b) => b.relevance - a.relevance);
    }
    
    function calculateRelevance(text, query) {
        let score = 0;
        
        // Exakte Übereinstimmung
        if (text === query) score += 100;
        
        // Beginnt mit Query
        if (text.startsWith(query)) score += 50;
        
        // Enthält Query
        if (text.includes(query)) score += 25;
        
        // Wort-Grenzen
        const words = text.split(/\s+/);
        words.forEach(word => {
            if (word.startsWith(query)) score += 10;
            if (word.includes(query)) score += 5;
        });
        
        return score;
    }
    
    // ===============================
    // 4. STUDIO: REC & LIBRARY
    // ===============================
    
    function initStudio() {
        // Schwebende Studio-UI erstellen
        const studioUI = createStudioUI();
        document.body.appendChild(studioUI);
        
        // MediaRecorder für Aufnahme
        let mediaRecorder = null;
        let recordedChunks = [];
        
        window.startRecording = function() {
            navigator.mediaDevices.getUserMedia({ audio: true, video: false })
                .then(stream => {
                    mediaRecorder = new MediaRecorder(stream);
                    recordedChunks = [];
                    
                    mediaRecorder.ondataavailable = function(event) {
                        recordedChunks.push(event.data);
                    };
                    
                    mediaRecorder.onstop = function() {
                        const blob = new Blob(recordedChunks, { type: 'audio/webm' });
                        saveToLibrary('recording_' + Date.now(), blob);
                    };
                    
                    mediaRecorder.start();
                    updateStudioUI('recording');
                    console.log('🎙️ Aufnahme gestartet');
                })
                .catch(err => console.error('Aufnahme-Fehler:', err));
        };
        
        window.stopRecording = function() {
            if (mediaRecorder && mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
                updateStudioUI('stopped');
                console.log('🎙️ Aufnahme gestoppt');
            }
        };
        
        window.playRecording = function(id) {
            const recording = getFromLibrary(id);
            if (recording) {
                const audio = new Audio(URL.createObjectURL(recording.blob));
                audio.play();
            }
        };
        
        window.downloadRecording = function(id) {
            const recording = getFromLibrary(id);
            if (recording) {
                const a = document.createElement('a');
                a.href = URL.createObjectURL(recording.blob);
                a.download = recording.name + '.webm';
                a.click();
            }
        };
    }
    
    function createStudioUI() {
        const studio = document.createElement('div');
        studio.id = 'floating-studio';
        studio.style.cssText = `
            position: fixed;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(30, 41, 59, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 1rem;
            padding: 1rem;
            z-index: 70;
            backdrop-filter: blur(12px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
            min-width: 200px;
        `;
        
        studio.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <span style="font-weight: 800; color: #fff;">🎙️ Studio</span>
            </div>
            <div id="studio-controls" style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
                <button id="rec-btn" onclick="startRecording()" style="padding: 0.5rem; border-radius: 0.5rem; border: none; background: #ef4444; color: white; cursor: pointer;">REC</button>
                <button id="stop-btn" onclick="stopRecording()" style="padding: 0.5rem; border-radius: 0.5rem; border: none; background: #6b7280; color: white; cursor: pointer;" disabled>STOP</button>
            </div>
            <div id="studio-library" style="max-height: 200px; overflow-y: auto;">
                <div style="font-size: 0.8rem; color: #9ca3af; margin-bottom: 0.5rem;">Library</div>
                <div id="library-items"></div>
            </div>
        `;
        
        return studio;
    }
    
    function updateStudioUI(state) {
        const recBtn = document.getElementById('rec-btn');
        const stopBtn = document.getElementById('stop-btn');
        
        if (state === 'recording') {
            recBtn.disabled = true;
            stopBtn.disabled = false;
            recBtn.style.background = '#dc2626';
        } else {
            recBtn.disabled = false;
            stopBtn.disabled = true;
            recBtn.style.background = '#ef4444';
        }
        
        updateLibraryDisplay();
    }
    
    function updateLibraryDisplay() {
        const libraryItems = document.getElementById('library-items');
        if (!libraryItems) return;
        
        const recordings = getAllFromLibrary();
        libraryItems.innerHTML = recordings.map(rec => `
            <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.25rem; border-radius: 0.25rem; background: rgba(255, 255, 255, 0.05); margin-bottom: 0.25rem;">
                <span style="font-size: 0.8rem; color: #fff;">${rec.name}</span>
                <button onclick="playRecording('${rec.id}')" style="padding: 0.25rem; border-radius: 0.25rem; border: none; background: #10b981; color: white; cursor: pointer; font-size: 0.7rem;">▶</button>
                <button onclick="downloadRecording('${rec.id}')" style="padding: 0.25rem; border-radius: 0.25rem; border: none; background: #8b5cf6; color: white; cursor: pointer; font-size: 0.7rem;">↓</button>
            </div>
        `).join('');
    }
    
    // ===============================
    // 5. LIBRARY (LOCALSTORAGE)
    // ===============================
    
    function saveToLibrary(name, blob) {
        const id = 'rec_' + Date.now();
        const recordings = JSON.parse(localStorage.getItem('studio_recordings') || '[]');
        
        // Blob zu Base64 konvertieren (vereinfacht)
        const reader = new FileReader();
        reader.onload = function() {
            recordings.push({
                id: id,
                name: name,
                data: reader.result,
                timestamp: Date.now()
            });
            
            localStorage.setItem('studio_recordings', JSON.stringify(recordings));
            updateLibraryDisplay();
            console.log('💾 Aufnahme gespeichert:', name);
        };
        reader.readAsDataURL(blob);
    }
    
    function getFromLibrary(id) {
        const recordings = JSON.parse(localStorage.getItem('studio_recordings') || '[]');
        const recording = recordings.find(r => r.id === id);
        
        if (recording) {
            // Base64 zu Blob konvertieren
            const byteCharacters = atob(recording.data.split(',')[1]);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'audio/webm' });
            
            return {
                id: recording.id,
                name: recording.name,
                blob: blob,
                timestamp: recording.timestamp
            };
        }
        
        return null;
    }
    
    function getAllFromLibrary() {
        const recordings = JSON.parse(localStorage.getItem('studio_recordings') || '[]');
        return recordings.map(r => ({
            id: r.id,
            name: r.name,
            timestamp: r.timestamp
        }));
    }
    
    // ===============================
    // 6. PROJECTS & NOTES
    // ===============================
    
    function initProjectsNotes() {
        const projects = JSON.parse(localStorage.getItem('projects') || '[]');
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        
        // Projects/Notes UI in Studio einbetten
        const studio = document.getElementById('floating-studio');
        if (studio) {
            const projectsSection = document.createElement('div');
            projectsSection.innerHTML = `
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                    <div style="font-size: 0.8rem; color: #9ca3af; margin-bottom: 0.5rem;">Projects & Notes</div>
                    <div id="projects-notes-items"></div>
                </div>
            `;
            studio.appendChild(projectsSection);
            
            updateProjectsNotesDisplay();
        }
    }
    
    function updateProjectsNotesDisplay() {
        const container = document.getElementById('projects-notes-items');
        if (!container) return;
        
        const projects = JSON.parse(localStorage.getItem('projects') || '[]');
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        
        const items = [
            ...projects.map(p => ({ type: 'project', ...p })),
            ...notes.map(n => ({ type: 'note', ...n }))
        ].sort((a, b) => b.timestamp - a.timestamp);
        
        container.innerHTML = items.slice(0, 5).map(item => `
            <div style="font-size: 0.8rem; color: #fff; padding: 0.25rem; border-radius: 0.25rem; background: rgba(255, 255, 255, 0.05); margin-bottom: 0.25rem;">
                ${item.type === 'project' ? '📁' : '📝'} ${item.name || item.title}
            </div>
        `).join('');
    }
    
    // ===============================
    // 7. MEDIA-LINK
    // ===============================
    
    function initMediaLink() {
        const mediaLinks = document.querySelectorAll('a[href*="TEL1.nl"], a[href*="tel1"]');
        
        mediaLinks.forEach(link => {
            if (link.href.includes('www.TEL1.nl') || link.href.includes('tel1')) {
                link.href = 'https://tel1.jouwweb.nl/tt';
                link.target = '_blank';
                console.log('🔗 Media-Link aktualisiert:', link.href);
            }
        });
    }
    
    // ===============================
    // INITIALISIERUNG
    // ===============================
    
    function init() {
        console.log('🛡️ Stability-Kit wird initialisiert...');
        
        // Warten bis DOM geladen
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }
        
        // Alle Module initialisieren
        fixBackButton();
        selfHealAppsPaths();
        initSearch();
        initStudio();
        initProjectsNotes();
        initMediaLink();
        
        // Event-Listener für Navigation
        window.addEventListener('popstate', function() {
            setTimeout(() => {
                fixBackButton();
                selfHealAppsPaths();
            }, 100);
        });
        
        console.log('✅ Stability-Kit vollständig initialisiert');
    }
    
    // Starten
    init();
    
})();
