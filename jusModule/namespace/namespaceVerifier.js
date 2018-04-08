var verifier;
(function (verifier) {
    let lettersRegexp = /^[A-Za-z]+$/;
    let numberRegexp = /^[0-9]+$/;
    class LettersOnlyValidator {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    verifier.LettersOnlyValidator = LettersOnlyValidator;
    class ZipCodeValidator {
        isAcceptable(s) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    verifier.ZipCodeValidator = ZipCodeValidator;
})(verifier || (verifier = {}));
let stringsN = ["Hello", "98052", "101"];
let validatorsN = {};
validatorsN["ZIP code"] = new verifier.ZipCodeValidator();
validatorsN["Letters only"] = new verifier.LettersOnlyValidator();
for (let s of strings) {
    for (let name in validatorsN) {
        let isMatch = validatorsN[name].isAcceptable(s);
        console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZXNwYWNlVmVyaWZpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9uYW1lc3BhY2UvbmFtZXNwYWNlVmVyaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsSUFBVSxRQUFRLENBb0JqQjtBQXBCRCxXQUFVLFFBQVE7SUFNaEIsSUFBSSxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ2xDLElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQztJQUU5QjtRQUNJLFlBQVksQ0FBQyxDQUFTO1lBQ2xCLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7S0FDSjtJQUpZLDZCQUFvQix1QkFJaEMsQ0FBQTtJQUVEO1FBQ0ksWUFBWSxDQUFDLENBQVM7WUFDbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQztLQUNKO0lBSlkseUJBQWdCLG1CQUk1QixDQUFBO0FBQ0gsQ0FBQyxFQXBCUyxRQUFRLEtBQVIsUUFBUSxRQW9CakI7QUFJRCxJQUFJLFFBQVEsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFJekMsSUFBSSxXQUFXLEdBQStDLEVBQUUsQ0FBQztBQUtqRSxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUMxRCxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztBQUVsRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUssQ0FBRSxLQUFNLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxnQkFBaUIsS0FBTSxJQUFLLElBQUksQ0FBQyxDQUFDO0lBQ3JGLENBQUM7QUFDTCxDQUFDIn0=