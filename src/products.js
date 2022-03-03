var products = [{"id":101,"name":"Basket Ball","image":"basketball.png","price":150},
                {"id":102,"name":"Football","image":"football.png","price":120},
                {"id":103,"name":"Soccer","image":"soccer.png","price":110},
                {"id":104,"name":"Table Tennis","image":"table-tennis.png","price":130},
                {"id":105,"name":"Tennis","image":"tennis.png","price":100}];
var cart = [];

$(document).ready(function(){
    displayProducts();
    
    $('.add-to-cart').click(function(){      
        var pid = $(this).attr("id");
        
        displayCart(pid);
    });

    // $('.delete').click(function(){
    //     console.log("delete clicked")
    //     var pid = $(this).data('pid');
    //     pDel(pid);
    // });

    $('#cart').on('click','.delete',function(){
		console.log("delete clicked");
		var pid = $(this).data('pid');
	
		pDel(pid);
		
		display();
	  });


      $("#qty").on("keyup",function(){
        console.log($(this).val());
        //this gives me complete value inserted by user 
        });

    $('#cart').on('keyup','.delete',function(){
        var value = $(this).val();
        console.log(value);
    });

});

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
    
    for(var i=0; i<cart.length; i++){               
        html += '<tr><td>'+cart[i].id+'</td><td>'+cart[i].name+'</td><td><input type="number" id="qty" name="qty" min="1" value="'+cart[i].qty+'"></td><td><a href="#" class="delete" data-pid='+cart[i].id+'>X</a></td></tr>';
    }   

    html += '</tbody> </table>';

    $('#cart').html(html);


}

function pDel(pid){
    console.log("inside pDel()");
	for(var i=0; i<cart.length; i++){
		if(cart[i].id == pid){//console.log(cart[i].id+" "+pid);
			cart.splice(i,1);
		}
	}
}

function display(){
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
    // fetchProduct(pid);
    
    for(var i=0; i<cart.length; i++){               
        html += '<tr><td>'+cart[i].id+'</td><td>'+cart[i].name+'</td><td><input type="number" id="qty" name="qty" min="1" value="'+cart[i].qty+'"></td><td><a href="#" class="delete" data-pid='+cart[i].id+'>X</a></td></tr>';
    }   

    html += '</tbody> </table>';

    $('#cart').html(html);


}




function fetchProduct(pid){
    var product = {id: 0,name : "0", qty : 1};
    
    for(var i=0; i<products.length; i++){
        if(products[i].id == pid){         
            product.id = products[i].id;
            product.name = products[i].name;            
        }       
    } 
    addProduct2cart(product);
}

function addProduct2cart(product){
    if(isExists(product.id)){
    }
    else {
        cart.push(product);
    }
}

function isExists(pid){
    for(var i=0; i<cart.length; i++){
        if(cart[i].id == pid){
            cart[i].qty += 1;
            return true;
        }
    }
    return false;
}