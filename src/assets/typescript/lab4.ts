const generateArray = (num: number): number[] => {
    let array: number[] = [];
    for (let i = 1; i <= num; ++i) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
};

const drawTable = (id: string): void => {
    let userInput: string | null = prompt("Ingresa un número:");
    if (userInput == null) return;
    let num: number = parseInt(userInput);
    if (num <= 0) return;
    let element: HTMLElement | null = document.getElementById(id);
    let tableBody: HTMLTableSectionElement | undefined = document.getElementById("ex1Table")?.getElementsByTagName('tbody')[0];
    for (let i = 1; i <= num; ++i) {
        let newRow: HTMLTableRowElement | undefined = tableBody?.insertRow();
        let numCell: HTMLTableCellElement | undefined = newRow?.insertCell();
        let squaredCell: HTMLTableCellElement | undefined = newRow?.insertCell();
        let cubedCell: HTMLTableCellElement | undefined = newRow?.insertCell();
        const styles: string[] = ["px-6", "py-4", "whitespace-nowrap"];
        styles.map(style => numCell?.classList.add(style));
        styles.map(style => squaredCell?.classList.add(style));
        styles.map(style => cubedCell?.classList.add(style));
        let numTxt = document.createTextNode(i.toString());
        let squaredTxt = document.createTextNode((i * i).toString());
        let cubedTxt = document.createTextNode((i * i * i).toString());
        numCell?.appendChild(numTxt);
        squaredCell?.appendChild(squaredTxt);
        cubedCell?.appendChild(cubedTxt);
    }
    element?.classList.toggle('hidden');
};

const quiz = (): void => {
    const initial: Date = new Date();
    let num1: number = Math.floor(Math.random() * 100), num2: number = Math.floor(Math.random() * 100);
    let userAnswer: string | null = prompt(`¿Cuál es la suma de ${num1} y ${num2}?`);
    if (userAnswer == null) return;
    if ((num1 + num2) === parseInt(userAnswer)) {
        const time: Date = new Date(new Date().getTime() - initial.getTime());
        alert(`¡Correcto! Tardaste ${time.getMinutes()} minuto(s) con ${time.getSeconds()} segundo(s).`);
    } else {
        alert("Respuesta incorrecta.");
    }
};

const contador = (numArra: number[]): void => {
    const positivos: number = numArra.reduce((x: number, y: number) => y > 0 ? x += 1 : x, 0);
    const negativos: number = numArra.reduce((x: number, y: number) => y < 0 ? x += 1 : x, 0);
    const ceros: number = numArra.reduce((x: number, y: number) => y === 0 ? x += 1 : x, 0);
    alert(`En la lista [${numArra.toString()}], existen ${positivos} número positivos, ${negativos} números negativos y ${ceros} ceros.`)
};

const promedios = (numArray: number[][]): number[] => {
    let answer: number[] = [];
    for (let i = 0; i < numArray.length; ++i) {
        answer.push(numArray[i].reduce((x: number, y: number) => x + y, 0) / numArray[i].length);
    }
    alert(`Los promedios para [${numArray.join("] [").toString()}] son: [${answer.toString()}].`);
    return answer;
};
const inverso = (num: number): string => {
    const answer = num.toString().split('').reverse().join('');
    alert(`El inverso de ${num} es ${answer}.`)
    return answer;
};

document.querySelector("#startScriptBtn")?.addEventListener('click', (e: Event) => {
    drawTable("exercise1");
    quiz();
    contador([...generateArray(10), 0, 0, 0, -5, -10, -50, -80, -40]);
    promedios([generateArray(5), generateArray(5), generateArray(5)]);
    inverso(Math.floor(Math.random() * 1000));
});