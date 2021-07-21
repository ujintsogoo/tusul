let input = document.getElementById("search");
let container = document.getElementById("container");
const getGiphy  = () => {
    container.innerHTML = '';
    let value = input.value;
    axios.get('https://api.giphy.com/v1/gifs/search?api_key=5wQRMc0cFP9pQHvNsmIxYWPJc85PZnZP&limit=20&offset=0&q='+ value).then(response => {
        response.data.data.forEach(element => {
            let img = document.createElement('img');
            img.src=element.images.original.url;
            img.alt=element.title;
            img.width= 240;
            img.height = 160;
            container.appendChild(img); 
        });
    });
}