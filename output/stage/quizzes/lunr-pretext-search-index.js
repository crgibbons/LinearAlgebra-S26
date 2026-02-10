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
},
{
  "id": "quiz-02",
  "level": "1",
  "url": "quiz-02.html",
  "type": "Worksheet",
  "number": "",
  "title": "Quiz 2: Multiplication and Matrices",
  "body": " Quiz 2: Multiplication and Matrices   You will have 2-3 minutes to answer this on your own on your sheet (numbers 4 and 5). Then your team will have 5-6 minutes to answer them as a team (numbers 104 and 105).  Your individiual grade, out of ten points, includes .5 points for each correctly bubbled\/unbubbled circle (minimum score is 1pt for being here).     Morally, zero times a matrix is zero. But to write this in a way that we can prove it, we need to write it formally. Suppose are positive integers, , , (the zeros matrix). Bubble in the option for every true statement.       None are true.       Same as before, but now .       None are true.     "
},
{
  "id": "quiz-02-3",
  "level": "2",
  "url": "quiz-02.html#quiz-02-3",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Morally, zero times a matrix is zero. But to write this in a way that we can prove it, we need to write it formally. Suppose are positive integers, , , (the zeros matrix). Bubble in the option for every true statement.       None are true.    "
},
{
  "id": "quiz-02-4",
  "level": "2",
  "url": "quiz-02.html#quiz-02-4",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Same as before, but now .       None are true.    "
},
{
  "id": "quiz-03",
  "level": "1",
  "url": "quiz-03.html",
  "type": "Worksheet",
  "number": "",
  "title": "Quiz 3: Logic Preliminaries",
  "body": " Quiz 3: Logic Preliminaries   You will have 2-3 minutes to answer this on your own on your sheet (numbers 6 and 7). Then your team will have 5-6 minutes to answer them as a team (numbers 106 and 107).  Your individiual grade, out of ten points, includes .5 points for each correctly bubbled\/unbubbled circle (minimum score is 1pt for being here).     Which of the following is a logical statement?   February 13, 2026 falls on Friday.  February 13, 2026 falls on Monday.  Green is the best color.  If every cat can read, then every cat can dance.  Linear algebra is more interesting than calculus.       Select the statements with truth value True .   The number one is positive or the number one is negative.  The number one is positive and the number one is negative.  It is not the case that an odd number is even.  The square of a real number cannot be negative.  The cube of a real number cannot be negative.     "
},
{
  "id": "quiz-03-3",
  "level": "2",
  "url": "quiz-03.html#quiz-03-3",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Which of the following is a logical statement?   February 13, 2026 falls on Friday.  February 13, 2026 falls on Monday.  Green is the best color.  If every cat can read, then every cat can dance.  Linear algebra is more interesting than calculus.    "
},
{
  "id": "quiz-03-4",
  "level": "2",
  "url": "quiz-03.html#quiz-03-4",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  Select the statements with truth value True .   The number one is positive or the number one is negative.  The number one is positive and the number one is negative.  It is not the case that an odd number is even.  The square of a real number cannot be negative.  The cube of a real number cannot be negative.    "
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
