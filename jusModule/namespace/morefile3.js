var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZWZpbGUzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbmFtZXNwYWNlL21vcmVmaWxlMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxJQUFVLFVBQVUsQ0FTbkI7QUFURCxXQUFVLFVBQVU7SUFFbEIsSUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDO0lBQ2hDO1FBQUE7UUFJQSxDQUFDO1FBSEcsdUNBQVksR0FBWixVQUFhLENBQVM7WUFDbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUNMLHVCQUFDO0lBQUQsQ0FBQyxBQUpELElBSUM7SUFKWSwyQkFBZ0IsbUJBSTVCLENBQUE7QUFFSCxDQUFDLEVBVFMsVUFBVSxLQUFWLFVBQVUsUUFTbkIifQ==