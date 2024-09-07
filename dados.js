const griaPorEstado = {
    "nortista": { "caboco": "Pessoa que vive na zona rural, sertanejo, camponês." },
    "costa-norte": { "bixiga": "Refere-se a algo inflado ou inchado." },
    "nordestino": { "arretado": "Algo muito bom ou interessante." },
    "recifense": { "mangue": "Uma referência aos bairros alagados da cidade." },
    "baiano": { "oxente": "Expressão de espanto ou surpresa." },
    "sertanejo": { "cabra da peste": "Pessoa corajosa e destemida." },
    "brasiliense": { "top": "Algo que é muito bom ou legal." },
    "mineiro": { "uai": "Expressão de espanto ou surpresa." },
    "fluminense": { "maneiro": "Algo legal, bacana." },
    "carioca": {
        "sacanagem": "Algo engraçado, piada.",
        "Mandar bala": "Agir rapidamente, sem hesitar.",
        "Bafafá": "Confusão, tumulto."
    },
    "caipira": { "trelelê": "Confusão, desentendimento." },
    "paulistano": { "zica": "Azar, má sorte." },
    "sulista": { "guri": "Menino, garoto." },
    "florianopolitano": { "manezinho": "Pessoa nativa de Florianópolis." },
    "gaucho": { "barbaridade": "Expressão de espanto ou admiração." },
    "serra-amazonica": { "matinta": "Figura folclórica da Amazônia." },
    "capixaba": { "bugre": "Indígena ou descendente." },
    "maranhense": { "cazumbá": "Figura folclórica de boi de mamão." },
    "pernambucana": { "xodó": "Amor, carinho." }
};

// Exibir a lista de palavras
function updateWordList() {
    const wordType = document.getElementById("wordType").value;
    const wordListItems = document.getElementById("wordListItems");
    wordListItems.innerHTML = "";

    if (wordType === "all") {
        Object.keys(griaPorEstado).forEach(region => {
            Object.keys(griaPorEstado[region]).forEach(word => {
                const li = document.createElement("li");
                li.textContent = word;
                li.classList.add(region + "-color");
                li.onclick = () => showDefinition(word, griaPorEstado[region][word]);
                wordListItems.appendChild(li);
            });
        });
    } else {
        Object.keys(griaPorEstado[wordType]).forEach(word => {
            const li = document.createElement("li");
            li.textContent = word;
            li.classList.add(wordType + "-color");
            li.onclick = () => showDefinition(word, griaPorEstado[wordType][word]);
            wordListItems.appendChild(li);
        });
    }
}

function showDefinition(word, definition) {
    document.getElementById("modalBody").innerHTML = `<strong>${word}</strong>: ${definition}`;
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function search() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    let found = false;
    Object.keys(griaPorEstado).forEach(region => {
        Object.keys(griaPorEstado[region]).forEach(word => {
            if (word.toLowerCase() === searchInput) {
                showDefinition(word, griaPorEstado[region][word]);
                found = true;
            }
        });
    });

    if (!found) {
        alert("Palavra não encontrada.");
    }
}
