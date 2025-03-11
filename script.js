// 金句数据
const fortunes = [
    "不知不觉随着遇见的人改变自己，这不是做作，这是我赖以生存的本能。",
    "你的生活只有两种方式：一种就是把所有的一切都视为平庸，而另一种则把所有的一切都当成奇迹。",
    "失败也是我需要的，它和成功对我一样有价值。",
    "精彩的人生总有精彩的理由，笑到最后的才会笑得最甜。",
    "为天地立心，为生民立命，为往圣继绝学，为万世开太平。",
    "先天下之忧而忧，后天下之乐而乐。",
    "路虽远，行则将至；事虽难，做则必成。",
    "单丝不成线，独木不成林。",
    "民之所忧，我必念之；民之所盼，我必行之。",
    "清风两袖朝天去，不带江南一寸棉。",
    "古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。",
    "纸上得来终觉浅，绝知此事要躬行。",
    "不忘初心，方得始终；但行好事，莫问前程。",
    "志不求易者成，事不避难者进。",
    "利民之事，丝发必兴；厉民之事，毫末必去。",
    "万人操弓，共射一招，招无不中。",
    "积力之所举，则无不胜也；众智之所为，则无不成也。",
    "心不动于微利之诱，目不眩于五色之惑。",
    "奉法者强则国强，奉法者弱则国弱。",
    "历览前贤国与家，成由勤俭破由奢。",
    "与其坐而论道，不如起而行之。",
    "大道至简，实干为要。",
    "知屋漏者在宇下，知政失者在草野。",
    "天下难事，必作于易；天下大事，必作于细。",
    "苟利国家生死以，岂因祸福避趋之。",
    "公生明，廉生威。",
    "君子喻于义，小人喻于利。",
    "得不为喜，去不为恨。",
    "力量来自公正。",
    "人人相亲，人人平等，天下为公，是谓大同。",
    "政之所兴，在顺民心；政之所废，在逆民心。",
    "立党为公，执政为民。权为民所用，情为民所系，利为民所谋。",
    "衙斋卧听萧萧竹，疑是民间疾苦声；些小吾曹州县吏，一枝一叶总关情。",
    "只有真正把群众当主人，当亲人，当老师，拉下面子，放下架子，俯下身子，问政于民，问计于民，问需于民。",
    "天下大事必作于细，古今事业须成于实。",
    "不驰于空想，不骛于虚声，以实干为舟，以奋斗作桨。",
    "奋斗是时代的前进引擎，实干是人生的精彩乐章。",
    "青年理想远大、信念坚定，是无坚不摧的前进动力。",
    "千淘万漉虽辛苦，吹尽狂沙始到金。",
    "伟大梦想不是等得来、喊得来的，而是拼出来、干出来的。",
    "人生因奋斗而升华，青春因磨砺而出彩。",
    "心中有阳光，脚下有力量，方能创造无愧于时代的人生。",
    "勤能补拙是良训，一分辛劳一分才。",
    "青春虚度无所成，白首衔悲亦何及。",
    "涉浅滩者见鱼虾，入深水者得蛟龙。",
    "为政之要，贵在力行，重在履事。",
    "理想指引人生方向，信念决定事业成败。",
    "功成不必在我，功成必定有我。",
    "胸怀千秋伟业，恰是百年风华。",
    "奋斗路上谦恭虚己，博采众长方能成就自我。",
    "艰难方显勇毅，磨砺始得玉成。",
    "惟创新者进，惟创新者强，惟创新者胜。",
    "以百姓心为心，以群众事为天。",
    "德日新也，万邦惟怀；志自满也，九族乃离。",
    "积跬步以至千里，汇细流方成江海。",
    "奋斗者最幸福，实干者最美丽。",
    "理想如灯，信念是帆，指引人生航向。",
    "立志而圣则圣矣，立志而贤则贤矣。",
    "成大事者，须有坚韧不拔之志，滴水穿石之功。",
    "使命呼唤担当，实干成就未来。",
    "为民服务无小事，一枝一叶总关情。",
    "治国有常，利民为本，政教有经，令行为上。",
    "非学无以广才，非志无以成学。",
    "常怀忧民之心，恪守为民之责，善谋富民之策。",
    "时代眷顾奋斗者，星光不负赶路人。",
    "事业因人才而兴，人才因事业而聚。",
    "心系群众鱼得水，背离群众树断根。",
    "法治兴则国兴，法治强则国强。",
    "不矜细行终累大德，为山九仞功亏一篑。",
    "责任如炬，照亮前路；担当如石，铺就坦途。",
    "以尺寸之功，积千秋之利。",
    "身入基层，心到基层，方知民情冷暖。",
    "知责任者，大丈夫之始也；行责任者，大丈夫之终也。",
    "为民造福是最大政绩，群众满意是最高标准。",
    "不谋全局者不足谋一域，不谋万世者不足谋一时。",
    "信念如磐石，风雨不动摇；意志似钢铁，百炼终成钢。",
    "为官避事平生耻，重任千钧惟担当。",
    "逆境顺境看襟度，大事难事看担当。",
    "清谈客无舞台，实干家未来无限。",
    "以身教者从，以言教者讼。",
    "德莫高于爱民，行莫厚于利民。",
    "脚下沾有多少泥土，心中就沉淀多少真情。",
    "大鹏之动非一羽之轻，骐骥之速非一足之力。",
    "莫道前路多险阻，再闯关山千万重。",
    "明月照高楼，清风拂面柔。花开逢好雨，万事尽无忧。",
    "山路崎岖行渐远，云深未见日升天。且守初心勤修己，静待机缘莫怨言。",
    "春来枯木发新枝，久旱逢霖正当时。旧事翻篇迎新运，鹏程万里展雄姿。",
    "时代眷顾奋斗者，星光不负赶路人。",
    "治国有常，利民为本，政教有经，令行为上。",
    "奋斗路上谦恭虚己，博采众长方能成就自我。",
    "逆境顺境看襟度，大事难事看担当。",
    "为民造福是最大政绩，群众满意是最高标准。",
    "青春虚度无所成，白首衔悲亦何及。",
    "法治兴则国兴，法治强则国强。",
    "德日新也，万邦惟怀；志自满也，九族乃离。",
    "大鹏之动非一羽之轻，骐骥之速非一足之力。",
    "以身教者从，以言教者讼。",
    "成大事者，须有坚韧不拔之志，滴水穿石之功。",
    "理想如灯，信念是帆，指引人生航向。",
    "事业因人才而兴，人才因事业而聚。",
    "为民服务无小事，一枝一叶总关情。",
    "时代是出卷人，我们是答卷人，人民是阅卷人。",
    "力量来自团结，幸福源于奋斗。",
    "心系群众鱼得水，背离群众树断根。",
    "志不求易者成，事不避难者进。",
    "功成不必在我，功成必定有我。",
    "以百姓心为心，以群众事为天。",
    "不谋全局者不足谋一域，不谋万世者不足谋一时。",
    "知责任者，大丈夫之始也；行责任者，大丈夫之终也。",
    "力量来自公正，威信源于清廉。",
    "使命呼唤担当，实干成就未来。",
    "艰难方显勇毅，磨砺始得玉成。",
    "坚持问题导向，敢于直面问题、善于解决问题。",
    "为民服务无终点，百姓满意是起点。",
    "奋斗是青春最亮丽的底色，行动是青年最有效的磨砺。",
    "理想信念是精神之钙，初心使命是力量之源。",
    "法治是国家治理体系和治理能力的重要依托。",
    "清廉是福，贪欲是祸，慎终如始方能行稳致远。",
    "民惟邦本，本固邦宁；政在养民，民生乃大。",
    "责任如炬，照亮前路；担当如石，铺就坦途。",
    "治国犹如栽树，本根不摇则枝叶茂荣。",
    "不矜细行终累大德，为山九仞功亏一篑。",
    "以尺寸之功，积千秋之利。",
    "人民是历史的创造者，群众是真正的英雄。",
    "创新是引领发展的第一动力，人才是创新的核心要素。",
    "民生是最大的政治，民心是最大的资源。",
    "保持战略定力，发扬斗争精神，增强斗争本领。",
    "清谈误国，实干兴邦；空想无益，奋斗有为。",
    "群众利益无小事，民生问题大于天。",
    "理想信念之火一经点燃，就永远不会熄灭。",
    "德莫高于爱民，行莫厚于利民。",
    "以学铸魂、以学增智、以学正风、以学促干。",
    "坚持系统观念，加强前瞻性思考、全局性谋划、整体性推进。",
    "力量生于团结，幸福源自奋斗。",
    "法治是国家长治久安的基石，公平是法治的生命线。",
    "脚下沾有多少泥土，心中就沉淀多少真情。",
    "坚持党的全面领导是中国特色社会主义事业的根本保证。",
    "苔花如米小，也学牡丹开。",
    "生当作人杰，死亦为鬼雄。",
    "自知者不怨人，知命者不怨天。",
    "看似寻常最奇崛，成如容易却艰辛。",
    "穷则独善其身，达则兼济天下。",
    "天下难事必作于易，天下大事必作于细。",
    "雄关漫道真如铁，而今迈步从头越。",
    "生则尽力，死则死耳！",
    "人生无处不青山，埋骨何须桑梓地。",
    "世上无难事，只要肯登攀。",
    "为有牺牲多壮志，敢教日月换新天。",
    "时人不识凌云木，直待凌云始道高。",
    "穷且益坚，不坠青云之志；老当益壮，宁移白首之心。",
    "宁为百夫长，胜作一书生。",
    "我自横刀向天笑，去留肝胆两昆仑。",
    "夜阑卧听风吹雨，铁马冰河入梦来。",
    "壮心未与年俱老，死去犹能作鬼雄。",
    "天生我材必有用，千金散尽还复来。",
    "三军可夺帅也，匹夫不可夺志也。",
    "石可破也，而不可夺坚；丹可磨也，而不可夺赤。",
    "积土而为山，积水而为海。",
    "治国有常，利民为本；政教有经，令行为上。",
    "法者，天下之准绳也。",
    "德莫高于爱民，行莫厚于利民。",
    "见善如不及，见不善如探汤。",
    "桃李不言，下自成蹊。",
    "疾风知劲草，烈火见真金。",
    "合抱之木，生于毫末；九层之台，起于累土。",
    "前事不忘，后事之师。",
    "周虽旧邦，其命维新。",
    "欲知平直，则必准绳；欲知方圆，则必规矩。",
    "志不立，天下无可成之事。",
    "孤举者难起，众行者易趋。",
    "登泰山而览群岳，则冈峦之本末可知也。",
    "量腹而受，量身而衣。",
    "日月不同光，昼夜各有宜。",
    "究天人之际，通古今之变。",
    "善除害者察其本，善理疾者绝其源。",
    "禁于未然之前，禁于已然之后。",
    "天下大事，必作于细；古今事业，须成于实。",
    "自知者英，自胜者雄。",
    "明镜所以照形，古事所以知今。",
    "春蚕到死丝方尽，蜡炬成灰泪始干。",
    "人而无信，不知其可也。",
    "德不孤，必有邻。",
    "与其坐而论道，不如起而行之。",
    "为官避事平生耻，重任千钧惟担当。",
    "清谈误国，实干兴邦；空想无益，奋斗有为。",
    "民惟邦本，本固邦宁；政在养民，民生乃大。",
    "力量生于团结，幸福源自奋斗。",
    "治国犹如栽树，本根不摇则枝叶茂荣。",
    "一言正，天下定；一言倚，天下靡。",
    "为政之道，莫若至公。",
    "以天下论者，必循天下之公。",
    "民生在勤，勤则不匮。",
    "博学之、审问之、慎思之、明辨之、笃行之，以学益智，以学修身，以学增才。",
    "众寡同力，则战可以必胜。",
    "人生在勤，不索何获。",
    "坚定理想信念，补足精神之钙。",
    "信念是鸟，它在黎明仍然黑暗之际，感觉到了光明，唱出了歌。",
    "最可怕的敌人，就是没有坚强的信念。",
    "细节不是\"细枝末节\"，而是用心，是一种认真的态度和科学的精神。",
    "尽小者大，慎微者著。",
    "青春因磨砺而出彩，人生因奋斗而升华。",
    "白日莫空过，青春不再来。",
    "伟大出自平凡，英雄来自人民。"
    // ... 更多金句
];

