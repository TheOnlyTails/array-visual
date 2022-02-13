<script>
  import { GetItem, InitArray, SetItem } from "$layout";
</script>

<main>
  <InitArray />
  <hr>
  <GetItem />
  <hr>

  <SetItem />

  <hr>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
    gap: 1rem;
	}
</style>