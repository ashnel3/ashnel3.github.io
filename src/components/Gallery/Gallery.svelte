<script lang="ts" context="module">
  import type { ImageMetadata } from 'astro'

  export interface GalleryImage {
    alt: string
    image: ImageMetadata
  }
</script>

<script lang="ts">
  export let images: GalleryImage[]
  let active = images[0]
</script>

<div class="relative flex w-full h-full">
  <div class="absolute flex bottom-2 w-full justify-center">
    <div class="flex px-4 py-1 rounded-md bg-white">
      {#each images as img}
        <label class="flex p-2">
          <input
            bind:group={active}
            type="radio"
            checked={img === active}
            name="active"
            value={img}
          />
        </label>
      {/each}
    </div>
  </div>
  <div class="flex w-full h-full items-center justify-center overflow-hidden rounded-md">
    {#each images as img}
      <img class:hidden={img !== active} class="flex-shrink-0" alt={img.alt} src={img.image.src} />
    {/each}
  </div>
</div>
