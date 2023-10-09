<script>
 const fetchVerse = (async () => {
     const response = await fetch(
         //'https://360api.gordon.edu/api/activities'
         'https://labs.bible.org/api/?passage=John%203:16&type=json'
     );
     return await response.json();
 })()
</script>

{#await fetchVerse}
    <p>...waiting</p>
{:then data}
    {JSON.stringify(data)}<br/>
    {data[0].text + " " + data[0].bookname + " " +
    data[0].chapter + ":" + data[0].verse}
{:catch error}
    <p>An error occurred!</p>
{/await}
