const validateBtn: HTMLElement | null = document.getElementById("validatePasswordsBtn");
const notifierTxt: HTMLElement | null = document.getElementById("validator-notifier-txt");
const notifiedContainer: HTMLElement | null = document.getElementById("validator-notifier-container");
validateBtn?.addEventListener('click', () => {
    if (notifierTxt === null) return;
    const password1: string = (<HTMLInputElement>document.getElementById("password1")).value;
    const password2: string = (<HTMLInputElement>document.getElementById("password2")).value;
    if (password1 === password2) {
        notifierTxt.innerText = "¡Contraseña válida!";
        notifierTxt.classList.remove("text-red-600");
        notifierTxt.classList.add("text-green-600");
    } else{
        notifierTxt.innerText = "¡Contraseña inválida!";
        notifierTxt.classList.remove("text-green-600");
        notifierTxt.classList.add("text-red-600");
    }
    notifiedContainer?.classList.remove("hidden");
});