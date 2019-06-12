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

} );
