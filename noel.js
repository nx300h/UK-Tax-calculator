function calculateTax() {
    const salary = document.getElementById("salary").value;
    const allowance = document.getElementById("allowance").value;
    const taxableIncome = Math.max(0, salary - allowance);
  
    let tax = 0;
    if (taxableIncome > 0 && taxableIncome <= 37700) {
      tax = taxableIncome * 0.2;
    } else if (taxableIncome > 37700 && taxableIncome <= 150000) {
      tax = 7540 + (taxableIncome - 37700) * 0.4;
    } else if (taxableIncome > 150000) {
      tax = 45740 + (taxableIncome - 150000) * 0.45;
    }
  
    const income = salary - allowance;

    const ni = Math.max(0, (salary - 9568) * 0.12 + Math.max(0, salary - 50270) * 0.02);
  
    const net = salary - tax - ni;

    const monthly = net / 12;
  
    document.getElementById("income").value = income.toFixed(2);
    document.getElementById("tax").value = tax.toFixed(2);
    document.getElementById("ni").value = ni.toFixed(2);
    document.getElementById("net").value = net.toFixed(2);
    document.getElementById("monthly").value = monthly.toFixed(2);
  }
  

