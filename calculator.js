import { LightningElement,track } from 'lwc';
export default class Calculator extends LightningElement {
        numberone;
        numbertwo;
        result;
        selecteditemvalue;
        @track showCal=false;
        showAge=false;
        birthdate;
        age;
        todaydate;

        handleDateChange(event) {
        this.birthdate = event.target.value;
        
    }

    connectedCallback() {
        //code

        console.log('new Date()'+new Date());
         this.todaydate = new Date().toISOString().slice(0,10);
    }

    calculateAge()
    {
          if (this.birthdate) {
            const birthDate = new Date(this.birthdate);
            const today = new Date();
           
            let years = today.getFullYear() - birthDate.getFullYear();
            let months = today.getMonth() - birthDate.getMonth();
            let days = today.getDate() - birthDate.getDate();

            if (months < 0 || (months === 0 && days < 0)) {
                years--;
                months = (months + 12) % 12;
            }

            if (days < 0) {
                const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
                days = lastMonth.getDate() + days;
            }

            this.age = `${years} years, ${months} months, ${days} days`;
        } else {
            this.age = '';
        }
    }
    

        number1Change(event) {
                this.numberone = event.target.value;
                console.log("Number1" + this.numberone);
        }

        number2Change(event) {
                this.numbertwo = event.target.value;
        }


        doAddition() {
                this.result = parseFloat(this.numberone) + parseFloat(this.numbertwo);
        }

        doSubtraction() {
                this.result = parseFloat(this.numberone - this.numbertwo).toFixed(2);
        }

        doMultiplication() {
                this.result = parseFloat(this.numberone * this.numbertwo).toFixed(2);
        }
        doDivision() {
                this.result = parseFloat(this.numberone / this.numbertwo).toFixed(2);
        }
    handleOnSelect(event){

this.selecteditemvalue=event.detail.value;

if(this.selecteditemvalue=='Calculator')
{
this.showCal=true;
 this.showAge=false;
}
else if(this.selecteditemvalue=='AgeCalculator')
{
    this.showCal=false;
    this.showAge=true;

}
    }

}