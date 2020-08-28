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

    for(let w of warehouses) {

        var shipmentEntry = {
            [ w.name ] : {}
        };

        for(var item of Object.keys(orders)){

            if(orders[item] === 0) continue;
            if(w.inventory[item] !== undefined){

                if(orders[item] > w.inventory[item]){
                    shipmentEntry[w.name][item] = w.inventory[item];

                    orders[item] -= w.inventory[item];
                    w.inventory[item] = 0;

                } else {
                    shipmentEntry[w.name][item] = orders[item];
                    w.inventory[item] -= orders[item];
                    orders[item] = 0;
                }

            }
        }

        if(Object.keys(shipmentEntry[w.name]).length > 0) shipment.push(shipmentEntry);
    }

    return shipment;

}


module.exports = cheapestShipment;