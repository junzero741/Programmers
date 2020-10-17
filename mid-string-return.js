function solution(s) {
    var array = s.split('');
    var mid = Math.floor(array.length/2);
    
    if(s.length % 2 === 0) {
        var answer = array[mid - 1] + array[mid];
    } else {
        var answer = array[mid];
    }
   
    return answer;
}