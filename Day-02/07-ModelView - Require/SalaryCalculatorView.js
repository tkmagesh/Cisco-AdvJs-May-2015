  define(['jquery','utils'], function($){
    function SalaryCalculatorView(calculator, rootId){
        var $el = this.$el = $(rootId);
        
        $(":text", $el).change(function(){
           var disabled = false;
           $(":text", $el).each(function(index, element){
                if (!parseInt(element.value))
                   disabled = true;
            });
            $("#btnCalculate", $el).attr("disabled", disabled);
        });
        $("#btnCalculate", $el).click(function(){
            calculator.basic = $("#txtBasic", $el).val().toInt();
            calculator.hra = $("#txtHra", $el).val().toInt();
            calculator.da = $("#txtDa", $el).val().toInt();
            calculator.tax = $("#rangeTax", $el).val().toInt();

            calculator.calculate();
            
            $("#divResult", $el).html(calculator.salary);
        });

        $("#rangeTax", $el).change(function(){
            $("#spanTax", $el).html(this.value);
        });
    }
    return SalaryCalculatorView;
  });
  