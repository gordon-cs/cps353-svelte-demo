<script>
 import { username } from './user-store.js';
 let name = $username;

 function setUsername() {
     $username = name;
 }
</script>

<form on:submit|preventDefault={() => setUsername()}>
    <input class="username" id="newname" bind:value={name} />
</form>
<!-- {$username} -->

<style>
 .username {
     padding: .3em;
     background-color: rgba(255, 255, 255, .05);
     border: solid thin rgba(0, 0, 0, .1);
     width: 10em;
     min-width: 10em;
 }
</style>
