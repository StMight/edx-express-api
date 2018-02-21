const express = require("express");

const posts = require("./posts");
const comments = require("./comments");

module.exports = (app) => {
    const routes = express.Router();

    app.use("/", routes);

    routes.get("/posts", (req, res) => {
        posts.getPosts(req, res);
    });

    routes.post("/posts", (req, res) => {
        posts.addPost(req, res);
    });

    routes.put("/posts/:postId", (req, res) => {
        posts.updatePost(req, res);
    });

    routes.delete("/posts/:postId", (req, res) => {
        posts.removePost(req, res);
    });

    ///////////////////////////////////////////////////////////////////

    routes.get("/posts/:postId/comments", (req, res) => {
        comments.getComments(req, res);
    });

    routes.post("/posts/:postId/comments", (req, res) => {
        comments.addComment(req, res);
    });

    routes.put("/posts/:postId/comments/:commentId", (req, res) => {
        comments.updateComment(req, res);
    });

    routes.delete("/posts/:postId/comments/:commentId", (req, res) => {
        comments.removeComment(req, res);
    });
}