
const stepContainer = document.querySelectorAll('.steps-container')
const topHeadingSection = document.querySelector('.top-heading-section')
const step_middle_container = document.querySelectorAll('.common-steps-middle-container')
const mainHeading = document.querySelector('.main-heading')
const mainPara = document.querySelector('.main-para')
const stepNumber = document.querySelectorAll('.step-number')
const commonPlan = document.querySelectorAll('.common-plan')
const slider = document.querySelector('.slider')
const slideLeft = document.querySelector('.left-slide-btn')
const slideRight = document.querySelector('.right-slide-btn')
const yearlyName = document.querySelector('.yearly-name')
const monthlyName = document.querySelector('.monthly-name')
const freePlan = document.querySelectorAll('.plan-free')
const yearlyPlan = document.querySelectorAll('.plan-free-2')
const planPrice = document.querySelectorAll('.plan-price')
const servicesContainer = document.querySelectorAll('.services-container')
const serviceInputs = document.querySelectorAll('.service-inputs')
const go_back_btn = document.querySelector('.go-back')
const next_btn = document.querySelector('.next-btn')
const bottomSection = document.querySelector('.plan-bottom-container')
const commonInputs = document.querySelectorAll('.common-inputs')
const userName = document.getElementById('name')
const userEmail = document.getElementById('email')
const userNumber = document.getElementById('number')
const finalPlanName = document.querySelector('.final-plan-name')
const planValidity = document.querySelector('.plan-validity')
const selectedPlanPrice = document.querySelector('.selected-plan-price')
const selectedPlanScheme = document.querySelectorAll('.common-4-container')
const selectedPlanValidity = document.querySelectorAll('.common-4-plan')
const calculatedPlanTime = document.querySelector('.calculated-plan-time')
const calculatedPlan = document.querySelector('.calculated-plan')
const selectedPlanDuration = document.querySelectorAll('.selected-plan-duration')
const changeLink = document.querySelector('.change-link')
const showError = document.querySelectorAll('.error')
let currentIndex = 0;
var selectedPlanAmount = 0;
let pickAddBtn = false

// NEXT BTN 

next_btn.addEventListener('click', () => {



    if (currentIndex >= 4) {

        changePage(4)
    } else {

        currentIndex += 1
        changePage(currentIndex)
    }

})

// BACK BTN 

go_back_btn.addEventListener('click', () => {

    if (currentIndex <= 0) {

        changePage(0)
    } else {

        currentIndex -= 1
        changePage(currentIndex)
    }



})

console.log(currentIndex)
changePage(currentIndex)



// FUNCTION TO CHANGE PAGES 
let clickedPlan = false
function changePage(a) {
    if (a === 0) {
        mainHeading.innerHTML = 'Personal info'
        mainPara.innerHTML = 'Please provide your name, email address, and phone number.'
        go_back_btn.classList.add('none')
        next_btn.style = "margin-left:auto", "background-color:hsl(213, 96%, 18%)"
        next_btn.innerHTML = 'Next Step'

        checkValidation()

    } else if (a === 1) {
        mainHeading.innerHTML = 'Select your plan'
        mainPara.innerHTML = 'You have the option of monthly or yearly billing.'
        go_back_btn.classList.remove('none')
        next_btn.style = "background-color:hsl(213, 96%, 18%)"
        next_btn.innerHTML = 'Next Step'

        checkPlan(clickedPlan)



    } else if (a === 2) {
        mainHeading.innerHTML = 'Pick add-ons'
        mainPara.innerHTML = 'Add-ons help enhance your gaming experience.'
        go_back_btn.classList.remove('none')
        next_btn.style = "background-color:hsl(213, 96%, 18%)"
        next_btn.innerHTML = 'Next Step'
        checkServiceInputs()

    } else if (a === 3) {
        mainHeading.innerHTML = ' Finishing up'
        mainPara.innerHTML = 'Double-check everything looks OK before confirming.'
        go_back_btn.classList.remove('none')
        next_btn.innerHTML = 'Confirm'
        next_btn.style = "background-color:hsl(243, 100%, 62%)"

    } else if (a === 4) {
        topHeadingSection.classList.add('none')
        bottomSection.classList.add('none')
    }

    stepNumber.forEach((elemn, index) => {
        let b = index
        if (a === b) {

            elemn.classList.add('clicked')

        } else {
            elemn.classList.remove('clicked')
        }
    })

    step_middle_container.forEach((elem, index) => {
        let containerIndex = index
        if (a === containerIndex) {
            elem.classList.remove('none')
        } else {
            elem.classList.add('none')
        }
    })
}

// CHECK VALIDATION 

