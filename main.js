// 
function sumCalc() {
    // Get the value of the input field with id="numb"
    let first_num = document.getElementById('fnumb').value;
    let second_num = document.getElementById('snumb').value;
    
    let result = Number(first_num) + Number(second_num); 
    
    document.getElementById("demo").innerHTML = result;
};
