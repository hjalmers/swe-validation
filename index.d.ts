declare module 'swe-validation' {

    interface cin {
        isValid:boolean,
        corporation:{
            type:string,
            id:string
        }
    }

    interface ssn {
        isValid:boolean,
        person?: {
            type:string,
            sex:string,
            ssn:string
        }
    }

    let validate: {
        ssn(number:number): ssn;
        cin(number:number): cin;
    };
    export = validate;
}
