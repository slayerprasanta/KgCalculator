function calculatePrice() {
  const pricePerKg = parseFloat(document.getElementById("pricePerKg").value);
  const weight = parseFloat(document.getElementById("weightInput").value);
  const unit = document.getElementById("unitSelect").value;

  if (isNaN(pricePerKg) || isNaN(weight)) {
    document.getElementById("result").textContent = "Enter valid numbers.";
    return;
  }

  // Convert weight to kg if needed
  const weightInKg = unit === "grams" ? weight / 1000 : weight;
  const total = pricePerKg * weightInKg;

  document.getElementById("result").textContent = `Total Price: ₹${total.toFixed(2)}`;
}

function clearInputs() {
  document.getElementById("pricePerKg").value = "";
  document.getElementById("weightInput").value = "";
  document.getElementById("result").textContent = "Total Price: ₹0.00";
  document.getElementById("unitSelect").value = "grams";
}
