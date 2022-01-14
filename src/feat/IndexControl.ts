/** @format */

export default class headerControl { 

public headerValueReturn = function(headerClass: string): object {
     const header: object = document.getElementsByClassName(headerClass);
     console.log(header);
          return header;
 }    }



headerControl('mainHeader');