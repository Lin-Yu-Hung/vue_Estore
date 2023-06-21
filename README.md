當從新的環境clone儲存庫時要注意clone的方式

在之後的push 需要根據clone的方式來進行push

例如使用https clone 就需要使用https來建立remote 或是 push



在push 時可以先建立`dist`資料夾並將裡面的資料全部清空包含`.git`資料夾
（非必要主要是為了能夠順利地pull以此來跟儲存庫建立連線）

接者再回到上層並執行`npm run build`將`dist`裡面的資料變成編譯過後的新資料

之後再`cd`到`dist`資料夾中

執行`push`的動作就可以了
