//  Reset language to Eng
document.getElementById('radio-en').checked = true
document.getElementById('radio-ar').checked = false

let itemList = [
  ['Flower', -20],
  ['Salary', 300],
  ['Book', -10],
  ['Camera', 150],
]

// Set balance
let balance = itemList.reduce((a, b) => a + b[1], 0)
document.getElementsByTagName('h1')[0].innerHTML = '$' + balance.toFixed(2)
document.getElementsByTagName('h1')[1].innerHTML = '$' + balance.toFixed(2)

// Set income
let income = itemList.filter((a) => a[1] > 0).reduce((a, b) => a + b[1], 0)
document.getElementById('income-en').innerHTML = '$' + income
document.getElementById('income-ar').innerHTML = '$' + income

// Set expense
let expense = itemList.filter((a) => a[1] < 0).reduce((a, b) => a + b[1], 0)
document.getElementById('expense-en').innerHTML = '$' + Math.abs(expense)
document.getElementById('expense-ar').innerHTML = '$' + Math.abs(expense)

// let node = document.createElement('LI')
// node.appendChild(document.createTextNode('hi'))
// document.getElementById('list').appendChild(node)

// itemList.map((a) => {
//   document
//     .getElementById('list')
//     .appendChild(document.createElement('LI'))
//     .appendChild(document.createTextNode(a[0]))

//     .appendChild(document.createElement('SPAN'))
//     .appendChild(document.createTextNode(a[1]))

// })

// itemList.map((a) => {
//     document
//       .getElementById('list').appendChild(innerHTML = `
//       <li>${a}</li>
      
    //   .appendChild(document.createElement('LI'))
    //   .appendChild(document.createTextNode(a[0]))
      
    //   .appendChild(document.createElement('SPAN'))
    //   .appendChild(document.createTextNode(a[1]))
  
// )})

// alert(expense)

itemList.map(a=> {
    document
    .getElementById('list').innerHTML +=
     '<li>' + a[0] + '<span>$' + a[1] + '</span>' + '</li>' 
})

function toogleLanguage(e) {
  if (e === 'ar') {
    document.getElementById('container-ar').style.display = 'block'
    document.getElementById('container-en').style.display = 'none'
    document.getElementById('radio2-ar').checked = true
    document.getElementById('radio2-en').checked = false
  }
  if (e === 'en') {
    document.getElementById('container-en').style.display = 'block'
    document.getElementById('container-ar').style.display = 'none'
    document.getElementById('radio-en').checked = true
    document.getElementById('radio-ar').checked = false
  }
}
