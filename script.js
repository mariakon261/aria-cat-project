let image = document.getElementById('image');

image.addEventListener('click', () => {
   let answer = prompt("θα παρεις το γατακι?");
   console.log(answer);

   if (answer == "ναι" || answer == "Ναι") {
    alert("ΤΕΛΕΙΑ, ΕΙΝΑΙ ΤΕΛΕΙΟΙ ΦΙΛΟΙ!");
   }
   else if (answer == 'οχι' || answer == 'Οχι') {
    alert("Χρειαζονται σπιτι, βοηθησε τα ακαρδε :(");
   }
})