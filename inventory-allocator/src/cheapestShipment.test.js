const cheapestOrder = require("./cheapestShipment");


describe("test invalid inputs" ,  () => {

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

    test('returns empty array null inputs', () => {
        expect(cheapestOrder(null, null)).toEqual([]);
        expect(cheapestOrder( order, null )).toEqual([]);
        expect(cheapestOrder( null, warehouses )).toEqual([]);
    
    });

    test("returns emtpy array on incorrect types", () => { 
        expect(cheapestOrder( order, 12 )).toEqual([]);
    })

})

describe("test valid inputs" , () => {
    test("orders with single warehourse", () => {
    
        var order = {
            apple : 1
        }
    
        var warehouses = [{
                name : "owd",
                inventory : {
                    apple : 1
                }
        }]

        var result = [
            {
                owd : {
                    apple : 1
                }
            }
        ]

        var orderResult1 = {
            apple : 0
        };

        var warehousesResult1 = [
            {
                name : "owd",
                inventory : {
                    apple : 0
                }
            }
        ]
    
        expect(cheapestOrder( order, warehouses )).toEqual(result);
        expect(order).toEqual(orderResult1);
        expect(warehouses).toEqual(warehousesResult1);
    });
    
    test("order shipment with multiple warehouses", () => {
        var order = {
            apple : 10
        };

        var warehouses = [
            {
                name : "dm",
                inventory : {
                    apple : 5
                }
            },
            {
                name : "owd",
                inventory : {
                    apple : 5
                }
            }
        ];

        var result1 = [
            {
                dm : {
                    apple : 5
                }
            },
            {
                owd : {
                    apple : 5
                }
            }
        ]

        var orderResult1 = {
            apple : 0
        }

        var warehousesResult1 = [
            {
                name : "dm",
                inventory : {
                    apple : 0
                }
            },
            {
                name : "owd",
                inventory : {
                    apple : 0
                }
            }
        ]

        expect(cheapestOrder(order, warehouses)).toEqual(result1);
        expect(order).toEqual(orderResult1);
        expect(warehouses).toEqual(warehousesResult1);

    });
    
    test("orders that cannot be shipped due to not enough inventory", () => {
    
    })

})
