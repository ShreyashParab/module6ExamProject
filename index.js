function validate(){
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let email = document.getElementById('email').value
    let phoneNumber = document.getElementById('phoneNumber').value
    let batchNumber = document.getElementById('batchNumber').value
    let moduleNumber = document.getElementById('moduleNumber').value
    let tnc = document.getElementById('tnc')
    
    let error = false
    
    if(firstName.length >=3)
    {
        document.getElementById('firstname-valid').style.display = 'block'
        document.getElementById('firstname-invalid').style.display = 'none'
    }
    else{
        document.getElementById('firstname-valid').style.display = 'none'
        document.getElementById('firstname-invalid').style.display = 'block'
        error = true
    }

    if(lastName.length >=3)
    {
        document.getElementById('lastname-valid').style.display = 'block'
        document.getElementById('lastname-invalid').style.display = 'none'
    }
    else{
        document.getElementById('lastname-valid').style.display = 'none'
        document.getElementById('lastname-invalid').style.display = 'block'
        error = true
    }

    if(email && email.includes('@') && email.includes('.') && email.slice(email.lastIndexOf('.')+1).length >= 2 && email.charAt(0)!='@' && email[email.indexOf('.')+1]!='.' && (email.includes('gmail') || email.includes('email') || email.includes('mail') || email.includes('yahoo') || email.includes('hotmail')))
    {
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }
    else{
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('email-invalid').style.display = 'block'
        error = true
    }

    if(phoneNumber.length == 10){
        document.getElementById('phone-valid').style.display = 'block'
        document.getElementById('phone-invalid').style.display = 'none'
    }
    else{
        document.getElementById('phone-valid').style.display = 'none'
        document.getElementById('phone-invalid').style.display = 'block'
        error = true
    }

    if(batchNumber)
    {
        document.getElementById('batch-valid').style.display = 'block'
        document.getElementById('batch-invalid').style.display = 'none'
    }
    else{
        document.getElementById('batch-valid').style.display = 'none'
        document.getElementById('batch-invalid').style.display = 'block'
        error = true
    }

    if(moduleNumber)
    {
        document.getElementById('module-valid').style.display = 'block'
        document.getElementById('module-invalid').style.display = 'none'
    }
    else{
        document.getElementById('module-valid').style.display = 'none'
        document.getElementById('module-invalid').style.display = 'block'
        error = true
    }

    if(tnc.checked){
        document.getElementById('tnc-invalid').style.display = 'none'
    }
    else{
        document.getElementById('tnc-invalid').style.display = 'block'
        error = true
    }

    if(error == false){
        Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text: 'Your registration form has been submited succesfully!',
            width:400,
            timer:5000
        })
    
        document.getElementById('firstName').value = ''
        document.getElementById('lastName').value = ''
        document.getElementById('email').value = ''
        document.getElementById('phoneNumber').value = ''
        document.getElementById('batchNumber').value = ''
        document.getElementById('moduleNumber').value = ''
        document.getElementById('tnc').checked = false
        
        document.getElementById('firstname-valid').style.display = 'none'
        document.getElementById('lastname-valid').style.display = 'none'
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('phone-valid').style.display = 'none'
        document.getElementById('batch-valid').style.display = 'none'
        document.getElementById('module-valid').style.display = 'none'
    }
    
}
