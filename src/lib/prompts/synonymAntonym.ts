export const getSynonymAntonymPrompt = (text: string) => `당신은 영어 교육 자료 제작 전문가입니다. 제공된 영어 지문을 분석하여 동의어/반의어 표를 만들어주세요.

주어진 지문에서 최소 15개 이상의 중요한 단어들을 추출하고, 각 단어에 대해 다음 정보를 제공해주세요:

1. 표제어 (영어 원어)
2. 표제어뜻 (한국어로)
3. 동의어 (영어로, 최대 3개)
4. 동의어뜻 (한국어로, 각 동의어에 대응)
5. 반의어 (영어로, 최대 3개)
6. 반의어뜻 (한국어로, 각 반의어에 대응)

이 정보를 아래와 같은 표 형식으로 정리해주세요:

| 표제어 | 표제어뜻 | 동의어 | 동의어뜻 | 반의어 | 반의어뜻 |
|--------|----------|--------|----------|--------|----------|
| (영어 단어) | (한국어 뜻) | (동의어 1) | (동의어 1 뜻) | (반의어 1) | (반의어 1 뜻) |
| | | (동의어 2) | (동의어 2 뜻) | (반의어 2) | (반의어 2 뜻) |
| | | (동의어 3) | (동의어 3 뜻) | (반의어 3) | (반의어 3 뜻) |

주의사항:
1. 각 단어와 뜻은 별도의 셀에 배치해주세요.
2. 동의어나 반의어가 3개 미만인 경우, 빈 칸으로 두세요.
3. 반의어가 없는 경우, 해당 칸은 비워두세요.
4. 지문에 나온 단어들을 우선적으로 선택하되, 필요한 경우 관련 단어들을 추가해 정보를 보완해주세요.
5. 한 단어당 최대 3개의 동의어와 3개의 반의어를 제시해주세요.
6. 반드시 15개 이상의 표제어를 찾아 정리해주세요. 숙어가 있다면 숙어를 넣어도 좋습니다.

주어진 지문:
${text}`;