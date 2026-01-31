(function () {
  'use strict';

  // Contact form – show success message, no backend
  var form = document.getElementById('contact-form');
  var formSuccess = document.getElementById('form-success');

  if (form && formSuccess) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.hidden = true;
      formSuccess.hidden = false;
    });
  }
})();
