document.addEventListener('DOMContentLoaded', () => {
  const dateTimeInput = document.getElementById('date-time');
  dateTimeInput.value = new Date().toLocaleString();

  document.getElementById('data-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const serialNo = document.getElementById('serial-no').value;
    const customerName = document.getElementById('customer-name').value;
    const orderNo = document.getElementById('order-no').value;
    const batterySerialNo = document.getElementById('battery-serial-no').value;
    const dateTime = document.getElementById('date-time').value;

    const data = {
      serialNo,
      customerName,
      orderNo,
      batterySerialNo,
      dateTime
    };

    console.log('Submitting data:', data);

    const response = await fetch('/api/push-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
  });
});
