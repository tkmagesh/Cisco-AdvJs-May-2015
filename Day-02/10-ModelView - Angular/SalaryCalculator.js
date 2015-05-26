function SalaryCalculator(){
        this.basic = 0;
        this.hra = 0;
        this.da = 0;
        this.tax = 0;
        this.salary = 0;
    }
    SalaryCalculator.prototype.calculate = function(){
        var gross = this.basic.toInt() + this.hra.toInt() + this.da.toInt();
        var net = gross * ((100-this.tax.toInt())/100);
        this.salary = net;
    }