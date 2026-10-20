import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// 데모 페이지(index.html → demo/main.tsx)를 띄운다. 이 repo는 백엔드를 부르지 않으므로 프록시가 없다.
export default defineConfig({
  plugins: [react()],
  // 데모에 echarts 전체가 들어가 한 덩어리가 커진다. 템플릿 사용처와는 무관하다.
  build: { chunkSizeWarningLimit: 1000 },
})
