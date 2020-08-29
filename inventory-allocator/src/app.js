const cheapestShipment = require("./cheapestShipment");

var order = {
    apple : 10
};

var warehouses = [
    {
        name : "dm",
        inventory : {
            apple : 7
        }
    },
    {
        name : "owd",
        inventory : {
            apple : 20
        }
    }
];

console.log(cheapestShipment(order, warehouses));
