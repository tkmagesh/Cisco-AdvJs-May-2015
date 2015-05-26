define(['Backbone', 'jquery', 'utils'], function(Backbone, $){
    var SalaryCalculatorView = Backbone.View.extend({
        el : 'div.content',
        initialize : function(){
            _.bindAll(this, "render");
            this.listenTo(this.model, "change", this.render);
        },
        events : {
            "click #btnCalculate" : "calculateSalary",
            "change input" : "updateCalculator"
        },
        updateCalculator : function(){
            this.model.set('basic', this.$("#txtBasic").val().toInt());
            this.model.set('hra', this.$("#txtHra").val().toInt());
            this.model.set('da', this.$("#txtDa").val().toInt());
            this.model.set('tax', this.$("#rangeTax").val().toInt());
        },
        calculateSalary : function(){
            this.model.calculate();
        },
        render : function(){
            this.$("#divResult").html(this.model.get('salary'));
            this.$("#spanTax").html(this.model.get('tax'));
        }
    });
    return SalaryCalculatorView;
});
