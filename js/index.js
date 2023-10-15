// Création d'une nouvelle instance de VanillaCalendar (voir dans fichier js)
const calendar = new VanillaCalendar({
  selector: '#myCalendar',
  onSelect: (data, elem) => {
    console.log(data);
  },
  months: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  shortWeekday: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
  pastDates: false,
});
