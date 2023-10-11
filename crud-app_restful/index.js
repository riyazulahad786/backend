import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/todo", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));



// import express from 'express';
// import todoRoutes from './routes/todos.mjs'

// import bodyParser from 'body-parser';

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use("/todos", todoRoutes);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// import express from 'express';
// import todoRoutes from './routes/todos.mjs'
// import bodyParser from 'body-parser';
// const app = express();
// const port = process.env.PORT || 5000;

// app.use("/todos",todoRoutes);
// app.use(bodyParser.json());



// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

