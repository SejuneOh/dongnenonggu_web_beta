# dongnenonggu_Web

## Project Purpose
  - 농구 동아리  게스트 모집 서비스 지원 
  - 간편한  소통, 자유롭게 농구게임 호스트와 게스트를 소개해주는 서비스
  - Web, App으로 서비스 개발
  



## Stack & Config

- JavaScript(with TypeScript)
- React Library
  ```bash
  $ npm create vite@latest
  ```
- react-router-dom
  ```bash
    $ npm i react-router-dom --save
  ```

- style-components
  ```bash
  $ npm install --save styled-components
  ```

- TypeScript Config
    ```json
  {
    "compilerOptions": {
      "target": "ESNext",
      "useDefineForClassFields": true,
      "lib": ["DOM", "DOM.Iterable", "ESNext"],
      "allowJs": false,
      "skipLibCheck": true,
      "esModuleInterop": false,
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "module": "ESNext",
      "moduleResolution": "Node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx"
    },
    "include": ["src"],
    "references": [{ "path": "./tsconfig.node.json" }]
  }
  ```
- common.scss
  ```css

  // Default Common stlye declare this file
  :root {
      --default-backgroundColor: #18181a;
      --box-borderColor:#A4A4A4;
    
      // Common font property
      --font-color: #C2CAD2;
      --font-placeholder-color: #A4A4A4;
      --font-placeholder-size: 10px;
      --font-input-size: 13px;
      --font-small: 16px;
      --font-medium: 26px;
      --font-large: 28px; 
      --font-logo: 32px;
      --font-weight-small: 400;
      --font-weight-medium: 500;
      --font-weight-large: 700;
    
      //   size: mobile, tablet, pc
      --viewport-mobile: 720px; 
      --viewport-tablet: 950px; 
      --viewport-browser: 1024px; 
    }
  ```