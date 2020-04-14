/**

====================
    15. 짝수와 홀수
====================

문제 설명

정수 num이 짝수일 경우 Even을 반환하고 홀수인 경우 Odd를 반환하는 함수, solution을 완성해주세요.

제한 조건

num은 int 범위의 정수입니다.
0은 짝수입니다.

입출력 예

num	return
3	Odd
4	Even
 */
function solution(num) {
    return (num % 2) ? "Odd" : "Even"
}

solution([1,2,3,4])

// 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges