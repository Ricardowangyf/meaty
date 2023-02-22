const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';
// const meatydetalis = require('./meatydetalis');
// const detalis = require('./detalis');
// console.log(detalis)
// const user = require('./data');
const proxy = {

    // ...user,
    // ...detalis,
    // ...meatydetalis,

    'GET /api/user/': [
        {
            "name": "多肉",
            "imgurl": "/img/cactus.jpg",
            "paragraph": "仙人掌科仙人掌属植物。丛生肉质灌木,高1.5-3米。上部分枝宽倒卵形、倒卵状椭圆形或近圆形,绿色至蓝绿色,无毛；刺黄色,有淡褐色横纹,坚硬；倒刺直立。叶钻形,绿色,早落。花辐状；花托倒卵形,基部渐狭,绿色；萼状花被黄色,具绿色中肋；花丝淡黄色；花药黄色；花柱淡黄色；柱头黄白色。浆果倒卵球形,顶端凹陷,表面平滑无毛,紫红色,倒刺刚毛和钻形刺。种子多数扁圆形,边缘稍不规则,无毛,淡黄褐色。花期6-10（-12)月。",
    
        },
        {
            "name": "仙人掌",
            "imgurl": "/img/Succulentplants.jpg",
            "paragraph": "多肉植物也叫多水植物、肉质植物,是指植物器官的茎或叶或根具有发达的薄壁组织用以贮藏水分,在外形上显得肥厚多汁的一类植物。",
        },
        {
            "name": "桃蛋",
            "imgurl": "/img/peachegg.jpg",
            "paragraph": "醉美人,俗称“桃蛋”,为景天科风车草属多肉植物,与桃美人相比,其叶呈轮生状,使得株型更紧凑,肉质叶稍小,较扁,呈卵圆形,有“卵”的感觉,叶色稍浅一些,顶端没有小红点。花星状,上部红色,有斑点。其叶片卵形至球形,叶片粉紫色,如同熟透的桃子一般",
        },
        {
            "name": "虹之玉锦",
            "Trash": "2022/12/01",
            "imgurl": "/img/rainbowjade brocade.jpg",
            "paragraph": "景天科景天属的多肉植物,为虹之玉的锦化品种。虹之玉锦与虹之玉的叶片大小没有特别大的变化,但颜色会稍有不同,虹之玉锦一般会有粉红色、中绿色等 。生长速度较虹之玉慢很多",
        },
        {
            "name": "玉露",
            "Trash": "2022/12/01",
            "imgurl": "/img/bestgreentea.jpg",
            "paragraph": "阿福花科、十二卷属下的多肉植物。株高5-12厘米,植株初为单生,以后逐渐呈群生状。肉质叶排列成莲座状,叶色碧绿,顶端呈透明或半透明状,称其为“窗”,表面有深色纵线条,顶端有细小的“须” ",
        },
        {
            "name": "达摩福娘",
            "imgurl": "/img/cotyledon pendens.jpg",
            "paragraph": "景天科银波锦属多肉植物,属于小型灌木类,由于茎很细,所以很难支撑一直向上生长,会匍匐向下生长。出状态后,叶尖尖端呈粉红色。",
        },
        {
            "name": "百合莉莉",
            "imgurl": "/img/lily.jpg",
            "paragraph": "百合莉莉易长侧芽,底部叶片易枯萎形成多头老桩,叶片肥厚圆匙状,叶尖不明显,莲花状紧密排列,随养护环境同,叶色绿色到粉橙绿色,出状态的百合莉莉非常好看,但变绿的百合莉莉就有点一脸菜色了。百合莉莉的另一亮点是香气明显,小老桩非常漂亮",
        },
        {
            "name": "静夜",
            "imgurl": "/img/silentnight.jpg",
            "paragraph": "景天科拟石莲花属的多肉植物、也称多浆植物,属于较迷你的石莲花,个头非常小,很容易群生,日照充分的时候,叶尖会变红,非常可爱。",
        },
    ],
}
module.exports = (noProxy ? {} : delay(proxy, 10));