let btn = document.querySelector(".getjock");
let joke = document.querySelector(".joke");

let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.fact);
//     joke.textContent = data.fact;
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });
// usinng axious
btn.addEventListener("click", async () => {
  try {
    let response = await axios.get(url);
    console.log(response);
    joke.innerHTML = response.data.fact;
  } catch (err) {
    console.log("Error fetching data:", err);
  }
});
