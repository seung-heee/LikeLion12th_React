## 프로젝트 시작
npm install -g create-react-app
create-react-app <프로젝트 명>

## 불필요한 파일 삭제
public 폴더 : index.html 남기고 모두 제거
src 폴더 : index.js / App.js 남기고 모두 제거

## 최상위 태그 규칙
#### JSX가 반환하는 모든 태그는 반드시 최상위 태그로 감싸야 한다.
#### Fragment, 빈 태그도 사용 가능 <></>
#### 최상위 태그가 존재하지 않으면 오류 발생