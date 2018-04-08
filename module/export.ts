interface StringValidator {
    name:string;
    age:number;
    isAcceptable(s: string): boolean;
}

const numberRegexp = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator {
    name:string;
    age:number;
    constructor( name:string,age:number ){
      this.name = name;
      this.age = age;
    }
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}


export {
  numberRegexp,
  StringValidator,
  ZipCodeValidator as heihei
}
// export * from "./export";

// export = ZipCodeValidator;
