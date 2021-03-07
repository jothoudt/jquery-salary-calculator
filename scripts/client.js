$(document).ready(onReady);

function onReady(){
    console.log('JQ');
    $('#submitButton').on('click', getEmployee);
    $('#empOut').on('click', '#deleteEmployee', removeEmployee )
}
let employe= {};
let employees =[];
let totalMonthly=0;

//function to get employee info
function getEmployee(){
employee = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    idNumber: $('#idNumber').val(),
    jobTitle: $('#jobTitle').val(),
    annualSalary: $('#annualSalary').val()
};//end object
employees.push(employee);
//append info to dom
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
//add employee info to calculator
calculateCosts(employees);
}//end calculateCosts()

//calculate employee info
function calculateCosts(employees){
    totalMonthly= 0;
    //loop through employees
    for(let i=0; i<employees.length; i++){
    employeeMonthly= employees[i].annualSalary/12;
    totalMonthly += employeeMonthly;
    $('#monthlyCost').empty()
    //append calculator total to dom
    $('#monthlyCost').append(Number(totalMonthly.toFixed(2)));
    if(totalMonthly > 20000){
        $('#monthlyCost').css('color', 'red');
    }//end if
    }//end for
}//end calculate costs

//function to remove employee
    function removeEmployee(){
        console.log('in removeEmployee');
        //select item and remove from total
        itemToRemove =$(this).parent().parent().text().match(employee.annualSalary);
        totalMonthly -= itemToRemove/12 ;
        //console.logs to troubleshoot function
        console.log(itemToRemove);
        console.log(totalMonthly);
        //empty old total and add new total to the dom
        $('#monthlyCost').empty();
        $('#monthlyCost').append(Number(totalMonthly.toFixed(2)));
        $(this).parent().parent().remove();
    }//end removeEmployee