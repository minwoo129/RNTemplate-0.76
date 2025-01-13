# React Native Project Template

## 1. Description

- 자주 사용할 것으로 예상되는 프로젝트 구조로 React Native 프로젝트를 빠르게 생성할 수 있습니다.
- 설정된 기능
  - React Navigation
  - Global State: Redux(Redux Toolkit)
  - Rest API: Axios
  - env

## 2. 초기 설정 시 체크리스트

- [ ] jdk 버전 확인: 17이상
- [ ] node 버전: 최소 20 이상

## 3. 프로젝트 설정 방법

- 템플릿 커밋  
  -> 각자 github에 해당 템플릿 커밋 후 업로드
- 프로젝트 생성 명령어
  ```bash
  npx @react-native-community/cli@15.0.0 init {원하는 프로젝트 명} --template {템플릿이 저장된 git 레포 경로}
  ```
- 패키지 설치
  ```bash
  yarn install
  ```
- env 파일 추가
  `src > config` 디렉토리 내에 `.env` 파일을 추가하고 동일 경로 내 `env.d.ts` 파일에서 env 파일의 변수를 선언해주면 됨!!!
