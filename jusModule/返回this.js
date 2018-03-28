class BasicCalculator {
    constructor(value = 0) {
        this.value = value;
    }
    currentValue() {
        return this.value;
    }
    add(operand) {
        this.value += operand;
        return this;
    }
    multiply(operand) {
        this.value *= operand;
        return this;
    }
}
let v = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi6L+U5ZuedGhpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2FkdmFuY2VkVHlwZS/ov5Tlm550aGlzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0lBQ0ksWUFBNkIsUUFBZ0IsQ0FBQztRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQUksQ0FBQztJQUM1QyxZQUFZO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNNLEdBQUcsQ0FBQyxPQUFlO1FBQ3RCLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNNLFFBQVEsQ0FBQyxPQUFlO1FBQzNCLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUVKO0FBRUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDO0tBQ2pCLFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDWCxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ04sWUFBWSxFQUFFLENBQUMifQ==