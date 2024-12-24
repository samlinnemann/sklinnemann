function returnCalc() {
    const fname = document.querySelector('#fname').value;
    const days = document.querySelector('#days').value;
    const hours = document.querySelector('#hours').value;
    const hourCost = 50;

    try {
        if (!days || !hours || days <= 0 || hours <= 0) { // Validates if days and hours are numbers > 0
            throw new Error("Please enter a valid number greater than 0 for days and hours.");
        }

        // Perform the calculation
        const performCalc = (days, hours) => days * hours;
        const sum = performCalc(days, hours) * hourCost;

        // Output back to the user
        document.querySelector('#output').innerText = `Thank you ${fname} for your submission. The estimated cost for your request is $${sum}.`;

        console.log('Calculation successful');
    } catch (error) {
        // Catch error and display to the user
        document.querySelector('#output').innerText = error.message;
        console.log('Error in calculation', error.message);
        return false;  // Prevent form submission on error
    }

    return false;
}

function validation() {
    let element = document.getElementById("error").value;
    let element2 = document.getElementById("error");
    let check = /\^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (check.test(element)) {
        alert("done");
        return true;
    } else {
        element2.style.border = "red solid 3px";
        return false;
    }
}

let selectedItems = [];

// Function to handle selection from the dropdown
document.getElementById('itemList').addEventListener('change', function() {
    const options = Array.from(this.options);
    selectedItems = options.filter(option => option.selected).map(option => option.value);
    updateSelectedItemsOutput();
});

// Function to add a new item to the dropdown list and to the selectedItems array
function addNewItem() {
    const newItemInput = document.getElementById('addNewItem');
    const newItem = newItemInput.value.trim();

    if (newItem) {
        // Add the new item to the dropdown list
        const newOption = document.createElement('option');
        newOption.value = newItem;
        newOption.textContent = newItem;
        document.getElementById('itemList').appendChild(newOption);

        // Select the newly added item and add it to the array
        newOption.selected = true;
        selectedItems.push(newItem);
        updateSelectedItemsOutput();

        // Clear the input field
        newItemInput.value = '';
    }
}

// Function to update the output with selected items
function updateSelectedItemsOutput() {
    const output = selectedItems.length > 0 ? selectedItems.join(', ') : 'No items selected';
    document.getElementById('selectedItemsOutput').textContent = output;
}

// Function to read and display content from an uploaded text file
function readFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const fileContent = document.getElementById('fileContent');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            fileContent.textContent = e.target.result;
        };
        reader.readAsText(file);
    } else {
        fileContent.textContent = 'No file selected.';
    }
}


    /*
        source for the code I built: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

        For this assignment I used debugging from browser dev tools such as console.log and try-catch block. I used the console.log
        tool in order to log to the console when an error occured or when there was no error reguarding the calculation. 
        This is good for debugging purposes. I also used a try-catch block for my error handling. I checked to ensure that the
        hours variable and days variable were entered in by the user as both greater than 0 and to ensure that it is an actual number
        and not a character.
    */

    /*
    XSS Security

    XSS attacks are cross-sit scripting attacks that can lead to account hijacking, data leaks, or malware.
    Attacks can alter information across the website to spread misinformation for the attackers benefit
    or misdirect users to a different site in order for the attackers to gain infomration. This can occur
    through vulnerabilities such as forms through malicious scirpts that can be inputed through a form 
    field. Having form validation helps to prevent these kinds of attacks from occuring and protects
    your website.
    
    */