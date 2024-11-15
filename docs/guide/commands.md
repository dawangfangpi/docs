# 生存服常用命令  （已失效）

## 菜单

### 主菜单

`/CD`或`/cd`来打开主菜单

### 随机传送菜单

`/rtpmenu` 来打开

### 点歌菜单

正在设计!

### 签到菜单

`/litesignin gui`

### 商店菜单

`/shop`

### 技能菜单

`/skill`

## 传送

### /hub
 hub命令可以回到主城服务器  

 用法:/hub      


### /tpa
 tpa命令可以向其他玩家发送传送请求  

 用法:/tpa 玩家名  

### /sethome & /homes
 sethome命令可以设置玩家的家以便快速回家  

 用法:`/sethome 家的名称`  

 homes指令可以打开菜单，菜单中包含您所拥有的所有家❤️

 左键点击即可回家❤️  

### /back
 back命令可以快速返回您上一次的死亡地点  

 用法: `/back`  

### /spawn
 spawn命令可以将您传送回生存服主城

 用法:`/spawn`

### /hub
返回整个服务器的主大厅



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



## 经济

balance/money  -  查询余额

balance/money <玩家>  -  查询<玩家>余额

pay <玩家> <金额>  -  转账给<玩家><金额>

paytoggle  -  切换是否接受转载

balancetop  -  查询余额排行榜



## 连锁挖掘

有三类物品可以连锁

| 类别   | 挖掘所需物品 |
| ------ | ------------ |
| 矿物   | 镐子         |
| 农作物 | 锄头         |
| 树木   | 斧头         |

需按住[Shift]键来连锁挖掘

### 命令

`/sh toggle` 

开启或关闭连锁挖掘

## 保护

服务器提供保护您的容器，方块，生物的功能，可以使特定的玩家/组来拥有访问您所保护的容器，方块，生物的权限，未设置的玩家不能访问您的保护的东西



::: tip

默认放置方块自动保护，可在菜单-设置来关闭

:::

### 菜单

/protect 来打开菜单

大部分操作都可以在菜单内完成

::: tip

个人认为指令比菜单好用

:::

### 指令

#### /lock

进入保护状态，所点击的方块会自动保护

#### /unlock

进入解除保护状态，所点击的方块会自动解除保护

#### /trust <玩家名>

进入信任状态，输入玩家名后点击容器会自动给玩家该容器使用权

#### /untrust <玩家名>

进入取消信任状态，输入玩家名后点击容器会自动取消给玩家该容器使用权



::: tip

信任可以在菜单内设置组，并添加组内玩家和可以访问的类型，来让玩家快速获得一类方块的访问权限

:::

## 动作

`/sit (/gsit)` -> 坐在方块上

`/lay (/glay)` -> 躺在方块上

`/bellyflop (/gbellyflop)` -> 在方块上翻滚

`/spin (/gspin)` -> 在方块上旋转

`/crawl (/gcrawl`) -> 趴在方块上

`/sit toggle/playertoggle` -> 切换是否能右键坐在方块或玩家上

`/gsitreload (/gsitrl)` -> 重载插件配置



## 杂项

### /asb toggle

关闭/打开计分板

### /sf guide

获得粘液科技指南
