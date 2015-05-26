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

            }
            sort();
            console.table(products);
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

