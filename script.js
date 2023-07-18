let QR_Container = document.getElementById("QR_Container");
let QR_Code = document.getElementById("QR_Code");
let QR_Input = document.getElementById("QR_Input");

function generateQR() {
    if (QR_Input.value.length > 0) {
        QR_Code.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QR_Input.value;
        QR_Container.classList.add("show-img");
    } else {
        QR_Input.classList.add('error');
        setTimeout(() => {
            QR_Input.classList.remove('error');
        }, 500);
    }
}

showQR.addEventListener("click", () => {
    generateQR();
})