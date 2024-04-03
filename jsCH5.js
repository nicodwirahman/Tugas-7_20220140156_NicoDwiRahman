document.addEventListener("DOMContentLoaded", function() {
  var videoElement = document.getElementById("videoPlayer");
  var audioElement = document.getElementById("audioPlayer");
  var gambarElement = document.getElementById("gambarContainer");

  var videoHeader = document.getElementById("video");
  var audioHeader = document.getElementById("audio");
  var gambarHeader = document.getElementById("gambar");

  if (videoHeader) {
      videoHeader.addEventListener("click", function() {
          alert("Ini video RRQ");
      });
  }

  if (audioHeader) {
      audioHeader.addEventListener("click", function() {
          alert("Ini audio RRQ");
      });
  }

  if (gambarHeader) {
      gambarHeader.addEventListener("click", function() {
          alert("Ini gambar RRQ");
      });
  }
});
