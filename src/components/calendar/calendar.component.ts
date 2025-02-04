import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';


interface DayInfo {
  name: string;
  date: number;
  month: number;
  year: number;
  isCurrent: boolean;
}

interface Event {
  name: string;
  time: string;
  room: string;
  teacher: string;
  day: number;
  start: number;
  end: number;
  color: string;
  margin: string;
}

@Component({
  selector: 'calendar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})

export class CalendarComponent implements OnInit {

  currentHours: number = 0;
  currentMinutes: number = 0;
  currentDay: Date = new Date();
  currentMonth: string = "";
  currentMonthNumber: number = 0;
  currentYear: number = 0;
  normalMargin: string = "-2px 5px -15px"
  firstQuarterMargin: string = "9px 5px -24px"
  halfMargin: string = "23px 5px -38px"
  thirdQuarterMargin: string = "-15px 5px 0"
  noMargin: string = "0px 5px 0px 5px"
  hoursOfDay: string[] = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18' ,'19'];
  daysOfWeek: string[] = ['LUN.', 'MAR.', 'MER.', 'JEU.', 'VEN.']
  months: string[] = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août','Septembre', 'Octobre', 'Novembre', 'Décembre']
  today: Date = new Date();

  calendar: DayInfo[] = [];
  currentWeek: DayInfo[] = [];

  events: Event[] = [];
  eventsOdd: Event[] = [
    {name: "Mathématiques de base",time: "08h00 - 09h15",room: "J061",teacher: "Lemoine D.", day: 1, start: 8, end: 9, color: "red", margin: this.normalMargin},
    {name: "Mathématiques de base",time: "09h30 - 10h45",room: "J061",teacher: "Lemoine D.", day: 1, start: 9, end: 10, color: "red", margin: this.halfMargin},
    {name: "Mathématiques de base",time: "11h00 - 12h15",room: "J061",teacher: "Lemoine D.", day: 1, start: 11, end: 12, color: "red", margin: this.normalMargin},
    {name: "Conception logicielle",time: "13h45 - 15h00",room: "J061",teacher: "Gervais R.", day: 1, start: 14, end: 15, color: "green", margin: this.thirdQuarterMargin},
    {name: "Conception logicielle",time: "15h15 - 16h30",room: "J061",teacher: "Gervais R.", day: 1, start: 15, end: 16, color: "green", margin: this.firstQuarterMargin},
    {name: "Conception logicielle",time: "16h45 - 18h00",room: "J061",teacher: "Gervais R.", day: 1, start: 17, end: 18, color: "green", margin: this.thirdQuarterMargin},
    {name: "Sport",time: "08h00 - 10h00",room: "Gymnase",teacher: "HAREL Y.", day: 2, start: 8, end: 10, color: "yellow", margin: this.noMargin},
    {name: "Anglais - Groupe 1",time: "11h00 - 12h15",room: "B134",teacher: "Le Botlan-Marcato C.", day: 2, start: 11, end: 12, color: "blue", margin: this.normalMargin},
    {name: "Architecture distribuées",time: "13h45 - 15h00",room: "J061",teacher: "Coullon H.", day: 2, start: 14, end: 15, color: "green", margin: this.thirdQuarterMargin},
    {name: "Architecture distribuées",time: "15h15 - 16h30",room: "J061",teacher: "Coullon H.", day: 2, start: 15, end: 16, color: "green", margin: this.firstQuarterMargin},
    {name: "Architecture distribuées",time: "16h45 - 18h00",room: "J061",teacher: "Coullon H.", day: 2, start: 17, end: 18, color: "green", margin: this.thirdQuarterMargin},
    {name: "SSG",time: "08h00 - 09h15",room: "J061",teacher: "Lonceint R.", day: 3, start: 8, end: 9, color: "blue", margin: this.normalMargin},
    {name: "SSG",time: "09h30 - 10h45",room: "J061",teacher: "Lonceint R.", day: 3, start: 9, end: 10, color: "blue", margin: this.halfMargin},
    {name: "SSG",time: "11h00 - 12h15",room: "J061",teacher: "Lonceint R.", day: 3, start: 11, end: 12, color: "blue", margin: this.normalMargin},
    {name: "Conférences et témoinages",time: "13h45 - 15h00",room: "J061",teacher: "Dumas C.", day: 3, start: 14, end: 15, color: "purple", margin: this.thirdQuarterMargin},
    {name: "Conférences et témoinages",time: "15h15 - 16h30",room: "J061",teacher: "Dumas C.", day: 3, start: 15, end: 16, color: "purple", margin: this.firstQuarterMargin},
    {name: "Conférences et témoinages",time: "16h45 - 18h00",room: "J061",teacher: "Dumas C.", day: 3, start: 17, end: 18, color: "purple", margin: this.thirdQuarterMargin},
    {name: "Mathématiques discrètes",time: "08h00 - 09h15",room: "J061",teacher: "Noyé J.", day: 4, start: 8, end: 9, color: "red", margin: this.normalMargin},
    {name: "Mathématiques discrètes",time: "09h30 - 10h45",room: "J061",teacher: "Noyé J.", day: 4, start: 9, end: 10, color: "red", margin: this.halfMargin},
    {name: "Mathématiques discrètes",time: "11h00 - 12h15",room: "J061",teacher: "Noyé J.", day: 4, start: 11, end: 12, color: "red", margin: this.normalMargin},
    {name: "Anglais - Groupe 1", time: "9h30 - 10h45", room: "B134", teacher: "Le Botlan-Marcato C.", day: 5, start: 9, end: 10, color: "blue", margin: this.halfMargin},
    {name: "Anglais - Groupe 1", time: "11h00 - 12h15", room: "B134", teacher: "Le Botlan-Marcato C.", day: 5, start: 11, end: 12, color: "blue", margin: this.normalMargin},
    {name: "IHM", time: "13h45 - 15h00", room: "J061", teacher: "Dumas C.", day: 5, start: 14, end: 15, color: "green", margin: this.thirdQuarterMargin},
    {name: "IHM", time: "15h15 - 16h30", room: "J061", teacher: "Dumas C.", day: 5, start: 15, end: 16, color: "green", margin: this.firstQuarterMargin},
    {name: "IHM", time: "16h45 - 18h00", room: "J061", teacher: "Dumas C.", day: 5, start: 17, end: 18, color: "green", margin: this.thirdQuarterMargin},
  ];

  eventsEven: Event[] = [
    {name: "Qualité logicielle et méthodes agiles",time: "08h00 - 09h15",room: "J061",teacher: "Bartlett W.", day: 1, start: 8, end: 9, color: "green", margin: this.normalMargin},
    {name: "Qualité logicielle et méthodes agiles",time: "09h30 - 10h45",room: "J061",teacher: "Bartlett W.", day: 1, start: 9, end: 10, color: "green", margin: this.halfMargin},
    {name: "Qualité logicielle et méthodes agiles",time: "11h00 - 12h15",room: "J061",teacher: "Bartlett W.", day: 1, start: 11, end: 12, color: "green", margin: this.normalMargin},
    {name: "Qualité logicielle et méthodes agiles",time: "13h45 - 15h00",room: "J061",teacher: "Bartlett W.", day: 1, start: 14, end: 15, color: "green", margin: this.thirdQuarterMargin},
    {name: "Qualité logicielle et méthodes agiles",time: "15h15 - 16h30",room: "J061",teacher: "Bartlett W.", day: 1, start: 15, end: 16, color: "green", margin: this.firstQuarterMargin},
    {name: "Méthodes numériques",time: "08h00 - 09h15",room: "J061",teacher: "Jourdan F.", day: 2, start: 8, end: 9, color: "red", margin: this.normalMargin},
    {name: "Méthodes numériques",time: "09h30 - 10h45",room: "J061",teacher: "Jourdan F.", day: 2, start: 9, end: 10, color: "red", margin: this.halfMargin},
    {name: "Anglais - Groupe 1",time: "11h00 - 12h15",room: "B134",teacher: "Le Botlan-Marcato C.", day: 2, start: 11, end: 12, color: "blue", margin: this.normalMargin},
    {name: "Gestion des entreprises",time: "13h45 - 15h00",room: "J061",teacher: "Dugé Lamy l.", day: 2, start: 14, end: 15, color: "blue", margin: this.thirdQuarterMargin},
    {name: "Gestion des entreprises",time: "15h15 - 16h30",room: "J061",teacher: "Dugé Lamy l.", day: 2, start: 15, end: 16, color: "blue", margin: this.firstQuarterMargin},
    {name: "Gestion des entreprises",time: "16h45 - 18h00",room: "J061",teacher: "Dugé Lamy l.", day: 2, start: 17, end: 18, color: "blue", margin: this.thirdQuarterMargin},
    {name: "Qualité logicielle et méthodes agiles",time: "08h00 - 09h15",room: "J061",teacher: "Bartlett W.", day: 3, start: 8, end: 9, color: "green", margin: this.normalMargin},
    {name: "Qualité logicielle et méthodes agiles",time: "09h30 - 10h45",room: "J061",teacher: "Bartlett W.", day: 3, start: 9, end: 10, color: "green", margin: this.halfMargin},
    {name: "Qualité logicielle et méthodes agiles",time: "11h00 - 12h15",room: "J061",teacher: "Bartlett W.", day: 3, start: 11, end: 12, color: "green", margin: this.normalMargin},
    {name: "SPOC VSS",time: "13h45 - 15h00",room: "J061",teacher: "Pré P.", day: 3, start: 14, end: 15, color: "purple", margin: this.thirdQuarterMargin},
    {name: "SPOC VSS",time: "15h15 - 16h30",room: "J061",teacher: "Pré P.", day: 3, start: 15, end: 16, color: "purple", margin: this.firstQuarterMargin},
    {name: "SPOC VSS",time: "16h45 - 18h00",room: "J061",teacher: "Pré P.", day: 3, start: 17, end: 18, color: "purple", margin: this.thirdQuarterMargin},
    {name: "Sport",time: "08h00 - 10h00",room: "Gymnase",teacher: "HAREL Y.", day: 4, start: 8, end: 10, color: "yellow", margin: this.noMargin},
    {name: "Méthodes numériques",time: "08h00 - 09h15",room: "J061",teacher: "Jourdan F.", day: 4, start: 11, end: 12, color: "red", margin: this.normalMargin},
    {name: "Anglais - Groupe 1", time: "9h30 - 10h45", room: "B134", teacher: "Le Botlan-Marcato C.", day: 5, start: 9, end: 10, color: "blue", margin: this.halfMargin},
    {name: "Anglais - Groupe 1", time: "11h00 - 12h15", room: "B134", teacher: "Le Botlan-Marcato C.", day: 5, start: 11, end: 12, color: "blue", margin: this.normalMargin},
    {name: "Graphes et algorithmiques", time: "13h45 - 15h00", room: "J061", teacher: "Prud'homme C.", day: 5, start: 14, end: 15, color: "green", margin: this.thirdQuarterMargin},
    {name: "Graphes et algorithmiques", time: "15h15 - 16h30", room: "J061", teacher: "Prud'homme C.", day: 5, start: 15, end: 16, color: "green", margin: this.firstQuarterMargin},
  ];

  ngOnInit() {
    this.currentDay = new Date()
    this.currentMonthNumber = this.currentDay.getMonth();
    this.currentYear = this.currentDay.getFullYear();
    this.currentMonth = this.months[this.currentMonthNumber];
    this.fillCalendar(this.currentDay);
    this.events = this.eventsOdd;
    this.fillToFiveDays(this.currentDay);
    this.setCurrentTime();
    setInterval(() => {
      this.setCurrentTime();
    }, 60000);
  }

  setCurrentTime() {
    let date = new Date();
    this.currentHours = date.getHours();
    this.currentMinutes = this.minutesToPercentage(date.getMinutes());
  }

  fillCalendar(now: Date): void {
    this.currentWeek = [];

    const firstDayOfMonth = new Date(this.currentYear, this.currentMonthNumber, 1);
    const lastDayOfMonth = new Date(this.currentYear, this.currentMonthNumber + 1, 0);
    for (let day = firstDayOfMonth.getDate(); day <= lastDayOfMonth.getDate(); day++) {
      const date = new Date(this.currentYear, this.currentMonthNumber, day);
      const dayName = this.daysOfWeek[date.getDay()-1];
      const isCurrent = date.getDate() == this.today.getDate() && date.getMonth() == this.today.getMonth() && date.getFullYear() == this.today.getFullYear()
      if (dayName){
        this.calendar.push({name: dayName, date: day, month: this.currentMonthNumber, year: this.currentYear, isCurrent: isCurrent });
      }
    }
  }

  fillToFiveDays(day: Date): void {
    let week: DayInfo[] = [];
    const monday = this.getLastMonday(new Date(day.getFullYear(), day.getMonth(), day.getDate()));
    let month = this.months[monday.getMonth()];
    if (month !== this.currentMonth){
      this.currentMonth = month + " - " + this.currentMonth;
    }
    for (let i = 0; i < 5; i++) {
      week.push({
        name: this.daysOfWeek[monday.getDay() - 1],
        date: monday.getDate(),
        month: monday.getMonth(),
        year: monday.getFullYear(),
        isCurrent: monday.getDate() == this.today.getDate() && monday.getMonth() == this.today.getMonth() && monday.getFullYear() == this.today.getFullYear()
      });
      monday.setDate(monday.getDate() + 1);
    }
    this.currentWeek = week;
  }

  getLastMonday(now: Date): Date{
    let date = new Date(now);
    date.setDate(date.getDate() - date.getDay() + 1);
    return date;
  }

  setCalendarMonth(): void {
    const oldMonth = this.currentMonthNumber;
    this.currentMonth = this.months[this.currentDay.getMonth()];
    this.currentMonthNumber = this.currentDay.getMonth();
    this.currentYear = this.currentDay.getFullYear();
    if (oldMonth != this.currentMonthNumber) {
      this.fillCalendar(this.currentDay);
    }
    this.fillToFiveDays(this.currentDay);
  }

  goToLastWeek(){
    this.currentDay.setDate(this.currentDay.getDate() - 7);
    this.setCalendarMonth();
    if (this.events === this.eventsOdd){
      this.events = this.eventsEven;
    } else {
      this.events = this.eventsOdd;
    }
  }

  goToNextWeek(){
    this.currentDay.setDate(this.currentDay.getDate() + 7);
    this.setCalendarMonth();
    if (this.events === this.eventsOdd){
      this.events = this.eventsEven;
    } else {
      this.events = this.eventsOdd;
    }
  }

  goToToday(){
    let date = new Date();
    this.currentDay.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    this.setCalendarMonth();
  }

  minutesToPercentage(minutes: number): number {
    const validMinutes = Math.max(0, Math.min(59, minutes));
    return (validMinutes / 60) * 100;
  }

}
