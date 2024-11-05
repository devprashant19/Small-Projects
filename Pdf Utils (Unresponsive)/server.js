const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static('public'))
const { MergeTwoPdfs, specimerge, speci_merge_one, merge_range, multiple_both, multiple_pdf } = require('./merge')

app.get('/twomerge', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/mergetwo.html'))
})
app.get('/specitwo', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/specifictwo.html'))
})

app.get('/specione', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/specificone.html'))
})

app.get('/multiple', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/multiplepdf.html'))
})

app.get('/multiboth', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/multipleboth.html'))
})

app.get('/range', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/mergerange.html'))
})

app.post('/specimergeone', upload.array('pdffiles', 1), async (req, res, next) => {
  let nm = await speci_merge_one(path.join(__dirname, req.files[0].path), req.body.num1, req.body.num2)
  res.redirect(`http://localhost:3000/static/${nm}.pdf`)
})

app.post('/specimergetwo', upload.array('pdffiles', 2), async (req, res, next) => {
  let nm = await specimerge(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), req.body.num1, req.body.num2)
  res.redirect(`http://localhost:3000/static/${nm}.pdf`)
})

app.post('/multipleboth', upload.array('pdffiles', 2), async (req, res, next) => {
  let nm = await multiple_both(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), req.body.num1, req.body.num2)
  res.redirect(`http://localhost:3000/static/${nm}.pdf`)
})

app.post('/multiplepdf', upload.array('pdffiles', 10), async (req, res, next) => {
  let arr = Array()
  for(let i=0;i<req.body.num;i++){
    arr.push(path.join(__dirname, req.files[i].path))
  }
  let nm = await multiple_pdf(arr)
  res.redirect(`http://localhost:3000/static/${nm}.pdf`)
})

app.post('/merge_range', upload.array('pdffiles', 2), async (req, res, next) => {
  let nm = await merge_range(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), req.body.num1, req.body.num2, req.body.num3, req.body.num4)
  res.redirect(`http://localhost:3000/static/${nm}.pdf`)
})

app.post('/mergetwo', upload.array('pdffiles', 2), async (req, res, next) => {
  let nm = await MergeTwoPdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
  res.redirect(`http://localhost:3000/static/${nm}.pdf`)
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})