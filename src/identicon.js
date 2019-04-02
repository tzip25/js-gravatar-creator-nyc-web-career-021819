const blockColor = "rgb(16, 244, 68)"
class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(input) {
    this.identicon = input
  }

  hashIdenticon() {
    const hashed = md5.array(this.identicon)
    return hashed
  }

  cssRenderer() {this.hashIdenticon().map(x => x%2 === 0 ? 1 : 0).map(function(num, index) {
    if (num === 1){
      document.getElementById(`${index%3}-${Math.floor(index/3)}`).style.backgroundColor = blockColor;
      if (index % 3 !== 0){
        document.getElementById(`${5 - index%3}-${Math.floor(index/3)}`).style.backgroundColor = blockColor
      }
    }
  })
  }

  // const rowIdx = 0
  // const columnIdx = 4

  // document.getElementById(`${rowIdx}-${colIdx}`).style.backgroundColor = blockColor


}
