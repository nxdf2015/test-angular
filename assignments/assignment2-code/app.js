(function functionName() {
  angular.module("ShoppingListCheckOff",[])
  .controller("ToBuyShoppingController",ToBuyShoppingController)
  .controller("AlreadyBoughtShoppingController",AlreadyBoughtShoppingController)
  .service("ShoppingListCheckOffService",ShoppingListCheckOffService);

  ToBuyShoppingController.$inject=['ShoppingListCheckOffService'];
 AlreadyBoughtShoppingController.$inject=['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService){
    var listesToBuy =[{name:"cookie",quantity: 2 },
                      {name:"bread",quantity: 2},
                      {name:"ananas",quantity: 5},
                      {name:"cheese",quantity: 2 },
                      {name:"milk",quantity: 2},
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



})();
