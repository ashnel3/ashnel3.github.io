<script lang="ts">
  import { onMount } from 'svelte'
  import assert from '../../util/assert'

  export let classNames = ''
  export let fps = 24
  export { classNames as class }

  let width: number
  let height: number
  let canvas: HTMLCanvasElement
  let ctx: CanvasRenderingContext2D
  let running = true
  let timeout: ReturnType<typeof setTimeout>

  /**
   * Render next frame
   * @see https://seancode.com/demofx/#plasma
   * @see https://github.com/mrkite/demofx/blob/master/src/plasma.ts
   * @param t
   */
  const next = (t: number): void => {
    const dest: ImageData = ctx.getImageData(0, 0, width, height)
    const time: number = t / 500
    let ofs: number = 0
    for (let y: number = 0; y < height; y++) {
      const dy: number = y / height - 0.5
      for (let x: number = 0; x < width; x++) {
        const dx: number = x / width - 0.5
        let v: number = Math.sin(dx * 10 + time)
        const cx: number = dx + 0.5 * Math.sin(time / 5)
        const cy: number = dy + 0.5 * Math.cos(time / 3)
        v += Math.sin(Math.sqrt(50 * (cx * cx + cy * cy) + 1 + time))
        v += Math.cos(Math.sqrt(dx * dx + dy * dy) - time)
        const a: number = Math.floor(Math.sin(v * Math.PI) * 255)
        const b: number = Math.floor(Math.cos(v * Math.PI) * 255)
        dest.data[ofs++] = a
        dest.data[ofs++] = a * 3.0
        dest.data[ofs++] = a
        dest.data[ofs++] = 0xff
        dest.data[ofs++] = b * 0.8
        dest.data[ofs++] = b * 3.0
        dest.data[ofs++] = b * 0.8
        dest.data[ofs++] = 0xff
      }
    }
    ctx.putImageData(dest, 0, 0)
    // schedule next frame
    timeout = setTimeout(() => {
      if (running) {
        requestAnimationFrame(next)
      }
    }, 1000 / fps)
  }

  const resize = () => {
    width = Math.floor(innerWidth / 8)
    height = Math.floor(innerHeight / 8)
    clearTimeout(timeout)
    requestAnimationFrame(next)
  }

  onMount(() => {
    ctx = assert(canvas.getContext('2d'), 'failed to create rendering context!')
    resize()
    requestAnimationFrame(next)
    // destructor
    return () => {
      running = false
      clearTimeout(timeout)
    }
  })
</script>

<svelte:window on:resize={resize} />
<div class={classNames}>
  <slot />
  <div class="absolute inset-0 pixelated -z-10">
    <canvas bind:this={canvas} class="w-full h-full" {height} {width}></canvas>
  </div>
</div>
