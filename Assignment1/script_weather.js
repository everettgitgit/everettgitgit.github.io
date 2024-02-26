//  @name: Assignement1
//  @Course Code: SODV1201
//  @class: Software Development Diploma program.
//  @author: Ethan Wai

$(document).ready(function() {
    // Named function for Fahrenheit to Celsius conversion
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    // Named function for Celsius to Kelvin conversion
    function celsiusToKelvin(celsius) {
        return celsius + 273.15;
    }

    // Anonymous function for click event on Convert to Celsius button
    $('#toCelsius').click(function() {
        var fahrenheit = parseFloat($('#fahrenheitInput').val());
        var celsius = fahrenheitToCelsius(fahrenheit);
        $('#conversionResult').text(fahrenheit + "°F is " + celsius.toFixed(2) + "°C");
    });

    // Anonymous function for click event on Convert to Kelvin button
    $('#toKelvin').click(function() {
        var celsius = parseFloat($('#celsiusInput').val());
        var kelvin = celsiusToKelvin(celsius);
        $('#conversionResult').text(celsius + "°C is " + kelvin.toFixed(2) + " K");
    });
});
