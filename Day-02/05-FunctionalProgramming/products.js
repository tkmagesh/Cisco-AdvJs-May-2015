var products = [
    {id : 4, name : "Pen", cost : 60, units : 70, category : 2},
    {id : 7, name : "Hen", cost : 50, units : 40, category : 1},
    {id : 9, name : "Ten", cost : 80, units : 60, category : 2},
    {id : 3, name : "Den", cost : 70, units : 30, category : 1},
    {id : 5, name : "Len", cost : 40, units : 80, category : 2},
    {id : 2, name : "Zen", cost : 20, units : 90, category : 1}
];

function display(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}
display("Functional Programming", function(){
    display("Initial List", function(){
        console.table(products);
    });
    display("Sorting", function(){
        display("Default sort [ by id ]", function(){
            function sort(){
                for(var i=0; i<products.length-1; i++)
                    for(var j=i+1; j< products.length; j++){
                        var left = products[i],
                            right = products[j];
                        if (left.id > right.id){
                            products[i] = products[j];
                            products[j] = left;
                        }
                    }
            }
            sort();
            console.table(products);
        });
        display("Sort for any list by any attrbute", function(){
            function sort(list, attrName){
                for(var i=0; i<list.length-1; i++)
                    for(var j=i+1; j< list.length; j++){
                        var left = list[i],
                            right = list[j];
                        if (left[attrName] > right[attrName]){
                            list[i] = list[j];
                            list[j] = left;
                        }
                    }
            }
            display("By name", function(){
                sort(products, "name");
                console.table(products);
            });
            display("By cost", function(){
                sort(products, "cost");
                console.table(products);
            });
        });

        display("Sort for any list by any logic", function(){
            function sort(list, comparerFn){
                for(var i=0; i<list.length-1; i++)
                    for(var j=i+1; j< list.length; j++){
                        var left = list[i],
                            right = list[j];
                        if (comparerFn(left, right) > 0){
                            list[i] = list[j];
                            list[j] = left;
                        }
                    }
            }
            display("By value [units * cost]", function(){
                var productComparerByValue = function(p1, p2){
                    var p1Value = p1.cost * p1.units,
                        p2Value = p2.cost * p2.units;
                    if (p1Value < p2Value) return -1;
                    if (p1Value === p2Value) return 0;
                    return 1;
                }
                sort(products, productComparerByValue);
                console.table(products);
            });

        });
    });
    display("Filter", function(){
       display("Default [ cost > 50 ]", function(){
           function filter(){
               var result = [];
               for(var i=0; i<products.length; i++){
                   var product = products[i];
                   if (product.cost > 50)
                       result.push(product);
               }
               return result;
           }
           var costlyProducts = filter();
           console.table(costlyProducts);
       });
       display("Refined filter", function(){
           function filter(list, criteriaFn){
               var result = [];
               for(var i=0; i<list.length; i++){
                   var item = list[i];
                   if (criteriaFn(item))
                       result.push(item);
               }
               return result;
           }
           var costlyProductCriteria = function(product){ return product.cost > 50; };
           display("Costly Products [cost > 50]", function(){
                var costlyProducts = filter(products, costlyProductCriteria);
                console.table(costlyProducts);
            });
           var category1Criteria = function(product){ return product.category === 1; };
           display("All categor-1 products", function(){
               var allCategory1Products = filter(products, category1Criteria);
               console.table(allCategory1Products);
           });
          /* var affordableProductCriteria = function(product){
               return !costlyProductCriteria(product);
           };
           var allButCategory1Criteria = function(product){
               return !category1Criteria(product);
           }*/

           function negate(criteriaFn){
               return function(){
                   return !criteriaFn.apply(this,arguments);
               }
           }
           var affordableProductCriteria = negate(costlyProductCriteria);
           var allBut1CategoryCriteria = negate(category1Criteria);

           display("Affordable produts [!costlyProduct]", function(){
               var affordableProducts = filter(products, affordableProductCriteria);
               console.table(affordableProducts);
           });
           display("All but category-1 products", function(){
               var allButCategory1Products = filter(products, allBut1CategoryCriteria);
               console.table(allButCategory1Products);
           });

           function andCriteria(criteria1Fn, criteria2Fn){
               return function(/*arguments*/){
                   return criteria1Fn.apply(this,arguments) && criteria2Fn.apply(this,arguments);
               }
           }
           display("All category-1 costly products", function(){
               var allCategory1CostlyProductCriteria = andCriteria(costlyProductCriteria, category1Criteria);
               var allCategory1CostlyProducts = filter(products, allCategory1CostlyProductCriteria);
               console.table(allCategory1CostlyProducts);
           });
       });
    });
});
/*

min
max
sum
aggregate
countBy
any
all
groupBy
*/

