export default function VanillaApp() {
    const appContainer =  document.createElement("div");

    const button = Button();
    button.textContent = button.textContent + " first!";

    appContainer.append(button);
    appContainer.append(Button());
    appContainer.append(Button());
    
    return appContainer;
}

function Button(){
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Old Click me";
    button.addEventListener("click", () => console.log("Hello Old World"));
    return button;

    // this below, is the react way
    // <button type="button" onClick={console.log("Hello World")}>Click me</button>
}