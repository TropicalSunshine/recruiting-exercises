/**
 * Finds the cheapest way an order can be shipped given an order object and an array of warehouses
 * @param {Object} orders - order object i.e. { apples : 5 }
 * @param {Array} warehouses - array of warehouses i.e. [{ name: owd, inventory: { apple: 1 } }]
 * @returns {Array} - array of shipments from different warehourses i.e. [{owd : { apple : 1}}, { dm : { apple : 5}}]
 */
const cheapestShipment = (
    orders = {}, //orders must be an arra
    warehouses = []
) => {
    if(!orders) return [];
    if(!warehouses) return [];

    if(!Array.isArray(warehouses)) return [];




}


module.exports = cheapestShipment;