const $api = "https://www.breakingbadapi.com/api/characters"
const $actors = document.querySelector('#actor')
const $header = document.querySelector("#header")
const $content = document.querySelector("#content")



function getDAta(){
    fetch($api)
    .then(function (response){
        console.log(response)
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        printData(data);

    })
}

function printData (data) {
    
$header.innerHTML +=`
<select onchange="getCh(this.value)">
<option>SVP choisier</option>
${data.map(m => `<option>${m.name}</option>`)}
</select>`

  
}
function getCh (e){
    if (e !== "SVP choisier"){console.log(e)
    fetch(`${$api}?name=${e}`)
    .then(function (response){
        console.log(response)
        return response.json();
    })
    .then(function (data) {
        console.log(data[0])

        $content.innerHTML =`
        <h2>${data[0].name} (${data[0].nickname})</h2>
        <h4>${data[0].portrayed}</h4>
        <img src="${data[0].img}"width="250">
        `

    })
}else{
    console.log('error') 
}

}
getDAta();


  


      
   