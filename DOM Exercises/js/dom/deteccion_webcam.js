const d = document,
  n = navigator;

export default function webcam(id) {
  const $video = d.getElementById(id);
  // console.log(n.mediaDevices.getUserMedia);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) =>{ 
        $video.insertAdjacentHTML("beforebegin", `<p>An error occured:<mark>${err}</mark></p>`)
        console.log(`An error occured:${err}!`
        
        )}); //Promise
  }
}
