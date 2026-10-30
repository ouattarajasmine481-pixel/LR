function ouvrirlettre() {
    let enveloppe =
    document.getElementById("enveloppe");
    let lettre =
    document.getElementById("lettre");
    let musique =
document.getElementById("musique");
enveloppe.classList.add("cachee");
lettre.style.display = "block"
if (musique) {
    musique.play().catch(function() {
console.log("La musique n'a pas pu démarrer.")
    });
   }
}
