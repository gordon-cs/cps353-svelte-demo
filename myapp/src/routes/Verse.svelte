<script>
 const fetchVerse = (async () => {
     const response = await fetch(
         'https://labs.bible.org/api/?passage=John%203:16&type=json'
     );
     return await response.json();
 })()
</script>

{#await fetchVerse}
    <p>...waiting</p>
{:then data}
   {JSON.stringify(data)}
{:catch error}
    <p>An error occurred!</p>
{/await}