function checkValidation() {
    let inputVal = userName.value === '' && userEmail.value === '' && userNumber.value === ''
    let numbers = /[0-9]/
    function isEmailValid(value) {
        let atSymbol = value.indexOf("@")
        if (atSymbol < 1) return false
        let dot = value.indexOf(".")
        if (dot <= atSymbol + 2) return false
        if (dot === value.length - 1) return false
        return true
    }

    for (let i = 0; i < showError.length; i++) {

        // FOR USERNAME 

        if (userName.value === '') {
            next_btn.disabled = true
        } else if (userName.value.match(numbers)) {
            next_btn.disabled = true
            showError[0].classList.remove('none')

        } else if (!userName.value.match(numbers)) {
            next_btn.disabled = false
            showError[0].classList.add('none')

        }

        // FOR EMAIL 

        if (userEmail.value === '') {
            next_btn.disabled = true
            console.log(' ok')

        } else if (!isEmailValid(userEmail.value)) {
            next_btn.disabled = true
            console.log('not ok')
            showError[1].classList.remove('none')
        } else {

            next_btn.disabled = false
            showError[1].classList.add('none')
        }

        // FOR NUMBER 

        if (userNumber.value === '') {
            next_btn.disabled = true

        } else if (userNumber.value.length === 10) {
            next_btn.disabled = false
            console.log(' ok')
            showError[2].classList.add('none')
        } else if (userNumber.value.length < 10 || userNumber.value.length > 10) {
            next_btn.disabled = true
            console.log('not ok')
            showError[2].classList.remove('none')
        } else if (!inputVal) {
            next_btn.disabled = false
        }
    }





}

// CHECK PLAN IS CLICKED OR NOT 

function checkPlan(clickedPlan) {

    if (clickedPlan === false) {

        next_btn.disabled = true
    } else if (clickedPlan === true) {

        next_btn.disabled = false
    }

    console.log(clickedPlan)

}

// CHECK CHECKBOX IS CHECKED OR NOT 

function checkServiceInputs() {
    let selected = []
    for (var i = 0; i < serviceInputs.length; i++) {
        if (serviceInputs[i].checked) {
            selected.push(serviceInputs[i].value)
        }
    }
    console.log(selected)

    if (selected.length === 0) {
        next_btn.disabled = true
    } else if (selected.length !== 0) {
        next_btn.disabled = false
    }
}


// RIGHT SLIDER 

slideRight.addEventListener('click', () => {
    slider.classList.add('slide-right')
    yearlyName.style = "color:hsl(213, 96%, 18%)"
    monthlyName.style = "color:hsl(231, 11%, 63%)"

    clickedPlan = false
    checkPlan(clickedPlan)

    selectedPlanDuration.forEach((elem) => {
        elem.innerHTML = 'yr'
    })

    planValidity.innerHTML = '(Yearly)'
    calculatedPlanTime.innerHTML = 'Total (per year)'

    commonPlan.forEach((elem) => {
        elem.classList.remove('clicked-plan')

    })


    freePlan.forEach((elem) => {
        elem.style = "display:block"
    })

    planPrice.forEach((elem, index) => {
        if (index === 0) {
            elem.innerHTML = "$90/yr"
        } else if (index === 1) {
            elem.innerHTML = "$120/yr"
        } else if (index === 2) {
            elem.innerHTML = "$150/yr"
        }
    })

    yearlyPlan.forEach((elem, index) => {
        if (index === 0) {
            elem.innerHTML = "+$10/yr"
        } else if (index === 1) {
            elem.innerHTML = "+$20/yr"
        } else if (index === 2) {
            elem.innerHTML = "+$20/yr"
        }


    })

    selectedPlanValidity.forEach((elem, index) => {
        if (index === 0) {
            elem.innerHTML = "10"
        } else if (index === 1) {
            elem.innerHTML = "20"
        } else if (index === 2) {
            elem.innerHTML = "20"
        }


    })



    commonPlan.forEach((elem, index) => {

        elem.addEventListener('click', () => {


            if (index === 0) {

                selectedPlanPrice.innerHTML = "90"

            } else if (index === 1) {

                selectedPlanPrice.innerHTML = "120"

            } else if (index === 2) {

                selectedPlanPrice.innerHTML = "150"

            }

            calculatedPlan.innerHTML = selectedPlanPrice.innerHTML
            add()
        })
    })

    clearData()

})

// LEFT SLIDER 

