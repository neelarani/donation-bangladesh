function donationButtons(buttonId, inputFieldId, balanceId, donateAreaId) {
  document.getElementById(buttonId).addEventListener('click', function () {
    let inputCount = document.getElementById(inputFieldId).value;

    let inputValue = parseFloat(inputCount);

    if (!isNaN(inputCount) === false || inputValue <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }
    let donateMoney = parseFloat(
      document.getElementById('donate-money').innerText
    );

    if (inputValue > donateMoney) {
      alert('The donation amount is more than the balance.');
      const modal = document.getElementById('my_modal_1');
      modal.close();
      return;
    }

    let currentBalance = parseFloat(
      document.getElementById(balanceId).innerText
    );
    document.getElementById(balanceId).innerText = `${
      currentBalance + inputValue
    }`;

    let newDonateMoney = donateMoney - inputValue;
    document.getElementById('donate-money').innerText = newDonateMoney;

    let modal = document.getElementById('my_modal_1');
    modal.showModal();

    // history section
    function updateHistory() {
      let donationArea = document.getElementById(donateAreaId).innerText;
      let div = document.createElement('div');
      let info = document.getElementById('donation-data');

      let Months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];

      let weeks = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];

      let now = new Date();
      let monthName = Months[now.getMonth()];
      let dayName = weeks[now.getDay()];
      let yearName = now.getFullYear();
      let time = now.toLocaleTimeString();

      // let formattedTime = now.toLocaleDateString();

      div.innerHTML = `
      <div class="rounded-lg text-xl border-2 p-8 my-3 space-y-3 bg-[#F9F7F3]">
      ${inputValue} Taka is Donated for famine- ${donationArea}
  
      <p class="text-sm font-medium">${dayName}, ${monthName} ${yearName} Time: ${time} (Bangladesh Standard Time)</p>
      </div> `;

      info.appendChild(div);
    }
    updateHistory();
  });
}

donationButtons(
  'donate-btn-1',
  'input-field-1',
  'balance-1',
  'donate-noakhali'
);
donationButtons('donate-btn-2', 'input-field-2', 'balance-2', 'donate-feni');
donationButtons('donate-btn-3', 'input-field-3', 'balance-3', 'donate-protest');

// Donation and history buttons handle function
const donationBtn = document.getElementById('donation-button');
const historyButton = document.getElementById('history-button');
const mainContent = document.getElementById('donat-items');
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
// donationBtn.classList.add('bg-secondary');

donationBtn.addEventListener('click', showDonation);
historyButton.addEventListener('click', showHistory);
