/*
    15:10 ~ 15:50
    Input string = "abaxyzzyxf"
    Ouput string = "xyzzyx"
    Constraint 
        - 0 <= n <= 10^5
    Edge Case
        - string.length none = ""
        - 중복된 output이 있을 경우 최초의 string을 반환
    Algorithm 
        - Two pointer
        - pointer1 front, back
        - pointer2 front, back
         abaxyzzyxf
pointer  ^^      ^^
pointer1, pointer2의 각각 pointer의 string.length / 2 ~ 사이 간격이 1
pointer1 => 문자열과
pointer2 => 문자열.revers가 같으면 Math.max(Output.lenght)
// 면접관에 알고리즘 확인
*/

//"abaxyzzyxf"
function getVal(str: string, left: number, right: number){
    while(left >= 0 && right < str.length){
        //console.log(`${str[left]}, ${str[right]}`);
        if(str[left] !== str[right]) break;
        left--;
        right++;
    }
    //console.log(`${left}, ${right}`);
    return str.substring(left, right + 1);
}

function thirdQuestion(str: string): string{
    if(!str.length) return "";
    if(str.length === 1) return str;
    
    let retVal = "";
    for(let i = 1; i < str.length; i++){
        //홀짝
        let odd = getVal(str, i - 1, i + 1);
        let even = getVal(str, i - 1, i);
        console.log(`even: ${even}, odd: ${odd}`);
    }
    
    return retVal;
}

export function run(){
    console.log(thirdQuestion("abaxyzzyxf"));

    //getVal("abaxyzzyxf", 0, 2);
}

// 짝수 홀수