// 获取DOM元素
const qiantong = document.getElementById('qiantong');
const scrollContainer = document.getElementById('scrollContainer');
const fortuneText = document.getElementById('fortuneText');

let isAnimating = false;
let isScrollVisible = false;
let currentIndex = -1; // 当前金句索引

// 初始化金句索引为随机位置
function initFortuneIndex() {
    currentIndex = Math.floor(Math.random() * fortunes.length);
}

// 获取下一条金句
function getNextFortune() {
    // 如果是第一次或已经到达末尾，重新随机开始
    if (currentIndex === -1 || currentIndex >= fortunes.length - 1) {
        initFortuneIndex();
    } else {
        currentIndex++;
    }
    return fortunes[currentIndex];
}

function showScroll(fortune) {
    scrollContainer.style.opacity = '0';
    scrollContainer.style.display = 'block';
    scrollContainer.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        scrollContainer.style.opacity = '1';
        
        // 显示文字
        fortuneText.style.opacity = '0';
        fortuneText.style.display = 'block';
        fortuneText.classList.add('visible');
        fortuneText.style.transition = 'opacity 0.3s ease';
        fortuneText.setAttribute('data-text', fortune);
        
        // 计算缩放比例
        const scrollRect = scrollContainer.getBoundingClientRect();
        const scale = scrollRect.width / 500;
        document.documentElement.style.setProperty('--scale-ratio', scale);
        
        setTimeout(() => {
            fortuneText.style.opacity = '1';
            isAnimating = false;
            isScrollVisible = true;
        }, 50);
    }, 300);
}

