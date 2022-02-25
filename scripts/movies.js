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
    data.forEach((element) => {
        let div = document.createElement("div")
        // div.setAttribute("class", "carousel-cell")

        let image = document.createElement("img")
        image.src = `https://image.tmdb.org/t/p/w500/${element.poster_path}`;

        let button = document.createElement("button")
        button.textContent = "WATCH"
        button.style = "white";

        let title = document.createElement("p")
        title.innerText = element.original_name

        div.append(image, title, button)
        div.onclick = () => {
            var arr = []
            arr.push(element)
            localStorage.setItem("zee5:", JSON.stringify(arr));
            window.location.href = "video.html"
        }
        parent.append(div)
    });
}

export { makeapicall, appendpicture }

 