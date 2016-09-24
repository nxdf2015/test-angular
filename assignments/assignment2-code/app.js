(function functionName() {
  angular.module("ShoppingListCheckOff",[])
  .controller("ToBuyShoppingController",ToBuyShoppingController)
  .controller("AlreadyBoughtShoppingController",AlreadyBoughtShoppingController)
  .filter("plural",plural)
  .service("ShoppingListCheckOffService",ShoppingListCheckOffService);

  ToBuyShoppingController.$inject=['ShoppingListCheckOffService'];
 AlreadyBoughtShoppingController.$inject=['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService){
    var listesToBuy =[{name:"cookie",quantity: 2 },
                      {name:"bread",quantity: 1},
                      {name:"ananas",quantity: 5},
                      {name:"cheese",quantity: 1 },
                      {name:"lemon",quantity: 2},
                      {name:"ananas",quantity: 5}];


    var ToBuy = this ;
  //initialisation listes to Buy
      ShoppingListCheckOffService.addToBuy(listesToBuy);

      ToBuy.listes = ShoppingListCheckOffService.getToBuy();

      ToBuy.buy = function(index){
      ShoppingListCheckOffService.addBought(index);}
  }

// controller alreadybought
   function AlreadyBoughtShoppingController(ShoppingListCheckOffService){

  var AlreadyBought = this;

  AlreadyBought.listes = ShoppingListCheckOffService.getBought();

  }
  //  ShoppingListCheckOffService.getBought();



//service
function ShoppingListCheckOffService(){

  var service =this;
  service.listeToBuy =[];
  service.listeBought=[];

  service.addToBuy = function(listes){
    for (var i = 0 ; i < listes.length ; i++){
      service.listeToBuy.push(listes[i]);
    }}

  service.getToBuy = function(){
    return service.listeToBuy;
  }

  service.getBought = function(){
      return service.listeBought;
  }

  service.addBought = function(index){
    service.listeBought.push(service.listeToBuy[index]);
    service.listeToBuy.splice(index,1);  }
}

function plural(){
  return function(item){
  var plural = "";

  if ((item.quantity>1) && ( item.name.charAt( item.name.length -1 )!='s' ))
    plural = "s";
    return item.name + plural ;
  }
}



})();
