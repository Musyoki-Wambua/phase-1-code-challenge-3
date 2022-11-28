let salary = 10000; // salary input value


function determineSalary (salary){
    if (salary <= 24000){
        console.log (salary * 0.01);
    }
    else if (salary > 24000 && salary <= 32333){
        console.log(salary * 0.25);
    }else {
        console.log (salary * 0.3);
    }
}
determineSalary();


function nhifDeduction (salary){ // Calculations of various NHif deductions as stipulated
    if (salary < 6000){
        console.log (150);
    }
    else if (salary => 6000 && salary < 8000){
        console.log (300);
    }
    else if ( salary => 8000 && salary < 12000){
        console.log (400);
    }else if (salary => 12000 && salary < 15000){
        console.log (500);
    }else if (salary => 15000 && salary < 20000){
        console.log (600);
    }else if (salary => 20000 && salary < 25000){
        console.log (750);
    }else if (salary => 25000 && salary < 30000){
        console.log (850);
    }else if (salary => 30000 && salary < 35000){
        console.log (900);
    }else if (salary => 35000 && salary < 40000){
        console.log (950);
    }else if (salary => 40000 && salary < 45000){
        console.log (1000);
    }else if (salary => 45000 && salary < 50000){
        console.log (1100);
    }else if (salary => 50000 && salary < 60000){
        console.log (1200);
    }else if (salary => 60000 && salary < 70000){
        console.log (1300);
    }else if (salary => 70000 && salary < 80000){
        console.log (1400);
    }else if (salary => 80000 && salary < 90000){
        console.log (1500);
    }else if (salary => 90000 && salary < 100000){
        console.log (1600);
    }else if (salary => 100000){
        console.log (1700);
    }
}
nhifDeduction();

function nssfDeductions (){
    if (salary < 3000){
        console.log (salary * 0.12)
    }else if ( salary >= 4000 && salary < 6000){
        console.log (salary * 0.12);
    }  else if ( salary => 6000 && salary < 1000){
            console.log (salary * 0.12)
    }else if ( salary => 10000 && salary < 14000){
        console.log (salary * 0.12)
    }else if (salary => 14000 && salary < 18000){
        console.log (salary * 0.12)
    }else if ( salary => 18000 && salary < 20000){
        console.log (salary * 0.12)
    }else if ( salary => 20000 && salary < 100000){
        console.log (salary * 0.12)
    }else if (salary => 100000 && salary < 500000){
        console.log (salary * 0.12)
    }else {
        console.log (salary * 0.12)
    }
}


//taxable pay = grosspay - NHIF - NSSF 
function taxablePay(){
    console.log (salary - nhifDeduction- nssfDeductions)
}
taxablePay();

//PAYE = Taxable pay * rate 









