$(function(){
    var calculator = new SalaryCalculator();
    var view = new SalaryCalculatorView({model : calculator});
    view.render();
});