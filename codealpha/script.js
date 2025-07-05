document.getElementById("ageForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const dobValue = document.getElementById("dob").value;
    if (!dobValue) {
      alert("Please enter your date of birth.");
      return;
    }
  
    const dob = new Date(dobValue);
    const today = new Date();
  
    if (dob > today) {
      alert("Date of birth cannot be in the future.");
      return;
    }
  
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();
  
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    // Display in boxes
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
  });
  
  // ✅ Clear Button Functionality
  document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("dob").value = "";
    document.getElementById("years").textContent = "0";
    document.getElementById("months").textContent = "0";
    document.getElementById("days").textContent = "0";
  });
  