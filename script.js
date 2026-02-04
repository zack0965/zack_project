function calculateFuel() {
  const distance = document.getElementById("distance").value;
  const price = document.getElementById("price").value;
  const mileage = document.getElementById("mileage").value;
  const result = document.getElementById("result");

  if (distance === "" || price === "" || mileage === "") {
    result.innerHTML = "❌ Fadlan buuxi dhammaan meelaha bannaan!";
    result.style.color = "red";
    return;
  }

  if (Number(distance) <= 0 || Number(price) <= 0 || Number(mileage) <= 0) {
    result.innerHTML = "❌  Qiime sax ah geli";
    result.style.color = "red";
    return;
  }

  const fuelNeeded = distance / mileage;
  const totalCost = fuelNeeded * price;

  result.style.color = "green";
  result.innerHTML = `Fuel Needed: ${fuelNeeded.toFixed(2)} L <br> Total Cost: $${totalCost.toFixed(2)}`;
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const feedback = document.getElementById('contact-result');
        
        feedback.innerHTML = `✅ Mahadsanid ${name}, farriintaada waa la diray!`;
        feedback.style.color = "green";
        contactForm.reset();
    });
}