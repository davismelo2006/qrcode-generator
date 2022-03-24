const iptText = document.getElementById("data");
const generateBtn = document.getElementById("generate-btn");
const qrcodeContainer = document.querySelector(".qrcode-container");

generateBtn.addEventListener("click", () => {
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${iptText.value}`;
  if (iptText.value !== "")
    qrcodeContainer.innerHTML = `<img src="${url}" alt="qrcode" id="qrcode-img"/>`;
});
