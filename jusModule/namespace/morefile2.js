var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZWZpbGUyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbmFtZXNwYWNlL21vcmVmaWxlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxJQUFVLFVBQVUsQ0FTbkI7QUFURCxXQUFVLFVBQVU7SUFFaEIsSUFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3BDO1FBQUE7UUFJQSxDQUFDO1FBSEcsMkNBQVksR0FBWixVQUFhLENBQVM7WUFDbEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUNMLDJCQUFDO0lBQUQsQ0FBQyxBQUpELElBSUM7SUFKWSwrQkFBb0IsdUJBSWhDLENBQUE7QUFFTCxDQUFDLEVBVFMsVUFBVSxLQUFWLFVBQVUsUUFTbkIifQ==