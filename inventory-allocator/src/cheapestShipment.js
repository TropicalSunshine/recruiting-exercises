/**
 * Finds the cheapest way an order can be shipped given an order object and an array of warehouses
 * @param {Object} orders - order object i.e. { apples : 5 }
 * @param {Array} warehouses - array of warehouses i.e. [{ name: owd, inventory: { apple: 1 } }]
 * @returns {Array} - array of shipments from different warehourses i.e. [{owd : { apple : 1}}, { dm : { apple : 5}}]
 */ 
const cheapestShipment = (
    orders = {}, 
    warehouses = [] 
) => {
    if(!orders) return [];
    if(!warehouses) return [];
    if(!Array.isArray(warehouses)) return [];

    var shipment = [];

    var tempStore = [
        //tuples
        // [ warehouse index, order item key]
    ]

    for(var item of Object.keys(orders)){
        var itemsNeeded = orders[item];

        for(var i = 0; i < warehouses.length; i++ ) {
            //check to see if warehouse has that item

            if(itemsNeeded <= 0) break;
            if(warehouses[i].inventory[item] !== undefined ) {
                tempStore.push([ i, item ]);
                itemsNeeded -= warehouses[i].inventory[item];
            }
        }

        //check to see if item in order can be fulfilled
        if(itemsNeeded > 0) return [];
    }

    //order can be fullfilled
    //fullfil order and update the warehouse
    var shipment = [];

    for(var store of tempStore) {
        const [ wIndex, item ] = store;

        const { name, inventory } = warehouses[wIndex];

        var shipmentEntry = {
            [ name ] : {}
        }
        
        if( inventory[item] > orders[item]){
            shipmentEntry[name][item] = orders[item]; 
            inventory[item] -= orders[item];
            orders[item] = 0;
        } else {
            shipmentEntry[name][item] = inventory[item];
            orders[item] -= inventory[item];
            inventory[item] = 0;
        }

        
        shipment.push(shipmentEntry);
    }


    return shipment;

}


module.exports = cheapestShipment;