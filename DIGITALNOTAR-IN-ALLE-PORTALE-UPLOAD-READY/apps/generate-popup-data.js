// Popup Data Generator für Service Links
const popupData = {
    "https://www.nasa.gov/technology/space-comms/delay-disruption-tolerant-networking-overview/": {
        icon: "🌐",
        title: "NASA DTN Overview",
        description: "Umfassende Einführung in Delay-Tolerant Networking für Weltraum-Kommunikation. Erklärt Store-and-Forward-Prinzipien und interplanetare Netzwerke.",
        features: [
            "Store-and-Forward Architektur",
            "Interplanetare Kommunikation",
            "Bundle Protocol Implementation",
            "Vernetzte Raumfahrzeuge"
        ],
        tags: ["DTN", "Space", "NASA", "Networking"]
    },
    "https://ntrs.nasa.gov/citations/20250003508": {
        icon: "📄",
        title: "HLS RF Communications ConOps",
        description: "Artemis 2025 RF Kommunikationskonzept für Human Landing System. Detaillierte Spezifikationen für Mond-Missionen.",
        features: [
            "Artemis Mission Spezifikationen",
            "Lunar Kommunikationssysteme",
            "RF Frequenzplanung",
            "Mission Operations"
        ],
        tags: ["Artemis", "Moon", "RF", "2025"]
    },
    "https://www.ariss.org/forms-and-resources.html": {
        icon: "📋",
        title: "ARISS Forms & Resources",
        description: "Amateur Radio on the ISS - Alle Formulare, Anträge und Ressourcen für Schulkontakte mit der Internationalen Raumstation.",
        features: [
            "Schulkontakt-Anträge",
            "ARISS Educational Materials",
            "Technische Dokumentation",
            "Mission Planning Tools"
        ],
        tags: ["ARISS", "Education", "ISS", "Amateur Radio"]
    },
    "https://www.ariss.org/ariss-application.html": {
        icon: "📝",
        title: "ARISS Application",
        description: "Bewerbungsformular für ARISS-Schulkontakte. Ermöglicht Schulen direkten Funkkontakt mit Astronauten auf der ISS.",
        features: [
            "Online Bewerbungsformular",
            "Schulkontakt-Terminierung",
            "Technische Unterstützung",
            "Educational Resources"
        ],
        tags: ["Application", "Schools", "ISS", "Radio"]
    },
    "https://ntrs.nasa.gov/api/citations/20030025773/downloads/20030025773.pdf": {
        icon: "📊",
        title: "ARISS 2002 Paper",
        description: "Historisches Dokument über die Einführung von Amateur Radio auf der Internationalen Raumstation. Grundlagenforschung.",
        features: [
            "Historische ARISS Entwicklung",
            "Technische Spezifikationen",
            "Mission Planning",
            "Educational Impact"
        ],
        tags: ["History", "ARISS", "ISS", "2002"]
    },
    "https://ntrs.nasa.gov/api/citations/20040012946/downloads/20040012946.pdf": {
        icon: "🔬",
        title: "ARISS Phase-2 Hardware",
        description: "Detaillierte Hardware-Spezifikationen für ARISS Phase-2 Systeme. Technische Dokumentation für erweiterte ISS-Kommunikation.",
        features: [
            "Hardware Spezifikationen",
            "Phase-2 System Design",
            "Installation Guidelines",
            "Technical Documentation"
        ],
        tags: ["Hardware", "Phase-2", "Technical", "2003"]
    },
    "https://ccsds.org/publications/bluebooks/": {
        icon: "📚",
        title: "CCSDS Blue Books",
        description: "Space Communications Standards - Offizielle CCSDS Blue Books für Weltraum-Kommunikationsprotokolle und -standards.",
        features: [
            "Space Communication Standards",
            "Protocol Specifications",
            "Interoperability Guidelines",
            "Mission Support"
        ],
        tags: ["CCSDS", "Standards", "Space", "Protocols"]
    },
    "https://github.com/nasa-jpl/ION-DTN": {
        icon: "💻",
        title: "ION-DTN (NASA-JPL)",
        description: "NASA Jet Propulsion Laboratory DTN Implementation. Open Source Software für Delay-Tolerant Networking in Weltraum-Missionen.",
        features: [
            "Open Source DTN Software",
            "NASA Mission Tested",
            "Bundle Protocol Implementation",
            "Cross-Platform Support"
        ],
        tags: ["Open Source", "NASA-JPL", "DTN", "Software"]
    },
    "https://github.com/ibrdtn/ibrdtn": {
        icon: "🔧",
        title: "IBR-DTN",
        description: "Alternative DTN Implementation für Embedded Systems und OpenWrt. Leichtgewichtig und für IoT-Anwendungen optimiert.",
        features: [
            "Embedded System Support",
            "OpenWrt Integration",
            "Lightweight Implementation",
            "IoT Optimized"
        ],
        tags: ["Embedded", "IoT", "OpenWrt", "Lightweight"]
    },
    "https://dtn7.github.io/": {
        icon: "⚡",
        title: "DTN7 (BPv7)",
        description: "Modern DTN Implementation mit Bundle Protocol v7. Rust-basierte, hochperformante DTN-Software für moderne Anwendungen.",
        features: [
            "Bundle Protocol v7",
            "Rust Implementation",
            "High Performance",
            "Modern Architecture"
        ],
        tags: ["Rust", "BPv7", "Modern", "Performance"]
    },
    "https://github.com/dtn7/awesome-dtn": {
        icon: "⭐",
        title: "Awesome DTN",
        description: "Curated list of DTN resources, tools, and implementations. Umfassende Sammlung aller DTN-bezogenen Projekte und Dokumentation.",
        features: [
            "Curated DTN Resources",
            "Tools & Implementations",
            "Documentation Links",
            "Community Projects"
        ],
        tags: ["Awesome List", "Resources", "Community", "Tools"]
    },
    "https://github.com/daniestevez/gr-satellites": {
        icon: "🛰️",
        title: "gr-satellites",
        description: "GNU Radio decoders für Satelliten-Kommunikation. Open Source Tools für Empfang und Dekodierung von Satellitensignalen.",
        features: [
            "Satellite Signal Decoders",
            "GNU Radio Integration",
            "Multiple Satellite Support",
            "Real-time Processing"
        ],
        tags: ["GNU Radio", "Satellites", "Decoders", "Open Source"]
    },
    "https://github.com/wb2osz/aprsspec": {
        icon: "📻",
        title: "APRS Specification",
        description: "Automatic Packet Reporting System Spezifikation. Offizielle Dokumentation für APRS-Protokoll und -Implementation.",
        features: [
            "APRS Protocol Specification",
            "Packet Format Documentation",
            "Implementation Guidelines",
            "Amateur Radio Standards"
        ],
        tags: ["APRS", "Amateur Radio", "Protocol", "Specification"]
    },
    "https://wiki.satnogs.org/Build": {
        icon: "🏗️",
        title: "SatNOGS Build",
        description: "Open Ground Station Network - Build Guide. Anleitung zum Bau eigener Satelliten-Bodenstationen für das SatNOGS-Netzwerk.",
        features: [
            "Ground Station Build Guide",
            "Hardware Requirements",
            "Software Setup",
            "Network Integration"
        ],
        tags: ["Ground Station", "SatNOGS", "Build Guide", "Hardware"]
    },
    "https://en.wikipedia.org/wiki/Spartan_Packet_Radio_Experiment": {
        icon: "📜",
        title: "SPRE (STS-72)",
        description: "Spartan Packet Radio Experiment - Historische Referenz. Erstes Packet Radio Experiment im Weltraum während STS-72 Mission.",
        features: [
            "Historical Space Experiment",
            "Packet Radio in Space",
            "STS-72 Mission Details",
            "Amateur Radio Milestone"
        ],
        tags: ["History", "STS-72", "Packet Radio", "Space"]
    },
    "https://spec.matrix.org/": {
        icon: "📋",
        title: "Matrix Specification",
        description: "Offizielle Matrix Protocol Spezifikation. Vollständige Dokumentation für dezentrale, E2E-verschlüsselte Kommunikation.",
        features: [
            "Decentralized Communication",
            "End-to-End Encryption",
            "Federation Protocol",
            "Open Standard"
        ],
        tags: ["Matrix", "Protocol", "Decentralized", "E2E"]
    },
    "https://github.com/libp2p/specs": {
        icon: "🌐",
        title: "libp2p Specifications",
        description: "Peer-to-peer Networking Protocol Stack. Modularer P2P-Stack für dezentrale Anwendungen und Blockchain-Netzwerke.",
        features: [
            "Modular P2P Stack",
            "Multiple Transport Protocols",
            "Peer Discovery",
            "Content Routing"
        ],
        tags: ["P2P", "Modular", "Transport", "Discovery"]
    },
    "https://docs.libp2p.io/": {
        icon: "📖",
        title: "libp2p Documentation",
        description: "Comprehensive libp2p documentation and guides. Detaillierte Anleitungen für P2P-Anwendungsentwicklung.",
        features: [
            "Comprehensive Documentation",
            "Implementation Guides",
            "API References",
            "Tutorials & Examples"
        ],
        tags: ["Documentation", "Guides", "API", "Tutorials"]
    },
    "https://datatracker.ietf.org/doc/rfc9420/": {
        icon: "🔐",
        title: "MLS RFC 9420",
        description: "Message Layer Security - End-to-End Encryption Standard. IETF-Standard für sichere Gruppenkommunikation.",
        features: [
            "Group End-to-End Encryption",
            "Forward Secrecy",
            "Post-Compromise Security",
            "IETF Standard"
        ],
        tags: ["MLS", "E2E", "Security", "IETF"]
    },
    "https://www.w3.org/TR/activitypub/": {
        icon: "🌍",
        title: "ActivityPub (W3C)",
        description: "Decentralized Social Networking Protocol. W3C-Standard für föderierte soziale Netzwerke wie Mastodon.",
        features: [
            "Decentralized Social Networks",
            "Federation Protocol",
            "Activity Streams",
            "W3C Standard"
        ],
        tags: ["ActivityPub", "Social", "Federation", "W3C"]
    },
    "https://github.com/nostr-protocol/nostr": {
        icon: "⚡",
        title: "Nostr Protocol",
        description: "Decentralized Social Protocol - Notes and Other Stuff Transmitted by Relays. Einfaches, zensurresistentes Protokoll.",
        features: [
            "Censorship Resistant",
            "Simple Protocol",
            "Relay-based Architecture",
            "Cryptographic Identity"
        ],
        tags: ["Nostr", "Censorship Resistant", "Simple", "Relays"]
    },
    "https://yggdrasil-network.github.io/": {
        icon: "🌳",
        title: "Yggdrasil Network",
        description: "End-to-End IPv6 Overlay Network. Verschlüsseltes, selbstkonfigurierendes Mesh-Netzwerk über das Internet.",
        features: [
            "IPv6 Overlay Network",
            "End-to-End Encryption",
            "Self-Configuring",
            "Mesh Topology"
        ],
        tags: ["IPv6", "Overlay", "Encrypted", "Mesh"]
    },
    "https://reticulum.network/manual/": {
        icon: "🔗",
        title: "Reticulum Manual",
        description: "Cryptographic Mesh Networking Protocol. Sichere, verschlüsselte Mesh-Netzwerke für kritische Kommunikation.",
        features: [
            "Cryptographic Mesh",
            "Encrypted Communication",
            "Critical Infrastructure",
            "Open Source"
        ],
        tags: ["Cryptographic", "Mesh", "Encrypted", "Critical"]
    },
    "https://meshtastic.org/docs/introduction/": {
        icon: "📻",
        title: "Meshtastic Documentation",
        description: "Open Source Mesh Networking mit LoRa. Kostengünstiges Mesh-Netzwerk für IoT und Kommunikation.",
        features: [
            "LoRa Mesh Networking",
            "Low Cost Hardware",
            "IoT Applications",
            "Open Source"
        ],
        tags: ["LoRa", "Mesh", "IoT", "Low Cost"]
    },
    "https://pages.github.com/": {
        icon: "📄",
        title: "GitHub Pages",
        description: "Free static site hosting from GitHub repositories. Kostenloses Hosting für statische Websites direkt aus Git-Repositories.",
        features: [
            "Free Static Hosting",
            "Git Integration",
            "Custom Domains",
            "HTTPS Support"
        ],
        tags: ["Free", "Static", "Git", "Hosting"]
    },
    "https://www.netlify.com/": {
        icon: "🚀",
        title: "Netlify",
        description: "Modern web development platform with continuous deployment. Automatisches Deployment und CDN für moderne Web-Apps.",
        features: [
            "Continuous Deployment",
            "Global CDN",
            "Serverless Functions",
            "Form Handling"
        ],
        tags: ["CDN", "Serverless", "Deployment", "Modern"]
    },
    "https://vercel.com/": {
        icon: "⚡",
        title: "Vercel",
        description: "Frontend cloud platform for static sites and serverless functions. Optimiert für React, Vue, Next.js und moderne Frameworks.",
        features: [
            "Frontend Optimized",
            "Serverless Functions",
            "Edge Computing",
            "Framework Support"
        ],
        tags: ["Frontend", "Serverless", "Edge", "Frameworks"]
    }
};

// Function to generate popup HTML
function generatePopupHTML(url, data) {
    return `
        <div class="popup-info">
            <div class="popup-header">
                <span class="popup-icon">${data.icon}</span>
                <span class="popup-title">${data.title}</span>
            </div>
            <div class="popup-description">
                ${data.description}
            </div>
            <div class="popup-features">
                <div class="popup-features-title">Angebot:</div>
                <ul class="popup-feature-list">
                    ${data.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="popup-tech">
                ${data.tags.map(tag => `<span class="popup-tech-tag">${tag}</span>`).join('')}
            </div>
            <div class="popup-url">${new URL(url).hostname}</div>
            <div class="popup-actions">
                <button class="popup-btn" onclick="openLink('${url}')">Öffnen</button>
                <button class="popup-btn secondary" onclick="copyUrl(this)">Kopieren</button>
            </div>
        </div>
    `;
}

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { popupData, generatePopupHTML };
}



