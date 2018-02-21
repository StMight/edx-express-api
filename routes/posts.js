const store = require("../data/store.js");

module.exports = {
    getPosts(req, res) {
        res.status(200).send(store.posts);
    },
    addPost(req, res) {
        let newId = store.posts.length;

        let newPost = {
            id: newId,
            name: req.body.name,
            url: req.body.url,
            text: req.body.text,
            comments: []
        };

        store.posts.push(newPost);

        res.status(201).send({ id: newId });
    },
    updatePost(req, res) {
        store.posts[req.params.postId] = {
            id: req.params.postId,
            name: req.body.name,
            url: req.body.url,
            text: req.body.text,
            comments: req.body.comments
        };

        res.status(200).send(store.posts[req.params.id])
    },
    removePost(req, res) {
        store.posts.splice(req.params.postId, 1);

        res.status(204).send();
    }
}