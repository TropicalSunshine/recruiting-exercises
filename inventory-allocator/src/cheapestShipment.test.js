const cheapestOrder = require("./cheapestShipment");

test('test invalid inputs', () => {
    expect(cheapestOrder(null, null)).toEqual([]);

    const order = {
        apples : 10 
    };

    const warehouses = [
        {
            name : "owd",
            inventory : {
                orange : 5,
                apples : 10
            }
        }
    ]

    expect(cheapestOrder(
        order,
        null
    )).toEqual([]);

    expect(cheapestOrder(
        order,
        12
    )).toEqual([]);

    expect(cheapestOrder(
        null,
        warehouses
    )).toEqual([]);

    expect(cheapestOrder(
        null,
        null
    )).toEqual([]);
});
