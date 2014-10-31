app.directive('adsName', ['$compile', '$http', '$templateCache', function($compile, $http, $templateCache) {
    var getTemplateUrl = function(mode) {
        var baseUrl = "templates/";
        var templateMap = {
            'read': 'adsRead/adsName.html',
            'write': 'adsWrite/adsName.html'
        };
        var templateUrl = baseUrl + templateMap[mode];
        return templateUrl;
    };
    return {
        restrict: 'E',
        replace:true,
        templateUrl: function(elem, attrs) {
            return (getTemplateUrl(elem[0].parentNode.attributes.mode.value));
        },
        link: function(scope, iElement, iAttrs) {
            if (iAttrs.mode != undefined) {
                var templateUrl = getTemplateUrl(iAttrs.mode)
                loader = $http.get(templateUrl, {
                    cache: $templateCache
                });
                var promise = loader.success(function(html) {
                    iElement.html(html);
                }).then(function(response) {
                    iElement.replaceWith($compile(iElement.html())(scope));
                });
            }
        }
    };
}]);

app.directive('adsPicture', ['$compile', '$http', '$templateCache', function($compile, $http, $templateCache) {
    var getTemplateUrl = function(mode) {
        var baseUrl = "templates/";
        var templateMap = {
            'read': 'adsRead/adsPicture.html',
            'write': 'adsWrite/adsPicture.html'
        };
        var templateUrl = baseUrl + templateMap[mode];
        return templateUrl;
    };
    return {
        restrict: 'E',
        replace:true,
        templateUrl: function(elem, attrs) {
            return (getTemplateUrl(elem[0].parentNode.attributes.mode.value));
        },
        link: function(scope, iElement, iAttrs) {
            if (iAttrs.mode != undefined) {
                var templateUrl = getTemplateUrl(iAttrs.mode)
                loader = $http.get(templateUrl, {
                    cache: $templateCache
                });
                var promise = loader.success(function(html) {
                    iElement.html(html);
                }).then(function(response) {
                    iElement.replaceWith($compile(iElement.html())(scope));
                });
            }
        }
    };
}]);

app.directive('adsContent', ['$compile', '$http', '$templateCache', function($compile, $http, $templateCache) {
    var getTemplateUrl = function(mode) {
        var baseUrl = "templates/";
        var templateMap = {
            'read': 'adsRead/adsContent.html',
            'write': 'adsWrite/adsContent.html'
        };
        var templateUrl = baseUrl + templateMap[mode];
        return templateUrl;
    };
    return {
        restrict: 'E',
        replace:true,
        templateUrl: function(elem, attrs) {
            return (getTemplateUrl(elem[0].parentNode.attributes.mode.value));
        },
        link: function(scope, iElement, iAttrs) {
            if (iAttrs.mode != undefined) {
                var templateUrl = getTemplateUrl(iAttrs.mode)
                loader = $http.get(templateUrl, {
                    cache: $templateCache
                });
                var promise = loader.success(function(html) {
                    iElement.html(html);
                }).then(function(response) {
                    iElement.replaceWith($compile(iElement.html())(scope));
                });
            }
        }
    };
}]);

app.directive('adsContainer', ['$compile', '$http', '$templateCache', function($compile, $http, $templateCache) {
    return {
        restrict: 'E',
        link: function postLink(scope, iElement, iAttrs) {
            scope.$watch('list', function(val) {
                var dom = "";
                angular.forEach(val, function(value)
                {
                    dom += '<' + value.directive + '>' + ' ' + '</' + value.directive + '>'; 
                });
                iElement.html(dom);
                $compile(iElement.contents())(scope);
            });
        }
    };
}]);
