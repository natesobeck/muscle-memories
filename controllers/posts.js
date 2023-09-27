import { Post } from "../models/post.js"

function index(req, res) {
  Post.find({})
  .populate('author')
  .then(posts => {
    res.render('posts/index', {
      posts,
      title: 'All Posts'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
  req.body.author = req.user.profile._id
  Post.create(req.body)
  .then(post => {
    res.redirect('/posts')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Post.findById(req.params.postId)
  .populate('author')
  .populate({
    path: 'comments',
    populate: {
      path: 'author'
    }
  })
  .then(post => {
    res.render('posts/show', {
      post,
      title: 'Post Details'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts')
  })
}

function deletePost(req, res) {
  Post.findByIdAndDelete(req.params.postId)
  .then(post => {
    res.redirect('/posts')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function createComment(req, res) {
  req.body.author = req.user.profile._id
  Post.findById(req.params.postId)
  .then(post => {
    post.comments.push(req.body)
    post.save()
    .then(() => {
      res.redirect(`/posts/${post._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/posts/${post._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts')
  })
}

function updateComment(req, res) {
  Post.findById(req.params.postId)
  .then(post => {
    const comment = post.comments.id(req.params.commentId)
    if (comment.author.equals(req.user.profile._id)) {
      comment.set(req.body)
      post.save()
      .then(() => {
        res.redirect(`/posts/${post._id}`)
      })
    }
  })
}

// deleteComment(req, res) {

// }

export {
  index,
  create,
  show,
  deletePost as delete,
  createComment,
  updateComment,
  // deleteComment,
}