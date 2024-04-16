// Executar quando o documento HTML for completamente carregado
document.addEventListener('DOMContentLoaded', function() {

    //seletor do calendario pelo Id
    var calendarEl = document.getElementById('calendar');

    //Isntanciar Fullcalendar e atribui a variavel calendar
    var calendar = new FullCalendar.Calendar(calendarEl, {

    //cria o cabeçalho do calendario 
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },

      //traduz o calendario
      locale: 'pt-br',

      //inicia a data do calendario 
      initialDate: '2023-01-12',

      //permite clicar nos nomes dos dias da semana
      navLinks: true, 

      //permite clicara e arrastar o mouse sobe varios dias
      selectable: true,

      selectMirror: true,
     
      editable: true,
      dayMaxEvents: true, 

      //eventos
      events: 'listar_evento.php'
    });

    calendar.render();
  });