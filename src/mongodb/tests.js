use loja;

db.produtos.insert({id: 1, name: "Produto 1"});

db.produtos.find().pretty();

db.produtos.insertMany([{id: 2, name: "Produto 2"},{id: 3, name: "Produto 2"}]);

db.produtos.update({id: 1}, {$set: {name: "Produto alterado"}});

db.produtos.remove({id: 1}, 1);

db.produtos.find({$and: [{id: 2}, {name: "Produto 2"}]});

db.produtos.find({$or: [{id: 1}, {name: "Produto 2"}]});

db.produtos.find({name: {$exists: true}});

db.produtos.find({name: {$not: {$eq: "Produto 2"}}});

db.produtos.find({$nor: [
    {name: "Produto 2"},
    {id: 3}
]});


db.produtos.find({name: {$eq: "Produto 2"}});

db.produtos.insertMany([
    {name: "Produto 3", price: 20.00},
    {name: "Produto 4", price: 15.00},
    {name: "Produto 5", price: 10.00}
]);

db.produtos.find({price: {$gte: 10}});

db.produtos.find({}, {name: 1});

db.produtos.find().sort({price: -1});

db.produtos.find().limit(2);
db.produtos.find().skip(2);

db.produtos.find().count();

db.produtos.update({price: 20}, {$inc: {price: 10}});

db.teste.find();
db.teste.drop();