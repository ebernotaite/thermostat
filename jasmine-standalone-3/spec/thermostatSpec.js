describe("Thermostat",function() {

  it("should start at 20 degrees", function() {
    thermostat = new Thermostat();
    result = thermostat.temperature();
    expect(result).toEqual(20);
  });

} );
