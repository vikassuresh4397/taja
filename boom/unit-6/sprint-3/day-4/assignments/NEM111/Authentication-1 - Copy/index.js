const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

// Swagger configuration
const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Book Management API',
      description: 'API documentation for managing a collection of books',
      version: '1.0.0',
    },
  },
  apis: ['./app.js'], // Specify the file that contains your API routes
};

const specs = swaggerJsdoc(options);

// Serve Swagger API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// API routes
/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     description: Retrieve a list of all books
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
app.get('/api/books', (req, res) => {
  // Your code to get all books
  res.json(books);
});

/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     description: Retrieve a specific book by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the book to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       '404':
 *         description: Book not found
 */
app.get('/api/books/:id', (req, res) => {
  const bookId = req.params.id;
  // Your code to get a book by ID
  res.json(book);
});

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create a new book
 *     description: Create a new book with the provided data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookInput'
 *     responses:
 *       '201':
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 */
app.post('/api/books', (req, res) => {
  const newBook = req.body;
  // Your code to create a new book
  res.status(201).json(createdBook);
});

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Update a book
 *     description: Update an existing book with new data
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the book to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BookInput'
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       '404':
 *         description: Book not found
 */
app.put('/api/books/:id', (req, res) => {
  const bookId = req.params.id;
  const updatedBook = req.body;
  // Your code to update a book
  res.json(updatedBook);
});

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Delete a book
 *     description: Delete a specific book by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the book to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: No Content
 *       '404':
 *         description: Book not found
 */
app.delete('/api/books/:id', (req, res) => {
  const bookId = req.params.id;
  // Your code to delete a book
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// const express = require('express');
// const app=express();
// const {connection} = require("./db");
// const {userRouter}=require("./routes/user.route");

// app.use(express.json());
// app.use("/boom",userRouter)
// app.listen(process.env.port,async()=>{
//     try{
//       await connection;
//       console.log("Running at port 3000")
//       console.log("Connected to the DB")

//     }catch(e){
//         console.log(e);
//         console.log("Something is wrong")
//     }
// })

