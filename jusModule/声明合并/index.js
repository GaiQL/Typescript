class Sheep {
}
class Cat {
}
var Animals;
(function (Animals) {
    class Zebra {
    }
    Animals.Zebra = Zebra;
})(Animals || (Animals = {}));
(function (Animals) {
    class Dog {
    }
    Animals.Dog = Dog;
})(Animals || (Animals = {}));
class Album {
}
(function (Album) {
    Album.str = '123';
    class AlbumLabel {
    }
    Album.AlbumLabel = AlbumLabel;
})(Album || (Album = {}));
function buildLabel(name) {
    return buildLabel.prefix + name + buildLabel.suffix;
}
(function (buildLabel) {
    buildLabel.suffix = "";
    buildLabel.prefix = "Hello, ";
})(buildLabel || (buildLabel = {}));
alert(buildLabel("Sam Smith"));
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 4] = "blue";
})(Color || (Color = {}));
(function (Color) {
    function mixColor(colorName) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue;
        }
    }
    Color.mixColor = mixColor;
})(Color || (Color = {}));
class Observable {
}
Array.prototype.toObservable = function () {
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi/lo7DmmI7lkIjlubYvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0NBQWE7QUFDYjtDQUFXO0FBd0RYLElBQVUsT0FBTyxDQUVoQjtBQUZELFdBQVUsT0FBTztJQUNiO0tBQXNCO0lBQVQsYUFBSyxRQUFJLENBQUE7QUFDMUIsQ0FBQyxFQUZTLE9BQU8sS0FBUCxPQUFPLFFBRWhCO0FBRUQsV0FBVSxPQUFPO0lBRWI7S0FBb0I7SUFBUCxXQUFHLE1BQUksQ0FBQTtBQUN4QixDQUFDLEVBSFMsT0FBTyxLQUFQLE9BQU8sUUFHaEI7QUFrQkM7Q0FFQztBQUNELFdBQVUsS0FBSztJQUNBLFNBQUcsR0FBVSxLQUFLLENBQUE7SUFDN0I7S0FBMkI7SUFBZCxnQkFBVSxhQUFJLENBQUE7QUFDL0IsQ0FBQyxFQUhTLEtBQUssS0FBTCxLQUFLLFFBR2Q7QUFTSCxvQkFBb0IsSUFBWTtJQUM1QixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztBQUN4RCxDQUFDO0FBRUQsV0FBVSxVQUFVO0lBQ0wsaUJBQU0sR0FBRyxFQUFFLENBQUM7SUFDWixpQkFBTSxHQUFHLFNBQVMsQ0FBQztBQUNsQyxDQUFDLEVBSFMsVUFBVSxLQUFWLFVBQVUsUUFHbkI7QUFFRCxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFHL0IsSUFBSyxLQUlKO0FBSkQsV0FBSyxLQUFLO0lBQ04sK0JBQU8sQ0FBQTtJQUNQLG1DQUFTLENBQUE7SUFDVCxpQ0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUpJLEtBQUssS0FBTCxLQUFLLFFBSVQ7QUFDRCxXQUFVLEtBQUs7SUFFWCxrQkFBeUIsU0FBaUI7UUFDdEMsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNuQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNoRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDbEMsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3BDLENBQUM7SUFDTCxDQUFDO0lBYmUsY0FBUSxXQWF2QixDQUFBO0FBRUwsQ0FBQyxFQWpCUyxLQUFLLEtBQUwsS0FBSyxRQWlCZDtBQXFCRDtDQUVDO0FBUUQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUc7QUFFL0IsQ0FBQyxDQUFBIn0=