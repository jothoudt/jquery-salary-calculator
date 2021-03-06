$(document).ready(onReady);

function onReady(){
    console.log('JQ');
    $('#submitButton').on('click', getEmployee);
    $('#empOut').on('click', '#deleteEmployee', removeEmployee )
}
let employe= {};
let employees =[];
let totalMonthly=0;
function getEmployee(){
employee = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    idNumber: $('#idNumber').val(),
    jobTitle: $('#jobTitle').val(),
    annualSalary: $('#annualSalary').val()
};//end object
employees.push(employee);
$('#empOut').append(`<tr>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.idNumber}</td>
    <td>${employee.jobTitle}</td>
    <td>${(employee.annualSalary)}</td>
    <td><button id="deleteEmployee">Delete</button>
</tr>`);
$('#firstName').val('');
$('#lastName').val('');
$('#idNumber').val('');
$('#jobTitle').val('');
$('#annualSalary').val('');

calculateCosts(employees);
}//end calculateCosts()

function calculateCosts(employees){
    totalMonthly= 0;
    for(let i=0; i<employees.length; i++){
    employeeMonthly= employees[i].annualSalary/12;
    totalMonthly += employeeMonthly;
    $('#monthlyCost').empty()
    $('#monthlyCost').append(Number(totalMonthly));
    if(totalMonthly > 20000){
        $('#monthlyCost').css('color', 'red');
    }
    }
    }

    function removeEmployee(){
        console.log('in removeEmployee');
        $(this).parent().parent().remove();
    }
