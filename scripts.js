function ouvrirLettre() {
    const enveloppe = document.getElementById("enveloppe");
    const lettre = document.getElementById("lettre");
    const musique = document.getElementById("musique");

    if (enveloppe.classList.contains("cachee")) {
        return;
    }

    enveloppe.classList.add("ouverte");

    if (musique) {
        musique.play().catch(function() {
            console.log("La musique n'a pas pu démarrer.");
        });
    }

    setTimeout(function() {
        enveloppe.classList.add("cachee");
        lettre.style.display = "block";
    }, 900);
}
