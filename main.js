function calculate()
{
    var loan = document.getElementById('amount').value;
    var  month = document.getElementById('months').value;
    var  rate = document.getElementById('interest').value;
       let calculation = ((loan/month)+(loan*rate)/(100*month));
        document.getElementById("result").innerHTML = calculation.toFixed(2); 
}