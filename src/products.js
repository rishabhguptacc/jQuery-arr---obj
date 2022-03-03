var products = [{"id":101,"name":"Basket Ball","image":"basketball.png","price":150},
                {"id":102,"name":"Football","image":"football.png","price":120},
                {"id":103,"name":"Soccer","image":"soccer.png","price":110},
                {"id":104,"name":"Table Tennis","image":"table-tennis.png","price":130},
                {"id":105,"name":"Tennis","image":"tennis.png","price":100}];
var cart = [];
var product = {};
var c101=0, c102=0, c103=0,c104=0, c105=0;

$(document).ready(function(){
    displayProducts();
    // console.log(c101,c102, c103, c104, c105);
    $('.add-to-cart').click(function(){       // .product 
        var pid = $(this).attr("id");
        // console.log(pid);
        counter(pid);
        displayCart(pid);
    });

});

function counter(pid){
    if(pid == 101) c101++;
    else if(pid == 102) c102++;
    else if(pid == 103) c103++;
    else if(pid == 104) c104++;
    else if(pid == 105) c105++;

    console.log(c101,c102, c103, c104, c105);
}

function displayProducts(){
    html = "";

    html += '<div id="product-101" class="product">\
            <img src="images/football.png">\
            <h3 class="title"><a href="#">Product 101</a></h3>\
            <span>Price: $150.00</span>\
            <a class="add-to-cart" id="101" href="#">Add To Cart</a>\
        </div>\
        <div id="product-102" class="product">\
            <img src="images/tennis.png">\
            <h3 class="title"><a href="#">Product 102</a></h3>\
            <span>Price: $120.00</span>\
            <a class="add-to-cart" id="102" href="#">Add To Cart</a>\
        </div>\
        <div id="product-103" class="product">\
            <img src="images/basketball.png">\
            <h3 class="title"><a href="#">Product 103</a></h3>\
            <span>Price: $90.00</span>\
            <a class="add-to-cart" id="103" href="#">Add To Cart</a>\
        </div>\
        <div id="product-104" class="product">\
            <img src="images/table-tennis.png">\
            <h3 class="title"><a href="#">Product 104</a></h3>\
            <span>Price: $110.00</span>\
            <a class="add-to-cart" id="104" href="#">Add To Cart</a>\
        </div>\
        <div id="product-105" class="product">\
            <img src="images/soccer.png">\
            <h3 class="title"><a href="#">Product 105</a></h3>\
            <span>Price: $80.00</span>\
            <a class="add-to-cart" id="105" href="#">Add To Cart</a>\
        </div>\
    ';
$('#products').html(html);
}

function displayCart(pid){
    // console.log(pid);

    html = "";
    html += '<label for="Cart">Cart</label><br>';
    html += '<table>\
    <thead>\
        <tr>\
            <th>Product ID</th>\
            <th>Product(s)</th>\
            <th>Quantity</th>\
            <th>Remove</th>\
        </tr>\
    </thead>\
    <tbody>\
    ';

//    ********* fetching product to cart
    fetchProduct(pid);
    // console.log(product.name);              // working fine

//    ********* adding product to cart
    addProduct2cart(pid);
    console.log(cart);              // Not working fine*****


//    ********* Display product cart
    console.log(cart.length);

    for(var i=0; i<cart.length; i++){
        // console.log(cart[i].id);
        html += '<tr><td>'+cart[i].id+'</td><td>'+cart[i].name+'</td><td><input type="number" id="qty" name="qty" min="1" value="'+cart[i].qty+'"></td><td><a href="#" class="delete" data-pid='+cart[i].id+'>X</a></td></tr>';
    }   

    html += '</tbody> </table>';

    $('#cart').html(html);


}

function fetchProduct(pid){
// console.log("pid in fetch product"+ pid);
    for(var i=0; i<products.length; i++){
        if(products[i].id == pid){
            var qnty;
            // ****  select the qnty counter  
            if(pid == 101) {qnty = c101;}
            else if(pid == 102) {qnty = c102;}
            else if(pid == 103) {qnty = c103;}
            else if(pid == 104) {qnty = c104;}
            else if(pid == 105) {qnty = c105;}
            


            product.id = products[i].id;
            product.name = products[i].name;
            // product.image = products[i].image;
            // product.price = products[i].price;
            product.qty = qnty;
        }
       
    }
    // console.log("the product is :"+ product.id+product.name+ product.qty);
}

function addProduct2cart(pid){
   
    if(product.id == pid){
        if(isExists(product.id)){
            console.log("product already exists")
        }
        else{
            // console.log("inside else part in isExists Check");
            console.log(cart.length);
            console.log("product id is : "+product.id);
            cart.push(product);
            // cart[cart.length] = product;
            console.log("cart is "+cart[0].id);
            console.log(cart.length);
        }
        
    }

}

function isExists(pid){
    if(pid == 101){
        if(c101>1)
        {c101++; 
        return true;}}
    else if(pid == 102) {if(c102>1)
        {c102++; 
        return true;};}
    else if(pid == 103) {if(c103>1)
        {c103++; 
        return true;}}
    else if(pid == 104) {if(c104>1)
        {c104++; 
        return true;}}
    else if(pid == 105) {if(c105>1)
        {c105++; 
        return true;}}
    else
    return false;
}