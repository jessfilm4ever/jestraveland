const player = document.getElementById("player");

// 先播放固定测试影片
player.src = "media/test.mp4";

// 自动播放
player.autoplay = true;

// 手机播放必须静音才能自动播放
player.muted = true;

// 循环播放
player.loop = true;

// 播放失败时忽略错误（例如浏览器限制）
player.play().catch(() => {});