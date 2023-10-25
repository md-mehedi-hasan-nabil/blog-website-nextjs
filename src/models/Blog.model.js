const { Schema, default: mongoose } = require("mongoose");

const blogSchema = new Schema({
    title: String,
    author: String,
    content: String,
    tags: [String],
    views: Number,
    likes: Number,
    image: String,
    comments: [Object],
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    active: Boolean,
});

const BlogModel = mongoose.model("blog", blogSchema);

module.exports = BlogModel

// "id": 1,
//             "title": "Introduction to Machine Learning",
//             "author": "John Doe",
//             "date": "2022-07-15",
//             "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//             "tags": ["machine learning", "artificial intelligence"],
//             "views": 1250,
//             "likes": 78,
//             "image": "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
//             "comments": [
//                 {
//                     "id": 1,
//                     "user": "Jane Smith",
//                     "comment": "Great introduction! Looking forward to more.",
//                     "date": "2022-07-16"
//                 },
//                 {
//                     "id": 2,
//                     "user": "Michael Brown",
//                     "comment": "Very informative. Thanks for sharing!",
//                     "date": "2022-07-17"
//                 }
//             ]