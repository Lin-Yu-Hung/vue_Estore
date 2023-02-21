<template>
  <div class="circle">
    <div class="left">
      <div class="leftcircle" ref="left"></div>
    </div>
    <div class="right">
      <div class="rightcircle" ref="test"></div>
    </div>
    <div class="circle-text">{{ test }} / 5</div>
  </div>
  <button @click="test2()">text</button>
  <br />
  <div class="progress mt-5">
    <div class="progress-inside" ref="progress"></div>
    <span class="step step-1" ref="step1">1</span>
    <span class="step step-2">2</span>
    <span class="step step-3">3</span>
    <span class="step step-4">4</span>
    <span class="step step-5">5</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 0,
    };
  },
  methods: {
    test2() {
      this.test++;
      if (this.test == 1) {
        this.$refs.test.classList.add("to20");
        this.$refs.progress.classList.add("to20vw");
        setTimeout(() => {
          this.$refs.step1.classList.add("bg-danger");
        }, 800);
      } else if (this.test == 2) {
        this.$refs.test.classList.add("to40");
      } else if (this.test == 3) {
        this.$refs.test.classList.add("to60");
        this.$refs.left.classList.add("leftTo60");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$circle-width: 200px;
$circle-height: 200px;
$circle-color: green;
$circle-border-width: 20px;
$child-circle-width: $circle-width / 2;

.progress {
  border: 1px solid transparent;
  height: 0;
  position: relative;
  overflow: visible;
  width: 100vw;
}
.progress-inside {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
.step {
  position: absolute;
  top: 50%;
  font-size: 2rem;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border: 1px solid transparent;
  background-color: gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.step-1 {
  left: 10%;
}
.step-2 {
  left: 30%;
}
.step-3 {
  left: 50%;
}
.step-4 {
  left: 70%;
}
.step-5 {
  left: 90%;
}
.circle-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.circle {
  width: $circle-width;
  height: $circle-height;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right {
  position: relative;
  width: $child-circle-width;
  height: $circle-height;
  overflow: hidden;
}
.left {
  position: relative;
  width: $child-circle-width;
  height: $circle-height;
  overflow: hidden;
}
.rightcircle {
  width: $circle-width;
  height: $circle-height;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  border: $circle-border-width solid transparent;
  transform: rotate(-135deg); /* 旋转45度 */
  border-top: $circle-border-width solid $circle-color;
  border-right: $circle-border-width solid $circle-color;
}
.leftcircle {
  width: $circle-width;
  height: $circle-height;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  border: $circle-border-width solid transparent;
  transform: rotate(-135deg); /* 旋转45度 */
  border-bottom: $circle-border-width solid $circle-color;
  border-left: $circle-border-width solid $circle-color;
}
.to20 {
  animation: to20 0.5s linear 0s forwards;
}
.to40 {
  animation: to40 0.5s linear 0s forwards;
}
.to60 {
  animation: to60 0.5s linear 0s forwards;
}
.leftTo60 {
  animation: leftTo60 0.5s linear 0.5s forwards;
}
.to20vw {
  border: 5px solid red;
  animation: to20vw 1s linear 0s forwards;
}
@keyframes to20vw {
  from {
    width: 0vw;
  }
  to {
    width: 20vw;
  }
}
@keyframes to20 {
  from {
    transform: rotate(-135deg); /* 旋转45度 */
  }
  to {
    transform: rotate(-63deg); /* 旋转45度 */
  }
}
@keyframes to40 {
  from {
    transform: rotate(-63deg); /* 旋转45度 */
  }
  to {
    transform: rotate(9deg); /* 旋转45度 */
  }
}
@keyframes to60 {
  from {
    transform: rotate(9deg); /* 旋转45度 */
  }
  to {
    transform: rotate(45deg); /* 旋转45度 */
  }
}
@keyframes leftTo60 {
  from {
    transform: rotate(-135deg); /* 旋转45度 */
  }
  to {
    transform: rotate(-99deg); /* 旋转45度 */
  }
}
</style>
