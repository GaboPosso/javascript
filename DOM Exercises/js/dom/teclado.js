const d = document;
let x = 0;
let y = 0;

export function shortcuts(e) {
  // console.log(e);
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e.ctrlKey);
  // console.log(e.type);
  // console.log(e.altKey);
  // console.log(e.shiftKey);

  if (e.key === "a" && e.altKey) {
    alert("You've launched a keyboard alert");
  }
  if (e.key === "c" && e.altKey) {
    console.log("You've launched a keyboard console log");
  }
  if (e.key === "p" && e.altKey) {
    prompt("You've launched a keyboard prompt");
  }
}

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
  console.log(e.key);
  console.log(e.keyCode);
  console.log(limitsBall);
  console.log(limitsStage);

  // const move = (direction) => {
  // };
  switch (e.keyCode) {
    case 37:
      // move("left");
      e.preventDefault();
      if (limitsBall.left > limitsStage.left) x--;       
      break;
    case 38:
      e.preventDefault();
      if (limitsBall.top > limitsStage.top) y--; 
      // move("up");
      break;
    case 39:
      e.preventDefault();
      // move("right");
      if (limitsBall.right < limitsStage.right) x++;
      break;
    case 40:
      e.preventDefault();
      if (limitsBall.bottom < limitsStage.bottom) y++;
      // move("down");
      break;

    default:
      break;
  }
  $ball.style.transform =`translate(${x*10}px, ${y*10}px)`;
}
