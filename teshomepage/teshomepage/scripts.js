let counter = 1;
const intervalTime = 5000; 

const changeSlide = () => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
};

const interval = setInterval(changeSlide, intervalTime);
document.querySelectorAll('.manual-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        clearInterval(interval);
        counter = index + 1;
        document.getElementById('radio' + counter).checked = true;
        setInterval(changeSlide, intervalTime);
    });
});
