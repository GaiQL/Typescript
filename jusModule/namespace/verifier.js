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
var ZipCodeValidator = (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
var strings = ["Hello", "98052", "101"];
var validators = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s_1 = strings_1[_i];
    for (var name_1 in validators) {
        var isMatch = validators[name_1].isAcceptable(s_1);
        console.log("'" + s_1 + "' " + (isMatch ? "matches" : "does not match") + " '" + name_1 + "'.");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9uYW1lc3BhY2UvdmVyaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsSUFBSSxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ2xDLElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQztBQUU5QjtJQUFBO0lBSUEsQ0FBQztJQUhHLDJDQUFZLEdBQVosVUFBYSxDQUFTO1FBQ2xCLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBRUQ7SUFBQTtJQUlBLENBQUM7SUFIRyx1Q0FBWSxHQUFaLFVBQWEsQ0FBUztRQUNsQixNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUVELElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUl4QyxJQUFJLFVBQVUsR0FBc0MsRUFBRSxDQUFDO0FBS3ZELFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7QUFDaEQsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksb0JBQW9CLEVBQUUsQ0FBQztBQUV4RCxHQUFHLENBQUMsQ0FBVSxVQUFPLEVBQVAsbUJBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87SUFBaEIsSUFBSSxHQUFDLGdCQUFBO0lBQ04sR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFJLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUMsTUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBSyxHQUFDLFdBQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixXQUFPLE1BQUksT0FBSyxDQUFDLENBQUM7SUFDckYsQ0FBQztDQUNKIn0=