async function makeapicall(url) {
    try {
        let res = await fetch(url)
        let data = await res.json()
        return data.results

    }
    catch (error) {
        console.log("error:", error)
    }
}

function appendpicture(data, parent) {
    console.log("data:",data)
    data.forEach((element) => {
        let div = document.createElement("div")
         
        let image = document.createElement("img")
        image.src = `https://image.tmdb.org/t/p/w500/${element.poster_path}`;
          
        let title = document.createElement("p")
        if(element.original_name){
        title.textContent= element.original_name;}
        else{
            title.textContent=element.original_title;
        }
       
        let button = document.createElement("button");
        button.setAttribute("id", "btn")
        button.textContent = "WATCH"
        button.style = "white";

        div.append(image, title, button)
        div.onclick = () => {
            var arr = []
            arr.push(element)
            localStorage.setItem("zee5", JSON.stringify(arr));
            window.location.href = "video.html"
        }
        parent.append(div)
    });
}

export { makeapicall, appendpicture }

 



