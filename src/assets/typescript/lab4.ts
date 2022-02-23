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

};
const contador = (numArra: number[]): void => {

};
const promedios = (numArray: number[][]): number[] => {
    let answer: number[] = [];
    for (let i = 0; i < numArray.length; ++i) {
        answer.push(numArray[i].reduce((x: number, y: number) => x + y, 0) / numArray[i].length);
    }
    return answer;
};
const inverso = (num: number): number => {
    return -1;
};

document.querySelector("#startScriptBtn")?.addEventListener('click', (e: Event) => {
    drawTable("exercise1");
    quiz();
    contador([1, 2, 3]);
    promedios([generateArray(6), generateArray(10)]);
});