<script lang="ts">
  import RainbowText from '../RainbowText'
</script>

<header class="fixed top-0 px-4 w-full z-50 font-m5x7 shadow-2xl select-none">
  <div class="flex py-2 px-4 w-full rounded-b-lg bg-white dark:bg-zinc-800">
    <span class="text-3xl text-zinc-300">
      <span>/</span>
      <a href="/">
        <RainbowText class="transition-all hover:text-glow">Ashnel3</RainbowText>
      </a>
    </span>
    <ul class="header-menu">
      <li>
        <a href="/about">about</a>
      </li>
      <li>
        <span class="line-through text-slate-400 dark:text-slate-600" title="wip!">blog</span>
      </li>
      <li>
        <a href="/gallery">gallery</a>
      </li>
    </ul>
  </div>
</header>

<style lang="postcss" module>
  .header-menu {
    @apply flex flex-grow text-2xl gap-3 items-center justify-end text-slate-500;
  }

  .header-menu > li > a {
    @apply relative block;
    transition: color 400ms;

    &::after {
      @apply absolute bottom-0 left-0 w-full border-b opacity-0 border-black dark:border-white;
      content: '';
      transition:
        opacity 400ms,
        transform 300ms;
    }

    &:active,
    &:hover {
      @apply text-black dark:text-white;
    }

    &:hover::after {
      @apply opacity-100;
      transform: translate3d(0, 0.125em, 0);
    }
  }
</style>
