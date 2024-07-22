document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("passwordError").textContent = '';
    const password = document.getElementById("password").value;
    let ifValid = true;
    const passwordCondition= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{5,}$/;

    if (!passwordCondition.test(password)) {
      document.getElementById("passwordError").textContent ="Invalid PassCode.Please try again";
      ifValid = false;
    }

    //console.log(ifValid);
  
    if (ifValid) {
        window.location.href = 'thanksnote.html';
      }
  });
  