
function calculateEmi(principalAmount,rateOfannulInterest,durationOfLoanInMonths){
// event.preventDefault();

    // let principalAmount = document.getElementById('principalAmount').value;
    // let rateOfannulInterest = document.getElementById('rateOfannulInterest').value;
    // let durationOfLoanInMonths = document.getElementById('durationOfLoanInMonths').value;

    let checkV = document.getElementById("result");

    let rateOfInterestOnMonthlyBasis = rateOfannulInterest/12/100
    let numeratorValue = (1+rateOfInterestOnMonthlyBasis)**durationOfLoanInMonths;
    let denominatorValue = (((1+rateOfInterestOnMonthlyBasis)**durationOfLoanInMonths)-1);
    let calValue = numeratorValue/denominatorValue;
    let EMI = principalAmount*rateOfInterestOnMonthlyBasis*calValue
    let totalAmounttpbePaid = EMI*durationOfLoanInMonths;


    checkV.innerHTML = `you have to pay ${EMI}
    amount every month to repay your entire loan amount in ${Number(durationOfLoanInMonths)} months with ${Number(rateOfannulInterest)}% of annual interest rate
    and the total amount to be paid will be ${totalAmounttpbePaid}`;
}
