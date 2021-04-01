<template>
  <div class="calculator">
    <Display :value="displayValue" />
    <Button label="AC" triple @onClick="ClearMemory" />
    <Button label="/" operation @onClick="SetOperation" />
    <Button label="7" @onClick="AddDigit" />
    <Button label="8" @onClick="AddDigit" />
    <Button label="9" @onClick="AddDigit" />
    <Button label="*" operation @onClick="SetOperation" />
    <Button label="4" @onClick="AddDigit" />
    <Button label="5" @onClick="AddDigit" />
    <Button label="6" @onClick="AddDigit" />
    <Button label="-" operation @onClick="SetOperation" />
    <Button label="1" @onClick="AddDigit" />
    <Button label="2" @onClick="AddDigit" />
    <Button label="3" @onClick="AddDigit" />
    <Button label="+" operation @onClick="SetOperation" />
    <Button label="0" double @onClick="AddDigit" />
    <Button label="." @onClick="AddDigit" />
    <Button label="=" operation @onClick="SetOperation" />
  </div>
</template>

<script>
import Display from '../components/Display';
import Button from '../components/Button';
export default {
  components: { Button, Display },
  data: function() {
    return {
      displayValue: '0',
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      currentIndex: 0,
    };
  },
  methods: {
    ClearMemory() {
      Object.assign(this.$data, this.$options.data());
    },
    SetOperation(operation) {
      if (this.currentIndex === 0) {
        this.operation = operation;
        this.currentIndex = 1;
        this.clearDisplay = true;
      } else {
        const equals = operation === '=';
        const currentOperation = this.operation;

        try {
          this.values[0] = eval(
            `${this.values[0]} ${currentOperation} ${this.values[1]}`
          );
        } catch (error) {
          this.$emit('onError', error);
        }
        this.values[1] = 0;
        this.displayValue = this.values[0];
        this.operation = equals ? null : operation;
        this.currentIndex = equals ? 0 : 1;
        this.clearDisplay = !equals;
      }
    },
    AddDigit(n) {
      if (n === '.' && this.displayValue.includes('.')) {
        return;
      }

      const clearDisplay = this.displayValue === '0' || this.clearDisplay;
      const currentValue = clearDisplay ? '' : this.displayValue;
      const displayValue = currentValue + n;

      this.displayValue = displayValue;
      this.clearDisplay = false;

      // if (n !== '.') {
      //   const i = this.currentIndex;
      //   const newValue = parseFloat(displayValue);
      //   this.values[i] = newValue;
      // }

      this.values[this.currentIndex] = displayValue;
    },
  },
};
</script>

<style>
.calculator {
  height: 480px;
  width: 335px;
  border-radius: 5px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-auto-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>
