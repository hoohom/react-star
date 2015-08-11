# react-star
React 的评分组件  
[Demo](http://htmlpreview.github.io/?https://github.com/Gxmari007/react-star/blob/master/example/index.html)

## API
```javascript
<Star rank={0} limit={5} onRank={function(index) {
  console.log('评分：' + index);
}} />
```
option | type | value
------ | ----- | ------
rank | number | default: 0
limit | number | default: 5
onRank | function | `function(index) {}`

## License
MIT
