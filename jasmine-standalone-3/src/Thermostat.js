function Thermostat() {
  this._temperature = 20;
  this._powerSaving = true;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.upTemperature = function() {
  if(this._powerSaving) {
    if(this._temperature >= 25) {
      throw new Error("Think of the polar bears")
    } else {
      this._temperature += 1;
    };
  } else {
    if (this._temperature >= 32) {
      throw new Error("Think of the orphans")
    } else {
      this._temperature += 1;
    };
  };

};

Thermostat.prototype.downTemperature = function() {
  if (this._temperature <= 10){
    throw new Error("Think of the chafing");
  } else {
  this._temperature -= 1;};
};

Thermostat.prototype.switchPowerSaving= function() {
  this._powerSaving = !this._powerSaving;
};
