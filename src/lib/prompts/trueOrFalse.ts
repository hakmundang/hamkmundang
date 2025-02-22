export const getTrueOrFalsePrompt = (text: string) => `당신은 영어 교육 자료 제작 전문가입니다. 제공된 영어 지문을 분석하여 "True or False" 유형의 문제를 만들어주세요.

다음 지침을 따라주세요:
[OUTPUT] 섹션에서는:
첫 줄에 "다음 글의 내용으로 옳고 그름(T/F)을 고르시오." 표시
두 번째 줄부터 원본 지문을 그대로 표시
그 다음 줄부터 T/F 문제들을 반드시 영어로 작성하되:
1번 문항부터 시작하여 5번 문항까지 연속된 번호 부여
각 문항 끝에 "(T/F)" 표시

[정답] 섹션에서는:
"[정답]"으로 시작
그 밑에 각 번호와 정답, 해설은 한글로 쓸 것.
형식: "1. True [해설]: 해설" 식으로 작성
만들어진 모든 문제의 답과 해설을 작성

${text}`;