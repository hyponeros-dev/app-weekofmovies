// Création d'une nouvelle instance de VanillaCalendar (voir dans fichier js)
const calendar = new VanillaCalendar({
  selector: '#myCalendar',
  onSelect: (data, elem) => {
    // selectedDate = data;
    // alert(`Vous avez sélectionné le ${new Date(selectedDate.date).toISOString().split('T')[0]}`);
    selectedDate = new Date(data.date).toISOString().split('T')[0];
    alert(`Vous avez sélectionné le ${selectedDate}`);
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

let selectedDate = {};
