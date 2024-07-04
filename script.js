const prices = {
  H: {
    item1: 200000,
    item2: 150000,
    item3: 200000,
    item4: 150000,
    item5: 70000,
    item6: 80000,
    item7: 150000,
    item8: 400,
    item9: 450
  },
  S: {
    item1: 160000,
    item2: 100000,
    item3: 150000,
    item4: 100000,
    item5: 50000,
    item6: 50000,
    item7: 125000,
    item8: 300,
    item9: 350
  }
};

function calculateTotal() {
  const prefix = document.getElementById('prefixSelect').value;
  const item1Quantity = parseInt(document.getElementById('item1').value);
  const item2Quantity = parseInt(document.getElementById('item2').value);
  const item3Quantity = parseInt(document.getElementById('item3').value);
  const item4Quantity = parseInt(document.getElementById('item4').value);
  const item5Quantity = parseInt(document.getElementById('item5').value);
  const item6Quantity = parseInt(document.getElementById('item6').value);
  const item7Quantity = parseInt(document.getElementById('item7').value);
  const item8Quantity = parseInt(document.getElementById('item8').value);
  const item9Quantity = parseInt(document.getElementById('item9').value);

  const item1Price = prices[prefix].item1;
  const item2Price = prices[prefix].item2;
  const item3Price = prices[prefix].item3;
  const item4Price = prices[prefix].item4;
  const item5Price = prices[prefix].item5;
  const item6Price = prices[prefix].item6;
  const item7Price = prices[prefix].item7;
  const item8Price = prices[prefix].item8;
  const item9Price = prices[prefix].item9;

  let total = (item1Quantity * item1Price) + (item2Quantity * item2Price) + (item3Quantity * item3Price) + (item4Quantity * item4Price) + (item5Quantity * item5Price) + (item6Quantity * item6Price) + (item7Quantity * item7Price) + (item8Quantity * item8Price) + (item9Quantity * item9Price);

  document.getElementById('total').innerHTML = `${total.toLocaleString()} $`;
}