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
        replace: true,
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
        replace: true,
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
        replace: true,
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
                angular.forEach(val, function(value) {
                    dom += '<' + value.directive + '>' + ' ' + '</' + value.directive + '>';
                });
                iElement.html(dom);
                $compile(iElement.contents())(scope);
            });
        }
    };
}]);

app.directive('adsField', ['$compile', '$http', '$templateCache', function($compile, $http, $templateCache) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            mode: '=',
            name: '@',
            title: '@',
            object: '=',
            list: '=values'
        },
        link: function(scope, iElement, iAttrs) {
            loader = $http.get("type/" + iAttrs.type + "/" + scope.mode + ".html", {
                cache: $templateCache
            });
            var promise = loader.success(function(html) {
                // If field directive attributes contain an object, 
                //ng-model in the template will be binding with this object  
                if (scope.object != undefined) {
                    iElement.html(html.replace('value', 'object.' + iAttrs.name));
                } else {
                    iElement.html(html);
                }
            }).then(function(response) {
                iElement.replaceWith($compile(iElement.html())(scope));
            });
        }
    };
}]);
