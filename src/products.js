var products = [{"id":101,"name":"Basket Ball","image":"basketball.png","price":150},
                {"id":102,"name":"Football","image":"football.png","price":120},
                {"id":103,"name":"Soccer","image":"soccer.png","price":110},
                {"id":104,"name":"Table Tennis","image":"table-tennis.png","price":130},
                {"id":105,"name":"Tennis","image":"tennis.png","price":100}];


$(document).ready(function(){
    displayProducts();
});

function displayProducts(){
    html = "";

    html += '<div id="product-101" class="product">\
            <img src="images/football.png">\
            <h3 class="title"><a href="#">Product 101</a></h3>\
            <span>Price: $150.00</span>\
            <a class="add-to-cart" href="#">Add To Cart</a>\
        </div>\
        <div id="product-101" class="product">\
            <img src="images/tennis.png">\
            <h3 class="title"><a href="#">Product 102</a></h3>\
            <span>Price: $120.00</span>\
            <a class="add-to-cart" href="#">Add To Cart</a>\
        </div>\
        <div id="product-101" class="product">\
            <img src="images/basketball.png">\
            <h3 class="title"><a href="#">Product 103</a></h3>\
            <span>Price: $90.00</span>\
            <a class="add-to-cart" href="#">Add To Cart</a>\
        </div>\
        <div id="product-101" class="product">\
            <img src="images/table-tennis.png">\
            <h3 class="title"><a href="#">Product 104</a></h3>\
            <span>Price: $110.00</span>\
            <a class="add-to-cart" href="#">Add To Cart</a>\
        </div>\
        <div id="product-101" class="product">\
            <img src="images/soccer.png">\
            <h3 class="title"><a href="#">Product 105</a></h3>\
            <span>Price: $80.00</span>\
            <a class="add-to-cart" href="#">Add To Cart</a>\
        </div>\
    ';
$('#products').html(html);
}