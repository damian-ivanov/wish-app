export default function Create() {
    return (
        <>
       <h3>Create new wish</h3>
        <form>
        <label>
        Name:
        <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        <textarea>
  Hello there, this is some text in a text area
</textarea>
</form>
</>
    )
}