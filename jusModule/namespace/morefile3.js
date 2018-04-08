var Validation;
(function (Validation) {
    const numberRegexp = /^[0-9]+$/;
    class ZipCodeValidator {
        isAcceptable(s) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZWZpbGUzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbmFtZXNwYWNlL21vcmVmaWxlMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxJQUFVLFVBQVUsQ0FTbkI7QUFURCxXQUFVLFVBQVU7SUFFbEIsTUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDO0lBQ2hDO1FBQ0ksWUFBWSxDQUFDLENBQVM7WUFDbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQztLQUNKO0lBSlksMkJBQWdCLG1CQUk1QixDQUFBO0FBRUgsQ0FBQyxFQVRTLFVBQVUsS0FBVixVQUFVLFFBU25CIn0=