(function(angular) {
    angular.module('SpaAngularHomework1App', [])
    .controller('SpaAngularHomework1Controller', SpaAngularHomework1Controller);

    SpaAngularHomework1Controller.$inject = ['$scope', '$filter'];

    function SpaAngularHomework1Controller($scope, $filter) {

        $scope.checkLunchItems = function() {
            $scope.inputTextStyle = "{border-style:solid;border-color:white}";
            $scope.healthy = false;

            if (!$scope.items) {
                $scope.healthy = '';
                $scope.suggestions = "Please enter data first";
                $scope.inputTextStyle = "{border-style:solid;border-color:red}";
            } else {
                var re = /\s*,\s*/;
                var elems = $scope.items.split(re);
                var counts = 0;

                elems.forEach(function(element) {
                   if (element) {
                       counts += 1;
                   } 
                }, this);

                if (counts > 3) {
                    $scope.healthy = false;
                    $scope.suggestions = "Too Much!";
                } else {
                    $scope.healthy = true;
                    $scope.suggestions = "Enjoy!";
                }

                // styling for the textbox 
                $scope.inputTextStyle = "{border-style:solid;border-color:green}";
            }
        };
    }


})(window.angular);