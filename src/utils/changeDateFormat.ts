const changeDateFormat = (datetime: string) => {
  let formatDatetime;

  var newDatetime = new Date(datetime);

  formatDatetime = `${newDatetime.getDate()}/${
    Number(newDatetime.getMonth()) + 1
  }/${newDatetime.getFullYear()} ${newDatetime.getHours()}:${newDatetime.getMinutes()}`;

  return formatDatetime;
};

export default changeDateFormat;
