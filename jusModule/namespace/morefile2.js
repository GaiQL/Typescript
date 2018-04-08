var Validation;
(function (Validation) {
    const lettersRegexp = /^[A-Za-z]+$/;
    class LettersOnlyValidator {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZWZpbGUyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbmFtZXNwYWNlL21vcmVmaWxlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxJQUFVLFVBQVUsQ0FTbkI7QUFURCxXQUFVLFVBQVU7SUFFaEIsTUFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3BDO1FBQ0ksWUFBWSxDQUFDLENBQVM7WUFDbEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQztLQUNKO0lBSlksK0JBQW9CLHVCQUloQyxDQUFBO0FBRUwsQ0FBQyxFQVRTLFVBQVUsS0FBVixVQUFVLFFBU25CIn0=