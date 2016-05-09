module.exports = {
  rules: [
    {
      pattern: /\/goldbank\/api\/dataList.do\?page=0$/,
      respondwith: 'menujson.json'
    },
    {
      pattern: /\/goldbank\/api\/dataList.php/,
      respondwith: 'homejson.json'
    }
  ]
}
