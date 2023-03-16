import { Component } from '@angular/core';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EMICalculatorComponent {
    loan=30000;
    month=30;
    ROI=8;
    EMI=1106.65;
    Interest=3199.49;
    Payble_Amount=33199.49;
    Interest_Percentage=9.64;

    loanArr=[this.loan,this.EMI,this.Interest]
    loan_amount(loan_value : any) {
        this.loan = loan_value;
        console.log(this.loan);
        this.EMI_Calculate(loan_value,this.month,this.ROI);
        this.getTableData()
    }
    month_amount(month_value : any) {
        this.month = month_value;
        console.log(this.loan);
        this.EMI_Calculate(this.loan,month_value,this.ROI);
        this.getTableData()
    }
    ROI_amount(ROI_value : any) {
        this.ROI = ROI_value;
        console.log(this.loan);
        this.EMI_Calculate(this.loan,this.month,ROI_value)
        this.getTableData()
    }
emidata:any
ROImonths:any
InterestofTable=906.65
Principle=200.00;
Endingbal=29093.35;
    EMI_Calculate(loan: number,month: number,ROI: any){
    this.ROImonths=ROI/1200;

     this.EMI= (loan * this.ROImonths * Math.pow((1 + (ROI/1200)), month))/(Math.pow((1+(ROI/1200)),month)-1)
     this.Payble_Amount=this.EMI*month;
     this.Interest= this.Payble_Amount-loan
     this.Interest_Percentage=(this.Interest/this.Payble_Amount)*100
this.InterestofTable=this.ROImonths*loan
this.Principle=this.EMI-this.InterestofTable
this.Endingbal=loan-this.Principle
      // console.log("EMI",this.EMI)
      // console.log("Payble_Amountt",this.Payble_Amount)
      // console.log("Interest",this.Interest)
      // console.log("Interest_Percentage",this.Interest_Percentage)
    }
    MonthData:any
    // this.MonthData.push(this.month)

    getTableData() {
      let obj: any[] = [];
      let tableBeggingBalance = this.loan;
      tableBeggingBalance.toFixed(2)
      let tableEMI = this.EMI;
      tableEMI.toFixed(2)
      let interestAmount = (this.ROI / 1200) * tableBeggingBalance;
      interestAmount.toFixed(2)
      let tablePrinciple = tableEMI - interestAmount;
      tablePrinciple.toFixed(2)
      let tableEndingBalance = tableBeggingBalance - tablePrinciple;
      tableEndingBalance.toFixed(2)
      for (let i = 0; i < this.month; i++) {
        let dupObj = {
          one: tableBeggingBalance,
          two: tableEMI,
          three: tablePrinciple,
          four: interestAmount,
          five: tableEndingBalance
        };
        obj.push(dupObj);
        tableBeggingBalance = tableEndingBalance;
        interestAmount = (this.ROI / 1200) * tableBeggingBalance;
        tablePrinciple = tableEMI - interestAmount;
        tableEndingBalance = tableBeggingBalance - tablePrinciple;
      }
      return obj;
    }
  
  
  
  
  }
