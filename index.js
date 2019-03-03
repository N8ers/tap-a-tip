let form = document.getElementById("calculate");

form.onsubmit = function (event) {

    if (form.calculateTip.value == "") {
        document.getElementById("alert").innerHTML = "I need a number up there, super champ...";
        return false;
    } else {

        event.preventDefault()
        const bill = parseFloat(form.calculateTip.value);

        document.getElementById("alert").innerHTML = "";
        document.getElementById("moveUpTarget").classList.remove("center");
        document.getElementById("fadeInTarget").classList.add("fadeIn");
        document.getElementById("fadeInTarget").classList.remove("seeThrough");

        function math(percent, tipAmountId, tipTotalId) {
            let tipAmount = Math.floor((bill * percent) * 100) / 100;
            let tipAmountParsed = parseFloat(tipAmount).toFixed(2);
            document.getElementById(tipAmountId).innerHTML = "$" + tipAmountParsed;
            let totalWithTip = Math.floor((bill + tipAmount) * 100) / 100;
            let totalWithTipParsed = parseFloat(totalWithTip).toFixed(2);
            document.getElementById(tipTotalId).innerHTML = "$" + totalWithTipParsed;
        }

        math(0.2, "tipOne", "totalOne");
        math(0.25, "tipTwo", "totalTwo");
        math(0.3, "tipThree", "totalThree");

        let slider = document.getElementById("sliderTarget");
        let output = document.getElementById("tipCircleTarget");
        output.innerHTML = slider.value + "%";

        slider.oninput = function () {
            output.innerHTML = this.value + "%";
        }

        document.getElementById("customTip").innerHTML = parseFloat(Math.floor((bill * .2) * 100) / 100).toFixed(2);
        document.getElementById("customTipTotal").innerHTML = parseFloat(Math.floor((bill * (.2 / 100) + bill) * 100) / 100).toFixed(2);

        slider.oninput = function () {
            output.innerHTML = this.value + "%";
            document.getElementById("customTip").innerHTML = parseFloat(Math.floor(bill * this.value) / 100).toFixed(2);
            document.getElementById("customTipTotal").innerHTML = parseFloat(Math.floor((bill * (this.value / 100) + bill) * 100) / 100).toFixed(2);
        }
    }
}