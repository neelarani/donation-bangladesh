function donationButtons(buttonId, inputFieldId, balanceId) {
  document.getElementById(buttonId).addEventListener('click', function () {
    const inputAmount = parseFloat(document.getElementById(inputFieldId).value);

    if (isNaN(inputAmount) || inputAmount <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }

    const donateMoney = parseFloat(
      document.getElementById('donate-money').innerText
    );

    if (inputAmount > donateMoney) {
      alert('The donation amount is more than the balance.');
      const modal = document.getElementById('my_modal_1');
      modal.close();
      return;
    }

    const currentBalance = parseFloat(
      document.getElementById(balanceId).innerText
    );
    document.getElementById(balanceId).innerText = `${
      currentBalance + inputAmount
    }`;

    const newDonateMoney = donateMoney - inputAmount;
    document.getElementById('donate-money').innerText = newDonateMoney;

    const modal = document.getElementById('my_modal_1');
    modal.showModal();
  });
}

donationButtons('donate-btn-1', 'input-field-1', 'balance-1');
donationButtons('donate-btn-2', 'input-field-2', 'balance-2');
donationButtons('donate-btn-3', 'input-field-3', 'balance-3');

// **********
const donationButton = document.getElementById('donation-button');
