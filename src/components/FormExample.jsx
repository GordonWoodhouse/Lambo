export default function Form() {
    return <form>className="new-item-form"
        <div className="form-row">
            <label htmlFor="item"> New Item</label>
            <input type="text" id="item" />
        </div>
        <button className="btn"> ADD</button>
    </form>
}