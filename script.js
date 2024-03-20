// var partyPackage = ['rice', 'meat', 'juice']
// for (i=0; i <= 3; i++) {
//     // rice
//     // meat
//     // juice
// }
// partyPackage.shift()
// partyPackage.push('jotter')
// partyPackage.pop()
// partyPackage.unshift('hand fan')
// partyPackage.push('pen')
// partyPackage.splice(0,1, 'Jotter')
// console.log(partyPackage);

var cart = []

if (cart.length == 0) {
    bigDiv.style.display = 'block'
    bigDiv.innerHTML = `
                <p class="alert alert-danger text-center p-2">No items added yet</p>
            `
}
function submitItem() {
    if (items.value === '') {
        errorMsg.style.display = 'block'
    } else {
        bigDiv.style.display = 'none'
        errorMsg.style.display = 'none'
        bigShow.style.display = 'block'
        cart.push(items.value)
        console.log(cart);
        document.getElementById('items').value = ''
        displayItem()
    }
}

function delLast() {
    cart.pop()
    console.log(cart);
    displayItem()
}

function delAll() {
    var confirmation = confirm('Are you sure you want to delete. This action is irreversible')
    console.log(confirmation);
    if (confirmation === true) {
        cart.splice(0, cart.length)
        displayItem()
    }
}

function delAny() {
    var start = Number(prompt("Which number are you deleting?"))
    // console.log(start);
    cart.splice(start-1,1)
    displayItem()
}

function addFirst() {
    console.log(firstitem.value);
    if (firstitem.value === '') {
        errorFirst.style.display = 'block'
    } else {
        errorFirst.style.display = 'none'
        cart.unshift(firstitem.value)
        console.log(cart);
        document.getElementById('firstitem').value = ''
        displayItem()
    }
}

function edit() {
    if (newIndex.value === '' || editedValue.value === '') {
        alert("fill something jor")
    } else {
        if((Number(newIndex.value)) > cart.length) {
            alert("Haba, fear God now")
        } else {
            var indexNew = Number(document.getElementById('newIndex').value)
            var replacement = document.getElementById('editedValue').value
            console.log(indexNew, replacement);
            cart.splice(indexNew-1, 1, replacement)
            displayItem()
        }
    }
}

function displayItem() {
    show.innerHTML = ''
    // for (var i = 0; i < cart.length; i++) {
    //     // console.log(cart[i])
    //     show.innerHTML += `
    //                     <small>${i + 1}</small>
    //                     <p>${cart[i]}</p>
    //                 `
    // }

    cart.map((goods, i)=>{
        show.innerHTML += `
            <small>${i+1}</small>
            <p>${goods}</p>
        `
    })
}

// var foods = ['amala', 'iyan', 'ogufe', 'panla', 'bokoto', 'bogo', 'eja']
// for(var i=0; i < foods.length; i++) {
//     console.log(foods[i]);
// }

// foods.map((food,index)=>{
//     console.log(index+1, food);
// })