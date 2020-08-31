/**
 * Finds the cheapest way an order can be shipped given an order object and an array of warehouses
 * @param {Object} order - order object i.e. { apples : 5 }
 * @param {Array} warehouses - array of warehouses i.e. [{ name: owd, inventory: { apple: 1 } }]
 * @returns {Array} - array of shipments from different warehourses i.e. [{owd : { apple : 1}}, { dm : { apple : 5}}]
 */ 
const cheapestShipment = (
    order = {}, 
    warehouses = [] 
) => {
    if(!order) return [];
    if(!warehouses) return [];
    if(!Array.isArray(warehouses)) return [];

    
    // array of tuples
    // [ warehouse index, order item key]
    var tempStore = [];

    for(var item of Object.keys(order)){
        var itemsNeeded = order[item];

        for(var i = 0; i < warehouses.length; i++ ) {
            // check to see if warehouse has that item
            const { inventory } = warehouses[i];

            if(itemsNeeded <= 0) break;
            if(inventory[item] !== undefined ) {
                tempStore.push([ i, item ]);
                itemsNeeded -= inventory[item];
            }
        }

        // check to see if item in order can be fulfilled
        if(itemsNeeded > 0) return [];
    }

    // order can be fulfilled
    // fulfill order and update the warehouse
    
    // result
    var shipment = [];

    //sort tempStore by warehouse index
    tempStore.sort((a, b) => {
        return a[0] - b[0];
    });
    
    var prevIndex = 0;
    var shipmentEntry = {
        [ warehouses[tempStore[0][0]].name ] : {}
    };
    
    for(var store of tempStore) {

        const [ wIndex, item ] = store;
        const { name, inventory } = warehouses[wIndex];
        
        // if a new warehouse is reached then push the shipment entries into results
        // and begin a new shipment entry
        if(wIndex !== prevIndex) {
            shipment.push(shipmentEntry);

            shipmentEntry = {
                [ name ] : {}
            };
        }
        
        if( inventory[item] > order[item]){
            shipmentEntry[name][item] = order[item]; 
            inventory[item] -= order[item];
            order[item] = 0;
        } else {
            shipmentEntry[name][item] = inventory[item];
            order[item] -= inventory[item];
            inventory[item] = 0;
        }

        prevIndex = wIndex;
    }

    shipment.push(shipmentEntry);

    return shipment;
}


module.exports = cheapestShipment;
