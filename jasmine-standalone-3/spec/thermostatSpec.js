describe("Thermostat", function() {

  it("should start at 20 degrees", function() {
    thermostat = new Thermostat();
    result = thermostat.temperature();
    expect(result).toEqual(20);
  });

  it("should be able to increase temperature", function() {
    thermostat = new Thermostat();
    thermostat.upTemperature();
    result = thermostat.temperature();
    expect(result).toEqual(21);
  });

  it("should be able to increase temperature", function() {
    thermostat = new Thermostat();
    thermostat.downTemperature();
    result = thermostat.temperature();
    expect(result).toEqual(19);
  });

  it("should have a minimum temperature of 10 degrees", function() {
    thermostat = new Thermostat();
    for(i = 0; i < 10; i++ ) {
      thermostat.downTemperature();
    }
    expect(function() {thermostat.downTemperature();}).toThrow(new Error("Think of the chafing")) 
  }); 

  it("should have max temperature of 25 degrees when power saving mode is on", function() {
    thermostat = new Thermostat();
    for(i = 0; i < 5; i++) {
      thermostat.upTemperature();
    }
    expect(function() {thermostat.upTemperature();}).toThrow(new Error("Think of the polar bears"))
  });

  it("should have max temperature of 32 degrees when power saving mode is off", function() {
    thermostat = new Thermostat();
    thermostat.switchPowerSaving();
    for(i = 0; i < 12; i++) {
      thermostat.upTemperature();
    }
    expect(function() {thermostat.upTemperature();}).toThrow(new Error("Think of the orphans"))
  });

});
