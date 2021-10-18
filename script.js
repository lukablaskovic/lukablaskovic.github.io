function contactMe(params) {
  let contactName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let inquiry = document.getElementById("inquiry").value;

  if (contactName == "") {
    alert("Molimo unesite ime i prezime.");
    return false;
  }

  if (email == "" || !email.includes("@")) {
    alert("Molimo unesite ispravan e-mail.");
    return false;
  }

  if (inquiry == "") {
    alert("Molimo unesite vaš upit.");
    return false;
  }

  var tempParams = {
    from_name: contactName,
    message: inquiry,
    from_email: email,
  };

  emailjs
    .send("service_zbc9jzl", "template_ibdvrhp", tempParams)
    .then(function (res) {
      console.log("E-mail uspješno poslan!", res.status);
    });
  document.getElementById("alertPrompt").style.display = "block";
  asyncWait(reloadPage, 2);
}

function reloadPage() {
  location.reload();
  console.log("page reloaded");
}

function delay(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
}

async function asyncWait(func, waitSeconds) {
  await delay(waitSeconds);
  func();
}
