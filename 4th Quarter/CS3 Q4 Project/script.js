var itemList = []; 
var totalPrice = 0;
 
function addToCart(name, price) {
  /* document.getElementById('emptyCart').style.display = "none"; */
  var itemInfo = {
    prod_name: name,
    prod_price: price,
  };
  totalPrice += itemInfo.prod_price;
  itemList.push(itemInfo);
  document.getElementById('cartList').innerHTML = "";
  displayCart();
}

function removeFromCart(id) {
  totalPrice -= itemList[id].prod_price;
  itemList.splice(id, 1);
  document.getElementById('cartList').innerHTML = "";
  displayCart();
}

function total() {
  document.getElementById('total').innerHTML = totalPrice; 
}

function displayCart() {
  for (i = 0; i < itemList.length; i++) {
    document.getElementById('cartList').innerHTML += "<div class='cartItem'><h6>" + itemList[i].prod_name + "</h6><p>" + 
    itemList[i].prod_price + " Emeralds</p><input type='button' value='remove' onclick='removeFromCart(" + i + ")'></div>";
    total();
  }
  console.log(itemList);  
}

function checkout() {
  document.getElementById('cust_order').value = JSON.stringify(itemList);
  var cust_order = document.getElementById('cust_order').value;
  var cust_name = document.getElementById('cust_name').value;
  var cust_email = document.getElementById('cust_email').value;
  var cust_addr = document.getElementById('cust_addr').value;
} 

/* dump
function addToCart(name, price) {
  document.getElementById('emptyCart').style.display = "none";
  var itemInfo = {
    prod_name: name,
    prod_price: price,
  };
  if (itemList[count].prod_name == '') {
    itemList[count] = itemInfo;
    console.log("replace");
  }
  else {
    itemList.push(itemInfo);
    console.log("new");
  }
  itemList.push({prod_name:'', prod_price:0});
  document.getElementById('cartList').innerHTML += "<div id='" + count + "' class='cartItem'><h6>" + itemList[count].prod_name + "</h6><p>" + itemList[count].prod_price + " Emeralds</p><input type='button' value='remove' onclick='removeFromCart(" + count + ")'></div>";
  totalPrice += itemList[count].prod_price;
  count++;
  total();
  console.log(itemList);
}


document.getElementById('cust_order').value = JSON.stringify(itemList);;
  var cust_order = document.getElementById('cust_order').value

for (i = 0; i < itemList.length; i++) {
    total += itemList[i]."prod_price" * itemList[i].itemCount;
  }

var itemList = [{"prod_name": 'init', "prod_price": 'init', prod_coun: 1}];
var listCounter = 0;


var shopCart = [{"prod_name": '', "prod_price": 0, itemID: '000', itemCount: 1}]
var counter = 0;

function addToCart(name, price,  d) {
  var item = {"prod_name": name, "prod_price": price, itemID: id, itemCoun    ;
 
  for (i = 0; i <= counter;      {
    console.log(cou    );
    console.l    );
    console.log(item.item    );
    console.log(shopCart[i].item    );
    if (item."prod_name" == shopCart[i].itemN
      console.log(
      shopCart[i].itemCo
      document.getElementById(shopCart[counter].itemID).innerHTML = "<div id='cartItem " + id + "'><h6>" + shopCart[counter]."prod_name" + " " + shopCart[counter].itemCount + "x </h6><p>" + shopCart[counter]."prod_price" + "</p></
          k;     }
    else if (i == coun
      console.log("e
      shopCart.push(
      document.getElementById('shopCart').innerHTML += "<div id='cartItem " + id + "><h6>" + item."prod_name" + " " + item.itemCount + "x </h6><p>" + item."prod_price" + "</p></
      cout
     b    ;      }
  }
}

function addToCart(name, pr  e) {
  console.log(typeof itemList[0].prod  ame)
  var "prod_name" =  ame;
  var "prod_price" =p  ce;
  var itemIn     {
    "prod_name": ite    e,
    "prod_price": item    e,
    prod_cou  : 1    };
  for (i = 0; i <= listCounter;      {
    if (listCounter =
      itemList[listCounter] = ite
      document.getElementById('shopCart').innerHTML += "<div id='cartItem'><h6>" + itemList[listCounter]."prod_name" + " " + itemList[listCounter].prod_count + "x </h6><p>" + itemList[listCounter]."prod_price" + "</p></
      listCoun
      console.log("First I    );     }
         
      if (haveSameData(itemList[i], itemInfo) == t               itemList[listCounter].prod_co               console.log("Repeated I
      
      else if (i == listCoun               itemList.push(item               document.getElementById('shopCart').innerHTML += "<div id='cartItem'><h6>" + itemList[listCounter]."prod_name" + " " + itemList[listCounter].prod_count + "x </h6><p>" + itemList[listCounter]."prod_price" + "</p></               listCoun               console.log("New I
      }     }
  }
}

var firstDivContent = document.getElementById('mydiv1');
var secondDivContent = document.getElementById('mydiv2';

var itemList = [{"prod_name":'', "prod_price":0}]; 
var count = 0;
var totalPrice = 0;
 
function addToCart(name, price) {
  document.getElementById('emptyCart').style.display = "none";
  var itemInfo = {
    "prod_name": name,
    "prod_price": price,
  };
  if (itemList[count]."prod_name" == '') {
    itemList[count] = itemInfo;
    console.log("replace");
  }
  else {
    itemList.push(itemInfo);
    console.log("new");
  }
  itemList.push({"prod_name":'', "prod_price":0});
  document.getElementById('cartList').innerHTML += "<div id='" + count + "' class='cartItem'><h6>" + itemList[count]."prod_name" + "</h6><p>" + itemList[count]."prod_price" + " Emeralds</p><input type='button' value='remove' onclick='removeFromCart(" + count + ")'></div>";
  totalPrice += itemList[count]."prod_price";
  count++;
  total();
  console.log(itemList);
}

function removeFromCart(id) {
  totalPrice -= itemList[id]."prod_price";
  count--;
  itemList[id] = {"prod_name":'', "prod_price":0};
  for (i = 0; i <= (count - id); i++) {
    itemList[id + i] = itemList[id + i + 1];
  }
  document.getElementById(id).style.display = "none";
  document.getElementById(id).id = '';
  itemList.pop();
  total();
  console.log(itemList);
}

function total() {
  document.getElementById('total').innerHTML = totalPrice; 
}

function checkout() {
  console.log(cust_order);
  var cust_name = document.getElementById('cust_name').value;
  var cust_email = document.getElementById('cust_email').value;
  var cust_addr = document.getElementById('cust_addr').value;
  var co = itemList;
  var cust_order = JSON.stringify(co);
} 
*/