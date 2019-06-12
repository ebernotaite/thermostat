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
  return this._temperature -= 1;
};
