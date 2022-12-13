// generate year
const generateYear=(start,end)=>{
  let years='';
  for(let year=start;year<=end;year++){
    years+=`<option value=${year}>${year}</option>`
  }
  return years;
  }
  let totalyears=generateYear(1970,2050)
  document.getElementById('year').innerHTML+=totalyears;
  // create table to show calender
  // thead part
  let tableHead=document.getElementById('table_headrow')
  const days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let thead='';
  for(const val of days){
   thead+=`<th>${val}</th>`
  }
  tableHead.innerHTML=thead
  // tbody part
  let calenderBody=document.getElementById('table_body');
  const currentDate=new Date();
  let currentYear=currentDate.getFullYear();
  let currentMonth=currentDate.getMonth();
  let selectYear=document.getElementById('year');
  let selectMonth=document.getElementById('month');
  // month selector
  function monthhandler(){
  if(selectMonth.value==='Select Month')
  return;
  currentMonth=parseInt(selectMonth.value);
  }
  // year selector
  function yearhandler(){
    if(selectYear.value==='Select Year')
    return;
    currentYear=parseInt(selectYear.value);
    }
  
  let selectDate=currentDate.getDate();
  showCalender(currentYear,currentMonth);
  // date selector
  function enterDate(){
    selectDate=document.getElementById('date').value;
    if(selectDate){
    if((parseInt(selectDate))<=0 || (parseInt(selectDate)>=32))
   return alert('Enter valid  date');
   selectDate=parseInt(selectDate);
   showCalender(currentYear,currentMonth)
    }
  }
  //showing calender
  function showCalender(year,month){
    let firstDay=(new Date(currentYear,currentMonth)).getDay();
    let tbody=document.getElementById('table_body');
    tbody.innerHTML='';
    let date=1;
    for(let i=0;i<6;i++){
      let row=document.createElement('tr');
      for(let j=0;j<7;j++){
        if((i===0 && j<firstDay)||(date>daysinMonth(month,year))){
          console.log(daysinMonth(month,year))
          let cell=document.createElement('td');
          row.appendChild(cell);
        }
        else{
          let cell=document.createElement('td');
          cell.setAttribute('data_date',date);
          cell.setAttribute('data_month',month+1);
          cell.setAttribute('data_year',year);
          cell.setAttribute('data_month_name',months[month]);
          cell.className='date_picker';
          let cellChild=document.createElement('span');
          cellChild.innerHTML=date;
          cell.appendChild(cellChild);
          if(date===parseInt(selectDate)){
            cell.className='date_picker selected';
          }
          row.appendChild(cell);
          date++;
        }
      }
      tbody.appendChild(row);
    }
  }
  function daysinMonth(month,year){
    if(year%4===0){
      if(month===0|| month===2|| month===4 || month===6|| month===7|| month===9|| month===11)
      return 31;
      if(month==1)
      return 29;
      return 30;
    }
  else{
    if(month===0|| month===2|| month===4 || month===6|| month===7|| month===9|| month===11)
      return 31;
      if(month==1)
      return 28;
      return 30;
  }
    
  }
  
  
  
  
  