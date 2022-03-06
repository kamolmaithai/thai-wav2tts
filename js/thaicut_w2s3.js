// Project: thai-cut-slim
// CreatedBy: Comdevx
// Email: comdevx@gmail.com
// Created: 2019/10/25

var dicthai;
var client = new XMLHttpRequest();
	client.open('GET', 'js/dict3.txt');
	client.onreadystatechange = function() {
	  dicthai = client.responseText.split('\n');
}
client.send();


function thaicut (w) {
	   var arr = []

    for (var i = 0; i < w.length;) {

        var sub = []
        dicthai.forEach(v2 => {

            if (w[i] + w[i + 1] === v2[0] + v2[1]) sub.push([v2, v2.length])

        })

        sub.sort((a, b) => b[1] - a[1])

        for (var ii = 0; ii < sub.length; ii++) {
			var subtmp = sub[ii][0].split(":");
            var l = sub[ii][1] - (subtmp[1].length +1 )+ i;
            var s = w.substring(i, l)	;		
            if (subtmp[0] === s) {
                i = l - 1;
				arr.push(subtmp[1]);
                //arr.push(s)
                ii = sub.length;

            }

        }

        i++

    }
    return arr

}
function numinWords (num) {
//	var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
//	var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
//	var a = ['','หนึ่ง ','สอง ','สาม ','สี่ ', 'ห้า ','หก ','เจ็ด ','แปด ','เก้า ','สิบ ','สิบเอ็ด ','สิบสอง ','สิบสาม ','สิบสี่ ','สิบห้า ','สิบหก ','สิบเจ็ด ','สิบแปด ','สิบเก้า'];
//	var b = ['', '', 'ยี่สิบ','สามสิบ','สี่สิบ','ห้าสิบ', 'หกสิบ','เจ็ดสิบ','แปดสิบ','เก้าสิบ'];
	var a = ['','หนึ่ง ','สอง ','สาม ','สี่ ', 'ห้า ','หก ','เจ็ด ','แปด ','เก้า ','สิบ ','สิบ เอ็ด ','สิบ สอง ','สิบ สาม ','สิบ สี่ ','สิบ ห้า ','สิบ หก ','สิบ เจ็ด ','สิบ แปด ','สิบ เก้า'];
	var b = ['', '', 'ยี่ สิบ','สาม สิบ','สี่ สิบ','ห้า สิบ', 'หก สิบ','เจ็ด สิบ','แปด สิบ','เก้า สิบ'];
	
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'สิบ ล้าน ' : ''; // 'crore '
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'แสน ' : ''; // 'lakh '
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'พัน ' : ''; // 'thousand '
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'ร้อย' : ''; // 'hundred '
//    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    str += (n[5] != 0) ? ((str != '') ? ' ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + '' : '';
    return str;
}

function numreplace_rule(text){
	var r = /\d+/g;
//	var found = [];
	var m;
	while ((m = r.exec(text)) != null) {
	// alert(m[0]);
	text = text.replace(m[0],numinWords(m[0]));
	}
return text;	
}
