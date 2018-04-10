var Disposable = (function () {
    function Disposable() {
    }
    Disposable.prototype.dispose = function () {
        this.isDisposed = true;
    };
    return Disposable;
}());
var Activatable = (function () {
    function Activatable() {
    }
    Activatable.prototype.activate = function () {
        this.isActive = true;
    };
    Activatable.prototype.deactivate = function () {
        console.log(123);
        this.isActive = false;
    };
    return Activatable;
}());
var SmartObjectC = (function () {
    function SmartObjectC() {
        this.isDisposed = false;
        this.isActive = false;
    }
    return SmartObjectC;
}());
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(SmartObjectC, [Disposable, Activatable]);
console.log(new SmartObjectC().deactivate);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9NaXhpbnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFBQTtJQU1BLENBQUM7SUFKRyw0QkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVMLGlCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFHRDtJQUFBO0lBU0EsQ0FBQztJQVBHLDhCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBQ0QsZ0NBQVUsR0FBVjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFHRDtJQUFBO1FBRUUsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixhQUFRLEdBQVksS0FBSyxDQUFDO0lBRzVCLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBR0QscUJBQXFCLFdBQWdCLEVBQUUsU0FBZ0I7SUFDbkQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7UUFDdEIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ3ZELFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFFLENBQUMifQ==