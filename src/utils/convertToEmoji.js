// 把 ISO 3166-1 国家代码转成对应的国旗 emoji（如 "FR" → 🇫🇷）
// 原理：Unicode 的区域指示符符号 A-Z 位于 0x1F1E6–0x1F1FF，
// 127397 = 0x1F1E6 - 'A'，两个字母拼起来即为一对区域指示符。
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
