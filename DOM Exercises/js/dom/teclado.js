const d = document;

export function shortcuts(e) {
  console.log(e);
  console.log(e.key);
  console.log(e.type); 
  console.log(e.keyCode);
  console.log(e.ctrlKey);
  console.log(e.altKey);
  console.log(e.shiftKey);

  if (e.key === "a" && e.altKey){
    alert("You've launched a keyboard alert")
  }
  if (e.key === "c" && e.altKey){
    console.log("You've launched a keyboard console log")
  }
  if (e.key === "p" && e.altKey){
    prompt("You've launched a keyboard prompt")
  }
}