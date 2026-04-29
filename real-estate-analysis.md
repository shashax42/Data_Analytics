---
marp: true
theme: default
paginate: true
backgroundColor: #FFFFFF
color: #111111
style: |
  section {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    padding: 40px;
    justify-content: flex-start;
  }
  section::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 8px;
    background-color: #E8000D;
  }
  h1 {
    color: #111111;
    font-size: 44pt;
    margin-bottom: 0;
    border-bottom: 2px solid #DDDDDD;
    padding-bottom: 20px;
  }
  h2 {
    color: #444444;
    font-size: 28pt;
    margin-top: 10px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 30px;
  }
  th {
    background-color: #FAFAFA;
    border-bottom: 2px solid #111111;
    text-align: left;
    padding: 10px;
  }
  td {
    border-bottom: 1px solid #DDDDDD;
    padding: 10px;
  }
  blockquote {
    background: #FAFAFA;
    border-left: 5px solid #E8000D;
    font-style: italic;
    margin: 20px 0;
    padding: 10px 20px;
  }
  footer {
    color: #888888;
    font-size: 10pt;
  }
---

# 🏢 부동산 시장 분석 리포트
## Nemo Professional Data Analytics

---

## 📈 수집 데이터 요약 (강남역 인근)

네모앱 API를 통해 수집된 **실시간 매물 20건** 분석 결과입니다.

- **평균 보증금**: 약 4.2억 원
- **평균 월세**: 약 338만 원
- **평균 면적**: 약 112㎡ (약 34평)
- **주요 지역**: 강남역 인근 (반경 1km)

---

## 📊 업종별 매물 분포

수집된 매물 중 **기타업종(사무실/작업실)**의 비중이 가장 높게 나타납니다.

- **기타업종**: 14건 (70%)
- **서비스업**: 4건 (20%)
- **판매업/음식점**: 각 1건 (10%)

---

## 🎯 주요 매물 분석 (Top 5)

| 매물 명칭 | 업종 | 보증금 | 월세 | 면적(㎡) |
| :--- | :--- | :---: | :---: | :---: |
| 역삼동 고급주택 통임대 | 기타업종 | 15억 | 1,000만 | 293.6 |
| 아정당부동산중개법인 | 음식점 | 7억 | 700만 | 106.7 |
| 스튜디오 작업실 | 기타업종 | 3억 | 160만 | 59.5 |
| 신축 단독루프탑 | 서비스업 | 2억 | 250만 | 50.0 |
| 의류사무실 스튜디오 | 서비스업 | 3억 | 250만 | 89.3 |

---

## 🔍 분석 시사점

1. **높은 보증금 형성**: 강남역 핵심 상권으로 인해 평균 보증금이 4억 원 이상으로 높게 형성됨.
2. **오피스 수요 중심**: 일반 음식점보다는 사무실, 스튜디오 등 '기타업종' 매물이 압도적으로 많음 (70%).
3. **대형 매물 존재**: 보증금 15억, 월세 1,000만 원 규모의 통임대 매물이 시장의 상위 가격대를 형성함.

---

# 감사합니다
### 실시간 데이터 수집 및 분석 완료
**수집일시**: 2026년 4월 29일

<footer>Nemo Data Analytics · Swiss International Style Applied</footer>
