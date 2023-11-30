const d = document;

export function countdown(id, limitDate, message) {
  const $countdown = d.getElementById(id),
    countDownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countDownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours =
       ( "0" +
        Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
      minutes = ( "0" +
      Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
      seconds = ( "0" +
      Math.floor((limitTime % (1000 * 60)) / (1000))).slice(-2);

    $countdown.innerHTML = `<h3>${days} days ${hours} hours ${minutes} minutes ${seconds} seconds</h3>`;
    // console.log(countDownDate, now, limitTime);

    if(limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = `<h3>${message}</h3>`;
    // console.log(countDownDate, now, limitTime);
    }
  }, 1000);

  // // let countDownDate = new Date("Jan 01, 2023 00:00:00").getTime();
  // // let now = new Date().getTime();
  // // let t = countDownDate - now;
  // // let days = Math.floor(t/(1000*60*60*24));
  // // let hours = Math.floor(t%(1000*60*60*24))
  // // let timer = setInterval(() => {

  // })
}
