$(document).ready(function(){
  $("#submitButton").click(function(){
    var userId = $("#userName").val();
    var password = $("#password").val();
    var reason = "User ID cannot include special character(s)";
    function test(str){
      return /\d/.test(str);
    }
    if (userId === password){
      alert("User ID cannot be same as password.");
    };
    if (userId.length < 6){
      alert("User ID must be at least 6 characters.");
    };
    if (password.length < 6){
      alert("Password must be at least 6 characters.")
    };
    if (userId.includes("$") || userId.includes("!") || userId.includes("#")){
      if (userId.includes("$")){
        reason = reason + "$"
      }
      if (userId.includes("#")){
        reason = reason + "#"
      }
      if (userId.includes("!")){
        reason = reason + "!"
      } alert(reason);
    };
    if (password.includes("!") || password.includes("#") || password.includes("$")){
    }
    else {
      alert("Password must include at least one of the following: !, $, or #");
    };
    if (password.toUpperCase() === "password".toUpperCase()){
      alert("Password cannot be 'password.'")
    };
    if (test(password) != true){
      alert("Password must contain a number.")
    };
    if (password.toUpperCase() === password || password.toLowerCase() === password){
      alert ("Password must contain an uppercase and a lowercase letter.")
    }
    if(!((userId.length < 6) || (password.length < 6) || (userId === password) ||
      (test(password) != true) || (password.toUpperCase() === password) ||
      (password.toLowerCase() === password) || (userId.includes("$") ||
      userId.includes("!") || userId.includes("#")) ||
      !(password.includes("!") || password.includes("#") || password.includes("$")) ||
      (password.toUpperCase() === "password".toUpperCase()))){
      window.location.href='file:///Users/learn/Desktop/passwordJQ/cargame.html';
    }
  });
});
