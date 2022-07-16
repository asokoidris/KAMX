const Post = require('../model/post');



// CREATE A POST

exports.createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)

    } catch (err) {
        res.status(500).json(err)
    }
}

// UPDATE A POST

exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json('The post has been updated')
        } else {
            return
            res.status(403).json('You can update only your post')
        }
    } catch (err) {
        res.status(500).json(er)
    }
}
// DELETE A POST

exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOneAndDelete();
            res.status(200).json('The post has been delete')
        } else {
            return
            res.status(403).json('You can delete only your post')
        }
    } catch (err) {
        res.status(500).json(er)
    }
}
// LIKE A POST

exports.likesAndDislikePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } })
            res.status(200).json('Post has been liked')
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } })
            res.status(200).json('Post has been disliked')
        }
    } catch (err) {
        res.status(500).json(err)
    }
}


// GET A POST

exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
}

// GET TIMELINE POSTS

exports.timelinePosts = async (req, res) => {
    try{
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
               return post.find({ userId: friend })
            
            })
        );
        res.status(200).json(userPosts.concat(...friendPosts))
    }catch(err) {
        res.status(500).json(err)
    }
}