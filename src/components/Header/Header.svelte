<header class="fixed top-0 px-4 w-full z-50 shadow-2xl">
  <div class="flex py-2 px-4 w-full rounded-b-lg bg-white">
    <a href="/">
      <h2 class="text-xl">Ashnel3</h2>
    </a>
    <ul class="header-menu">
      <li>
        <a href="/about">about</a>
      </li>
      <li>
        <span class="cursor-default" title="wip!">blog</span>
      </li>
      <li>
        <a href="/">contact</a>
      </li>
    </ul>
  </div>
</header>

<style lang="postcss" module>
  .header-menu {
    @apply flex flex-grow gap-2 items-center justify-end text-zinc-500;
  }

  .header-menu > li > a {
    @apply relative block;
    transition: color 400ms;

    &::after {
      @apply absolute bottom-0 left-0 w-full border-b opacity-0 border-black;
      content: '';
      transition:
        opacity 400ms,
        transform 300ms;
    }

    &:active,
    &:hover {
      @apply text-black;
    }

    &:hover::after {
      @apply opacity-100;
      transform: translate3d(0, 0.125em, 0);
    }
  }
</style>
