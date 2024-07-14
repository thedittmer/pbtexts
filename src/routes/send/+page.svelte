

<h1>Send a text message</h1>
<form method="post" action="?/create">
    <label for="to">To Phone Number</label>
    <input type="text" required name="to" />
    <label for="message">Text Message</label>
    <input type="text" required name="message" />
    <button type="submit">Submit</button>
</form>


<style>
    form{
        margin-top: .5em;
        display: flex;
        flex-direction: column;
    }
    form input{
        margin:.5em;
    }
</style>