slideLeft.addEventListener('click', () => {
    slider.classList.remove('slide-right')
    monthlyName.style = "color:hsl(213, 96%, 18%)"
    yearlyName.style = "color:hsl(231, 11%, 63%)"

    clickedPlan = false
    checkPlan(clickedPlan)

    selectedPlanDuration.forEach((elem) => {
        elem.innerHTML = 'mo'
    })
    planValidity.innerHTML = '(Monthly)'

    calculatedPlanTime.innerHTML = 'Total (per month)'


    commonPlan.forEach((elem) => {
        elem.classList.remove('clicked-plan')

    })

    freePlan.forEach((elem) => {
        elem.style = "display:none"
    })

    planPrice.forEach((elem, index) => {
        if (index === 0) {
            elem.innerHTML = "$9/mo"
        } else if (index === 1) {
            elem.innerHTML = "$12/mo"
        } else if (index === 2) {
            elem.innerHTML = "$15/mo"
        }
    })

    yearlyPlan.forEach((elem, index) => {
        if (index === 0) {
            elem.innerHTML = "+$1/mo"
        } else if (index === 1) {
            elem.innerHTML = "+$2/mo"
        } else if (index === 2) {
            elem.innerHTML = "+$2/mo"
        }

    })

    selectedPlanValidity.forEach((elem, index) => {
        if (index === 0) {
            elem.innerHTML = "1"
        } else if (index === 1) {
            elem.innerHTML = "2"
        } else if (index === 2) {
            elem.innerHTML = "2"
        }

    })


    commonPlan.forEach((elem, index) => {


        elem.addEventListener('click', () => {


            if (index === 0) {
                finalPlanName.innerHTML = 'Arcade'
                selectedPlanPrice.innerHTML = "9"
            } else if (index === 1) {
                finalPlanName.innerHTML = 'Advanced'
                selectedPlanPrice.innerHTML = "12"
            } else if (index === 2) {
                finalPlanName.innerHTML = 'Pro'
                selectedPlanPrice.innerHTML = "15"
            }


            calculatedPlan.innerHTML = selectedPlanPrice.innerHTML
            add()
        })
    })

    clearData()

})

// CLEAR STORED SELECTED DATA 

function clearData() {
    serviceInputs.forEach((elem) => {
        elem.checked = false
    })
    servicesContainer.forEach((elem) => {
        elem.classList.remove('clicked-plan')
    })

    b = 0
    c = 0
    d = 0

    selectedPlanScheme.forEach((elem) => {
        elem.classList.add('none')
    })

}
// CHOOSE COMMON PLAN 

commonPlan.forEach((elem, index) => {

    elem.addEventListener('click', () => {


        clickedPlan = true
        checkPlan(clickedPlan)

        if (index === 0) {
            finalPlanName.textContent = 'Arcade'
            selectedPlanPrice.innerHTML = "9"
        } else if (index === 1) {
            finalPlanName.textContent = 'Advanced'
            selectedPlanPrice.innerHTML = "12"
        } else if (index === 2) {
            finalPlanName.textContent = 'Pro'
            selectedPlanPrice.innerHTML = "15"
        }


        calculatedPlan.innerHTML = selectedPlanPrice.innerHTML
        add()

        commonPlan.forEach((elem) => {
            elem.classList.remove('clicked-plan')

        })
        elem.classList.add('clicked-plan')
    })
})

// CHOOSE SERVICES 

let b = 0
let c = 0
let d = 0
serviceInputs.forEach((elem, index) => {
    let elemIndex = index

    elem.addEventListener('click', () => {

        servicesContainer.forEach((item, index) => {
            let itemIndex = index
            if (elemIndex === itemIndex) {
                item.classList.toggle('clicked-plan')
            }


        })


        selectedPlanScheme.forEach((elem, index) => {

            let planIndex = index

            if (elemIndex === 0) {
                if (planIndex === 0) {

                    elem.classList.toggle('none')
                    if (elem.classList.contains('none')) {

                        selectedPlanValidity.forEach((elem, index) => {
                            if (index === planIndex) {
                                b = -elem.innerHTML
                                total(b)
                            }
                        })
                    } else {
                        selectedPlanValidity.forEach((elem, index) => {
                            if (index === planIndex) {
                                b = elem.innerHTML
                                total(b)
                            }
                        })
                    }

                }
            } else if (elemIndex === 1) {
                if (planIndex === 1) {

                    elem.classList.toggle('none')
                    if (elem.classList.contains('none')) {

                        selectedPlanValidity.forEach((elem, index) => {
                            if (index === planIndex) {
                                c = -elem.innerHTML
                                total(c)
                            }
                        })
                    } else {
                        selectedPlanValidity.forEach((elem, index) => {
                            if (index === planIndex) {
                                c = elem.innerHTML
                                total(c)
                            }
                        })
                    }

                }


            } else if (elemIndex === 2) {
                if (planIndex === 2) {

                    elem.classList.toggle('none')
                    if (elem.classList.contains('none')) {

                        selectedPlanValidity.forEach((elem, index) => {
                            if (index === planIndex) {
                                d = -elem.innerHTML
                                total(d)
                            }
                        })
                    } else {
                        selectedPlanValidity.forEach((elem, index) => {
                            if (index === planIndex) {
                                d = elem.innerHTML
                                total(d)
                            }
                        })
                    }

                }
            }




        })
    })
})

function add() {
    if (b < 0) {
        b = 0

    } else if (c < 0) {

        c = 0

    } else if (d < 0) {

        d = 0
    }
    calculatedPlan.innerHTML = parseInt(selectedPlanPrice.innerHTML) + parseInt(b) + parseInt(c) + parseInt(d)
    console.log(b, c, d)
    console.log(calculatedPlan.innerHTML)

}
// TOTAL AMOUNT 

function total(elem) {

    calculatedPlan.innerHTML = parseInt(calculatedPlan.innerHTML) + parseInt(elem)
}

// CHANGE YOUR CHOICES 

changeLink.addEventListener('click', () => {
    currentIndex = 1
    changePage(1)
})