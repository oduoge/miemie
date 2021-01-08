const baiduApi = 'https://fanyi-api.baidu.com/api/trans/vip/translate'
const appid = '20210108000666466'

export const createUUID = function (len, radix) {
  var chars = '0123456789'.split('');
  var uuid = [], i;
  radix = radix || chars.length;
  if(len){
    for (i = 0; i < len; i++){
        uuid[i] = chars[0 | Math.random()*radix];
    }
  }
  return '-'+uuid.join('');
}

export const commonLang = {
  // 自动检测: 'auto',
  粤语: 'yue',
  韩语: 'kor',
  泰语: 'th',
  葡萄牙语: 'pt',
  希腊语: 'el',
  保加利亚语: 'bul',
  芬兰语: 'fin',
  斯洛文尼亚语: 'slo',
  繁体中文: 'cht',
  中文: 'zh',
  文言文: 'wyw',
  法语: 'fra',
  阿拉伯语: 'ara',
  德语: 'de',
  荷兰语: 'nl',
  爱沙尼亚语: 'est',
  捷克语: 'cs',
  瑞典语: 'swe',
  越南语: 'vie',
  英语: 'en',
  日语: 'jp',
  西班牙语: 'spa',
  俄语: 'ru',
  意大利语: 'it',
  波兰语: 'pl',
  丹麦语: 'dan',
  罗马尼亚语: 'rom',
  匈牙利语: 'hu',
} 
