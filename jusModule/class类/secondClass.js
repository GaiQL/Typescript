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
var people = (function () {
    function people(name) {
        this.name = name;
        this.age = 123;
    }
    people.prototype.conSoleAge = function () {
        console.log(this.age);
    };
    people.prototype.conSoleName = function () {
        console.log(this.name);
    };
    return people;
}());
var Hong = (function (_super) {
    __extends(Hong, _super);
    function Hong() {
        var _this = _super.call(this, 'hong') || this;
        console.log(_this.name);
        _super.prototype.conSoleName.call(_this);
        return _this;
    }
    return Hong;
}(people));
var Ming = (function () {
    function Ming(name) {
        this.Mname = name;
    }
    return Ming;
}());
var People = new people('P');
var xiaoHong = new Hong();
var xiaoming = new Ming('M');
People = xiaoHong;
var Drinks = (function () {
    function Drinks(name) {
        this.name = name;
        this.name = name;
    }
    return Drinks;
}());
var password = 'heihei';
var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._xxx;
        },
        set: function (newName) {
            if (password && password == 'heihei') {
                this._xxx = newName;
            }
            else {
                console.log('Error');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = 'heiheihei';
if (employee.fullName) {
    console.log(employee.fullName);
}
var Miss = (function () {
    function Miss(name) {
        this.name = name;
        console.log("my name is " + this.name);
    }
    Miss.prototype.makeMiss = function () {
        console.log(this.name);
    };
    Miss.state = {
        a: 1,
        b: 2,
        c: 3,
    };
    return Miss;
}());
var MissShe = (function (_super) {
    __extends(MissShe, _super);
    function MissShe(name) {
        var _this = _super.call(this, name) || this;
        console.log(Miss.state.a);
        return _this;
    }
    MissShe.prototype.makeSound = function () {
        console.log('hi girl');
    };
    MissShe.prototype.makeOther = function () {
        console.log('other');
    };
    return MissShe;
}(Miss));
;
var MissHe = (function (_super) {
    __extends(MissHe, _super);
    function MissHe(name) {
        return _super.call(this, name) || this;
    }
    MissHe.prototype.makeSound = function () {
    };
    return MissHe;
}(Miss));
var she;
she = new MissShe("xiaoMing");
she.makeSound();
var he = new MissHe("xiaoHong");
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
var Wonder = (function () {
    function Wonder() {
    }
    Wonder.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Wonder.standardGreeting;
        }
    };
    Wonder.standardGreeting = "Hello, there";
    return Wonder;
}());
var first;
first = new Wonder();
console.log(first.greet());
var second = Wonder;
second.standardGreeting = "Hey there!";
var third = new second();
console.log(third.greet());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kQ2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jbGFzc+exuy9zZWNvbmRDbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFHRSxnQkFBYSxJQUFXO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFDTywyQkFBVSxHQUFsQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFDUyw0QkFBVyxHQUFyQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFFRDtJQUFtQix3QkFBTTtJQUN2QjtRQUFBLFlBQ0Usa0JBQU8sTUFBTSxDQUFFLFNBS2hCO1FBSkMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxLQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7UUFFekIsaUJBQU0sV0FBVyxZQUFFLENBQUM7O0lBRXRCLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQVJELENBQW1CLE1BQU0sR0FReEI7QUFFRDtJQUVFLGNBQWEsSUFBVztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUUsR0FBRyxDQUFFLENBQUM7QUFFL0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQU0xQixJQUFJLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBRSxHQUFHLENBQUUsQ0FBQztBQUUvQixNQUFNLEdBQUcsUUFBUSxDQUFDO0FBb0JsQjtJQUNFLGdCQUNTLElBQVc7UUFBWCxTQUFJLEdBQUosSUFBSSxDQUFPO1FBRWxCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFJRCxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFFeEI7SUFBQTtJQWdCQSxDQUFDO0lBWkMsc0JBQUksOEJBQVE7YUFBWjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLENBQUM7YUFFRCxVQUFhLE9BQWU7WUFDMUIsRUFBRSxDQUFBLENBQUUsUUFBUSxJQUFJLFFBQVEsSUFBSSxRQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUN0QixDQUFDO1lBQUEsSUFBSSxDQUFBLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QixDQUFDO1FBQ0gsQ0FBQzs7O09BUkE7SUFVSCxlQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQUVELElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7QUFDOUIsUUFBUSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7QUFDaEMsRUFBRSxDQUFBLENBQUUsUUFBUSxDQUFDLFFBQVMsQ0FBQyxDQUFBLENBQUM7SUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxRQUFRLENBQUMsUUFBUSxDQUFFLENBQUM7QUFDbkMsQ0FBQztBQWFEO0lBUUUsY0FBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxnQkFBZSxJQUFJLENBQUMsSUFBTyxDQUFFLENBQUM7SUFDN0MsQ0FBQztJQUlTLHVCQUFRLEdBQWxCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUE7SUFDMUIsQ0FBQztJQWRNLFVBQUssR0FBRztRQUNiLENBQUMsRUFBQyxDQUFDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxDQUFDLEVBQUMsQ0FBQztLQUNKLENBQUE7SUFXSCxXQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFDRDtJQUFzQiwyQkFBSTtJQUN4QixpQkFBYSxJQUFXO1FBQXhCLFlBQ0Usa0JBQU8sSUFBSSxDQUFFLFNBRWQ7UUFEQyxPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFFLENBQUM7O0lBQzlCLENBQUM7SUFDRCwyQkFBUyxHQUFUO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QsMkJBQVMsR0FBVDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUUsT0FBTyxDQUFFLENBQUM7SUFDekIsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBc0IsSUFBSSxHQVd6QjtBQUFBLENBQUM7QUFDRjtJQUFxQiwwQkFBSTtJQUN2QixnQkFBYSxJQUFXO2VBQ3RCLGtCQUFPLElBQUksQ0FBRTtJQUNmLENBQUM7SUFDRCwwQkFBUyxHQUFUO0lBRUEsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLEFBUEQsQ0FBcUIsSUFBSSxHQU94QjtBQUNELElBQUksR0FBUSxDQUFDO0FBQ2IsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFFLFVBQVUsQ0FBRSxDQUFDO0FBQ2hDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUVoQixJQUFJLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBRSxVQUFVLENBQUUsQ0FBQztBQU1sQztJQUVJLG9CQUFtQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUMvQixDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFHTCxpQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBRUQ7SUFBbUMsd0NBQVU7SUFFekM7ZUFDSSxrQkFBTSx5QkFBeUIsQ0FBQztJQUNwQyxDQUFDO0lBRUQsMkNBQVksR0FBWjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsOENBQWUsR0FBZjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQUFDLEFBYkQsQ0FBbUMsVUFBVSxHQWE1QztBQUVELElBQUksVUFBc0IsQ0FBQztBQUUzQixVQUFVLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0FBQ3hDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUN2QixVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7QUFPMUI7SUFBQTtJQWFBLENBQUM7SUFSRyxzQkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3JDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDbkMsQ0FBQztJQUNMLENBQUM7SUFWTSx1QkFBZ0IsR0FBRyxjQUFjLENBQUM7SUFXN0MsYUFBQztDQUFBLEFBYkQsSUFhQztBQUNELElBQUksS0FBWSxDQUFDO0FBQ2pCLEtBQUssR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFFLENBQUM7QUFFN0IsSUFBSSxNQUFNLEdBQWlCLE1BQU0sQ0FBQztBQUNsQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDO0FBRXZDLElBQUksS0FBSyxHQUFVLElBQUksTUFBTSxFQUFFLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUUsQ0FBQyJ9