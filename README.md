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
  > 이 프로젝트를 통째로 클론해서 각자 레포지토리에 올리시면 됩니다.
- 프로젝트 생성 명령어
  ```bash
  npx @react-native-community/cli@15.0.0 init {원하는 프로젝트 명} --template {템플릿이 저장된 git 레포 경로}
  ```
- E2E 테스트(Detox) 환경 설정(안되어있는 경우만)
    - CLI 설치
      ```
      npm install detox-cli --global
      ```
   - iOS 시뮬레이터 유틸 설치(Mac OS만)
     ```
     brew tap wix/brew
     brew install applesimutils // 또는 arch --arm64 brew install applesimutils
     ```

## 4. 프로젝트 관련 설명

1. 프로젝트가 생성되면 안드로이드의 패키지명을 포함한 모든 프로젝트의 이름이 생성시 입력한 명칭으로 설정됩니다.  
   -> iOS는 Bundle ID를 따로 설정해줘야 합니다!!!
2. github에서 CI/CD기능을 수행할 경우를 대비해 간단한 PR 템플릿과 이슈 템플릿이 생성되어 있습니다.  
   -> 필요하신 경우에만 사용하시면 됩니다!!
