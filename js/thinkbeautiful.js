var result = [];
// 获取页面上的所有链接
var elements = document.querySelectorAll("a");
for (let element of elements) {
	result.push({
		"url": element.href,
		"text": element.innerText
	});
}

window.alert("想的美～");
