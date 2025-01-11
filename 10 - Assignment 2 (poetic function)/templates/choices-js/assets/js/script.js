

// always declare your variables first

const selector1 = document.getElementById("select-1");
const selector2 = document.getElementById("select-2");

let selectElement;
let selectValue; 

// then declare your functions

function handleSelectChange(event) {

    selectElement = event.target;
    selectValue = selectElement.value;

    // add data attributes in your HTML body element (that can be styled later with CSS)
    document.body.setAttribute("data-"+this.id+"-value", selectValue);

}

// then declare your event listeners

selector1.addEventListener('change', handleSelectChange);
selector2.addEventListener('change', handleSelectChange);


