# {프로젝트명} 모바일 앱 프로젝트 설명

## 1. 프로젝트 정보

### 1-1. 운영체제별 정보

- 안드로이드 패키지명: com.projectname
- iOS Bundle ID: 미설정 => 위 안드로이드 패키지 명과 동일하게(아니면 원하는 명칭으로) 변경 필요

### 1-2. 버전 정보

- React Native: 0.76.5
  - [신형 아키텍처](https://reactnative.dev/architecture/landing-page) 기본 적용
- React: 18.3.1

### 1-3. 설정 완료 사항

- [x] Rest API 실행 코드
- [x] React Navigation 기본 구조
- [ ] 테스트 환경 구축
  - [ ] E2E 테스트 설정
  - [ ] 유닛 테스트 설정
    - [x] Redux 통합 테스트
    - [ ] React Navigation 통합 테스트
    - [x] Async Storage Mocking 설정
    - [x] msw\* Mocking 설정
      > [msw(Mock Service Worker)](https://mswjs.io/)  
      > 서버로 향하는 실제 HTTP 통신을 가로채서 모의 응답(Mocked Response)을 내보내는 API Mocking 라이브러리.
- [x] env 파일 관련 설정
- [x] 상태관리(기본: Redux)  
       -> 미들웨어가 필요한 경우 별도로 개발 필요!!!!
- [x] Context 연결 설정

### 1-4. 프로젝트 기본 폴더 및 파일 구조(Atomic Design 패턴 기반으로 설계)

> ### 참고사항
>
> - `확장자` 표시가 되어있는 경우 => `파일명`  
>   확장자 표시가 안되어 있으면 폴더명
> - 폴더명에 `@` 표시가 되어 있으면??
>   - `절대경로` 설정이 되어있다는 의미!!!
>   - 절대경로명은 폴더명과 동일!!
> - 폴더 구조가 변경되는 경우 아래 폴더 구조를 갱신할 것!!!

```bash
├── assets
│   ├── fonts # 폰트파일 저장 경로
│   └── icons # png 또는 svg 파일 저장 경로(이미지 하나 당 폴더 단위로 관리 필요!!)
├── src
│   ├── components
│   │   ├── @atoms
│   │   ├── @molecules
│   │   ├── @organisms
│   │   ├── @templates
│   │   └── @screens
│   ├── @config # env 파일에서 import한 변수 또는 화면 크기 변수 등을 관리
│   ├── @constants # config 폴더 외에 앱 전역에서 사용되는 상수 값 등을 저장한 모든 파일을 관리
│   ├── @contexts # 각 기능별 context 관리
│   ├── @hooks # 별도로 개발한 모든 custom Hook들을 관리
│   ├── @lib # Async Storage, Firebase, react-native-device-info 등 외부 서비스와 관련된 기능들을 폴더 단위로 관리
│   ├── @mocks # 테스트를 위한 모킹 코드들을 관리
│   ├── @navigation # react-navigation과 관련한 모든 코드 관리
│   │   ├── navigator
│   │   │   ├── MainStackNavigator
│   │   │   ├── MainTabNavigator
│   │   │   └── RootStackNavigator
│   │   └── index.tsx
│   ├── @redux # redux와 관련한 모든 코드 관리
│   │   ├── constants # redux 영역 별 상태값들을 폴더 단위로 관리
│   │   │   ├── {...}
│   │   │   └── index.ts # 각 영역 별 상태값들을 하나의 파일에서 export 처리하는 파일
│   │   ├── reducer # redux 영역별 reducer들을 폴더 단위로 관리(redux toolkit 기반으로 작성)
│   │   │   ├── {...}
│   │   │   └── index.ts # root reducer 선언 파일
│   │   └── store.ts # redux store 선언 파일
│   ├── @restAPI # restAPI 요청 코드 관리
│   ├── @themes # 앱 테마와 관련된 모든 상수 선언 파일들을 관리
│   └── @utils # 정규표현식, 공통함수 등 공통적으로 사용되는 유틸 파일들을 관리
├── App.tsx
└── index.js
```

## 2. 프로젝트 초기 설정 절차(프로젝트 클론 기준)

### 2-1. 초기 설정 전 유의사항

- JDK 버전 확인 필요!! => 최소 17 이상
- node 버전: 최소 20 이상
  - **<u>Xcode 실행과도 관련이 있기 때문에</u>** 가급적 컴퓨터 기본 node 버전을 20 이상으로 올리는 것을 권장!!!

### 2-2. 초기 설정 절차

1. 프로젝트 클론
2. env 파일 추가  
   src > config 폴더 내에 추가하면 됨!!!
3. 패키지 일괄 설치
   ```bash
   yarn install
   ```
4. Android
   - Keystore 파일 연결
5. iOS 실행 설정
   - 애플 인증서 또는 Provisioning Profile 연결(필요시)
   - cocoapod 패키지 설치
     ```bash
     cd ios
     pod deintegrate
     pod install
     ```
6. 프로젝트 실행
   - Android
     ```bash
     yarn android
     ```
   - iOS
     ```bash
     # =======================================================
     # ==================== 기본 실행 명령어 =====================
     # 시뮬레이터(default): iPhone SE
     yarn ios
     ```

#### 참고) iOS 시뮬레이터를 변경하고 싶은 경우

```bash
yarn ios:devices # 설치된 운영체제 별 모든 시뮬레이터 목록 조회
# 원하는 디바이스명과 운영체제를 찾은 경우
# ex) 단말기: iPhone 16 Pro, 운영체제: iOS 18.0
yarn ios --simulator='iPhone 16 Pro (18.0)'
```

## 3. Git(형상관리) 관련정보

### 3-1. Branch 정보(프로젝트 생성 후 이 명칭으로 별도 분기 필요)

1. master
   - 운영목적: Google Play 또는 App Store에 올라간 마지막 버전의 앱 코드 관리
   - 유의사항
     - Release 배포 직전에 develop 또는 staging 브랜치에서 merge해주시기 바랍니다.
     - merge 후 env 파일 내용을 운영 서버에 연결되도록 수정해주시기 바랍니다.
     - master 브랜치 내에서의 **코드 직접 수정은 엄격히 금지합니다!**
     - master 브랜치에 merge한 내용은 다른 모든 브랜치에도 merge해주시기 바랍니다.
2. hotfix
   - 운영목적: 앱 내부에서 강제종료와 같은 오류 발생시 수정 후 CodePush 배포
   - 유의사항
     - 강제종료로 인한 긴급 수정 및 기획상 기능 수정으로 인해 CodePush를 사용해야 하는 경우에만 사용하시기 바랍니다.
     - CodePush 배포는 hotfix 브랜치에서만 진행해주시기 바랍니다.
     - env 파일 내용은 운영서버에 연결되도록 적용해주시기 바랍니다.
     - CodePush 업로드 완료 후 master를 포함한 모든 브랜치에 merge 해주시기 바랍니다  
       ⇒ **단, release\_(버전명) 형식으로 작명된 브랜치는 제외!!!!!**
3. staging
   - 운영목적: 스테이징 서버 연결 테스트 및 Release 배포 직전 테스트
   - 유의사항
     - 배포 직전의 상황인 경우 develop 브랜치 내용을 merge해서 테스트하시기 바랍니다.
     - env 파일 내용은 스테이징 서버에만 연결되도록 적용해주시기 바랍니다.
     - 배포 직전의 상황인 경우 배포를 위한 최종 테스트가 완료되기 전에는 master 또는 hotfix 브랜치로의 merge를 엄격히 금지합니다
4. develop
   - 운영목적: 개발용
   - 사용방법
     - develop 브랜치에서 **각자의 개발용 로컬 브랜치를 분기**해서 사용하시기 바랍니다.
     - develop 브랜치에서의 직접 수정은 가급적 지양해주시기 바랍니다.
   - 유의사항
     - env 파일 내용은 개발 서버에만 연결되도록 수정해주시기 바랍니다.
     - 테스트를 위해 env 파일을 다른 서버에 연결하도록 수정하는 경우 테스트에 유의하시기 바랍니다.
5. developBackup
   - 운영목적
     - develop 브랜치 백업용
     - develop 브랜치에 문제가 발생해 사용이 어려워질 경우 이 브랜치를 사용하게 됨
   - 유의사항
     - 각자 개발한 기능단위 별로 개발 및 실행에 아무 문제가 없는지 확인이 완료되면 develop 브랜치에서 merge하게 됩니다.
     - 또는 master 브랜치에 merge하는 때에 맞춰 함께 merge하게 됩니다.
       ⇒ 그 전까지는 develop 브랜치에서 작업내용을 즉각적으로 merge하는 행위는 엄격히 금지합니다.

### 3-2. Branch 분기 트리맵

```bash
└── master(default)
    ├── hotfix
    ├── staging
    ├── develop
    │   └── {개발자 별 전용 develop 브랜치}
    │       └── {기능단위 별 브랜치}
    └── developBackup
```

### 3-3. 참고사항

#### 3-3-1. PR 및 이슈 관리 관련

> - PR 및 이슈 관리를 쉽게 할 수 있도록 프로젝트에 PR 및 이슈 템플릿을 만들어두었습니다.
>   > 단, 이 템플릿은 (별도 설정이 없으면) Github에서만 작동하니 Gitlab 등 다른 플랫폼에서 사용하려면 직접 연결이 필요합니다!!!
> - Github 이외에 다른 플랫폼을 사용하는 경우 Github Action을 사용한 CI/CD는 (경우에 따라) 어려울 수 있습니다.
> - Github를 사용할 경우, PR을 통한 이슈 auto-close 기능은 Github 레포에서 디폴트 branch를 개발용 branch로 변경해야 작동합니다.
>   > 이슈 auto-close를 위한 PR 작성 형식은 PR 템플릿에 추가해뒀습니다.
