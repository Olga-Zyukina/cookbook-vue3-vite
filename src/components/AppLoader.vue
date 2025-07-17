<script setup lang="ts"></script>

<template>
  <transition appear>
    <div class="loader-container">
      <svg
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.0"
        width="36px"
        height="36px"
        viewBox="0 0 128 128"
        xml:space="preserve"
      >
        <g>
          <circle cx="16" cy="64" r="16" fill="#409eff" />
          <circle
            cx="16"
            cy="64"
            r="16"
            fill="#80beff"
            transform="rotate(45,64,64)"
          />
          <circle
            cx="16"
            cy="64"
            r="16"
            fill="#afd6ff"
            transform="rotate(90,64,64)"
          />
          <circle
            cx="16"
            cy="64"
            r="16"
            fill="#d9ecff"
            transform="rotate(135,64,64)"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="45 64 64;90 64 64;135 64 64;180 64 64;225 64 64;270 64 64;315 64 64;0 64 64"
            calcMode="discrete"
            dur="1280ms"
            repeatCount="indefinite"
          ></animateTransform>
        </g>
      </svg>
      <p class="loader-heading">Loading...</p>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.loader-container {
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  background: rgba($white, 0.8);
}
.loader-heading {
  font-size: 28px;
  font-weight: 700;
  color: var(--el-color-primary);
}
</style>
