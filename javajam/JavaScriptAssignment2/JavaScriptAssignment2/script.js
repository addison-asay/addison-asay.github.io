const solution = document.getElementById("solution");

function task1() {
    clearSolution();
    solution.innerHTML = "Running task 1... Turning the solution box red.";
    /* Your Code Here */
    
    document.getElementById("solution-box").style.backgroundColor = "red";
    /* End of your code */
}

function task2() {
    clearSolution();
    /* Your Code Here */
    var name = document.getElementById("user-name").value;
    let message = "Hello, " + name + "!, ya bingus!!! git pwned";
    solution.innerHTML = message;
    
    

    /* End of your code */
}

function task3() {
    clearSolution();
    solution.innerHTML = "Running task 3... Turning all of the h2 elements purple.";
    /* Your Code Here */
    
    const headings = document.querySelectorAll("h2");
    for (let i = 0; i < headings.length; i++) {
        headings[i].style.color = "purple";
    }



    /* End of your code */
}

function task4() {
    clearSolution();
    solution.innerHTML = "Running task 4...";
    /* Your Code Here */
    
    const colors = ["red", "green", "blue", "yellow", "purple"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("solution-box").style.backgroundColor = randomColor;
    /* End of your code */
}

function task5() {
    clearSolution();
    solution.innerHTML = "Running task 5...";
    /* Your Code Here */
    // You will need to append the new element to the solution div.
    // Remember, the solution div has the id of "solution"
    
    
    const myTitle = document.createElement("h2");
    myTitle.innerHTML = "My smchFancy H2!";

    //
    document.getElementById("solution").appendChild(myTitle);

    /* End of your code */
}

function clearSolution() {
    solution.innerHTML = "";
}
