const { Post } = require('../models');

const postData = [
    {
        title: "Title 1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos, impedit maxime non quo libero sed, minima modi, enim debitis quas dolores numquam voluptas earum autem fugiat voluptatibus fuga. Minima.",
        user_id: 1
    },
    {
        title: "Title 2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos, impedit maxime non quo libero sed, minima modi, enim debitis quas dolores numquam voluptas earum autem fugiat voluptatibus fuga. Minima.",
        user_id: 2
    },
    {
        title: "Title 3",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos, impedit maxime non quo libero sed, minima modi, enim debitis quas dolores numquam voluptas earum autem fugiat voluptatibus fuga. Minima.",
        user_id: 2

    },
    {
        title: "Title 4",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos, impedit maxime non quo libero sed, minima modi, enim debitis quas dolores numquam voluptas earum autem fugiat voluptatibus fuga. Minima.",
        user_id: 5
    },
    {
        title: "Title 5",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos, impedit maxime non quo libero sed, minima modi, enim debitis quas dolores numquam voluptas earum autem fugiat voluptatibus fuga. Minima.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;