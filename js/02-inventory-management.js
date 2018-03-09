/*eslint-env browser*/
function display_menu() {
    "use strict";
    window.console.log("Welcome to the Employee Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - view all products");
    window.console.log("update - update sku");
    window.console.log("exit - Exit the program");
    window.console.log("");
}
function display(inventory) {
    "use strict";
    var i = 1;
    inventory.forEach(function (item) {
        window.console.log(String(i) + "." + item);
        i += 1;
    });
    window.console.log("");
}
function update(inventory) {
    "use strict";
    var item = parseInt(window.prompt("Enter sku"), 10);
    var quantity = window.prompt("enter new quantity");
    var i;
    for (i = 0; i < inventory.length; i += 1) {
        if (item === (inventory[i][0])) {
            inventory[i][2] = "(" + quantity + ")";
            break;
        }
    }
    localStorage.setItem("sku", item);
    localStorage.setItem("skuquantity", quantity);
    display(inventory);
    window.console.log('');
}

function main() {
    "use strict";
    var inventory, command;
    
    display_menu();
    
    inventory = [];
    var product1 = [2233, "Hat", "(12)", "$14.99"];
    var product2 = [3223, "Socks", "(36)", "$9.99"];
    var product3 = [4824, "Shirt", "(10)", "$15.99"];
    var product4 = [6343, "Jeans", "(22)", "$39.99"];
    var product5 = [9382, "Jacket", "(5)", "$49.99"];
    
    inventory[0] = product1;
    inventory[1] = product2;
    inventory[2] = product3;
    inventory[3] = product4;
    inventory[4] = product5;
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                display(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();

