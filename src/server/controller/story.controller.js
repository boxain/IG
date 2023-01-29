import storyModules from "../modules/story.modules";

/* IGStory GET */
const storiesGET = (req,res) => {
  storyModules.selectStories()
    .then((result) => res.send(result))
    .catch((err) => {res.send(err)})
}


/* IGStory POST */
const storiesPOST = (req, res) => {
  console.log(req.body);
  const insertValues = req.body
  storyModules.insertStories(insertValues)
    .then((result) => res.send(result))
    .catch((err) => { res.send(err) })
}


export default {storiesGET , storiesPOST }
