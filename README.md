# StyleKey_Admin
 **서비스 페이지**: [StyleKey GitHub 페이지](https://github.com/styleKey)

---
## 기술 스택
- [React](https://ko.legacy.reactjs.org/docs/getting-started.html)
- 자바스크립트, JSX(babel)

## 개발 환경 설정
- **에디터(IDE, Code Editor):**: VSCode
- **필수 설치 소프트웨어:** Node.js(v16.16.0), npm (v9.6.7)

---
## 개발 목표
- 구조화: 관리자 로그인 페이지, 회원 관리 페이지, 스타일포인트 관리 페이지(브랜드 관리, 코디룩-아이템 관리) 구분
- 보안 및 접근 제어

---
# 기능
- 검색 및 필터링: AJAX를 사용한 동적 결과 업데이트
- 보안 및 접근 제어: Role 기반 접근 제어
---
# 세부 기능

# 관리자 로그인 페이지
- ID, Password 로그인
- Forget Password

# 회원 관리 페이지
- User 구성 요소: Long id, String name, String email, Role role, OAuthProvider oAuthProvider, String provider
- R(조회) 기능 제공
- 메인 페이지 : 조회 리스트 페이지 

# 스타일포인트 관리 페이지
- 스타일포인트를 기준으로 한 관리 기능을 제공한다. 이는 스타일포인트 ID를 사용하여 코디룩 목록과 브랜드 목록을 조회하는 기능을 포함한다.
- 스타일포인트 관리 페이지는 스타일포인트 ID 네비게이션이 있다. 각각의 네비게이션을 클릭하면 "스타일포인트 ID에 해당하는 코디룩 목록 전체 조회, 스타일포인트 ID에 해당하는 브랜드 목록 전체 조회"를 한다.
- 가장 중요한 것은 페이지 이동시마다 스타일포인트 ID를 가지고 있다는 것이다. 이 스타일포인트 ID를 코디룩 정보 등록, 브랜드 정보 등록할때 사용한다.

## "StylePoint" 관리
- StylePoint 구성 요소: Long id, String title, String description, String image
- R(조회) 기능 제공: 스타일포인트 단건 정보 조회 / 스타일포인트 전체 정보 조회
- U(수정) 기능 제공: 스타일포인트 정보 수정

## "Brand" 관리
- Brand 구성 요소: Long id, String title, String title_eng, String description, String site_url, String image, Long stylePointId
- C(생성) 기능 제공: 브랜드 정보 등록
- R(조회) 기능 제공: 브랜드 정보 단건 조회 / 브랜드 정보 전체 조회 / 스타일포인트 ID에 해당하는 브랜드 목록 전체 조회
- U(수정) 기능 제공: 브랜드 정보 수정
- D(삭제) 기능 제공: 브랜드 정보 삭제
- 메인 페이지 : 스타일포인트 ID에 해당하는 브랜드 목록 전체 조회
- 서브 페이지 : 브랜드 정보 등록 페이지


## "CoordinateLook-Item" 관리
- CoordinateLook 관리에서 Item 관리도 포함되는 것이다.
- CoordinateLook 구성 요소: Long id, String title, String image, Long stylePointId, List<ItemResponse> items
- C(생성) 기능 제공: 코디룩 정보 등록 (아이템도 함꼐 등록된다.)
- R(조회) 기능 제공: 코디룩 단건 조회. 해당 코디룩 안에 속한 아이템을 함께 반환한다. / 코디룩 정보 전체 조회 / 스타일포인트 ID에 해당하는 코디룩 목록 전체 조회
- U(수정) 기능 제공: 코디룩 정보 수정
- D(삭제) 기능 제공: 코디룩에 속한 아이템 삭제 / 코디룩 정보 삭제
- 메인 페이지 : 스타일포인트 ID에 해당하는 코디룩 목록 전체 조회
- 서브 페이지 :
  ### "Item" 관리
  - Item 구성 요소: Long id, String title, String sales_link, String image, Long brandId, Long categoryId, Long coordinateLookId
  - R(조회) 기능 제공: 아이템 정보 단건 조회 / 아이템 정보 전체 조회 / 코디룩 ID에 해당하는 아이템 목록 전체 조회




