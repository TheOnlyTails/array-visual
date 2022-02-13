<script lang="ts">
  import { ArrayTable } from "$lib";
  import { TextBlock } from "fluent-svelte";

  let a = [1, 2, 3, 4, 5];
</script>

<TextBlock variant="title">יצירת מערך</TextBlock>
<TextBlock>
  כדי ליצור מערך, נגדיר משתנה מסוג
  <code lang="java">int[]</code>
  ונאתחל אותו.
  ניתן ליצור מערכים בשתי דרכים.
  <ul>
    <li>
      אפשר להשתמש בסוגריים מסולסלות
      &lcub;&rcub;
      כדי לאתחל את המערכים עם מספרים קבועים מראש.
    </li>
    <li>
      אפשר להשתמש ב
      <code lang="java">new int[size]</code>
      כדי ליצור מערך ריק עם גודל מוגדר (בתוך הסוגריים המרובעות)
    </li>
  </ul>
</TextBlock>

<pre>
  <code lang="java">
    int[] a = &lcub;1, 2, 3, 4, 5&rcub;;
  </code>
</pre>
<pre>
  <code lang="java">
    int[] a = new int[5]; // empty array
  </code>
</pre>

<ArrayTable array={a} />