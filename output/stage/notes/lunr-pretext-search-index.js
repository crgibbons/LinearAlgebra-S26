var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1  This week we covered the following topics:  "
},
{
  "id": "week02",
  "level": "1",
  "url": "week02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2: Matrix Operations and Theorems",
  "body": " Week 2: Matrix Operations and Theorems   Matrix Addition   Matrix Addition  Let and be matrices in . The sum of and , denoted , is the matrix where for all and .    Additive Identity  Let , and let be the zero matrix, meaning each entry of is zero. Then .    For all and , . By definition of matrix equality, . The argument for is identical.    These properties should feel familiar: matrix addition behaves exactly like addition of real numbers.  One guiding principle of linear algebra is that we want matrices to behave like numbers whenever possible. When they fail to do so, that failure usually signals something important.    Every matrix has an additive inverse, but this is not true for multiplicative inverses. We're going to get into that more, and more, and more...     Scalar Multiplication and Linear Combinations   Scalar Multiplication  Let and let . The scalar multiple of by , denoted , is the matrix where .    Compute , where     Linear Combination  Given matrices and scalars , the matrix is called a linear combination of the matrices .    Linear combinations are one of the most important ideas in this course. We will return to them again and again, in many different disguises.  Whenever you see an expression like , mentally translate it as “a weighted sum.”     Algebraic Properties of Matrix Operations   Properties of Matrix Addition  Let . Then:     There exists a unique additive identity  Each matrix has a unique additive inverse     Properties of Scalar Multiplication  For all and         Properties of Matrix Multiplication  For all matrices of appropriate sizes,       There exist identity matrices and such that .      Matrix multiplication is generally not commutative . Order matters, and we must pay attention to it.     Matrix–Vector Products and Linear Systems   Consistency and Linear Combinations  A linear system is consistent if and only if can be expressed as a linear combination of the columns of .    If has a solution , then . Conversely, any such linear combination defines a solution.    This theorem provides a powerful translation: solving equations is equivalent to building vectors from columns.  We will repeatedly use this shift in perspective!     Matrix Inverses   Matrix Inverse  Let . If there exists a matrix such that , then is called the inverse of . We will prove that the inverse is unique, and that means we can write it unambiguously (when it exists).    Multiplicative inverses are much rarer than additive inverses. Understanding when they exist is one of the central goals of the course.    The matrix has inverse .  This makes it easy to solve ; indeed, using the defition of the multiplicative inverse of and the associativity of matrix multiplication, we find     Singular Matrix  A square matrix that does not have an inverse is called singular .    Singular matrices will reappear when we study determinants and linear dependence!    "
},
{
  "id": "week02-matrix-addition-2",
  "level": "2",
  "url": "week02.html#week02-matrix-addition-2",
  "type": "Definition",
  "number": "1",
  "title": "Matrix Addition.",
  "body": " Matrix Addition  Let and be matrices in . The sum of and , denoted , is the matrix where for all and .  "
},
{
  "id": "week02-matrix-addition-3",
  "level": "2",
  "url": "week02.html#week02-matrix-addition-3",
  "type": "Proposition",
  "number": "2",
  "title": "Additive Identity.",
  "body": " Additive Identity  Let , and let be the zero matrix, meaning each entry of is zero. Then .  "
},
{
  "id": "week02-matrix-addition-4",
  "level": "2",
  "url": "week02.html#week02-matrix-addition-4",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " For all and , . By definition of matrix equality, . The argument for is identical.  "
},
{
  "id": "week02-matrix-addition-5",
  "level": "2",
  "url": "week02.html#week02-matrix-addition-5",
  "type": "Remark",
  "number": "3",
  "title": "",
  "body": " These properties should feel familiar: matrix addition behaves exactly like addition of real numbers.  One guiding principle of linear algebra is that we want matrices to behave like numbers whenever possible. When they fail to do so, that failure usually signals something important.  "
},
{
  "id": "week02-matrix-addition-6",
  "level": "2",
  "url": "week02.html#week02-matrix-addition-6",
  "type": "Remark",
  "number": "4",
  "title": "",
  "body": " Every matrix has an additive inverse, but this is not true for multiplicative inverses. We're going to get into that more, and more, and more...  "
},
{
  "id": "week01-scalar-multiplication-2",
  "level": "2",
  "url": "week02.html#week01-scalar-multiplication-2",
  "type": "Definition",
  "number": "5",
  "title": "Scalar Multiplication.",
  "body": " Scalar Multiplication  Let and let . The scalar multiple of by , denoted , is the matrix where .  "
},
{
  "id": "week01-scalar-multiplication-3",
  "level": "2",
  "url": "week02.html#week01-scalar-multiplication-3",
  "type": "Example",
  "number": "6",
  "title": "",
  "body": " Compute , where   "
},
{
  "id": "week01-scalar-multiplication-4",
  "level": "2",
  "url": "week02.html#week01-scalar-multiplication-4",
  "type": "Definition",
  "number": "7",
  "title": "Linear Combination.",
  "body": " Linear Combination  Given matrices and scalars , the matrix is called a linear combination of the matrices .  "
},
{
  "id": "week01-scalar-multiplication-5",
  "level": "2",
  "url": "week02.html#week01-scalar-multiplication-5",
  "type": "Remark",
  "number": "8",
  "title": "",
  "body": " Linear combinations are one of the most important ideas in this course. We will return to them again and again, in many different disguises.  Whenever you see an expression like , mentally translate it as “a weighted sum.”  "
},
{
  "id": "week01-algebraic-properties-2",
  "level": "2",
  "url": "week02.html#week01-algebraic-properties-2",
  "type": "Theorem",
  "number": "9",
  "title": "Properties of Matrix Addition.",
  "body": " Properties of Matrix Addition  Let . Then:     There exists a unique additive identity  Each matrix has a unique additive inverse   "
},
{
  "id": "week01-algebraic-properties-3",
  "level": "2",
  "url": "week02.html#week01-algebraic-properties-3",
  "type": "Theorem",
  "number": "10",
  "title": "Properties of Scalar Multiplication.",
  "body": " Properties of Scalar Multiplication  For all and       "
},
{
  "id": "week01-algebraic-properties-4",
  "level": "2",
  "url": "week02.html#week01-algebraic-properties-4",
  "type": "Theorem",
  "number": "11",
  "title": "Properties of Matrix Multiplication.",
  "body": " Properties of Matrix Multiplication  For all matrices of appropriate sizes,       There exist identity matrices and such that .    "
},
{
  "id": "week01-algebraic-properties-5",
  "level": "2",
  "url": "week02.html#week01-algebraic-properties-5",
  "type": "Remark",
  "number": "12",
  "title": "",
  "body": " Matrix multiplication is generally not commutative . Order matters, and we must pay attention to it.  "
},
{
  "id": "week01-mvp-2",
  "level": "2",
  "url": "week02.html#week01-mvp-2",
  "type": "Theorem",
  "number": "13",
  "title": "Consistency and Linear Combinations.",
  "body": " Consistency and Linear Combinations  A linear system is consistent if and only if can be expressed as a linear combination of the columns of .  "
},
{
  "id": "week01-mvp-3",
  "level": "2",
  "url": "week02.html#week01-mvp-3",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " If has a solution , then . Conversely, any such linear combination defines a solution.  "
},
{
  "id": "week01-mvp-4",
  "level": "2",
  "url": "week02.html#week01-mvp-4",
  "type": "Remark",
  "number": "14",
  "title": "",
  "body": " This theorem provides a powerful translation: solving equations is equivalent to building vectors from columns.  We will repeatedly use this shift in perspective!  "
},
{
  "id": "week01-inverses-2",
  "level": "2",
  "url": "week02.html#week01-inverses-2",
  "type": "Definition",
  "number": "15",
  "title": "Matrix Inverse.",
  "body": " Matrix Inverse  Let . If there exists a matrix such that , then is called the inverse of . We will prove that the inverse is unique, and that means we can write it unambiguously (when it exists).  "
},
{
  "id": "week01-inverses-3",
  "level": "2",
  "url": "week02.html#week01-inverses-3",
  "type": "Remark",
  "number": "16",
  "title": "",
  "body": " Multiplicative inverses are much rarer than additive inverses. Understanding when they exist is one of the central goals of the course.  "
},
{
  "id": "week01-inverses-4",
  "level": "2",
  "url": "week02.html#week01-inverses-4",
  "type": "Example",
  "number": "17",
  "title": "",
  "body": " The matrix has inverse .  This makes it easy to solve ; indeed, using the defition of the multiplicative inverse of and the associativity of matrix multiplication, we find   "
},
{
  "id": "week01-inverses-5",
  "level": "2",
  "url": "week02.html#week01-inverses-5",
  "type": "Definition",
  "number": "18",
  "title": "Singular Matrix.",
  "body": " Singular Matrix  A square matrix that does not have an inverse is called singular .  "
},
{
  "id": "week01-inverses-6",
  "level": "2",
  "url": "week02.html#week01-inverses-6",
  "type": "Remark",
  "number": "19",
  "title": "",
  "body": " Singular matrices will reappear when we study determinants and linear dependence!  "
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
