# StyleKey_Admin
 **서비스 페이지**: [StyleKey GitHub 페이지](https://github.com/styleKey)

---
## 기술 스택
- [React](https://ko.legacy.reactjs.org/docs/getting-started.html)
- 자바스크립트, JSX(babel)

## 개발 환경 설정
- 에디터(IDE, Code Editor):: VSCode
- 필수 설치 소프트웨어: Node.js(v16.16.0), npm (v9.6.7)
- 서버 통신: axios
- 상태 관리: Redux

---
# [login](https://github.com/sugoring/StyleKey_Admin/issues/4)
### 로그인 과정
- **사용자 입력 관리**: 로그인(Login.jsx)에서 ID와 비밀번호를 입력할 때 React의 useState 훅을 사용하여 입력 값을 상태로 관리함, onChange 이벤트 핸들러를 통해 사용자가 입력 필드에 타이핑할 때마다 상태 업데이트함
- **LoginFunc - 유효성 검사**: 로그인(Login.jsx)에 있는 로그인 버튼을 클릭하면, id와 pw가 유효한지 검사하는 함수(LoginFunc)가 호출함
- **LogoutFunc - 로그아웃**: 대시보드(Dashboard.jsx)에 있는 로그아웃 버튼을 클릭하면, 로그아웃을 처리하는 함수(LogoutFunc)를 호출함
### axios 통신 
-  **UI 제어**: axios 통신을 하는 동안, 중복 요청을 방지하기 위해 버튼을 비활성화(disabled) 상태로 변경함
- **로그인 성공**: userSlice.js에서 Redux를 통해 유저 정보를 포함한 응답 데이터를 상태로 저장함

----

## 회원 관리 페이지
- User 구성 요소: Long id, String name, String email, Role role, OAuthProvider oAuthProvider, String provider
- R(조회) 기능 제공
- 메인 페이지 : 조회 리스트 페이지 

## 스타일포인트 관리 페이지
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




