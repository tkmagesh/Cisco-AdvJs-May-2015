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
});
/*
sort
filter
min
max
sum
aggregate
countBy
any
all
groupBy
*/

