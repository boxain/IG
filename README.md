## 如何使用此專案？

1. 安裝依賴

```
npm i

```

2. 啟動專案 & 追蹤更新(需要開兩個cmd分別使用指令)

```

npm run start

```

npm run build

```

npm run prettier

```

## 如何連接環境變數？


1. 創一個.env檔案在根目錄，再根據./scr/config/config.js的config撰寫

2. 再接MySQL前需先下載且創建資料庫和資料表(story & post)並放插入以下資料，否則不會有東西跑出來

{
  "posts": [
    {
      "id": 1,
      "location": "Taipei",
      "account": "aaron_09_19",
      "avatar": "/images/avatars/a1.png",
      "photo": "/images/posts/main1.png",
      "likes": 999,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "1 HOURS AGO"
    },
    {
      "id": 2,
      "location": "7-11你好門市",
      "account": "__0831_xxx__",
      "avatar": "/images/avatars/a2.png",
      "photo": "/images/posts/main2.png",
      "likes": 333,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "5 HOURS AGO"
    },
    {
      "id": 3,
      "location": "Taipei",
      "account": "gogogo_0214",
      "avatar": "/images/avatars/a3.png",
      "photo": "/images/posts/main3.png",
      "likes": 777,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "6 HOURS AGO"
    },
    {
      "id": 4,
      "location": "信義區",
      "account": "zoe_0000",
      "avatar": "/images/avatars/a4.png",
      "photo": "/images/posts/main4.png",
      "likes": 824,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "7 HOURS AGO"
    },
    {
      "id": 5,
      "location": "南港區",
      "account": "zoe_0000",
      "avatar": "/images/avatars/a5.png",
      "photo": "/images/posts/main5.png",
      "likes": 98,
      "description": "我的老天鵝！",
      "hashTags": "#鵝鵝",
      "createTime": "10 HOURS AGO"
    }
  ],
  "stories": [
    {
      "id": 1,
      "name": "aaron_09_19",
      "avatar": "/images/avatars/aaron.png"
    },
    {
      "id": 2,
      "name": "max",
      "avatar": "/images/avatars/a2.png"
    },
    {
      "id": 3,
      "name": "fm",
      "avatar": "/images/avatars/a3.png"
    },
    {
      "id": 4,
      "name": "joanne",
      "avatar": "/images/avatars/a4.png"
    },
    {
      "id": 5,
      "name": "focus",
      "avatar": "/images/avatars/a5.png"
    },
    {
      "id": 6,
      "name": "louis",
      "avatar": "/images/avatars/a6.png"
    },
    {
      "id": 7,
      "name": "alvin",
      "avatar": "/images/avatars/a7.png"
    },
    {
      "id": 8,
      "name": "grace",
      "avatar": "/images/avatars/a8.png"
    },
    {
      "id": 9,
      "name": "rance",
      "avatar": "/images/avatars/a9.png"
    },
    {
      "id": 10,
      "name": "bruce_fe",
      "avatar": "/images/avatars/a10.png"
    }
  ]
}

