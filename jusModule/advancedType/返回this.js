var BasicCalculator = (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    return BasicCalculator;
}());
var v = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi6L+U5ZuedGhpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FkdmFuY2VkVHlwZS/ov5Tlm550aGlzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0lBQ0kseUJBQTZCLEtBQWlCO1FBQWpCLHNCQUFBLEVBQUEsU0FBaUI7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtJQUFJLENBQUM7SUFDNUMsc0NBQVksR0FBbkI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBQ00sNkJBQUcsR0FBVixVQUFXLE9BQWU7UUFDdEIsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ00sa0NBQVEsR0FBZixVQUFnQixPQUFlO1FBQzNCLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFFRCxJQUFJLENBQUMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUM7S0FDakIsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUNYLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDTixZQUFZLEVBQUUsQ0FBQyJ9