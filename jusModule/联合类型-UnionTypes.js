function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
padLeft("Hello world", true);
function getSmallPet() {
    return {
        layEggs: function () { },
        fly: function () { }
    };
}
let pet = getSmallPet();
pet.layEggs();
pet.fly();
pet.swim();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi6IGU5ZCI57G75Z6LLVVuaW9uVHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9hZHZhbmNlZFR5cGUv6IGU5ZCI57G75Z6LLVVuaW9uVHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsaUJBQWlCLEtBQWEsRUFBRSxPQUFZO0lBQ3hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNoRCxDQUFDO0lBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsT0FBTyxJQUFJLENBQUMsQ0FBQztBQUNwRSxDQUFDO0FBRUQsT0FBTyxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsQ0FBQztBQWtCNUI7SUFFSSxNQUFNLENBQUM7UUFDTCxPQUFPLEVBQUMsY0FBVyxDQUFDO1FBQ3BCLEdBQUcsRUFBQyxjQUFXLENBQUM7S0FDakIsQ0FBQTtBQUNMLENBQUM7QUFFRCxJQUFJLEdBQUcsR0FBRyxXQUFXLEVBQUUsQ0FBQztBQUN4QixHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7QUFLUCxHQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDWCxHQUFJLENBQUMsSUFBSSxFQUFFLENBQUMifQ==