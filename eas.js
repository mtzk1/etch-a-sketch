const container = document.querySelector("#container");

function createDivs(n) {
    container.style.setProperty("--columns",n);
    container.style.setProperty("--rows",n);
    for (i=0; i<n; i++) {
        for (j=0; j<n; j++) {
            const divs = document.createElement("div");
            divs.classList.add(j);
            divs.style.cssText = "border: 1px solid black";
            container.appendChild(divs);
        }
    }
}
let n=prompt("How many squares on each side?");
createDivs(n);

