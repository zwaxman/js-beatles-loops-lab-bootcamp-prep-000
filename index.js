// add solution here
function theBeatlesPlay(musicians,instruments){
  var newArr=[];
  for(var i=0;i<musicians.length;i++){
    newArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArr
}