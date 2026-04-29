---
marp: true
theme: default
paginate: true
header: '데이터 수집 리포트'
footer: 'Marp Presentation'
---

# 네모앱 데이터 스크래핑 분석
### 데이터 분석 및 수집 계획

---

## 1. HTTP 요청 정보 및 헤더

- **Request URL**: `https://www.nemoapp.kr/api/store/search-list`
- **Method**: `GET`
- **Status**: `200 OK`
- **Referrer Policy**: `strict-origin-when-cross-origin`

### 주요 헤더
- `referer`: `https://www.nemoapp.kr/store`
- `user-agent`: Chrome 147 (macOS)
- `sec-fetch-mode`: `cors`

---

## 2. Payload 정보

검색 파라미터 (Query String):

- `Subway`: 222 (역 번호)
- `Radius`: 1000m
- `NELat / NELng`: 37.513 / 127.035
- `SWLat / SWLng`: 37.483 / 127.000
- `Zoom`: 15
- `PageIndex`: 0

---

## 3. 데이터 수집 계획

- **대상**: `items` 배열 하위의 모든 객체
- **방법**: 전체 데이터 수집 (토큰 제한 고려)
- **JSON 구조**:
  ```json
  {
    "items": [
      { ... }
    ]
  }
  ```

---

## 4. 검증 및 저장

- **수집 확인**: 한 페이지의 성공적 수집 여부 체크
- **데이터 저장**: SQLite DB 활용 (`data/` 폴더)
- **소스 관리**: `src/` 폴더 내 스크립트 관리

---

# Q&A
감사합니다.
