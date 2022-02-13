<script lang="ts">
  import { ArrayTable } from "$lib";
  import { TextBlock } from "fluent-svelte";

  let aOld = [1, 2, 3, 4, 5];
  let a = [6, 2, 3, 4, 5];
</script>

<TextBlock variant="title">שינוי עצם</TextBlock>
<TextBlock>
  כדי לשנות את אחד מהעצמים במערך, נבחר בו בעזרת האינדקס שלו (עם סוגריים מרובעות) ונשנה עם סימן =.
</TextBlock>

<pre>
  <code lang="java">
    a[0] = 6;
  </code>
</pre>

<ArrayTable array={a} oldArray={aOld} />