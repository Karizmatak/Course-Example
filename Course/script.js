let icons = document.getElementsByClassName("icon")
let aboutCourses = document.getElementsByClassName("aboutCourse")
let pinks = document.getElementsByClassName("pink2")

function openCourse(tabname){
  for(icon of icons){
    icon.classList.remove("active-link")
  }
  for(aboutCourse of aboutCourses){
    aboutCourse.classList.remove("active-tab")
  }
  for(pink of pinks){
    pink.classList.remove("pink2")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")

  event.currentTarget.classList.add("pink2")
  document.getElementById(tabname).classList.add("active-tab")
}
