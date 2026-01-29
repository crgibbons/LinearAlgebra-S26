var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Courtney Gibbons Department of Mathematics and Statistics Hamilton College  Last Updated:       "
},
{
  "id": "quiz-01",
  "level": "1",
  "url": "quiz-01.html",
  "type": "Worksheet",
  "number": "",
  "title": "Quiz 1: Matrix Operations",
  "body": " Quiz 1: Matrix Operations   You will have 2-3 minutes to answer these on your own. Then your team will have 5-6 minutes to answer them as a team.  Your individiual grade, out of ten points, includes 1 point for being present and 1.5 points for each correct answer (individual or team).  For the following three questions, select A for yes, B for no, or C if you really have no idea.     Every matrix satisfies .      This is true:       The additive inverse of is     "
},
{
  "id": "quiz-01-3",
  "level": "2",
  "url": "quiz-01.html#quiz-01-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Every matrix satisfies .   "
},
{
  "id": "quiz-01-4",
  "level": "2",
  "url": "quiz-01.html#quiz-01-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  This is true:    "
},
{
  "id": "quiz-01-5",
  "level": "2",
  "url": "quiz-01.html#quiz-01-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  The additive inverse of is    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
