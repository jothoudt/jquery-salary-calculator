$(document).ready(onReady);

function onReady(){
    console.log('JQ');
    $('#submitButton').on('click', calculateCosts);
}

function calculateCosts(){
    console.log('in calculateCosts');
let employee = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    idNumber: $('#idNumber').val(),
    jobTitle: $('#jobTitle').val(),
    annualSalary: $('#annualSalary').val()
};//end object
$('#empOut').append(`<tr>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.idNumber}</td>
    <td>${employee.jobTitle}</td>
    <td>${employee.annualSalary}</td>
</tr>`);
$('#firstName').val('');
$('#lastName').val('');
$('#idNumber').val('');
$('#jobTitle').val('');
$('#annualSalary').val('');
}//end calculateCosts()