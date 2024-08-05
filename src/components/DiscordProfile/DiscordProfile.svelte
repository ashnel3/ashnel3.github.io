<script lang="ts">
  interface LanyardResponse {
    success: boolean
    data?: {
      activities: Array<{
        created_at: number
        state: string
      }>
      active_on_discord_desktop: boolean
      active_on_discord_mobile: boolean
      active_on_discord_web: boolean
      discord_status: 'dnd' | 'online' | 'idle'
    }
  }

  /** Discord user id */
  export let id: string
  /** Lanyard promise - https://github.com/phineas/lanyard */
  const promise: Promise<LanyardResponse> = fetch('https://api.lanyard.rest/v1/users/' + id)
    .then(async (res) => await res.json())
    .catch((err) => {
      console.error('failed to fetch discord status!')
    })
</script>

<div class="flex items-center">
  <a class="relative" href={`https://discord.com/users/${id}`}>
    <slot />
    {#await promise}
      <div class="discord-status-indicator" title={'unknown'} />
    {:then res}
      <div
        class:online={res.data?.discord_status === 'online'}
        class:idle={res.data?.discord_status === 'idle'}
        class:dnd={res.data?.discord_status === 'dnd'}
        class="discord-status-indicator"
        title={res.data?.discord_status ?? 'unknown'}
      />
    {/await}
  </a>
</div>

<style module>
  .dnd {
    @apply !border-red-500 !bg-red-700;
  }

  .online {
    @apply !border-lime-500 !bg-lime-500;
  }

  .idle {
    @apply !border-orange-400 !bg-orange-500;
  }

  .discord-status-indicator {
    @apply absolute w-8 h-8 bottom-1 right-1 border-8 rounded-full border-zinc-500 bg-zinc-700;
  }
</style>
