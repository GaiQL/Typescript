

/*

    随着更多验证器的加入，我们需要一种手段来组织代码，以便于在记录它们类型的同时还不用担心与其它对象产生命名冲突。
    因此，我们把验证器包裹到一个命名空间内，而不是把它们放在全局命名空间下。

*/




namespace verifier {
  //  export导出后，外部verifier.才可以访问。
  export interface StringValidator {
      isAcceptable(s: string): boolean;
  }

  let lettersRegexp = /^[A-Za-z]+$/;
  let numberRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {
      isAcceptable(s: string) {
          return lettersRegexp.test(s);
      }
  }

  export class ZipCodeValidator implements StringValidator {
      isAcceptable(s: string) {
          return s.length === 5 && numberRegexp.test(s);
      }
  }
}



let stringsN = ["Hello", "98052", "101"];



let validatorsN: { [s: string]: verifier.StringValidator; } = {};
/*
  validators = {}
  他下面定义的属性，要实现StringValidator的接口，实现StringValidator接口类的实例
*/
validatorsN["ZIP code"] = new verifier.ZipCodeValidator();
validatorsN["Letters only"] = new verifier.LettersOnlyValidator();

for (let s of strings) {
    for (let name in validatorsN) {
        let isMatch = validatorsN[name].isAcceptable(s);
        console.log(`'${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`);
    }
}
