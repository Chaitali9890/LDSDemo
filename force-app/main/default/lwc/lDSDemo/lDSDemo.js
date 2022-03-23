import { LightningElement,api,track } from 'lwc';
import AccountName from '@salesforce/schema/Account.Name';
import AccountNumber from '@salesforce/schema/Account.AccountNumber';
import AccountSite from '@salesforce/schema/Account.Site';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LDSDemo extends LightningElement {
    @api recordId;//record id
    @api objectApiName;
    @track fields=[AccountName,AccountNumber,AccountSite];
    connectedCallback()
    {
        this.objectApiName=this.objectApiName;
    }
   
    handleSuccess(event)
    {
      const evnt=new ShowToastEvent({
        title:"Success...",
        message:"Data Saved Successfully",
        variant: "success",
        mode:"dismissable"
      });
      this.dispatchEvent(evnt);
    }
}