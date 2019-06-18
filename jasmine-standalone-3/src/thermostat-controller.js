$(document).ready(function(){

  var thermostat = new Thermostat();
  $('#temp-display').text(thermostat.temperature());

  $(".increase").on('click', function(){
    thermostat.upTemperature();
    $('#temp-display').text(thermostat.temperature());
  });

  $(".decrease").on('click', function(){
    thermostat.downTemperature();
    $('#temp-display').text(thermostat.temperature());
  });

  $(".reset").on("click", function() {
    thermostat.resetTemperature();
    $('#temp-display').text(thermostat.temperature());
  });

  $(".colorful-switch__checkbox").on('click', function() {
    thermostat.switchPowerSaving();
  })

});
