const calculation = document.getElementById('loan-form');
calculation.addEventListener('submit',results);

function results(e){
  //console.log("Calculating.....")

  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');

  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const calculatedAmount = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value)/100/12;
  const calculatedPayment = parseFloat(years.value)*12;

  const x = Math.pow(1+calculatedInterest,calculatedPayment);
  const monthly = (calculatedAmount * x * calculatedInterest)/(x-1);

  if (isFinite(monthly)){

    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly*calculatedPayment).toFixed(2);
    totalInterest.value = ((monthly*calculatedPayment)-calculatedAmount).toFixed(2);
      }
  else{
    showErr(" Please Check your Entries..")
  }

  setTimeout(clearErr,2000);

e.preventDefault();
}

function showErr(msg){
  const errDiv = document.createElement('div');
  errDiv.className = 'alert alert-danger';
  errDiv.appendChild(document.createTextNode(msg));
  console.log(errDiv);

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  card.insertBefore(errDiv,heading);

}

function clearErr(){
  document.querySelector('.alert').remove();
}