const isBrowser: boolean = typeof window === 'object';

function showMessage(text: string): void {
    if (isBrowser) {
        alert(text);
    } else {
        console.log(text);
    }
}
 
showMessage('Guess the number!');

const secretNumber: number = Math.floor(Math.random() * 100 + 1);

showMessage(`The secret number is: ${secretNumber}`);