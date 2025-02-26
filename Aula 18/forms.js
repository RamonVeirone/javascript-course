document.getElementById("formsdata1").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let formData = new FormData(event.target);  // Use "FormData" sem o "s"

    let dataArray = [];

    for (let pair of formData.entries()) {
        dataArray.push(pair[1]);
    }

    console.log(dataArray);  // Exibe o array no console
});