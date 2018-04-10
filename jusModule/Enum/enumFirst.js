var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
var Directian;
(function (Directian) {
    Directian[Directian["Up"] = 0] = "Up";
    Directian[Directian["Down"] = 1] = "Down";
    Directian[Directian["Left"] = 2] = "Left";
    Directian[Directian["Right"] = 3] = "Right";
})(Directian || (Directian = {}));
console.log(Directian);
var getSomeValue;
getSomeValue = function (x) {
    console.log(123);
    return x;
};
var smallError;
(function (smallError) {
    smallError[smallError["hezzzz"] = 0] = "hezzzz";
    smallError[smallError["hi"] = getSomeValue(123)] = "hi";
    smallError[smallError["he"] = 1] = "he";
    smallError[smallError["hez"] = 2] = "hez";
})(smallError || (smallError = {}));
var DirectionS;
(function (DirectionS) {
    DirectionS["Up"] = "up";
    DirectionS["Down"] = "DOWN";
    DirectionS["Left"] = "LEFT";
    DirectionS["Right"] = "RIGHT";
    DirectionS["eastward"] = "heihei";
})(DirectionS || (DirectionS = {}));
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
var E;
(function (E) {
    E[E["X"] = 0] = "X";
})(E || (E = {}));
var E1;
(function (E1) {
    E1[E1["X"] = 0] = "X";
    E1[E1["Y"] = 1] = "Y";
    E1[E1["Z"] = 2] = "Z";
})(E1 || (E1 = {}));
var E2;
(function (E2) {
    E2[E2["A"] = 1] = "A";
    E2[E2["B"] = 2] = "B";
    E2[E2["C"] = 3] = "C";
})(E2 || (E2 = {}));
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess.ReadWrite);
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    kind: ShapeKind.Circle,
    radius: 100,
};
var Ea;
(function (Ea) {
    Ea[Ea["Foo"] = 0] = "Foo";
    Ea[Ea["Bar"] = 1] = "Bar";
})(Ea || (Ea = {}));
function heihei(x) {
}
var Enum;
(function (Enum) {
    Enum["num"] = "123";
})(Enum || (Enum = {}));
var heiheiA = Enum.num;
console.log(heiheiA);
var A;
(function (A) {
    A[A["a"] = 0] = "a";
})(A || (A = {}));
console.log(B);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bUZpcnN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vRW51bS9lbnVtRmlyc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsSUFBSyxTQUtKO0FBTEQsV0FBSyxTQUFTO0lBQ1YscUNBQU0sQ0FBQTtJQUNOLHlDQUFJLENBQUE7SUFDSix5Q0FBSSxDQUFBO0lBQ0osMkNBQUssQ0FBQTtBQUNULENBQUMsRUFMSSxTQUFTLEtBQVQsU0FBUyxRQUtiO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBRSxTQUFTLENBQUUsQ0FBQztBQUd6QixJQUFLLFNBS0o7QUFMRCxXQUFLLFNBQVM7SUFDWixxQ0FBRSxDQUFBO0lBQ0YseUNBQUksQ0FBQTtJQUNKLHlDQUFJLENBQUE7SUFDSiwyQ0FBSyxDQUFBO0FBQ1AsQ0FBQyxFQUxJLFNBQVMsS0FBVCxTQUFTLFFBS2I7QUFDRCxPQUFPLENBQUMsR0FBRyxDQUFFLFNBQVMsQ0FBRSxDQUFDO0FBSXpCLElBQUksWUFBaUMsQ0FBQztBQUN0QyxZQUFZLEdBQUcsVUFBRSxDQUFDO0lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsTUFBTSxDQUFDLENBQUMsQ0FBQTtBQUNWLENBQUMsQ0FBQTtBQUNELElBQUssVUFLSjtBQUxELFdBQUssVUFBVTtJQUNiLCtDQUFNLENBQUE7SUFDTiw4QkFBSyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQUEsQ0FBQTtJQUN0Qix1Q0FBTSxDQUFBO0lBQ04seUNBQUcsQ0FBQTtBQUNMLENBQUMsRUFMSSxVQUFVLEtBQVYsVUFBVSxRQUtkO0FBR0QsSUFBSyxVQU1KO0FBTkQsV0FBSyxVQUFVO0lBQ1gsdUJBQVMsQ0FBQTtJQUNULDJCQUFhLENBQUE7SUFDYiwyQkFBYSxDQUFBO0lBQ2IsNkJBQWUsQ0FBQTtJQUNmLGlDQUFtQixDQUFBO0FBQ3ZCLENBQUMsRUFOSSxVQUFVLEtBQVYsVUFBVSxRQU1kO0FBSUQsSUFBSyw0QkFHSjtBQUhELFdBQUssNEJBQTRCO0lBQzdCLDJFQUFNLENBQUE7SUFDTiwyQ0FBVyxDQUFBO0FBQ2YsQ0FBQyxFQUhJLDRCQUE0QixLQUE1Qiw0QkFBNEIsUUFHaEM7QUFPRCxJQUFLLENBQU87QUFBWixXQUFLLENBQUM7SUFBRyxtQkFBQyxDQUFBO0FBQUMsQ0FBQyxFQUFQLENBQUMsS0FBRCxDQUFDLFFBQU07QUFFWixJQUFLLEVBQWM7QUFBbkIsV0FBSyxFQUFFO0lBQUcscUJBQUMsQ0FBQTtJQUFFLHFCQUFDLENBQUE7SUFBRSxxQkFBQyxDQUFBO0FBQUMsQ0FBQyxFQUFkLEVBQUUsS0FBRixFQUFFLFFBQVk7QUFDbkIsSUFBSyxFQUVKO0FBRkQsV0FBSyxFQUFFO0lBQ0gscUJBQUssQ0FBQTtJQUFFLHFCQUFDLENBQUE7SUFBRSxxQkFBQyxDQUFBO0FBQ2YsQ0FBQyxFQUZJLEVBQUUsS0FBRixFQUFFLFFBRU47QUFLRCxJQUFLLFVBVUo7QUFWRCxXQUFLLFVBQVU7SUFFWCwyQ0FBSSxDQUFBO0lBQ0osMkNBQWdCLENBQUE7SUFHaEIsNkNBQWdCLENBQUE7SUFDaEIscURBQXlCLENBQUE7SUFFekIsNkJBQUksS0FBSyxDQUFDLE1BQU0sT0FBQSxDQUFBO0FBQ3BCLENBQUMsRUFWSSxVQUFVLEtBQVYsVUFBVSxRQVVkO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBRSxVQUFVLENBQUMsU0FBUyxDQUFFLENBQUE7QUFFbkMsSUFBSyxTQUdKO0FBSEQsV0FBSyxTQUFTO0lBQ1YsNkNBQU0sQ0FBQTtJQUNOLDZDQUFNLENBQUE7QUFDVixDQUFDLEVBSEksU0FBUyxLQUFULFNBQVMsUUFHYjtBQVlELElBQUksQ0FBQyxHQUFXO0lBQ1osSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO0lBRXRCLE1BQU0sRUFBRSxHQUFHO0NBQ2QsQ0FBQTtBQUlELElBQUssRUFHSjtBQUhELFdBQUssRUFBRTtJQUNILHlCQUFHLENBQUE7SUFDSCx5QkFBRyxDQUFBO0FBQ1AsQ0FBQyxFQUhJLEVBQUUsS0FBRixFQUFFLFFBR047QUFFRCxnQkFBZ0IsQ0FBTTtBQUt0QixDQUFDO0FBSUQsSUFBSyxJQUVKO0FBRkQsV0FBSyxJQUFJO0lBQ1AsbUJBQVcsQ0FBQTtBQUNiLENBQUMsRUFGSSxJQUFJLEtBQUosSUFBSSxRQUVSO0FBQ0QsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUV2QixPQUFPLENBQUMsR0FBRyxDQUFFLE9BQU8sQ0FBRSxDQUFDO0FBRXZCLElBQUssQ0FHSjtBQUhELFdBQUssQ0FBQztJQUVKLG1CQUFDLENBQUE7QUFDSCxDQUFDLEVBSEksQ0FBQyxLQUFELENBQUMsUUFHTDtBQVVELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMifQ==