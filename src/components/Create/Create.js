export default function Create() {

    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { title, description, isGood } = Object.fromEntries(formData);
        console.log(title, description, Boolean(isGood));
    }

    return (
        <>
            <h3>Create new wish</h3>
            <form method="POST" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Wish title</label>
                    <input type="text" name="title" id="title" placeholder="example: I want a new car..." />
                </div>

                <div>
                    <label htmlFor="description">Wish description</label>
                    <textarea name="description" id="description" placeholder="example: I want a new car, because..." />
                </div>

                <div>
                    <label htmlFor="isGood">I confirm I was a good boy / girl last year</label>
                    <input type="checkbox" name="isGood" id="isGood" default="unchecked" />
                </div>

                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </>
    )
}