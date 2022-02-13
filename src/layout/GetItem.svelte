<script lang="ts">
  import { TextBlock } from "fluent-svelte";
  import { ArrayTable } from "$lib";
</script>

<TextBlock variant="title">
  גישה לעצם
</TextBlock>
<TextBlock>
  כדי לגשת לעצם במערך, נכתוב את שם המערך ואחריו סוגריים מרובעות (
  <code>[]</code>
  ).
  בתוכן נכתוב את האינדקס של העצם שאנחנו רוצים לבחור.
</TextBlock>

<pre>
  <code lang="java">a[3]</code>
</pre>

<ArrayTable array={[1, 2, 3, 4, 5]} selected={3} />