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
    for(i = 0; i < 10; i++ ) {
      thermostat.downTemperature();
    }
    expect(function() {thermostat.downTemperature();}).toThrow(new Error("Think of the chafing")) 
  }); 

});
