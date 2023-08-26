const El_btn = document.getElementById("btn");
const El_result = document.getElementById("result");

const pickColor = async () => {
    const eyeDropper = new EyeDropper()
    const { sRGBHex } = await eyeDropper.open()
    El_result.innerHTML = sRGBHex
}

El_btn.addEventListener('click',pickColor)