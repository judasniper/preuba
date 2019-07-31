
//hora entra
$('.clockpicker').clockpicker()
  .find('input').change(function(){
    console.log(this.value);
  });
var input = $('#horaEntra').clockpicker({
  placement: 'bottom',
  align: 'left',
  autoclose: true,
  'default': 'now'
});

// Manually toggle to the minutes view
$('#check-minutes').click(function(e){
  // Have to stop propagation here
  e.stopPropagation();
  input.clockpicker('show')
      .clockpicker('toggleView', 'minutes');
});
if (/mobile/i.test(navigator.userAgent)) {
  $('input').prop('readOnly', true);
}


//hora digita
$('.clockpicker').clockpicker()
  .find('input').change(function(){
    console.log(this.value);
  });
var input = $('#single-input2').clockpicker({
  placement: 'bottom',
  align: 'left',
  autoclose: true,
  'default': 'now'
});

// Manually toggle to the minutes view
$('#check-minutes').click(function(e){
  // Have to stop propagation here
  e.stopPropagation();
  input.clockpicker('show')
      .clockpicker('toggleView', 'minutes');
});
if (/mobile/i.test(navigator.userAgent)) {
  $('input').prop('readOnly', true);
}

//hora Acopio
$('.clockpicker').clockpicker()
  .find('input').change(function(){
    console.log(this.value);
  });
var input = $('#single-input3').clockpicker({
  placement: 'bottom',
  align: 'left',
  autoclose: true,
  'default': 'now'
});

// Manually toggle to the minutes view
$('#check-minutes').click(function(e){
  // Have to stop propagation here
  e.stopPropagation();
  input.clockpicker('show')
      .clockpicker('toggleView', 'minutes');
});
if (/mobile/i.test(navigator.userAgent)) {
  $('input').prop('readOnly', true);
}

//hora Revision final
$('.clockpicker').clockpicker()
  .find('input').change(function(){
    console.log(this.value);
  });
var input = $('#single-input4').clockpicker({
  placement: 'bottom',
  align: 'left',
  autoclose: true,
  'default': 'now'
});

// Manually toggle to the minutes view
$('#check-minutes').click(function(e){
  // Have to stop propagation here
  e.stopPropagation();
  input.clockpicker('show')
      .clockpicker('toggleView', 'minutes');
});
if (/mobile/i.test(navigator.userAgent)) {
  $('input').prop('readOnly', true);
}



