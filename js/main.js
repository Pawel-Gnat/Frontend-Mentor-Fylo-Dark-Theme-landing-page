const sendBtn = document.querySelector('.access__form--button')
const errorText = document.querySelector('.access__form--error')
const inputForm = document.querySelector('.access__form--input')
const filter =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const showError = () => {
	// function show errors by adding error class
	errorText.classList.add('active')
}

const clearError = () => {
	// function set input to default mode
	errorText.classList.remove('active')
}

const validateEmail = () => {
	// function checks if email is properly written, reffering to declared filter (regexp)

	if (filter.test(inputForm.value)) {
		clearError()
	} else {
		showError()
	}
}

const checkForm = () => {
	// function checks if input is empty, if true than display error mode, else set input to default mode
	if (inputForm.value === '') {
		showError()
	} else {
		clearError()
	}
}

const clearInput = () => {
	//function checks if paragraph doesnt contain error class, if not it clears input and log text after submitting
	if (!errorText.classList.contains('active')) {
		console.log(inputForm.value)
		inputForm.value = ''
	}
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm()
	validateEmail()
	clearInput()
})
