var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function identity(any) {
    return any;
}
console.log(identity('123'));
function loggingIdentity(any) {
    console.log(any.length);
    return any;
}
loggingIdentity(['123', 123, 321, true, { heihie: 123 }]);
function loggingIdentityS(any) {
    return any;
}
loggingIdentityS(['123', 123, 321, true, { heihie: 123 }]);
function identitya(arg) {
    return arg;
}
var myIdentitya = identitya;
function GenericIdentityFnF(arg) {
    return arg;
}
var myIdentity = GenericIdentityFnF;
var GenericNumber = (function () {
    function GenericNumber() {
    }
    GenericNumber.state = {};
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.str = 0;
myGenericNumber.add = function (x, y) { return x + y; };
function loggingIdentityError(arg) {
    return arg;
}
function loggingIdentityzzzz(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentityzzzz({ length: 1 });
function create(c) {
    return new c();
}
var BeeKeeper = (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag = '123';
createInstance(Bee);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG8gd29ybGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi/ms5vlnosvSGVsbG8gd29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLGtCQUFzQixHQUFLO0lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUE7QUFDWixDQUFDO0FBTUQsT0FBTyxDQUFDLEdBQUcsQ0FBRSxRQUFRLENBQUUsS0FBSyxDQUFFLENBQUUsQ0FBQztBQUlqQyx5QkFBNkIsR0FBTztJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQztJQUMxQixNQUFNLENBQUMsR0FBRyxDQUFBO0FBQ1osQ0FBQztBQUNELGVBQWUsQ0FBRSxDQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxFQUFFLE1BQU0sRUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFFLENBQUE7QUFFdEQsMEJBQThCLEdBQVk7SUFDeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQTtBQUNaLENBQUM7QUFDRCxnQkFBZ0IsQ0FBRSxDQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBQyxFQUFFLE1BQU0sRUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFFLENBQUE7QUFTdkQsbUJBQXNCLEdBQU07SUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFFRCxJQUFJLFdBQVcsR0FBdUIsU0FBUyxDQUFDO0FBT2hELDRCQUErQixHQUFLO0lBQ2xDLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDYixDQUFDO0FBQ0QsSUFBSSxVQUFVLEdBQStCLGtCQUFrQixDQUFDO0FBTWhFO0lBQUE7SUFJQSxDQUFDO0lBRFEsbUJBQUssR0FBRyxFQUFFLENBQUM7SUFDcEIsb0JBQUM7Q0FBQSxBQUpELElBSUM7QUFDRCxJQUFJLGVBQWUsR0FBRyxJQUFJLGFBQWEsRUFBVSxDQUFDO0FBQ2xELGVBQWUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLGVBQWUsQ0FBQyxHQUFHLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBSXZELDhCQUFpQyxHQUFNO0lBRW5DLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDZixDQUFDO0FBU0QsNkJBQW1ELEdBQU07SUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFFRCxtQkFBbUIsQ0FBRSxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsQ0FBRSxDQUFBO0FBaUJqQyxnQkFBb0IsQ0FBVztJQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUNqQixDQUFDO0FBR0Q7SUFBQTtJQUVBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRUQ7SUFBQTtJQUVBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRUQ7SUFBQTtJQUVBLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFFRDtJQUFrQix1QkFBTTtJQUF4Qjs7SUFFQSxDQUFDO0lBQUQsVUFBQztBQUFELENBQUMsQUFGRCxDQUFrQixNQUFNLEdBRXZCO0FBRUQ7SUFBbUIsd0JBQU07SUFBekI7O0lBRUEsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDLEFBRkQsQ0FBbUIsTUFBTSxHQUV4QjtBQUVELHdCQUEwQyxDQUFjO0lBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ25CLENBQUM7QUFDRCxjQUFjLENBQUUsSUFBSSxDQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFFOUMsY0FBYyxDQUFFLEdBQUcsQ0FBRSxDQUFBIn0=