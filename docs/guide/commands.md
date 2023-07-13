# 常用命令  

## 传送

### /hub
 hub命令可以回到主城服务器  

 用法:/hub      


### /tpa
 tpa命令可以向其他玩家发送传送请求  

 用法:/tpa 玩家名  

### /sethome & /homes
 sethome命令可以设置玩家的家以便快速回家  

 用法:/sethome 家的名称  

 homes指令可以打开菜单，菜单中包含您所拥有的所有家❤️

 左键点击即可回家❤️  

### /back
 back命令可以快速返回您上一次的死亡地点  

 用法: /back  

### /spawn
 spawn命令可以将您传送回生存服主城

 用法:/spawn

### /rtp
 此命令可以使您在主世界中随机传送

 用法: /brtp world

## 音乐 

::: tip
需下载[QQ群](https://qm.qq.com/cgi-bin/qm/qr?k=p-NE3msaa3L1uh-8MUtUyOYhoM9eZOae&jump_from=webapi&authKey=Ngwgz2I+yQj7o2ZJKWW4cutEni+ShAtLHZ1iYv3JygR+bZRtvLTbE4PdUgBezxAc "一键直达")内听歌Mod(Zmusic)来使用此功能
:::    

### 播放

通过歌名搜索一个音乐，直接播放

命令:/zm play 搜索源 歌名

示例:/zm play netease 你的猫咪

### 点歌

通过歌名搜索一个音乐，全服发送后，玩家点击播放

命令

```
/zm music [搜索源] [歌名]
```

[搜索源说明](https://m.zplu.cc/v2/#/zh-cn/?id=搜索源说明) [歌名ID化说明](https://m.zplu.cc/v2/#/zh-cn/?id=歌名id化说明)

示例

```
/zm music netease 你的猫咪
```

### 搜索

通过歌名搜索一个音乐，返回十首音乐的列表

命令

```
/zm search [搜索源] [歌名]
```

[搜索源说明](https://m.zplu.cc/v2/#/zh-cn/?id=搜索源说明) [歌名ID化说明](https://m.zplu.cc/v2/#/zh-cn/?id=歌名id化说明)

示例

```
/zm search netease 你的猫咪
```

### 歌单

通过导入歌单存储在服务器，方便播放歌单。

命令

```
/zm playlist [平台] [子命令]
```

目前支持以下平台

- netease/163 - 网易云音乐

如果平台为type 则为设置歌单播放方式.
目前支持

- normal - 顺序播放
- loop - 循环播放
- random - 随机播放

示例: `/zm playlist type random`

如果平台为global 则为全局歌单模式.

- 子命令与普通模式相同

示例: `/zm playlist global netease list`

`子命令` 对应平台的子命令

- ```
  import
  ```

   

  通过歌单链接导入歌单

  - 参数
    - `歌单链接` 对应平台的歌单链接

- `list` 检索指定平台的歌单列表

- ```
  play
  ```

   

  通过歌单ID播放歌单(可用list获取)

  - 参数
    - `歌单ID` 指定平台的歌单ID

示例

导入:

- `/zm playlist 163 import https://music.163.com/#/playlist?id=363046232`

播放:

- `/zm playlist 163 play 363046232`



## 背包

### /bag open

打开个人背包，可将自己的物品放入qwq

## 圈地

圈地需手持木锄头，在你需要保护的地方选择对角线式的两个点（如左上方和右下方）然后在其中一个点用圈地工具左键，在另一个点用鼠标右键，输入指令 /res create (领地名字)即可圈地

::: tip

选区范围会出现火焰粒子方便查看，下方也会显示圈地花费!

:::



### /res info

显示目前所处的领地信息，如果在领地外使用该指令，将会显示自己的领地信息、



###  /res list [玩家]

 列出玩家拥有的领地信息



### /res padd <领地名> [玩家] 

向玩家添加基本权限



### /res pdel <领地名> [玩家] 

删除玩家的基本权限
