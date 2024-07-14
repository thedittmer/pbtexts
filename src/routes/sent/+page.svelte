<script>
    export let data;
</script>

<h1>Sent Text Messages!</h1>
<div>
    <ol>
        {#each data?.records as record}
            <li>{`To: ${record.to}   Message: ${record.message}`}</li>
        {/each}
    </ol>
</div>
