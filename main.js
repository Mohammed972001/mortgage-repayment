

function handelCalculate() {
    let Amont = parseFloat(document.getElementById("Amont").value);
    let MortgageTerm = parseInt(document.getElementById("Mortgage-term").value);
    let InterestRate = parseFloat(document.getElementById("InterestRate").value);
    let mortgageType = document.querySelector('input[name="query-type"]:checked').value;

    let monthlyRepayment, totalRepayment;

    if (mortgageType === 'repayment') {
        let monthlyInterestRate = InterestRate / 100 / 12;
        let numberOfPayments = MortgageTerm * 12;
        monthlyRepayment = Amont * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
        totalRepayment = monthlyRepayment * numberOfPayments;
    } else if (mortgageType === 'Interest Only') {
        monthlyRepayment = (Amont * InterestRate) / 100 / 12;
        totalRepayment = (Amont * InterestRate) / 100 * MortgageTerm;
    }

    document.querySelector('.leftSection').innerHTML = `
    <div class="results-container">
         <h2>Your results</h2>
         <p class="results-description">
         Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
        <div class="results-content">
             <h3>Your monthly repayments</h3>
             <p class="result-value">£${monthlyRepayment.toFixed(2)}</p>
      </div>
      <div class="results-content">
             <h3>Total you'll repay over the term</h3>
             <p class="result-total">£${totalRepayment.toFixed(2)}</p>
        </div>
    </div>
`;

}


const originalLeftSection = document.querySelector('.leftSection').cloneNode(true);

function handelClearbtn() {

    document.getElementById("Amont").value = "";
    document.getElementById("Mortgage-term").value = "";
    document.getElementById("InterestRate").value = "";
    document.querySelector('input[name="query-type"]:checked').checked = false;

    document.querySelector('.leftSection').replaceWith(originalLeftSection.cloneNode(true));
}
