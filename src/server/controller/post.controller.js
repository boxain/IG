import postModules from "../modules/post.modules";

/* IGPosts GET */
const postsGET = (req, res) => {
  postModules.selectPosts()
    .then((result) => res.send(result))
    .catch((err) => { res.send(err) })
}


/* IGPosts POST */
const postsPOST = (req, res) => {
  const insertValues = req.body
  postModules.insertPosts(insertValues)
    .then((result) => res.send(result))
    .catch((err) => { res.send(err) })
}

export default { postsGET , postsPOST}
