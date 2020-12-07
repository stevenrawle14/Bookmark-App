const template = function(){
    return `
        <H1>BOOKMARK APP</H1>,
        <div class="app">
            <form id="bookmark-form">
                <label name= Title </label>
                <input id="title" type="text" placeholder="Title" required </input>
                <label name="Url"</label>
                <input id="url" type="text" placeholder="Paste URL" required </input>
                <label name="Descrption"</label>
                <input id="description" type="text" placeholder="Add Description" required</input>
                <label name="Rate" </label>       
                <input id="rate" type="text" placeholder="One-Word-Rating" required </input>
                <span id="1' class="fa fa-star checked"></span>
                <span id="2" class="fa fa-star checked"></span>
                <span id="3" class="fa fa-star checked"></span>
                <span id="4" class="fa fa-star"></span>
                <span id="5" class="fa fa-star"></span>
                <button id="submit" type="button">Save</button>
            </form>
        </div>`;
}
        






