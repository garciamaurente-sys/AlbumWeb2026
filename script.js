// Estructura con entidades HTML para evitar problemas de codificación (tildes y eñes)
const albumStructure = [
    { group: "Inicio", teams: [
        { name: "FIFA World Cup", prefix: "FWC", start: 0, end: 8, emoji: "🏆" }
    ]},
    { group: "Grupo A", teams: [
        { name: "M&eacute;xico", prefix: "MEX", start: 1, end: 20, iso: "mx" },
        { name: "Sud&aacute;frica", prefix: "RSA", start: 1, end: 20, iso: "za" },
        { name: "Corea del Sur", prefix: "KOR", start: 1, end: 20, iso: "kr" },
        { name: "Rep&uacute;blica Checa", prefix: "CZE", start: 1, end: 20, iso: "cz" }
    ]},
    { group: "Grupo B", teams: [
        { name: "Canad&aacute;", prefix: "CAN", start: 1, end: 20, iso: "ca" },
        { name: "Bosnia y Herz.", prefix: "BIH", start: 1, end: 20, iso: "ba" },
        { name: "Catar", prefix: "QAT", start: 1, end: 20, iso: "qa" },
        { name: "Suiza", prefix: "SUI", start: 1, end: 20, iso: "ch" }
    ]},
    { group: "Grupo C", teams: [
        { name: "Brasil", prefix: "BRA", start: 1, end: 20, iso: "br" },
        { name: "Marruecos", prefix: "MAR", start: 1, end: 20, iso: "ma" },
        { name: "Hait&iacute;", prefix: "HAI", start: 1, end: 20, iso: "ht" },
        { name: "Escocia", prefix: "SCO", start: 1, end: 20, iso: "gb-sct" }
    ]},
    { group: "Grupo D", teams: [
        { name: "Estados Unidos", prefix: "USA", start: 1, end: 20, iso: "us" },
        { name: "Paraguay", prefix: "PAR", start: 1, end: 20, iso: "py" },
        { name: "Australia", prefix: "AUS", start: 1, end: 20, iso: "au" },
        { name: "Turqu&iacute;a", prefix: "TUR", start: 1, end: 20, iso: "tr" }
    ]},
    { group: "Grupo E", teams: [
        { name: "Alemania", prefix: "GER", start: 1, end: 20, iso: "de" },
        { name: "Curazao", prefix: "CUW", start: 1, end: 20, iso: "cw" },
        { name: "Costa de Marfil", prefix: "CIV", start: 1, end: 20, iso: "ci" },
        { name: "Ecuador", prefix: "ECU", start: 1, end: 20, iso: "ec" }
    ]},
    { group: "Grupo F", teams: [
        { name: "Pa&iacute;ses Bajos", prefix: "NED", start: 1, end: 20, iso: "nl" },
        { name: "Jap&oacute;n", prefix: "JPN", start: 1, end: 20, iso: "jp" },
        { name: "Suecia", prefix: "SWE", start: 1, end: 20, iso: "se" },
        { name: "T&uacute;nez", prefix: "TUN", start: 1, end: 20, iso: "tn" }
    ]},
    { group: "Grupo G", teams: [
        { name: "B&eacute;lgica", prefix: "BEL", start: 1, end: 20, iso: "be" },
        { name: "Egipto", prefix: "EGY", start: 1, end: 20, iso: "eg" },
        { name: "Ir&aacute;n", prefix: "IRN", start: 1, end: 20, iso: "ir" },
        { name: "Nueva Zelanda", prefix: "NZL", start: 1, end: 20, iso: "nz" }
    ]},
    { group: "Grupo H", teams: [
        { name: "Espa&ntilde;a", prefix: "ESP", start: 1, end: 20, iso: "es" },
        { name: "Cabo Verde", prefix: "CPV", start: 1, end: 20, iso: "cv" },
        { name: "Arabia Saudita", prefix: "KSA", start: 1, end: 20, iso: "sa" },
        { name: "Uruguay", prefix: "URU", start: 1, end: 20, iso: "uy" }
    ]},
    { group: "Grupo I", teams: [
        { name: "Francia", prefix: "FRA", start: 1, end: 20, iso: "fr" },
        { name: "Senegal", prefix: "SEN", start: 1, end: 20, iso: "sn" },
        { name: "Irak", prefix: "IRQ", start: 1, end: 20, iso: "iq" },
        { name: "Noruega", prefix: "NOR", start: 1, end: 20, iso: "no" }
    ]},
    { group: "Grupo J", teams: [
        { name: "Argentina", prefix: "ARG", start: 1, end: 20, iso: "ar" },
        { name: "Argelia", prefix: "ALG", start: 1, end: 20, iso: "dz" },
        { name: "Austria", prefix: "AUT", start: 1, end: 20, iso: "at" },
        { name: "Jordania", prefix: "JOR", start: 1, end: 20, iso: "jo" }
    ]},
    { group: "Grupo K", teams: [
        { name: "Portugal", prefix: "POR", start: 1, end: 20, iso: "pt" },
        { name: "Congo", prefix: "COD", start: 1, end: 20, iso: "cd" },
        { name: "Uzbekist&aacute;n", prefix: "UZB", start: 1, end: 20, iso: "uz" },
        { name: "Colombia", prefix: "COL", start: 1, end: 20, iso: "co" }
    ]},
    { group: "Grupo L", teams: [
        { name: "Inglaterra", prefix: "ENG", start: 1, end: 20, iso: "gb-eng" },
        { name: "Croacia", prefix: "CRO", start: 1, end: 20, iso: "hr" },
        { name: "Ghana", prefix: "GHA", start: 1, end: 20, iso: "gh" },
        { name: "Panam&aacute;", prefix: "PAN", start: 1, end: 20, iso: "pa" }
    ]},
    { group: "Final", teams: [
        { name: "Hist&oacute;ricas", prefix: "FWC", start: 9, end: 19, emoji: "🏅" }
    ]},
    { group: "Coca-Cola", isCocaCola: true, teams: [
        { name: "Promocionales", prefix: "CC", start: 1, end: 14, emoji: "🥤" }
    ]}
];

