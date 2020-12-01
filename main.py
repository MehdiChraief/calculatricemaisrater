"""

Chraief

Mehdi

Calculatrice

"""
"""

conding utf-8

"""
loop = 0
a = 0
b = 0
number = 0
somme = a + b
basic.show_number(somme)
while loop == 0:
    basic.show_number(number)
    
    def on_button_pressed_a():
        global number
        number -= 1
    input.on_button_pressed(Button.A, on_button_pressed_a)
    
    
    def on_button_pressed_b():
        global number
        number += 1
    input.on_button_pressed(Button.B, on_button_pressed_b)
    
    
    def on_button_pressed_ab():
        i = 0
        if i == 0:
            a = number
            i += 1
            number = 0
        if i == 1:
            b = number
            basic.show_number(somme)
            pause(1000)
            number = 0
            b = 0
            a = 0
            i = 0
    input.on_button_pressed(Button.AB, on_button_pressed_ab)