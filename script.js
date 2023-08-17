document.getElementById("triangleForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!isNaN(base) && !isNaN(height)) {
        const area = 0.5 * base * height;
        const perimeter = base + 2 * Math.sqrt(Math.pow(height, 2) + Math.pow(base / 2, 2));
        const resultDiv = document.getElementById("result");

        resultDiv.innerHTML = `
            <p>Luas Segitiga: ${area.toFixed(2)}</p>
            <p>Keliling Segitiga: ${perimeter.toFixed(2)}</p>
        `;
    } else {
        alert("Please enter valid numbers.");
    }
});
