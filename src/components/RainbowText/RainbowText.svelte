<script lang="ts">
  export let classNames = ''
  export { classNames as class }
</script>

<div class="inline-block bg-inherit">
  <h2 class="rainbow {classNames}">
    <slot />
  </h2>
</div>

<style module>
  .rainbow {
    color: transparent;
    background: linear-gradient(to right, #6666ff, #0099ff, #00ff00, #ff3399, #6666ff);
    background-clip: text;
    background-size: 600% 100%;
    animation: rainbow 12s ease-in-out infinite;
  }

  @keyframes rainbow {
    0%,
    100% {
      background-position: 0 0;
    }

    50% {
      background-position: 100% 0;
    }
  }
</style>
