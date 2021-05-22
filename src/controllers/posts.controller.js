const conn = require('../database/database')

const validateImage = (img) => (/\.(jpg|png|gif)$/i).test(img)

//Get all elements
exports.getAllPosts = async (req, res) => {
  try {
    const query = 'SELECT * FROM blog_db.posts ORDER BY id DESC';

    const response = await conn(query);
    console.log(response)

    res.send({ "response": response });
  }
  catch (e) {
    console.error(e.message);
    res.status(413).send({ "Error": e.message });
  }
}

//Create a element
exports.createPost = async (req, res) => {
  try {
    if (!req.body.title || !req.body.content || !req.body.category) {
      throw new Error("Some data is missing");
    }
    if (!validateImage(req.body.image)) {
      throw new Error("Error on image format")
    }

    const date = new Date()
    const query = 'INSERT INTO blog_db.posts (title, content, image, category, date) VALUES (?, ?, ?, ?, ?)';
    const response = await conn(query,
      [req.body.title, req.body.content,
      req.body.image, req.body.category, date]);

    const result = {
      ...req.body,
      id: response.insertId,
      date,
    }

    res.status(201).send(result);
  }
  catch (e) {
    console.error(e.message);
    res.status(413).send({ "Error": e.message });
  }
}

//Modify one element by id
exports.modifyPost = async (req, res) => {
  try {

    if (!req.params.id) {
      throw new Error("No id detected");
    }

    let query = 'SELECT * FROM blog_db.posts WHERE id = ?';
    let response = await conn(query, [req.params.id]);

    if (response.length == 0) {
      throw new Error("Id don't exist");
    }

    query = 'UPDATE blog_db.posts SET title = ?, content = ?, image = ?, category = ? WHERE id = ?';
    response = await conn(query, [req.body.title, req.body.content, req.body.image,
    req.body.category, req.params.id]);

    res.send({ "response": response.affectedRows });

  }
  catch (e) {
    console.error(e.message);
    res.status(413).send({ "Error": e.message });
  }
}

//Get one element by id
exports.getOne = async (req, res) => {
  try {
    if (!req.params.id) {
      throw new Error("No id detected");
    }

    const query = 'SELECT * FROM blog_db.posts WHERE id = ?';
    const response = await conn(query, [req.params.id]);

    if (response.length > 0) {
      res.send({ "response": response });

    } else {
      res.status(404).send()
    }

  }
  catch (e) {
    console.error(e.message);
    res.status(413).send({ "Error": e.message });
  }
}

//Delete One element
exports.deletePost = async (req, res) => {
  try {
    if (!req.params.id) {
      throw new Error("No id detected");
    }

    let query = 'DELETE FROM blog_db.posts where id = ?'
    await conn(query, [req.params.id]);

    query = 'SELECT * FROM blog_db.posts ORDER BY id DESC LIMIT 10';
    const response = await conn(query);

    res.status(204).send(response);
  }
  catch (e) {
    console.error(e.message);
    res.status(413).send({ "Error": e.message });
  }
}
