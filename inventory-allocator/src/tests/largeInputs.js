
var bigOrder = {
    apple : 10, //
    mango : 20, //
    coconut : 30, //
    orange : 40, //
    cabbage : 9, //
    passionfruit : 5, //
    pencil : 8, //
    paper : 3,
    keyboard : 6, //
    staples : 9 //
};

var bigWarehouses = [
    {
        name : "japan",
        inventory  : {
            mango : 8,
            orange : 4
        }
    },
    {
        name : "korea",
        inventory : {
            pencil : 10,
            apple : 2,
            passionfruit : 3
        }
    },
    {
        name : "china",
        inventory : {
            pencil : 20,
            passionfruit: 2,
            mango : 12
        }
    },
    {
        name : "vietnam",
        inventory : {
            mango : 20,
            coconut : 40
        }
    },
    {
        name : "laos",
        inventory : {
            cabbage : 10,
            staples : 10
        }
    },
    {
        name : "canada",
        inventory : {
            apple: 8,
            keyboard : 10,
            orange : 50,
            paper : 3
        }
    }
];

var bigResult = [
    {
        japan : {
            mango : 8,
            orange : 4
        }
    },
    {
        korea : {
            pencil : 8,
            apple : 2,
            passionfruit : 3
        }
    },
    {
        china : {
            passionfruit : 2,
            mango : 12
        }
    },
    {
        vietnam : {
            coconut : 30
        }
    },
    {
        laos : {
            cabbage : 9,
            staples : 9
        }
    },
    {
        canada : {
            apple : 8,
            keyboard : 6,
            orange : 36,
            paper : 3
        }
    }
]

module.exports = {
    bigOrder,
    bigWarehouses,
    bigResult
}