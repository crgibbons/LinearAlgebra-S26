var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Article",
  "number": "",
  "title": "In-Class Activities",
  "body": " In-Class Activities    Courtney Gibbons Department of Mathematics and Statistics Hamilton College  Last Updated:         These activities are designed to be used in class to help students understand the material. They are not graded, but students are encouraged to work on them in groups and ask the instructor for help when needed.   PreTeXt      "
},
{
  "id": "matrix-mult-mvp-3",
  "level": "2",
  "url": "matrix-mult-mvp.html#matrix-mult-mvp-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Let \\[ A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\quad \\text{and} \\quad B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}. \\] Compute the matrix product \\(AB\\).   "
},
{
  "id": "matrix-mult-mvp-4",
  "level": "2",
  "url": "matrix-mult-mvp.html#matrix-mult-mvp-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Compute the matrix product \\(BA\\).   "
},
{
  "id": "matrix-mult-mvp-5",
  "level": "2",
  "url": "matrix-mult-mvp.html#matrix-mult-mvp-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Compare your answers from the previous two problems. What do you notice about matrix multiplication?   "
},
{
  "id": "matrix-mult-mvp-6",
  "level": "2",
  "url": "matrix-mult-mvp.html#matrix-mult-mvp-6",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Let \\[ A = \\begin{pmatrix} 2 & -1 \\\\ 0 & 3 \\end{pmatrix} \\quad \\text{and} \\quad \\vec{v} = \\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}. \\] Compute the matrix–vector product \\(A\\vec{v}\\).   "
},
{
  "id": "matrix-mult-mvp-7",
  "level": "2",
  "url": "matrix-mult-mvp.html#matrix-mult-mvp-7",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Describe, in words, what the matrix–vector product does to the vector \\(\\vec{v}\\).   "
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
