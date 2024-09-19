function showValueInput() {
    const varName = document.getElementById("variableName").value;
    if (!varName) {
        alert("Please enter a variable name!");
        return;
    }

    document.getElementById("valueInputContainer").style.display = "block";
    document.getElementById("variableLabel").innerText = varName;
}

function startDemo() {
    const varName = document.getElementById("variableName").value;
    const varValue = document.getElementById("variableValue").value;

    if (!varValue) {
        alert(`Please enter the value for ${varName}`);
        return;
    }

    data = {
        varName: varValue
    };

    alert(`Key "${varName}" with value "${varValue}" is set!`);
}

function demo(greetings) {
    return greetings + this.varName;
}

function runCall() {
    const result = demo.call(data, "Hello ");
    const outputBox = document.getElementById("callOutput");
    outputBox.innerText = result;
    outputBox.classList.add("slide-down");
}

function runApply() {
    const result = demo.apply(data, ["Hello "]);
    const outputBox = document.getElementById("applyOutput");
    outputBox.innerText = result;
    outputBox.classList.add("slide-down");
}

function runBind() {
    const Func = demo.bind(data, "Hello ");
    const outputBox = document.getElementById("bindOutput");
    outputBox.innerText = Func();
    outputBox.classList.add("slide-down");
}