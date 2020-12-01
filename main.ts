/** 

Chraief

Mehdi

Calculatrice


 */
/** conding utf-8 */
let loop = 0
let a = 0
let b = 0
let number = 0
let somme = a + b
basic.showNumber(somme)
while (loop == 0) {
    basic.showNumber(number)
    input.onButtonPressed(Button.A, function on_button_pressed_a() {
        
        number -= 1
    })
    input.onButtonPressed(Button.B, function on_button_pressed_b() {
        
        number += 1
    })
    input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
        let a: number;
        let number: number;
        let b: number;
        let i = 0
        if (i == 0) {
            a = number
            i += 1
            number = 0
        }
        
        if (i == 1) {
            b = number
            basic.showNumber(somme)
            pause(1000)
            number = 0
            b = 0
            a = 0
            i = 0
        }
        
    })
}
