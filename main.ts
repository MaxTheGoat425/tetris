input.onButtonPressed(Button.A, function () {
    if (px > 0) {
        px += -1
    }
})
function checkBelow () {
    blocked = 0
    if (px == 0) {
        if (py == 0) {
            if (b6 == 1) {
                blocked = 1
            }
        }
    } else if (py == 1) {
        if (b11 == 1) {
            blocked = 1
        }
    } else if (py == 2) {
        if (b16 == 1) {
            blocked = 1
        }
    } else if (py == 3) {
        if (b21 == 1) {
            blocked = 1
        }
    } else if (px == 1) {
        if (py == 0) {
            if (b7 == 1) {
                blocked = 1
            }
        } else if (py == 1) {
            if (b12 == 1) {
                blocked = 1
            }
        } else if (py == 2) {
            if (b17 == 1) {
                blocked = 1
            }
        } else if (py == 3) {
            if (b22 == 1) {
                blocked = 1
            }
        }
    } else if (false) {
        if (py == 0) {
            if (b8 == 1) {
                blocked = 1
            }
        } else if (py == 1) {
            if (b13 == 1) {
                blocked = 1
            }
        } else if (py == 2) {
            if (b18 == 1) {
                blocked = 1
            }
        } else if (py == 3) {
            if (b23 == 1) {
                blocked = 1
            }
        }
    } else if (false) {
        if (py == 0) {
            if (b9 == 1) {
                blocked = 1
            }
        } else if (py == 1) {
            if (b14 == 1) {
                blocked = 1
            }
        } else if (py == 2) {
            if (b19 == 1) {
                blocked = 1
            }
        } else if (py == 3) {
            if (b24 == 1) {
                blocked = 1
            }
        }
    } else {
        if (py == 0) {
            if (b10 == 1) {
                blocked = 1
            }
        } else if (py == 1) {
            if (b15 == 1) {
                blocked = 1
            }
        } else if (py == 2) {
            if (b20 == 1) {
                blocked = 1
            }
        } else if (py == 3) {
            if (b25 == 1) {
                blocked = 1
            }
        }
    }
}
input.onButtonPressed(Button.B, function () {
    if (px < 4) {
        px += 1
    }
})
let blocked = 0
let b25 = 0
let b24 = 0
let b23 = 0
let b22 = 0
let b21 = 0
let b20 = 0
let b19 = 0
let b18 = 0
let b17 = 0
let b16 = 0
let b15 = 0
let b14 = 0
let b13 = 0
let b12 = 0
let b11 = 0
let b10 = 0
let b9 = 0
let b8 = 0
let b7 = 0
let b6 = 0
let py = 0
let px = 0
px = 2
py = 0
let landed = 0
let board = 0
let b1 = 0
let b2 = 0
let b3 = 0
let b4 = 0
let b5 = 0
b6 = 0
b7 = 0
b8 = 0
b9 = 0
b10 = 0
b11 = 0
b12 = 0
b13 = 0
b14 = 0
b15 = 0
b16 = 0
b17 = 0
b18 = 0
b19 = 0
b20 = 0
b21 = 0
b22 = 0
b23 = 0
b24 = 0
b25 = 0
basic.forever(function () {
    basic.clearScreen()
    led.plot(px, py)
    if (b1 == 1) {
        led.plot(0, 0)
    }
    if (b2 == 1) {
        led.plot(1, 0)
    }
    if (b3 == 1) {
        led.plot(2, 0)
    }
    if (b4 == 1) {
        led.plot(3, 0)
    }
    if (b5 == 1) {
        led.plot(4, 0)
    }
    if (b6 == 1) {
        led.plot(0, 1)
    }
    if (b7 == 1) {
        led.plot(1, 1)
    }
    if (b8 == 1) {
        led.plot(2, 1)
    }
    if (b9 == 1) {
        led.plot(3, 1)
    }
    if (b10 == 1) {
        led.plot(4, 1)
    }
    if (b11 == 1) {
        led.plot(0, 2)
    }
    if (b12 == 1) {
        led.plot(1, 2)
    }
    if (b13 == 1) {
        led.plot(2, 2)
    }
    if (b14 == 1) {
        led.plot(3, 2)
    }
    if (b15 == 1) {
        led.plot(4, 2)
    }
    if (b16 == 1) {
        led.plot(0, 3)
    }
    if (b17 == 1) {
        led.plot(1, 3)
    }
    if (b18 == 1) {
        led.plot(2, 3)
    }
    if (b19 == 1) {
        led.plot(3, 3)
    }
    if (b20 == 1) {
        led.plot(4, 3)
    }
    if (b21 == 1) {
        led.plot(0, 4)
    }
    if (b22 == 1) {
        led.plot(1, 4)
    }
    if (b23 == 1) {
        led.plot(2, 4)
    }
    if (b24 == 1) {
        led.plot(3, 4)
    }
    if (b25 == 1) {
        led.plot(4, 4)
    }
    if (py < 4) {
        py += 1
    } else {
        if (px == 0) {
            checkBelow()
            if (blocked == 0) {
                py += 1
            }
            if (b21 == 0) {
                b21 = 1
            } else if (b16 == 0) {
                b16 = 1
            } else if (b11 == 0) {
                b11 = 1
            } else if (b6 == 0) {
                b6 = 1
            } else {
                b1 = 1
            }
        } else if (px == 1) {
            if (b22 == 0) {
                b22 = 1
            } else if (b17 == 0) {
                b17 = 1
            } else if (b12 == 0) {
                b12 = 1
            } else if (b7 == 0) {
                b7 = 1
            } else {
                b2 = 1
            }
        } else if (px == 2) {
            if (b23 == 0) {
                b23 = 1
            } else if (b18 == 0) {
                b18 = 1
            } else if (b13 == 0) {
                b13 = 1
            } else if (b8 == 0) {
                b8 = 1
            } else {
                b3 = 1
            }
        } else if (px == 3) {
            if (b24 == 0) {
                b24 = 1
            } else if (b19 == 0) {
                b19 = 1
            } else if (b14 == 0) {
                b14 = 1
            } else if (b9 == 0) {
                b9 = 1
            } else {
                b4 = 1
            }
        } else {
            if (b25 == 0) {
                b25 = 1
            } else if (b20 == 0) {
                b20 = 1
            } else if (b15 == 0) {
                b15 = 1
            } else if (b10 == 0) {
                b10 = 1
            } else {
                b5 = 1
            }
        }
    }
    basic.pause(500)
})
