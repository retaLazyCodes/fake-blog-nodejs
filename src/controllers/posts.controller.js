import { Post } from '../models/Post'
import { Category } from '..//models/Category'

const validateImage = (img) => (/\.(jpg|png|gif)$/i).test(img)

//Get all elements
exports.getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [{
        model: Category
      }]
    })
    if (allPosts.length > 0) {
      res.json({
        data: allPosts
      })
    }
  } catch (e) {
    console.error(e.message);
    res.status(413).send({ "Error": e.message });
  }
}

//Create a element
exports.createPost = async (req, res) => {
  try {
    if (!req.body.title || !req.body.content || !req.body.categoryId) {
      throw new Error("Some data is missing");
    }
    if (!validateImage(req.body.image)) {
      throw new Error("Error on image format")
    }

    const { title, content, categoryId, image } = req.body;
    const date = new Date()
    const newPost = await Post.create({
      title,
      content,
      categoryId,
      image,
      date
    }, {
      fields: ['title', 'content', 'categoryId', 'image', 'date']
    })
    if (newPost) {
      res.status(201).json({
        message: "Post created successfully",
        data: newPost
      })
    }

  }
  catch (e) {
    console.error(e.message);
    res.status(400).json({ "Error": e.message });
  }
}

//Modify one element by id
exports.modifyPost = async (req, res) => {
  try {

    if (!req.params.id) {
      throw new Error("No id detected");
    }
    if (!validateImage(req.params.image)) {
      throw new Error("Error on image format")
    }

    const { id } = req.params;
    const { title, content, image, categoryId } = req.body;

    const posts = await Post.findAll({
      attributes: ['id', 'title', 'content', 'image', 'categoryId'],
      where: {
        id
      }
    });

    if (posts.length > 0) {
      posts.forEach(async post => {
        await post.update({
          title,
          content,
          image,
          categoryId
        });
      });
    }

    return res.json({
      message: 'Post updated successfully',
      data: posts
    });

  }
  catch (e) {
    console.log(e);
    res.status(500).json({
      message: 'Something goes wrong',
      data: {}
    });
  }
}

//Get one element by id
exports.getPost = async (req, res) => {
  try {
    if (!req.params.id) {
      throw new Error("No id detected");
    }

    const { id } = req.params;
    const post = await Post.findOne({
      include: [{
        model: Category,
        where: { id }
      }]
    });
    res.json({
      data: post
    });

  }
  catch (e) {
    console.error(e.message);
    res.status(400).send({ "Error": e.message });
  }
}

//Delete One element
exports.deletePost = async (req, res) => {
  try {
    if (!req.params.id) {
      throw new Error("No id detected");
    }
    const { id } = req.params;
    const deleteRowCount = await Post.destroy({
      where: {
        id
      }
    });
    res.status(204).json({
      message: 'Project deleted successfully',
      count: deleteRowCount
    });
  }
  catch (e) {
    console.error(e.message);
    res.status(413).send({ "Error": e.message });
  }
}
