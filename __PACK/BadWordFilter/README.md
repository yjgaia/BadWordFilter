# BadWordFilter
비속어 필터

## 사용법
- `text` 필터링 할 텍스트
- `language` 텍스트의 언어 (`'ko'`, `'en'`, `'ja'`, `'zh'` 지원)

```javascript
BadWordFilter.Replace({
	text : '아오 시발',
	language : 'ko'
}); //-> 아오 ♡♡
```

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)
