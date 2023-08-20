import "../styles/style.scss"



//------ dropdown funcitonality

const classess = {
  allDropDown: ".dropdown",
  allCategory: ".top-nav__category-con",
  showClass: "show-dropdown",
  active: "active",
  veil: "veil"
}


// const state = {
//   isOpen: false
// }

let allDropDown = document.querySelectorAll(classess.allDropDown);
let allCategory = document.querySelectorAll(classess.allCategory)
let firstSection = document.querySelector("section");

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
      removeActive()
      firstSection.classList.add(classess.veil)
      getCategory.classList.add(classess.active)
      allDropDown.forEach(item => {
        if (item.classList.contains(getId)) {
          item.classList.add(classess.showClass)
        }
      })
    }
  } else {
    // if no dropdown or category is clicked
    firstSection.classList.remove(classess.veil)
    removeShowClass()
    removeActive()
  }

})


// remove all show class from dropdown
const removeShowClass = () => {
  allDropDown.forEach(el => {
    el.classList.remove(classess.showClass)
  })
}


// remove active class from all Category
const removeActive = () => {
  allCategory.forEach(el => {
    el.classList.remove(classess.active)
  })
}


// -------Search functionality-----
const searchConst = {
  close: "top-nav__close",
  input: "top-nav__input",
  search: "top-nav__search",
  display: "display-block",
  grow:"search-grow",
  inputStyle:"input-style",
  advance:"top-nav__advance"
}

const searchIcon = document.querySelector(`.${searchConst.search}`)
const input = document.querySelector(`.${searchConst.input}`)
const close = document.querySelector(`.${searchConst.close}`)
const advance = document.querySelector(`.${searchConst.advance}`)


searchIcon.addEventListener("click", e =>{
  searchIcon.classList.add(searchConst.grow)
  close.classList.add(searchConst.display)
  input.classList.add(searchConst.inputStyle)
  advance.classList.add(searchConst.display)
  
})

close.addEventListener("click", e =>{
  searchIcon.classList.remove(searchConst.grow)
  close.classList.remove(searchConst.display)
  input.classList.remove(searchConst.inputStyle)
  advance.classList.remove(searchConst.display)
})

