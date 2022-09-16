const {User,Cart,Product}= require('./models');
const Sequelize =require('sequelize');
const Op = Sequelize.Op                   // SQL operators are included in the library in the form of the Op object.

// Find all users with their associated Cart
// Raw SQL: SELECT * FROM "Users" JOIN "Carts" ON "Carts"."userId" = "Users".id;

const findAllWithCart = async () => {
    try{
        const users = await User.findAll({
            include: [{                             //eager loading: querying data from multiple models at the same time
                model: Cart,

            }]
        });
        console.log("All users with their associated cart: ", JSON.stringify(users, null, 4));
        const carts = await Cart.findAll({

            include: [{                             //eager loading: querying data from multiple models at the same time
                model: Product,

            }]
        });
        console.log("All Products with their associated cart: ", JSON.stringify(carts, null, 4));
     }
    catch (error){
        console.log("Error occured during association!!");

    }

}

const run = async () => {
    await findAllWithCart()
    await process.exit()
}

run()