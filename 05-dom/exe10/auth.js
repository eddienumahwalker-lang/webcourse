            async function fetchLotrCard() {
            const nameElement = document.getElementById('character-name');
            const imageElement = document.getElementById('character-image');

            const cardCode = '01001'; 
            const apiUrl = `https://ringsdb.com/api/public/card/${cardCode}.json`;

            try {
                const response = await fetch(apiUrl);
                
                if (!response.ok) {
                    throw new Error("Impossibile recuperare i dati della carta");
                }

                const cardData = await response.json();
                nameElement.textContent = cardData.name;
                nameElement.classList.remove('loading');

                if (cardData.imagesrc) {
                    imageElement.src = `https://ringsdb.com${cardData.imagesrc}`;
                    imageElement.style.display = 'block'; // Reveal the element
                    imageElement.alt = cardData.name;
                } else {
                    nameElement.textContent += " (Immagine non disponibile)";
                }

            } catch (error) {
                console.error("Error fetching card:", error);
                nameElement.textContent = "Errore durante il caricamento della carta.";
                nameElement.style.color = "#ff4d4d";
            }
        }

        document.addEventListener('DOMContentLoaded', fetchLotrCard);
