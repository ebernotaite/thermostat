function Thermostat() {
  this._temperature = 20;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.upTemperature = function() {
  return this._temperature += 1;
};

Thermostat.prototype.downTemperature = function() {
  if (this._temperature <= 10){
    throw new Error("Think of the chafing");
  } else {
  this._temperature -= 1;};
};
