/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Lucas Nguyen
 * Created on: Sep 2024
 * This program displays temperature in K.
*/

let currentTemperature: number
let inputTemperature: number
let inputTemperatureKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
currentTemperature = input.temperature()
inputTemperature = currentTemperature
    inputTemperatureKelvin = inputTemperature + 273.15
basic.clearScreen()
basic.showString('The temperature is: '+ inputTemperatureKelvin.toString() + ' K.')
})
