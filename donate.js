let amount = 5500;
const getAmount = document.getElementById("total");
getAmount.innerText = amount;

function checkAmount(currentAmount, donation) {
  const leftAmount = currentAmount - donation;
  return leftAmount;
}

// button section
const donationSection = document.getElementById("donation-section");
const historySection = document.getElementById("history-section");

document.getElementById("donation-btn").addEventListener("click", function (event) {
  event.target.style.backgroundColor = "#B4F461";
  event.target.style.border = "0px";
  document.getElementById("history-btn").style.backgroundColor = "#FFF";
  document.getElementById("history-btn").style.border ="1px solid rgba(17, 17, 17, 0.30)";
  historySection.classList.add("hidden");
  donationSection.classList.remove("hidden");
});

document.getElementById("history-btn").addEventListener("click", function (event) {
  event.target.style.backgroundColor = "#B4F461";
  event.target.style.border = "0px";
  document.getElementById("donation-btn").style.backgroundColor = "#FFF";
  document.getElementById("donation-btn").style.border ="1px solid rgba(17, 17, 17, 0.30)";
  donationSection.classList.add("hidden");
  historySection.classList.remove("hidden");
});


// Amount validation
const buttons = donationSection.querySelectorAll("button");
for (const button of buttons) {
  button.onclick = function (event) {
    const parentValue = event.target.parentNode;
    const inputValue = parentValue.querySelector("input").value;
    if (isNaN(inputValue)) {
      parentValue.querySelector("input").value = "";
      alert("Amount is not valid");
    }
    else {
      let donation = parseInt(inputValue);
      if (amount < donation) {
        parentValue.querySelector("input").value = "";
        alert("Amount is not sufficient");
      }
      else if(donation <= 0){
        parentValue.querySelector("input").value = "";
        alert("Enter a Valid Amount")
      }
      else {
        amount = checkAmount(amount, donation);
        getAmount.innerText = amount;
        parentValue.querySelector("input").value = "";
        const donationValue = parseInt(parentValue.querySelector('span').innerText);
        const totalDonation = donationValue + donation;
        parentValue.querySelector('span').innerText = totalDonation;

        // donation history section 
        const time = new Date();
        const heading = parentValue.querySelector('h2');
        const child = document.createElement('div');
        child.innerHTML = `<div class="lg:px-6 px-3 rounded-xl py-4 my-4 border border-gray-300j">
        <p class="font-bold lg:text-xl text-base">${donation} Taka is Donated for ${heading.innerText}</p>
        <p class="lg:text-base text-sm text-[#1111119e] font-light">Date : ${time}</p>
        </div>`;
        historySection.appendChild(child);

        // show modal section 
        const modal = document.getElementById('my_modal_5');
        modal.showModal();
      }
    }
  }
}





// let amount = 5500;
// const getAmount = document.getElementById("total");
// getAmount.innerText = amount;

// function checkAmount(currentAmount, donation) {
//   let leftAmount = currentAmount - donation;
//   return leftAmount;
// }

// // button section
// const donation_section = document.getElementById("donation-section");
// const history_section = document.getElementById("history-section");

// document.getElementById("donationBtn").addEventListener("click", function (event) {
//   event.target.style.backgroundColor = "#B4F461";
//   event.target.style.border = "0px";
//   document.getElementById("historyBtn").style.backgroundColor = "#FFF";
//   document.getElementById("historyBtn").style.border = "1px solid rgba(17, 17, 17, 0.3)";
//   history_section.classList.add("hidden");
//   donation_section.classList.remove("hidden");
// });

// document.getElementById("historyBtn").addEventListener("click", function (event) {
//   event.target.style.backgroundColor = "#B4F461";
//   event.target.style.border = "0px";
//   document.getElementById("donationBtn").style.backgroundColor = "#FFF";
//   document.getElementById("donationBtn").style.border =
//     "1px solid rgba(17, 17, 17, 0.70)";
//     donation_section.classList.add("hidden");
//     history_section.classList.remove("hidden");
// });


// // amount increase and decrease
// const buttons = donation_section.querySelectorAll("button");
// for (const button of buttons) {
//   button.onclick = function (event) {
//     const parentValue = event.target.parentNode;
//     const inputValue = parentValue.querySelector("input").value;
    // if (isNaN(inputValue)) {
    //   parentValue.querySelector("input").value = "";
    //   alert("Amount is not valid");
    // }
    // else {
    //   let donation = parseInt(inputValue);
    //   if (amount < donation) {
    //     parentValue.querySelector("input").value = "";
    //     alert("Amount is not sufficient");
    //   }
    //   else if(donation <= 0){
    //     parentValue.querySelector("input").value = "";
    //     alert("Enter a Valid Amount")
    //   }
//       else {
//         amount = checkAmount(amount, donation);
//         getAmount.innerText = amount
//         parentValue.querySelector("input").value = "";
//         const donation_amount = parseInt(parentValue.querySelector('span').innerText)
//         const total_donation = donation_amount + donation
//         parentValue.querySelector('span').innerText = total_donation

//         // add donation section 
//         const time = new Date()
//         const heading = parentValue.querySelector('h2')
//         const childValue = document.createElement('div')
//         childValue.innerHTML = `<div class="bg-[#11111152] lg:px-6 px-3 rounded-xl py-4 my-4" style="border: 1px solid rgba(17, 17, 17, 0.70);">
//           <p class="font-bold text-[#111] lg:text-xl text-base">${donation} Taka is Donated for ${heading.innerText}</p>
//           <p class="lg:text-base text-sm text-[#1111119e] font-light">Date : ${time}</p>
//         </div>`
//         history.appendChild(childValue)

//         // show modal section 
//         const modal = document.getElementById('my_modal_5')
//         modal.showModal()
//       }
//     }
//   };
// }