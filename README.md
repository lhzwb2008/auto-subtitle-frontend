# 视频字幕生成工具

工具分为后端工程和前端工程。后端使用spring-boot搭建，算法层面调用了科大讯飞的音频识别接口，使用ffmpeg库来做视频音频格式转换，并自己封装了srt字幕文件格式转换等功能。前端使用vue.js作为js框架，nodejs作为服务框架，element.ui作ui框架，套用了一个vueadmin框架。	

> vue.js	https://github.com/vuejs/vue
>
> element.ui	https://github.com/ElemeFE/element
>
> Vueadmin	https://github.com/PanJiaChen/vueAdmin-template
>
> Springboot	https://github.com/spring-projects/spring-boot
>
> 科大语音转写		http://www.xfyun.cn/doccenter/lfasr
>
> FFmpeg		https://github.com/FFmpeg/FFmpeg



## 项目部署

#### milan_server

`mvn package`

`cd target `

`java -jar milan-server-0.0.1-SNAPSHOT.jar` 

#### Milan_admin

`npm install`

`npm run dev`



