const cheapestShipment = require("../cheapestShipment");
const { bigOrder, bigWarehouses, bigResult } = require("./largeInputs");

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
    ];

    test('returns empty array null inputs', () => {
        expect(cheapestShipment(null, null)).toEqual([]);
        expect(cheapestShipment( order, null )).toEqual([]);
        expect(cheapestShipment( null, warehouses )).toEqual([]);
    });

    test("returns emtpy array on invalid warehouses type", () => { 
        expect(cheapestShipment( order, 12 )).toEqual([]);
    });

    test("returns empty array only given orders param", () => {
        expect(cheapestShipment(order)).toEqual([]);
    });
});

describe("test valid inputs" , () => {
    describe("orders that can be shipped", () => {
        describe("single warehourse", () => {
            test("with exact inventory", () => {
                var order = {
                    apple : 1
                };
            
                var warehouses = [
                    {
                        name : "owd",
                        inventory : {
                            apple : 1
                        }
                    }
                ];
        
                var result = [
                    {
                        owd : {
                            apple : 1
                        }
                    }
                ];
        
                var orderResult = {
                    apple : 0
                };
        
                var warehousesResult = [
                    {
                        name : "owd",
                        inventory : {
                            apple : 0
                        }
                    }
                ];
            
                expect(cheapestShipment( order, warehouses )).toEqual(result);
                expect(order).toEqual(orderResult);
                expect(warehouses).toEqual(warehousesResult);
            });

            test("with exact inventory and large order", () => {
                var order = {
                    apple : 1,
                    pear : 10,
                    orange : 20,
                    coconut : 10
                };
            
                var warehouses = [
                    {
                        name : "owd",
                        inventory : {
                            apple : 1,
                            pear : 10,
                            orange : 20,
                            coconut : 10
                        }
                    }
                ];
        
                var result = [
                    {
                        owd : {
                            apple : 1,
                            pear : 10,
                            orange : 20,
                            coconut : 10
                        }
                    }
                ];
        
                var orderResult = {
                    apple : 0,
                    pear: 0,
                    orange : 0,
                    coconut : 0
                };
        
                var warehousesResult = [
                    {
                        name : "owd",
                        inventory : {
                            apple : 0,
                            pear : 0,
                            orange : 0,
                            coconut : 0
                        }
                    }
                ];
                
                expect(cheapestShipment( order, warehouses)).toEqual(result);
                expect(order).toEqual(orderResult);
                expect(warehouses).toEqual(warehousesResult);
            });
    
            test("with excess inventory" , () => {
                var order = {
                    apple : 1
                };

                var warehouses = [
                    {
                        name : "owd",
                        inventory : {
                            apple : 10
                        }
                    }
                ];
        
                var result = [
                    {
                        owd : {
                            apple : 1
                        }
                    }
                ];
        
                var orderResult = {
                    apple : 0
                };
        
                var warehousesResult = [
                    {
                        name : "owd",
                        inventory : {
                            apple : 9
                        }
                    }
                ];
    
                expect(cheapestShipment( order, warehouses )).toEqual(result);
                expect(order).toEqual(orderResult);
                expect(warehouses).toEqual(warehousesResult);
            });

            test("with excess inventory and large order" , () => {
                var order = {
                    apple : 1,
                    pear : 10,
                    orange : 20,
                    coconut : 10
                };

                var warehouses = [
                    {
                        name : "owd",
                        inventory : {
                            apple : 10,
                            pear: 10,
                            orange : 30,
                            coconut : 20
                        }
                    }
                ];
        
                var result = [
                    {
                        owd : {
                            apple : 1,
                            pear : 10,
                            orange : 20,
                            coconut : 10
                        }
                    }
                ];
        
                var orderResult = {
                    apple : 0,
                    pear: 0,
                    orange : 0,
                    coconut : 0
                };
        
                var warehousesResult = [
                    {
                        name : "owd",
                        inventory : {
                            apple : 9,
                            pear: 0,
                            orange : 10,
                            coconut : 10
                        }
                    }
                ];
    
                expect(cheapestShipment( order, warehouses )).toEqual(result);
                expect(order).toEqual(orderResult);
                expect(warehouses).toEqual(warehousesResult);
            });
        });
        
        describe("multiple warehouses", () => {
            test("with exact inventory", () => {
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
        
                var result = [
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
                ];
                
                var orderResult = {
                    apple : 0
                };
        
                var warehousesResult = [
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
                ];
        
                expect(cheapestShipment(order, warehouses)).toEqual(result);
                expect(order).toEqual(orderResult);
                expect(warehouses).toEqual(warehousesResult);
            });

            test("with exact inventory and large order", () => {
                var order = {
                    apple : 10,
                    coconut : 20,
                    mango :  40
                };
        
                var warehouses = [
                    {
                        name : "dm",
                        inventory : {
                            apple : 5,
                            coconut : 20,
                            mango : 30
                        }
                    },
                    {
                        name : "owd",
                        inventory : {
                            apple : 5,
                            mango : 10
                        }
                    }
                ];
        
                var result = [
                    {
                        dm : {
                            apple : 5,
                            coconut : 20,
                            mango : 30
                        }
                    },
                    {
                        owd : {
                            apple : 5,
                            mango : 10
                        }
                    }
                ];
                
                var orderResult = {
                    apple : 0,
                    coconut : 0,
                    mango : 0
                };
        
                var warehousesResult = [
                    {
                        name : "dm",
                        inventory : {
                            apple : 0,
                            coconut : 0,
                            mango : 0
                        }
                    },
                    {
                        name : "owd",
                        inventory : {
                            apple : 0,
                            mango : 0
                        }
                    }
                ];
        
                expect(cheapestShipment(order, warehouses)).toEqual(result);
                expect(order).toEqual(orderResult);
                expect(warehouses).toEqual(warehousesResult);
            });
    
            test("with excess inventory", () => {
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
                    },
                    {
                        name : "dog",
                        inventory : {
                            apple : 10
                        }
                    }
                ];
        
                var result = [
                    {
                        dm : {
                            apple : 7
                        }
                    },
                    {
                        owd : {
                            apple : 3
                        }
                    }
                ];
                
                var orderResult = {
                    apple : 0
                };
    
                var warehousesResult = [
                    {
                        name : "dm",
                        inventory : {
                            apple : 0
                        }
                    },
                    {
                        name : "owd",
                        inventory : {
                            apple : 17
                        }
                    },
                    {
                        name : "dog",
                        inventory : {
                            apple : 10
                        }
                    }
                ];
        
                expect(cheapestShipment(order, warehouses)).toEqual(result);
                expect(order).toEqual(orderResult);
                expect(warehouses).toEqual(warehousesResult);
            });

            test("with excess inventory and large order", () => {
                var order = {
                    apple : 10,
                    mango : 20,
                    watermelon : 40,
                    book : 3
                };
        
                var warehouses = [
                    {
                        name : "dm",
                        inventory : {
                            apple : 7,
                            mango : 3,
                            watermelon : 8
                        }
                    },
                    {
                        name : "owd",
                        inventory : {
                            apple : 20,
                            watermelon : 50
                        }
                    },
                    {
                        name : "dog",
                        inventory : {
                            apple : 10,
                            book : 20,
                            mango : 40
                        }
                    }
                ];
        
                var result = [
                    {
                        dm : {
                            apple : 7,
                            mango : 3,
                            watermelon : 8
                        }
                    },
                    {
                        owd : {
                            apple : 3,
                            watermelon : 32,
                        }
                    },
                    {
                        dog : {
                            book : 3,
                            mango : 17
                        }
                    }
                ];
                
                var orderResult = {
                    apple : 0,
                    mango : 0,
                    watermelon : 0,
                    book : 0
                };
    
                var warehousesResult = [
                    {
                        name : "dm",
                        inventory : {
                            apple : 0,
                            mango : 0,
                            watermelon : 0
                        }
                    },
                    {
                        name : "owd",
                        inventory : {
                            apple : 17,
                            watermelon : 18
                        }
                    },
                    {
                        name : "dog",
                        inventory : {
                            apple : 10,
                            book : 17,
                            mango : 23
                        }
                    }
                ];
        
                expect(cheapestShipment(order, warehouses)).toEqual(result);
                expect(order).toEqual(orderResult);
                expect(warehouses).toEqual(warehousesResult);
            });

            test("excess inventory and really big order", () => {
                expect(cheapestShipment(bigOrder, bigWarehouses)).toEqual(bigResult);
            });
        });
    });
    
    describe("orders that cannot be shipped" , () => {
        describe("multiple warehouses", () => {
            test("due to not enough inventory", () => {
                var order = {
                    apple : 10
                };
    
                var warehouses = [
                    {
                        name : "owd",
                        inventory : {
                            apple : 1
                        }
                    },
                    {
                        name : "ioi",
                        inventory : {
                            apple : 2
                        }
                    }
                ]
    
                expect(cheapestShipment(order, warehouses)).toEqual([]);
                expect(order).toEqual(order);
                expect(warehouses).toEqual(warehouses);
            });

            test("due to not enough inventory and large order", () => {
                var order = {
                    apple : 10,
                    mango : 20,
                    dragonfruit : 87,
                    coconut : 10
                };
    
                var warehouses = [
                    {
                        name : "owd",
                        inventory : {
                            apple : 1,
                            mango : 19
                        }
                    },
                    {
                        name : "ioi",
                        inventory : {
                            apple : 2,
                            dragonfruit: 20
                        }
                    },
                    {
                        name : "ouo",
                        inventory : {
                            coconut : 9
                        }
                    }
                ]
    
                expect(cheapestShipment(order, warehouses)).toEqual([]);
                expect(order).toEqual(order);
                expect(warehouses).toEqual(warehouses);
            });

            test("due to partial shipment", () => {
                var order = {
                    apple : 10
                };
    
                var warehouses = [
                    {
                        name : "dod",
                        inventory : {
                            apple : 5,
                            orange : 6
                        }
                    },
                    {
                        name : "aoa",
                        inventory : {
                            apple : 1,
                            orange :3
                        }
                    }
                ];
    
                expect(cheapestShipment(order, warehouses)).toEqual([]);
                expect(order).toEqual(order);
                expect(warehouses).toEqual(warehouses);
            });

            test("due to partial shipment and large order", () => {
                var order = {
                    apple : 10,
                    cabbage : 23,
                    orange : 10,
                    eggplant : 10
                };
    
                var warehouses = [
                    {
                        name : "dod",
                        inventory : {
                            apple : 5,
                            orange : 7
                        }
                    },
                    {
                        name : "aoa",
                        inventory : {
                            apple : 1,
                            orange :3,
                        }
                    },
                    {
                        name : "988",
                        inventory : {
                            eggplant : 10,
                            cabbage : 20
                        }
                    }
                ];
    
                expect(cheapestShipment(order, warehouses)).toEqual([]);
                expect(order).toEqual(order);
                expect(warehouses).toEqual(warehouses);
            });
        });

        describe("single warehouse" , () => {
            test("due to not enough inventory", () => {
                var order = {
                    apple : 10
                };
    
                var warehouses = [
                    {
                        name : "owd",
                        inventory : {
                            apple : 1
                        }
                    }
                ];
    
                expect(cheapestShipment(order, warehouses)).toEqual([]);
                expect(order).toEqual(order);
                expect(warehouses).toEqual(warehouses);
            });

            test("due to not enough inventory and large order", () => {
                var order = {
                    apple : 10,
                    orange : 20,
                    mango : 30,
                    pear : 40
                };

                var warehouses = [
                    {
                        name : "pop",
                        inventory : {
                            apple : 1,
                            orange : 2,
                            pear : 20
                        }
                    }
                ];

                expect(cheapestShipment(order, warehouses)).toEqual([]);
                expect(order).toEqual(order);
                expect(warehouses).toEqual(warehouses);
            });

            test("due to partial shipment", () => {
                var order = {
                    apple : 10
                };
    
                var warehouses = [
                    {
                        name : "dod",
                        inventory : {
                            apple : 9
                        }
                    }
                ];
    
                expect(cheapestShipment(order, warehouses)).toEqual([]);
                expect(order).toEqual(order);
                expect(warehouses).toEqual(warehouses);
            });

            test("due to partial shipment and large order", () => {
                var order = {
                    apple : 10,
                    orange : 20,
                    mango : 30,
                    pear : 40
                };
    
                var warehouses = [
                    {
                        name : "dod",
                        inventory : {
                            apple : 9,
                            pear : 20,
                            mango : 20
                        }
                    }
                ];
    
                expect(cheapestShipment(order, warehouses)).toEqual([]);
                expect(order).toEqual(order);
                expect(warehouses).toEqual(warehouses);
            });
        });
    });
});
