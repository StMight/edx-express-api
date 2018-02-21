const store = require("../data/store.js");

module.exports = {
    getComments(req, res) {
        res.status(200).send(store.posts[req.params.postId].comments);
    },
    addComment(req, res) {
        let newId = store.posts[req.params.postId].comments.length;

        let comment = {
            id: newId,
            text: req.body.text
        };

        store.posts[req.params.postId].comments.push(comment);

        res.status(201).send(comment);
    },
    updateComment(req, res) {
        store.posts[req.params.postId].comments[req.params.commentId] = {
            id: req.params.commentId,
            text: req.body.text
        };

        res.status(200).send(store.posts[req.params.postId].comments[req.params.commentId])
    },
    removeComment(req, res) {
        store.posts[req.params.postId].comments.splice(req.params.commentId, 1);

        res.status(204).send();
    }
}