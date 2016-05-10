$(document).ready(function() {
  console.log('client side!');
  $('#get-data').on('click', getData);

  $('#post-data').on('click', postData);

  function postData() {
    event.preventDefault();

    var values = {};
    $.each($('#inputForm').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });

    $.ajax({
      type: 'POST',
      url: '/data',
      data: values,
      success: function(response) {
        console.log(response);
      }
    })
  }

  function getData() {
    $.ajax({
      type: 'GET',
      url: '/data',
      success: function(data) {
        console.log(data);
      }
    });
  }
});
