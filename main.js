let calculateBtn = document.querySelector(".calculate-btn")
let answer = document.querySelector(".answer")
let clearBtn = document.querySelector(".clear-btn")

let txt, txt2

function solveSystemEquations(a, b, c, d, e, f) {
	let D, Dx, Dy, x, y
	D = a * e - d * b
	Dx = c * e - f * b
	Dy = a * f - d * c
	if (D == 0) {
		if (Dx + Dy == 0) answer.innerHTML = "Hệ phương trình có vô số nghiệm"
		else answer.innerHTML = "He phương trình vô nghiệm"
	} else {
		x = Dx / D
		y = Dy / D
		answer.innerHTML =
			"Nghiệm của hệ phương trình là:<br>" + "x = " + x + "<br>y = " + y
	}
}

clearBtn.onclick = function () {
	let input = document.querySelectorAll("input")
	for (let i = 0; i < input.length; i++) {
		input[i].value = ""
	}
}

calculateBtn.onclick = function () {
	let input = document.querySelectorAll("input")

	let isEmpty = false
	let isNotNumber = false

	a = Number(input[0].value)
	b = Number(input[1].value)
	c = Number(input[2].value)
	d = Number(input[3].value)
	e = Number(input[4].value)
	f = Number(input[5].value)
	txt = ""
	txt2 = ""
	for (i = 0; i < input.length; i++) {
		if (input[i].value === "") {
			isEmpty = true
			if (txt !== "") {
				txt += ", " + input[i].id
			} else {
				txt += "Vui lòng nhập " + input[i].id
			}
		}
		if (isNaN(Number(input[i].value))) {
			isNotNumber = true
			if (txt2 !== "") {
				txt2 += ", " + input[i].id
			} else {
				txt2 += "Vui lòng nhập số ở hệ số " + input[i].id
			}
		}
	}
	if (isEmpty) {
		alert(txt)
	} else if (isNotNumber) {
		alert(txt2)
	} else {
		solveSystemEquations(a, b, c, d, e, f)
	}
}

let inputs = document.querySelectorAll("input")
for (let i = 0; i < inputs.length; i++) {
	inputs[i].onkeyup = function (e) {
		if (e.keyCode == 13) {
			calculateBtn.onclick()
		}
		if(e.keyCode == 27)
			inputs[i].blur()
	}
	inputs[i].onchange = function () {
		answer.innerHTML = ""
	}
}
