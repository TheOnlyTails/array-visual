<script lang="ts">
  import ChevronDown from "@fluentui/svg-icons/icons/chevron_down_16_regular.svg?raw";

  export let array: number[] = [];
  export let oldArray: number[];
  export let selected: number;
</script>

<div class="array-table">
  {#if oldArray && oldArray.length > 0}
    <table>
      <tr>
        {#each oldArray as x, i}
          <td class:changed={oldArray ? array [i] !== x : false}>
            {@html x}
            <span class="index">({i})</span>
          </td>
        {/each}
      </tr>
    </table>

    {@html ChevronDown}
  {/if}

  <table>
    <tr>
      {#each array as x, i}
        <td
          class:changed={oldArray ? oldArray[i] !== x : false}
          class:selected={selected ? selected === i : false}
        >
          {@html x} <span class="index">({i})</span>
        </td>
      {/each}
    </tr>
  </table>
</div>

<style lang="scss">
	@use "src/styles/table";

	.array-table {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 0.5rem;
    max-inline-size: 60ch;

		.changed {
			color: var(--fds-system-caution)
		}

    .selected {
      background: var(--fds-system-background-caution);
    }
	}


	:global(svg) {
		display: flex;
		align-self: center;
	}

	.index {
		color: var(--fds-text-secondary);
	}
</style>