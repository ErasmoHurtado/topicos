const express = require('express');
const router = express.Router();
const Post = require('../database/models/Post');

//INDEX
///api/posts/
router.get('/', (req, res) =>{
    //res.send("Holiiiiii")
    Post.findAll().then(posts => {
        res.json(posts);
    })

})

// CREATE

router.post('/', (req, res)=>{
    (async () => {
        //sync por default esta activado  
        await Post.sync({force: false});
        const jane = await Post.create({
          title: req.body.title,
          body: req.body.body
        }).then(post => {
            res.json(post);
            //console.log(jane.toJSON());
        })   
      })();
});

// READ 
///api/posts/:id

router.get('/:id', (req, res)=>{
    Post.findByPk(req.params.id).then(post =>{
        res.json(post);
    })
})


// UPDATE
///api/posts/:id

router.patch('/:id', (req, res)=>{
    (async () => {
        //sync por default esta activado  
        await Post.sync({force: false});
        await Post.update({
          title: req.body.title,
          body: req.body.body
        }, {
            where: {
                id: req.params.id
            }  
        }).then(result => {
            res.json(result);
            //console.log(jane.toJSON());
        })   
    })();
})

// DELETE
///api/posts/:id
router.delete('/:id', (req, res)=>{
    (async () => {
        //sync por default esta activado  
        await Post.sync({force: false});
        await Post.destroy({          
            where: {
                id: req.params.id
            }  
        }).then(result => {
            res.json(result);
            //console.log(jane.toJSON());
        })   
    })();
})

//Comentado el 18-4-22 Se debe descomentar si se quiere ocupar
module.exports = router;