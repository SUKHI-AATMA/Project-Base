var VALIDATIONS = {
  validateEmail: function(input) {
    var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.test(input);
  },
  validateTeleNumber: function(input) {

    var phoneno = /^\d{10}$/;
    return phoneno.test(input);
  },
  validateName: function(input) {

    var name = /^[a-zA-Z .]{2,30}$/;
    return name.test(input);
  },
  validatePassword: function(input) {

    var password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return password.test(input);
  },
  validateConfirmPassword: function(input1, input2) {

    return (input1 == input2);
  },
  validateNumber: function(input) {

    var num = /^ *[0-9]+ *$/;
    return num.test(input);
  },
  validatePAN: function(input) {

    var pan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    return pan.test(input);
  }

}

var DEFAULTVARS = {
  winWidth: $(window).width(),
  winWidthOuter: $(window).outerWidth(),
  winHei: $(window).height(),
  mobBreakpoint: 768,
  tabBreakPoint: 990,
};