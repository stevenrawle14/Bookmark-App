const baseUrl='https://thinkful-list-api.herokuapp.com'

function getBookmarks() {
    const finalUrl = baseUrl + '/steven/bookmarks'
    return fetch(finalUrl,{
        method:'GET'
    })
    .then(res => res.json());
    
}

function postBookmark(title, url, description, rating) {
    const finalUrl = baseUrl + '/steven/bookmarks'
    let inputData= JSON.stringify({
        title:title,
        url:url,
        desc:description
    });
    console.log(inputData);
    return fetch(finalUrl, {
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: inputData
    })
    .then(res=>res.status===201)
}

function updateBookmark(id,title, url, description, rating) {
    const finalUrl = baseUrl + '/username/bookmarks' + id
    return fetch(finalUrl, {
        method:"PATCH",
        body:{
            title:title,
            url:url,
            desc:description,
            rating:rating
        }
    })
    .then(res=>res.status===201)
}

function deletebookmark(id){
    const finalUrl = baseUrl + '/username/bookmarks' + id
    return fetch(finalUrl,{
        method:'DELETE'
    }) 
    .then(res=>res.status===200)

}
const myApi = {
    getBookmarks,
    deletebookmark,
    updateBookmark,
    postBookmark
}

export default myApi

