import{makeapicall,appendpicture} from "./movies.js";

var play=JSON.parse(localStorage.getItem("zee5"));
console.log("play",play[0].id)
let ids=await makeapicall(`https://api.themoviedb.org/3/movie/${play[0].id}/videos?api_key=3bc06deaaeabe85858ae8d32c24cae1f&language=en-US`)

console.log(ids)
let container=document.getElementById("divv");
var count=0;
for(var i=0;i<ids.length;i++){
    if(ids[i].type=="Trailer" || ids.length=="1"){
        count++;
        
         console.log(ids[i].key)
         let iframe=document.createElement("iframe");
        iframe.src= `https://www.youtube.com/embed/${ids[i].key}`;
        iframe.setAttribute("allowfullscreen",true);
        iframe.width="850px"
        iframe.height="450px";

        let div=document.createElement('div');
        div.id="premium"
        let h3= document.createElement("h4");
        h3.textContent="Ad-Free with Premium now at 50%OFF : ₹499/year"
        let div1=document.createElement("div");
        div1.id="buyy"
        let div2=document.createElement('div');
        div2.id="buy";
        div2.innerHTML=`<a href="buy.html"><i class="fas fa-crown"></i> BUY PLAN</a>`;
        div1.append(div2);
        div.append(h3,div1);

        let title=document.createElement("h2");
        title.textContent=play[0].title;

        container.append(iframe,div,title)
        if(count==1){
            i=ids.length;
        }
    }
}

let images_data1=await makeapicall("https://api.themoviedb.org/4/list/1?api_key=3bc06deaaeabe85858ae8d32c24cae1f")
let parent1=document.getElementById("box1");
appendpicture(images_data1,parent1)


let images_data2 = await makeapicall("https://api.themoviedb.org/3/trending/movie/week?api_key=3bc06deaaeabe85858ae8d32c24cae1f")
let parent2 = document.getElementById("box2")
appendpicture(images_data2, parent2)


let images_data3 = await makeapicall("https://api.themoviedb.org/4/list/1?api_key=3bc06deaaeabe85858ae8d32c24cae1f")
let parent3 = document.getElementById("box3")
appendpicture(images_data3, parent3)


let images_data4 = await makeapicall("https://api.themoviedb.org/3/movie/upcoming?api_key=3bc06deaaeabe85858ae8d32c24cae1f&language=en-US&page=1")
let parent4 = document.getElementById("box4")
appendpicture(images_data4, parent4)

//type":"Trailer

// {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/qc12rT66CCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
