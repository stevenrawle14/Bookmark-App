/* BOOKMARK APP */    
 import myApi from "./api.js";
const template = function(){
    return `
        <H1>BOOKMARK APP</H1>,
        <div class="app">
            <form id="bookmark-form">
                <label name= Title </label>
                <input id="title" type="text" placeholder="Title"  </input>
                <label name="Url"</label>
                <input id="url" type="text" placeholder="Paste URL"  </input>
                <label name="Descrption"</label>
                <input id="description" type="text" placeholder="Add Description" </input>
                <label name="Rate" </label>       
                <span id="1' class="fa fa-star checked"></span>
                <span id="2" class="fa fa-star checked"></span>
                <span id="3" class="fa fa-star checked"></span>
                <span id="4" class="fa fa-star"></span>
                <span id="5" class="fa fa-star"></span>
                <button id="save" type="submit">Save</button>
            </form>
        </div>`;
};
const templatee= function(){
    return `
        <h1>Your Bookmarks</h1>
        <div class="bookmark-list-container">
        <button class="filter">Filter</button>
        <Button class="btn">1</button>
        <button class="btn">2</button>
        <button class="btn">3</button>
        <button class="btn">4</button>
        <button class="btn">5</button>
        <ol class="added-bookmarks">
        
        </ol>
        </div>`;
}
const yourBookmarks = function () {
    return `<li>${idkyet}</li>`
}
/*tryna Render Functions */

function readyTemplate(){
    $('body').html(template);
}

/* API */
const baseUrl='https://thinkful-list-api.herokuapp.com'

function generateBookmarks(){
    function readyTemplate(){
        $('body').append(templatee);
    };
    readyTemplate();
    myApi.getBookmarks()
    .then(data=>(data.forEach(bookmark =>{
        $('.added-bookmarks').append(
            `<span>Title:  ${bookmark.title}     Url:  ${bookmark.url}     </span>`
        );
    })))};


    function filter(){
        $('.filter').on('click',function(){
            $('.btn').hide().toggle()
        });
    };


/* EventListener */
function save() {
    

    $('form').submit((e) => {
        e.preventDefault();
        const url=  $("#url").val();
        const  title=  $("#title").val();
        const description=  $("#description").val();
        const rating = 5
        myApi.postBookmark(title, url, description, rating)

        .then(success=>{
            console.log(success);
            if(success){
                //clear inputs
        
                console.log('success')
                
            } else {
                // show error
                console.log('error')
            }
        
        });
        


       
    });
    
};  
readyTemplate();
save();
generateBookmarks();
filter();