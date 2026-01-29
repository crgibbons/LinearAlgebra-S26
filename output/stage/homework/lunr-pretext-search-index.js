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
  "id": "hw-hw01",
  "level": "1",
  "url": "hw-hw01.html",
  "type": "Worksheet",
  "number": "",
  "title": "Chapter 1 Homework Problems.",
  "body": " Chapter 1 Homework Problems.   These are the homework problems for Chapter 1. For due dates for different sections of the book, see Blackboard.     Section 1.1: 14 and 34      Section 1.2: 4, 6, 8, 13 The matrices for 6 and 8 are described on the previous page.      Section 1.3: 2, 11, 22, 24      Section 1.4: 1, 3, 17      Section 1.5: 9, 11, 14    "
},
{
  "id": "hw-hw01-3",
  "level": "2",
  "url": "hw-hw01.html#hw-hw01-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Section 1.1: 14 and 34   "
},
{
  "id": "hw-hw01-4",
  "level": "2",
  "url": "hw-hw01.html#hw-hw01-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Section 1.2: 4, 6, 8, 13 The matrices for 6 and 8 are described on the previous page.   "
},
{
  "id": "hw-hw01-5",
  "level": "2",
  "url": "hw-hw01.html#hw-hw01-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Section 1.3: 2, 11, 22, 24   "
},
{
  "id": "hw-hw01-6",
  "level": "2",
  "url": "hw-hw01.html#hw-hw01-6",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Section 1.4: 1, 3, 17   "
},
{
  "id": "hw-hw01-7",
  "level": "2",
  "url": "hw-hw01.html#hw-hw01-7",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Section 1.5: 9, 11, 14   "
},
{
  "id": "hw-hw0L",
  "level": "1",
  "url": "hw-hw0L.html",
  "type": "Worksheet",
  "number": "",
  "title": "Logic Problems.",
  "body": " Logic Problems.   These are the homework problems for the Logic booklet . For due dates for different sections of the book, see Blackboard.     Logic: Connectives Exercises (all)      Logic: Quantifiers Exercises (all)      Logic: Proofs Exercises (all)     There are challenge exercises in this booklet (Chapter 4), which are good practice! There's also a Style Guide (Appendix A) and a little more information about sets if you haven't seen things like unions and intersections before (Appendix B).   "
},
{
  "id": "hw-hw0L-3",
  "level": "2",
  "url": "hw-hw0L.html#hw-hw0L-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Logic: Connectives Exercises (all)   "
},
{
  "id": "hw-hw0L-4",
  "level": "2",
  "url": "hw-hw0L.html#hw-hw0L-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Logic: Quantifiers Exercises (all)   "
},
{
  "id": "hw-hw0L-5",
  "level": "2",
  "url": "hw-hw0L.html#hw-hw0L-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Logic: Proofs Exercises (all)   "
},
{
  "id": "hw-hw0L-6",
  "level": "2",
  "url": "hw-hw0L.html#hw-hw0L-6",
  "type": "Remark",
  "number": "1",
  "title": "",
  "body": " There are challenge exercises in this booklet (Chapter 4), which are good practice! There's also a Style Guide (Appendix A) and a little more information about sets if you haven't seen things like unions and intersections before (Appendix B).  "
},
{
  "id": "hw-hw02",
  "level": "1",
  "url": "hw-hw02.html",
  "type": "Worksheet",
  "number": "",
  "title": "Chapter 2 Homework Problems.",
  "body": " Chapter 2 Homework Problems.   These are the homework problems for Chapter 2. For due dates for different sections of the book, see Blackboard.     Section 2.1: 13, 15      Section 2.2: 11, 13      Section 2.3: 4    "
},
{
  "id": "hw-hw02-3",
  "level": "2",
  "url": "hw-hw02.html#hw-hw02-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Section 2.1: 13, 15   "
},
{
  "id": "hw-hw02-4",
  "level": "2",
  "url": "hw-hw02.html#hw-hw02-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Section 2.2: 11, 13   "
},
{
  "id": "hw-hw02-5",
  "level": "2",
  "url": "hw-hw02.html#hw-hw02-5",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Section 2.3: 4   "
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
