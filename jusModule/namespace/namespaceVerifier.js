var verifier;
(function (verifier) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    verifier.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    verifier.ZipCodeValidator = ZipCodeValidator;
})(verifier || (verifier = {}));
var stringsN = ["Hello", "98052", "101"];
var validatorsN = {};
validatorsN["ZIP code"] = new verifier.ZipCodeValidator();
validatorsN["Letters only"] = new verifier.LettersOnlyValidator();
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s_1 = strings_1[_i];
    for (var name_1 in validatorsN) {
        var isMatch = validatorsN[name_1].isAcceptable(s_1);
        console.log("'" + s_1 + "' " + (isMatch ? "matches" : "does not match") + " '" + name_1 + "'.");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZXNwYWNlVmVyaWZpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9uYW1lc3BhY2UvbmFtZXNwYWNlVmVyaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsSUFBVSxRQUFRLENBb0JqQjtBQXBCRCxXQUFVLFFBQVE7SUFNaEIsSUFBSSxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ2xDLElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQztJQUU5QjtRQUFBO1FBSUEsQ0FBQztRQUhHLDJDQUFZLEdBQVosVUFBYSxDQUFTO1lBQ2xCLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFDTCwyQkFBQztJQUFELENBQUMsQUFKRCxJQUlDO0lBSlksNkJBQW9CLHVCQUloQyxDQUFBO0lBRUQ7UUFBQTtRQUlBLENBQUM7UUFIRyx1Q0FBWSxHQUFaLFVBQWEsQ0FBUztZQUNsQixNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQ0wsdUJBQUM7SUFBRCxDQUFDLEFBSkQsSUFJQztJQUpZLHlCQUFnQixtQkFJNUIsQ0FBQTtBQUNILENBQUMsRUFwQlMsUUFBUSxLQUFSLFFBQVEsUUFvQmpCO0FBSUQsSUFBSSxRQUFRLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBSXpDLElBQUksV0FBVyxHQUErQyxFQUFFLENBQUM7QUFLakUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFDMUQsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUM7QUFFbEUsR0FBRyxDQUFDLENBQVUsVUFBTyxFQUFQLG1CQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO0lBQWhCLElBQUksR0FBQyxnQkFBQTtJQUNOLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBSSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQUssR0FBQyxXQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsV0FBTyxNQUFJLE9BQUssQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Q0FDSiJ9