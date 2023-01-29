## 如何使用此專案？

1. 安裝依賴

```
npm i

```

2. 啟動專案 & 追蹤更新(需要開兩個cmd分別使用指令)

```

npm run start
npm run build

```



## 如何連接環境變數？


1. 創一個.env檔案在根目錄，再根據./scr/config/config.js的config撰寫

2. 再接MySQL前需先下載且創建資料庫和資料表(story & post)並插入db.json的資料，否則不會有東西跑出來


## 如何插入資料庫data？

1. 選擇從資料庫插入
2. 啟動專案後使用http://localhost:3000/api/stories  or  http://localhost:3000/api/posts 插入資料
