var countdown = 0;
function timeCount() {

    if (countdown >= 0) {

        self.postMessage(countdown);
        countdown = countdown - 1;

        setTimeout(function () {
            timeCount();
        }, 1000);
    } else {
        self.postMessage(-1);
    }
}

self.addEventListener("message", function (e) {
    console.log("收到主程式的資料" + e.data);
    countdown = e.data;
    timeCount();
})