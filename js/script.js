document.getElementById('donate-btn').addEventListener('click', function () {
  const inputField = parseFloat(document.getElementById('input-field').value);

  if (isNaN(inputField) || inputField <= 0) {
    alert('Please enter a valid donation amount.');
    return;
  }

  const donateMoney = parseFloat(
    document.getElementById('donate-money').innerText
  );

  if (inputField > donateMoney) {
    alert('The donation amount is more then the balance.');
  }

  document.getElementById('balance').innerText = `${inputField}`;

  const newDonateMoney = donateMoney - inputField;
  const updateMoney = (document.getElementById('donate-money').innerText =
    newDonateMoney);

  const modal = document.getElementById('my_modal_1');
  modal.showModal();
});