function hideScroll() {
    scrollContainer.style.opacity = '0';
    fortuneText.style.opacity = '0';
    
    setTimeout(() => {
        scrollContainer.style.display = 'none';
        fortuneText.style.display = 'none';
        fortuneText.classList.remove('visible');
        isScrollVisible = false;
    }, 300);
}

function showQiantong() {
    qiantong.style.opacity = '0';
    qiantong.style.display = 'block';
    qiantong.classList.remove('hidden');
    qiantong.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        qiantong.style.opacity = '1';
        isAnimating = false;
    }, 50);
}

// 添加钱筒点击事件
qiantong.addEventListener('click', () => {
    if (isAnimating || isScrollVisible) return;
    isAnimating = true;

    // 获取下一条金句
    const fortune = getNextFortune();

    // 直接隐藏钱筒，不添加缩放动画
    qiantong.style.opacity = '0';
    
    setTimeout(() => {
        qiantong.style.display = 'none';
        qiantong.classList.add('hidden');
        showScroll(fortune);
    }, 300);
});

// 添加卷轴点击事件
scrollContainer.addEventListener('click', () => {
    if (isAnimating || !isScrollVisible) return;
    isAnimating = true;
    
    hideScroll();
    showQiantong();
});

// 初始化起始位置
initFortuneIndex();

// 添加窗口大小改变事件监听器
window.addEventListener('resize', () => {
    if (isScrollVisible) {
        const scrollRect = scrollContainer.getBoundingClientRect();
        const scale = scrollRect.width / 500;
        document.documentElement.style.setProperty('--scale-ratio', scale);
    }
}); 