let d = document;
export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelector("[data-dark]"); //Use brackets to select a data type.

  let moon = "🌙",
    sun = "☀️";

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      console.log($themeBtn.textContext);
      if ($themeBtn.textContext === moon) {
        $selectors.forEach((el) => el.classList.add(classDark));
        $themeBtn.textContext = sun;
       
      } else {
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContext = moon;
      }
    }
  });
}