let albumData = JSON.parse(localStorage.getItem('albumPanini2026_V3')) || {};
let totalFiguritas = 0;

function initApp() {
    const container = document.getElementById('album-container');
    const nav = document.getElementById('nav-container');
    container.innerHTML = '';
    nav.innerHTML = '';
    totalFiguritas = 0;

    albumStructure.forEach(section => {
        // Navegación
        let navBtn = document.createElement('button');
        navBtn.className = 'nav-btn';
        navBtn.innerText = section.group;
        navBtn.onclick = () => {
            const element = document.getElementById('sec-' + section.group.replace(/\s+/g, ''));
            const y = element.getBoundingClientRect().top + window.scrollY - 150;
            window.scrollTo({top: y, behavior: 'smooth'});
        };
        nav.appendChild(navBtn);

        // Sección
        let sectionDiv = document.createElement('div');
        sectionDiv.className = 'group-section' + (section.isCocaCola ? ' coca-cola-section' : '');
        sectionDiv.id = 'sec-' + section.group.replace(/\s+/g, '');

        let groupTitle = document.createElement('h2');
        groupTitle.className = 'group-title';
        groupTitle.innerText = section.group;
        sectionDiv.appendChild(groupTitle);

        // Equipos
        section.teams.forEach(team => {
            totalFiguritas += (team.end - team.start + 1);

            let teamDiv = document.createElement('div');
            teamDiv.className = 'team-section';

            // Lógica para mostrar Bandera (API) o Emoji
            let iconHtml = team.iso
                ? `<img src="https://flagcdn.com/24x18/${team.iso}.png" class="flag-img" alt="Bandera">`
                : `<span class="deco">${team.emoji}</span>`;

            let teamTitle = document.createElement('h3');
            teamTitle.className = 'team-title';
            teamTitle.innerHTML = `${iconHtml} ${team.name}`;
            teamDiv.appendChild(teamTitle);

            let grid = document.createElement('div');
            grid.className = 'grid';

            for (let i = team.start; i <= team.end; i++) {
                let numStr = (i === 0 && team.prefix === "FWC") ? "00" : i;
                let stickerId = `${team.prefix} ${numStr}`;
                let cantidad = albumData[stickerId] || 0;

                let sticker = document.createElement('div');
                sticker.className = 'sticker ' + (cantidad === 0 ? 'falta' : cantidad === 1 ? 'tengo' : 'repetida');

                sticker.innerHTML = `
                    <span class="sticker-prefix">${team.prefix}</span>
                    <span>${numStr}</span>
                    ${cantidad > 1 ? `<div class="badge">+${cantidad - 1}</div>` : ''}
                `;

                sticker.onclick = () => {
                    albumData[stickerId] = (albumData[stickerId] || 0) + 1;
                    guardarYActualizar();
                };

                sticker.oncontextmenu = (e) => {
                    e.preventDefault();
                    if (albumData[stickerId] > 0) {
                        albumData[stickerId]--;
                        guardarYActualizar();
                    }
                };

                grid.appendChild(sticker);
            }
            teamDiv.appendChild(grid);
            sectionDiv.appendChild(teamDiv);
        });
        container.appendChild(sectionDiv);
    });
    actualizarEstadisticas();
}

