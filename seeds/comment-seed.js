const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "cool!",
        user_id: 2,
        post_id: 3,
        
    },
    {
        comment_text: "awesome!",
        user_id: 2,
        post_id: 5,
        
    },
    {
        comment_text: "first!",
        user_id: 4,
        post_id: 1,
        
    },
    {
        comment_text: "congrats!",
        user_id: 3,
        post_id: 5,
        
    },
    {
        comment_text: "nice!",
        user_id: 3,
        post_id: 4,
        
    },
    {
        comment_text: "i agree!",
        user_id: 2,
        post_id: 1,
        
    },
    {
        comment_text: "very cool",
        user_id: 5,
        post_id: 3,
        
    },
    {
        comment_text: "great job!",
        user_id: 2,
        post_id: 1,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;