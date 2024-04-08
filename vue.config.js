const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  //outputDir: 'C:\자바study\workspace_sb\guestbook7\src\main\resources\static'
    // npm run build 타겟 디렉토리 -> 해당 경로에 vue 빌드 출력물 생성됨
    outputDir: 'C:/자바Study/workspace_sb/guestbook7/src/main/resources/static'
})
