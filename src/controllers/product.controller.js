const db = require('../config/database');

exports.createProduct = async (req, res) => {
    const { product_name, quantity, price } = req.body;
    
    const { rows } = await db.query(
        'INSERT INTO products (productname, quantity, price) VALUES ($1, $2, $3)', 
        [product_name, quantity, price]
    );

    res.status(201).send({
        message: 'Product added successfully',
        body: {
            product: { product_name, quantity, price }
        },
    });

};

exports.listAllProducts = async (req, res) => {
    const response = await db.query( 'select * from products order by productname' );

    res.status(200).send(response.rows);
}

exports.listProductById = async (req, res) => {
    const productId = parseInt(req.params.id);

    const response = await db.query('select * from products where productid = $1', [productId]);

    res.status(200).send(response.rows);

}