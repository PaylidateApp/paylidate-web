import { date } from 'quasar'

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const days = ["1st", "2nd", "3rd", "th"];

export const dateMixin = {
  methods: {
    slashSeparated(timeStamp) {
      return date.formatDate(timeStamp, 'DD/MM/YY')
    },
    getMonthShort(timeStamp) {
      return date.formatDate(timeStamp, 'MMM')
    },
    getMonthName(index) {
      return months[index]
    },
    dDay(data) {
      return (
        this.wordFormat(data) +
        " " +
        this.monthFormat(data) +
        ", " +
        this.yearFormat(data)
      );
    },

    monthFormat(data) {
      if (data.slice(5, 6) == "0") {
        return months[data.slice(6, 7) - 1];
      } else {
        return months[data.slice(5, 7) - 1];
      }
    },

    yearFormat(data) {
      return data.slice(0, 4);
    },

    wordFormat(data) {
      if (data.slice(8, 9) == "0") {
        return this.dayFormat(data);
      }
      if (data.slice(8, 9) == "1") {
        return data.slice(8, 9) + data.slice(9, 10) + days[3];
      } else {
        return data.slice(8, 9) + this.dayFormat(data);
      }
    },

    dayFormat(data) {
      if (data.slice(9, 10) == "1") {
        return days[data.slice(9, 10) - 1];
      }
      if (data.slice(9, 10) == "2") {
        return days[data.slice(9, 10) - 1];
      }
      if (data.slice(9, 10) == "3") {
        return days[data.slice(9, 10) - 1];
      } else {
        return data.slice(9, 10) + days[3];
      }
    }
  }
};
