const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


    // const telephoneNumber = document.getElementById("numero");
    // const passwordLimitationNumber = document.getElementById("palavrapasse");

    // telephoneNumber.addEventListener('input', function(){
    // if(this.value.length > 9)
    // {
    //   this.value = this.value.slice(0, 1);
    // }
    // })