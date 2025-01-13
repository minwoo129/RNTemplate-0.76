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
- `.gitignore` 파일 추가
  > 이 템플릿으로 프로젝트를 설정하면 .gitignore 파일이 추가가 안됨(원래 템플릿 폴더 내에는 들어있음)  
  > 프로젝트 생성이 완료되면 로컬 디렉토리에 `.gitignore` 파일을 직접 생성하고 `{템플릿이 저장된 git 레포 경로}/template` 디렉토리 안에 있는 `.gitignore` 파일 내용을 복붙하면 됨!!!
- 패키지 설치
  ```bash
  yarn install
  ```
- env 파일 추가
  `src > config` 디렉토리 내에 `.env` 파일을 추가하고 동일 경로 내 `env.d.ts` 파일에서 env 파일의 변수를 선언해주면 됨!!!

## 4. 프로젝트 관련 설명

1. 프로젝트가 생성되면 안드로이드의 패키지명을 포함한 모든 프로젝트의 이름이 생성시 입력한 명칭으로 설정됩니다.  
   -> iOS는 Bundle ID를 따로 설정해줘야 합니다!!!
2. github에서 CI/CD기능을 수행할 경우를 대비해 간단한 PR 템플릿과 이슈 템플릿이 생성되어 있습니다.  
   -> 필요하신 경우에만 사용하시면 됩니다!!
