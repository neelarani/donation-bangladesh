// function toggleHistory() {
//   const mainContent = document.getElementById('main-content');
//   const donationData = document.getElementById('donation-data');
//   if (donationData.classList.contains('hidden')) {
//     donationData.classList.remove('hidden');
//     mainContent.classList.add('hidden');
//   } else {
//     donationData.classList.add('hidden');
//     mainContent.classList.remove('hidden');
//   }
// }

// function addDonation(donationId, inputAmount) {
//   const donatationData = document.getElementById('donation-data');

//   const createElement = document.createElement('div');
//   const donateLocation = document.getElementById(donationId).innerText;

//   createElement.className = 'border-2 shadow-sm p-9 space-y-4 rounded-lg';
//   createElement.innerHTML = `
//     <h3>${donateLocation}</h3>
//         <p class="text-lg font-medium text-text ">${inputAmount}<span class="pl-2">BDT</span> </p>
//         <p class="text-lg font-medium text-text">${new Date().toLocaleDateString()}</p>
//   `;
//   donatationData.appendChild(createElement);

//   toggleHistory();
// }

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

    // addDonation('donate-noakhali', inputAmount);
    // addDonation('donate-feni', inputAmount);
    // addDonation('donate-protest', inputAmount);
  });
}

donationButtons('donate-btn-1', 'input-field-1', 'balance-1');
donationButtons('donate-btn-2', 'input-field-2', 'balance-2');
donationButtons('donate-btn-3', 'input-field-3', 'balance-3');

// Donation and history buttons handle function
const donationBtn = document.getElementById('donation-button');
const historyButton = document.getElementById('history-button');
const mainContent = document.getElementById('main-content');
const donationData = document.getElementById('donation-data');

function showDonation() {
  mainContent.classList.remove('hidden');
  donationData.classList.add('hidden');

  donationBtn.classList.add('bg-secondary');
  historyButton.classList.remove('bg-secondary');

  historyButton.classList.add('bg-gray-300');
  donationBtn.classList.remove('bg-gray-300');
}

function showHistory() {
  mainContent.classList.add('hidden');
  donationData.classList.remove('hidden');

  historyButton.classList.add('bg-secondary');
  donationBtn.classList.remove('bg-secondary');

  donationBtn.classList.add('bg-gray-300');
  historyButton.classList.remove('bg-gray-300');
}
donationBtn.classList.add('bg-secondary');

donationBtn.addEventListener('click', showDonation);
historyButton.addEventListener('click', showHistory);
