const getCountry = async () => {
  res = await fetch("https://restcountries.com/v3.1/all")
  // console.log(res)
  response = res.json()
  data = await (response)
  console.log(data)
  htmlData = ""
  data.forEach(item => {
    htmlData += `
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${item.flags.png}">
  <div class="card-body">
    <h5 class="card-title">${item.name.common}</h5>
  </div>
  </div>`
  })
  result.innerHTML = htmlData
}
getCountry()
