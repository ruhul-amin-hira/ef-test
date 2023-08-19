import "../styles/style.scss"



//------ dropdown funcitonality

const classess = {
  allDropDown: ".dropdown",
  allCategory: ".top-nav__category-con",
  showClass: "show-dropdown"
}


// const state = {
//   isOpen: false
// }

let allDropDown = document.querySelectorAll(classess.allDropDown);
let allCategory = document.querySelectorAll(classess.allCategory)


document.addEventListener("click", e => {
  if (e.target.closest(classess.allDropDown)) {
    console.log("from closest", e.target.closest(classess.allDropDown))
    return;
  }
  //otherwise open the dropdown
  let getCategory = e.target.closest(classess.allCategory);
  if (getCategory) {
    let getId = getCategory.id;
    if (getId) {
      removeShowClass()
      allDropDown.forEach(item => {
        if (item.classList.contains(getId)) {
          item.classList.add(classess.showClass)
        }
      })
    }
  } else {
    // if no dropdown or category is clicked
    removeShowClass()
  }

})


// remove all show class from dropdown
const removeShowClass = () => {
  allDropDown.forEach(el => {
    el.classList.remove(classess.showClass)
  })
}