function guardarYActualizar() {
    localStorage.setItem('albumPanini2026_V3', JSON.stringify(albumData));
    initApp();
    // Si el modal está abierto, lo actualizamos en tiempo real
    if(document.getElementById('modal-repetidas').style.display === 'flex') {
        renderizarListaRepetidas();
    }
}

function actualizarEstadisticas() {
    let unicas = 0;
    let repetidas = 0;
    for (let key in albumData) {
        if (albumData[key] > 0) unicas++;
        if (albumData[key] > 1) repetidas += (albumData[key] - 1);
    }
    let porcentaje = ((unicas / totalFiguritas) * 100).toFixed(1);
    document.getElementById('stats-container').innerHTML = `
        Pegadas: <span>${unicas}</span> / ${totalFiguritas} (${porcentaje}%) |
        Extras: <span style="color: #4caf50;">${repetidas}</span>
    `;
}

// --- LÓGICA DEL MODAL DE REPETIDAS ---
function abrirModal() {
    document.getElementById('modal-repetidas').style.display = 'flex';
    renderizarListaRepetidas();
}

function cerrarModal() {
    document.getElementById('modal-repetidas').style.display = 'none';
}

function renderizarListaRepetidas() {
    const lista = document.getElementById('lista-repetidas');
    lista.innerHTML = '';
    let hayRepetidas = false;

    // Recorremos la estructura para mostrarlas en orden del álbum
    albumStructure.forEach(section => {
        section.teams.forEach(team => {
            for (let i = team.start; i <= team.end; i++) {
                let numStr = (i === 0 && team.prefix === "FWC") ? "00" : i;
                let stickerId = `${team.prefix} ${numStr}`;
                let cantidad = albumData[stickerId] || 0;

                if (cantidad > 1) {
                    hayRepetidas = true;
                    let extras = cantidad - 1;

                    // Aquí juntamos el prefijo y el número (ej: CRO9 en lugar de CRO 9)
                    let displayId = `${team.prefix}${numStr}`;

                    let item = document.createElement('div');
                    item.className = 'repetida-item';
                    item.innerHTML = `
                        <span><strong>${displayId}</strong> (${team.name})</span>
                        <span><strong style="color: #4caf50; font-size: 1.1rem;">x${extras}</strong></span>
                    `;
                    lista.appendChild(item);
                }
            }
        });
    });

    if (!hayRepetidas) {
        lista.innerHTML = '<p style="text-align:center; padding:20px; color:#aaa;">Aún no tenés figuritas repetidas. ¡A abrir sobres!</p>';
    }
}

// Cerrar modal haciendo clic afuera
window.onclick = function(event) {
    let modal = document.getElementById('modal-repetidas');
    if (event.target === modal) {
        cerrarModal();
    }
}

initApp();