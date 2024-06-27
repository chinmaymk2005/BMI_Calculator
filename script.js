// formula -> bmi = kg / (h/100 * h/100)  

document.getElementById('submit').addEventListener('click', getBmi) 


function getBmi(){ 

    let cm = parseInt(document.getElementById('cm').value); 
    let kg = parseFloat(document.getElementById('kg').value); 

    let bmi ;
    let newcm = parseFloat(cm/100) ; // from this we find h/100 

    bmi = kg / (newcm * newcm) ; 
    bmi = bmi.toFixed(1) // to take final value as 123.2 instead 123.2323232 
    const res = document.getElementById('result') 
    res.style.backgroundColor = '#fcf6bd'  
    res.style.marginTop = '10px'  
    res.style.padding = '10px'
    document.getElementById('result').innerHTML = 'Your BMI is ' + bmi + ' 🎉' 

}