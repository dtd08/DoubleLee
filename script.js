let currentIdx = 0;

const slider_wrap = document.querySelector(".imgaes");
const slider = document.querySelectorAll(".slide");
const slider_clone = slider_wrap.firstElementChild.cloneNode(true);
slider_wrap.appendChild(slider_clone);

const left_btn = document.querySelector(".left_btn");
const right_btn = document.querySelector(".right_btn");


function moveSlider(direction = -1) { // 슬라이더 이동
    slider_wrap.style.transition = "all 0.6s";
    slider_wrap.style.marginLeft = direction * currentIdx * 100 + "%";
}

function stopSlider() { // 슬라이더 이동 멈춤
    setTimeout(() => {
        slider_wrap.style.transition = "0s";
    }, 5000);
}

window.onload = function () {
    setInterval(() => { // 8초에 한번씩 실행
        currentIdx++;
        moveSlider();

        // 버튼 누르면 반복 잠시 멈추고 다시 실행
        left_btn.addEventListener("click", () => {
            currentIdx--; // 왼쪽으로 이동
            moveSlider();
            stopSlider();
        });
        right_btn.addEventListener("click", () => {
            currentIdx++; // 오른쪽으로 이동
            moveSlider();
            stopSlider();
        });

        if (currentIndex == slider.length) {
            stopSlider();
            slider_wrap.style.marginLeft = "0";
            currentIdx = 0;
        }
    }, 8000);
};
