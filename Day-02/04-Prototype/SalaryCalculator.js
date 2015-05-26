//Version - 1
function SalaryCalculator(){
   this.basic = 0;
   this.hra = 0;
   this.da = 0;
   this.tax = 0;
   this.salary = 0;
   this.calculate = function(){
      var gross = this.basic + this.hra + this.da;
      var  net = gross * ((100-this.tax)/100);
      this.salary = net;
   }
}

//Version - 2 [using prototype]
function SalaryCalculator(){
   this.basic = 0;
   this.hra = 0;
   this.da = 0;
   this.tax = 0;
   this.__salary = 0;
}


SalaryCalculator.prototype.calculate = function(){
      var gross = this.basic + this.hra + this.da;
      var  net = gross * ((100-this.tax)/100);
      this.__salary = net;
   }
SalaryCalculator.prototype.salary = function(){
    return this.__salary;
}

//Version - 3 [using mixin]
function SalaryCalculator(){
   this.basic = 0;
   this.hra = 0;
   this.da = 0;
   this.tax = 0;
}

var calculatorBase = {
    __salary : 0,
    calculate : function(){
      var gross = this.basic + this.hra + this.da;
      var  net = gross * ((100-this.tax)/100);
      this.__salary = net;
   },
  salary : function(){
    return this.__salary;
  }
}

function extend(baseObj, instanceObj){
    for(var key in baseObj){
        if (baseObj.hasOwnProperty(key))
            instanceObj[key] = baseObj[key];
    }
}




