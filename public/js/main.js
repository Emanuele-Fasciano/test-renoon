// creo un array di oggetti con i dati dei badge
const badges = [
    {
        image: "./images/cow-silhouette.svg",
        clickedImage: "./images/cow-silhouette-clicked.svg",
        title: "Animal welfare",
        content: "This product contains NATIVA Merino Wool, a branded fiber from certified farms that comply with strict animal welfare, land management and ethical work policies ensured by tri-annual audits. This material has been chosen to work together with an organisation that, on top of the above, also provides stress-free shearing and the prohibition of mulesing."
    },
    {
        image: "./images/blockchain-icon.svg",
        clickedImage: "./images/blockchain-icon-clicked.svg",
        title: "Blockchain traced",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat repudiandae, quia tenetur labore dolores laudantium vitae animi quis optio, soluta mollitia obcaecati. Dignissimos modi veniam voluptates maiores voluptas nostrum debitis dolor, sed, totam officia exercitationem earum dolorum, at ex laboriosam."
    },
    
]

// recupero dal dom il contenitore dei badge
const badgeContainer = document.querySelector(".badge-container");


badges.forEach((badge) => { // itero tutti gli oggetti dell' array

    const badgeHTML = `
                        <div class="badge-button">
                            <img class="badge-img showed" src="${badge.image}" alt="">
                            <img class="badge-img clicked d-none" src="${badge.clickedImage}" alt="">
                            <div class="text-container">
                                <div class="badge-title">${badge.title}</div>
                                <div class="verifiable">
                                    <i class="fa-regular fa-circle-check"></i>
                                    <p>Verifiable</p>
                                </div>
                            </div>
                                 <div class="arrow-right">
                                    <i class="fa-solid fa-chevron-right"></i>
                                 </div>
                                <div class="arrow-down d-none">
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                        </div>
                        <dialog class="badge-text d-none" open>
                            <div class="box-title">${badge.title}</div>
                            <p class="content">${badge.content}</p>
                        </dialog>
                      `
    
    badgeContainer.innerHTML += badgeHTML;

    });

    // Seleziono tutti gli elementi del dom
    const badgeButtons = document.querySelectorAll(".badge-button");
    const arrowsRight = document.querySelectorAll(".arrow-right");
    const arrowsDown = document.querySelectorAll(".arrow-down");
    const badgeImage = document.querySelectorAll(".showed");
    const badgeImageClicked = document.querySelectorAll(".clicked");


    // Aggiungo l'addEventListener per gestire i click sui badge-button
    badgeContainer.addEventListener("click", (event) => {
    const badgeButton = event.target.closest(".badge-button"); // Trovo il badge-button cliccato

    if (badgeButton) {

        badgeButtons.forEach((button) => {
            button.classList.remove("active"); // Rimuovo la classe 'active' da tutti i badge-button
        });
        
        // Nascondo tutti i badge-text
        const allBadgeText = document.querySelectorAll(".badge-text");
        allBadgeText.forEach((text) => {
            text.classList.add("d-none");
        });
        
        // Aggiungo la classe 'active' al badge-button cliccato
        badgeButton.classList.add("active");
        
        // Mostro il badge-text corrispondente
        const badgeText = badgeButton.nextElementSibling; // Prendo l'elemento successivo(il container del testo)
        badgeText.classList.remove("d-none"); // Rimuovo la classe 'd-none' per visualizzarlo in pagina
        

                // CAMBIO DI DIREZIONE DELLA FRECCIA SUL CLICK

                arrowsDown.forEach((arrow) => {
                    arrow.classList.add("d-none"); // Aggiungo la classe 'd-none' a tutte le arrowDown
                });
        
                // al click del badge seleziono le frecce solo dell'elemento cliccato
                const arrowSelectedRight = badgeButton.querySelector('.arrow-right');
                const arrowSelectedDown = badgeButton.querySelector('.arrow-down');
                
                arrowsRight.forEach((arrow) => {
                    arrow.classList.remove("d-none"); // rimuovo'd-none' a tutte le arrowRight
                });
                
                arrowSelectedDown.classList.remove('d-none'); // rimuovo 'd-none' alla arrowRight del badge cliccato
                arrowSelectedRight.classList.add('d-none'); // aggiungo 'd-none' alla arrowDown del badge cliccato



                // CAMBIO COLORE DELL' IMMAGINE SUL CLICK

                badgeImageClicked.forEach((image) => {
                    image.classList.add("d-none"); // Aggiungo la classe 'd-none' a tutte le immagini nascoste
                });
        
                // al click del badge seleziono le immagini solo dell'elemento cliccato
                const imageClickedSelected = badgeButton.querySelector('.clicked');
                const imageShowSelected = badgeButton.querySelector('.showed');
                

                badgeImage.forEach((image) => {
                    image.classList.remove("d-none"); // rimuovo'd-none' a tutte le immagini mostrate normalmente
                });
                
                
                imageClickedSelected.classList.remove('d-none'); // rimuovo 'd-none' all' immagine nascosta del badge cliccato
                imageShowSelected.classList.add('d-none'); // aggiungo 'd-none' all' immagine visualizzata quando il badge non è cliccato
    }
});
        

        // CAMBIO COLORE IMMAGINE SUL HOVER DEL BADGE

        // per ogni badge creo un evento mouseenter
        badgeButtons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                
                // seleziono le immagini del badge specifico
                const imageClickedSelected = this.querySelector('.clicked');
                const imageShowSelected = this.querySelector('.showed');

                imageClickedSelected.classList.remove('d-none'); 
                imageShowSelected.classList.add('d-none'); 
            });
});
        

        // RIPRISTINO COLORE DELL'IMMAGINE QUANDO IL MOUSE NON è SUL BADGE

        // per ogni badge creo un evento mouseleave
        badgeButtons.forEach(button => {
            button.addEventListener('mouseleave', function() {

                // seleziono le immagini del badge specifico
                const imageClickedSelected = this.querySelector('.clicked');
                const imageShowSelected = this.querySelector('.showed');

                imageClickedSelected.classList.add('d-none');
                imageShowSelected.classList.remove('d-none'); 
            });
});


