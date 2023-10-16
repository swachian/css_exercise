function dictate(n) {
    let main = document.querySelector("#main");
    console.log("aaaa" + main.offsetWidth);
    let size = main.offsetWidth;
    for (let i = 0; i < n; i++) {
        let row = document.createElement('div');
        row.classList.add("row");
        for (let j = 0; j < n; j++) {
            let column = document.createElement('div');
            column.style.height = `${size/n-2}px`;
            column.style.width = `${size/n-2}px`;
            column.classList.add("column");

            row.appendChild(column);
        }
        main.appendChild(row);
    }
}

function hoverInit() {
    document.querySelectorAll(".column").forEach(column => {
        console.log("init");
        column.addEventListener('mouseover', () => {
            column.classList.add("active");
        })
    })
}

dictate(16);
hoverInit();

const data = ['car', 'car', 'truck', 'courier', 'courier', 'courier']

const sumed = data.reduce((sum, one) => {
    if (sum[one]) {
        sum[one] += 1;
    } else {
        sum[one] = 1;
    }
    return sum;
}, {});

console.log(sumed);

const entries = Object.entries(sumed).sort((a, b) => { return a[1] < b[1] ? -1 : 1});
console.table(entries);