(function () {
  angular.module("LunchCheck",[]).
  controller("LunchCheckController",LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
$scope.message="";
$scope.items="";
//function handler  event blur

//function handler event  button
$scope.choice = function () {

  if ($scope.items == "")
  {
    $scope.message= "Please enter data first ";

  }
  else if (numItem($scope.items) <=3){
    $scope.message = " Enjoy";
  }else {
    $scope.message =  "Too much !";

  }

 }




// item empty are not counted
// return the number of item in the list
function numItem(string){
  var liste = string.split(',');

  return liste.length - numberEmptyItem(string);
}

// count the number of empty item
function numberEmptyItem(string){
  listeEmpty = string.match(/,[ ]*,/g);
if (listeEmpty == null)
    return 0;
else
    return listeEmpty.length ;
}

}

})();
