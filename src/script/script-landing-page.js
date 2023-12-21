$(document).ready(function () {
  let rotationDegree = 0;

  function rotateImage() {
    rotationDegree += 360;
    $("#rotating-image").css("transform", "rotate(" + rotationDegree + "deg)");
  }

  function togglePassword() {
    var passwordInput = $("#password");
    var showPasswordCheckbox = $("#showPassword");

    if (showPasswordCheckbox.prop("checked")) {
      passwordInput.attr("type", "text");
    } else {
      passwordInput.attr("type", "password");
    }
  }

  const capsLockInfo = $("#capsLockInfo");

  function checkCapsLock(event) {
    capsLockInfo.css(
      "display",
      event.originalEvent.getModifierState("CapsLock") ? "block" : "none"
    );
  }
  $(document).on("keydown keyup", checkCapsLock);

  function validateUsername() {
    const username = $("#username").val();
    const usernameError = $("#errorMessage");

    if ($.trim(username) === "") {
      usernameError.html("Please fill username correctly.<br>");
    } else {
      usernameError.html("");
    }
  }

  function validatePassword() {
    const username = $("#username").val();
    const usernameError = $("#errorMessage");
    const password = $("#password").val();
    const passwordError = $("#errorMessage2");

    if ($.trim(password) === "") {
      passwordError.html("Please fill password correctly.<br>");
    } else {
      passwordError.html("");
    }

    if (password.length > 1 && password.length < 4) {
      passwordError.html("Max 4 characters");
    }

    if (usernameError.html() === "" && passwordError.html() === "") {
      $.ajax({
        url: "https://dummyjson.com/auth/login",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
          username: username,
          password: password,
        }),
        statusCode: {
          200: () => {
            alert("Login Success!");
            window.location.href = "about.html";
          },
        },
        error: () => {
          alert("Login Failed! username or password might be wrong");
          username.val("");
          password.val("");
        },
      });
    }
  }

  $("#rotating-image").click(rotateImage);
  $("#showPassword").change(togglePassword);
  $("#username").blur(validateUsername);
  $("#password").blur(validatePassword);
  $("#loginForm").submit(validateLogin);
  //   $("#loginform").submit(validateLogin);
});

function validatePasswordRegex() {
  const password = document.getElementById("password").value;
  let validationResult = "";

  validationResult += "Password need to have at least ";

  const hasUppercase = /[A-Z]/.test(password);
  if (!hasUppercase && password.length >= 4) {
    validationResult += "one uppercase, ";
  }
  const hasLowercase = /[a-z]/.test(password);
  if (!hasLowercase && password.length >= 4) {
    validationResult += "one lowercase, ";
  }
  const hasDigit = /\d/.test(password);
  if (!hasDigit && password.length >= 4) {
    validationResult += "one digit, ";
  }
  //   const hasSymbol = /[@$!%*?&]/.test(password);
  //   if (!hasSymbol && password.length >= 4) {
  //     validationResult += "one symbol.";
  //   }
  if (
    password.length >= 4 &&
    hasUppercase &&
    hasLowercase &&
    hasDigit
    // hasSymbol
  ) {
    // location.replace("about.html");
  }
  document.getElementById("validationResult").innerHTML = validationResult;
}

function validateLogin() {
  // validateUsername();
  // validatePassword();
  validatePasswordRegex();
}
