"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        en: {
            nav: {
                about: "Platform",
                capabilities: "Core Tech",
                devices: "Devices",
                news: "News",
                contact: "Contact",
                login: "Login",
            },
            login: {
                title: "Login",
                username: "Username",
                password: "Password",
                btn: "Sign In",
            },
            hero: {
                title: "3D + UGC <br><span class='text-gradient'>Create Your World</span>",
                subtitle: "Empowering Education with AR + AI. <br>Based in Macau, Serving the World. <br>Seamless multi-device interaction and large-screen casting.",
                explore: "Supported Devices",
                learn: "Learn More",
            },
            about: {
                title: "No-Code Creation",
                subtitle: "The ultimate tool for teachers and students to create immersive AR content without coding.",
                card1: {
                    title: "Upload Models",
                    desc: "Easily import 3D assets to build unique educational libraries.",
                },
                card2: {
                    title: "Scene Assembly",
                    desc: "Intuitively assemble lesson scenes by placing objects in 3D space.",
                },
                card3: {
                    title: "Visual Logic",
                    desc: "Create interactive courseware simply by dragging and dropping logic blocks.",
                },
            },
            capabilities: {
                title: "Core Technologies",
                lead: "Designed for the Education Industry with advanced AR + AI features.",
                item1: {
                    title: "AR + AI Core",
                    desc: "Intelligent content generation and object recognition powered by advanced AI.",
                },
                item2: {
                    title: "Multi-Device Interaction",
                    desc: "Real-time collaboration between AR glasses, tablets, and phones.",
                },
                item3: {
                    title: "3rd-Party View & Casting",
                    desc: "Share the AR perspective to large screens for whole-class teaching.",
                },
            },
            devices: {
                title: "Supported Devices",
                ar: "AR Headset",
                tablet: "Tablet",
                learn: "Learn More →",
                card1: {
                    title: "Rokid AR Studio",
                    desc: "The perfect spatial computing device for immersive learning.",
                },
                card2: {
                    title: "iPad",
                    desc: "Create and view educational AR content anywhere.",
                },
            },
            news: {
                title: "Platform Updates",
                readmore: "Read More",
                item1: {
                    title: "New AI Features for Education",
                    desc: "Enhanced auto-rigging and object recognition for classrooms.",
                },
                item2: {
                    title: "Large Screen Casting Support",
                    desc: "Now supporting seamless casting to classroom displays.",
                },
                item3: {
                    title: "Global Education Partner Program",
                    desc: "Join our network of schools transforming learning with AR.",
                },
            },
            month: { nov: "Nov" },
            footer: {
                tagline: "Let everyone happily create the world.",
                links: "Quick Links",
                contact: "Contact",
                subscribeTitle: "Stay Updated",
                newsletter: { desc: "Subscribe for the latest platform news." },
                email: { placeholder: "Your email address" },
                subscribe: { btn: "Subscribe" },
                copyright: "&copy; 2025 3dugc.com. Macau Headquarters. All rights reserved.",
            },
        },
        "zh-CN": {
            nav: {
                about: "平台介绍",
                capabilities: "核心技术",
                devices: "支持设备",
                news: "新闻动态",
                contact: "联系我们",
                login: "登录",
            },
            login: {
                title: "用户登录",
                username: "用户名",
                password: "密码",
                btn: "登录",
            },
            hero: {
                title: "3D + UGC <br><span class='text-gradient'>创造你的世界</span>",
                subtitle: "用 AR + AI 赋能教育。<br>立足澳门，服务全球。<br>无缝的多设备互动与大屏幕投屏，专为课堂打造。",
                explore: "支持设备",
                learn: "了解更多",
            },
            about: {
                title: "无代码创作",
                subtitle: "师生无需编写任何代码，即可轻松创建沉浸式AR教学内容。",
                card1: {
                    title: "模型上传",
                    desc: "轻松导入3D资产，构建独特的教学素材库。",
                },
                card2: {
                    title: "场景拼装",
                    desc: "通过在3D空间中放置对象，直观地组装课程场景。",
                },
                card3: {
                    title: "可视化逻辑",
                    desc: "只需拖放逻辑块即可实现复杂的交互式课件。",
                },
            },
            capabilities: {
                title: "核心技术",
                lead: "专为教育行业设计，融合先进的 AR + AI 功能。",
                item1: {
                    title: "AR + AI 核心",
                    desc: "由先进AI驱动的智能内容生成与物体识别技术。",
                },
                item2: {
                    title: "多设备互动",
                    desc: "AR眼镜、平板电脑和手机之间的实时协作。",
                },
                item3: {
                    title: "三方视角与投屏",
                    desc: "将AR视角实时投屏到大屏幕，实现全班教学分享。",
                },
            },
            devices: {
                title: "支持设备",
                ar: "AR眼镜",
                tablet: "平板电脑",
                learn: "了解更多 →",
                card1: {
                    title: "Rokid AR Studio",
                    desc: "沉浸式学习的完美空间计算设备。",
                },
                card2: { title: "iPad", desc: "随时随地创建和查看教育AR内容。" },
            },
            news: {
                title: "平台动态",
                readmore: "阅读更多",
                item1: {
                    title: "教育版 AI 新功能发布",
                    desc: "增强的自动绑定和物体识别，专为课堂优化。",
                },
                item2: {
                    title: "大屏幕投屏支持",
                    desc: "现已支持无缝投屏到教室显示屏。",
                },
                item3: {
                    title: "全球教育合作伙伴计划",
                    desc: "加入我们的学校网络，用AR变革学习。",
                },
            },
            month: { nov: "11月" },
            footer: {
                tagline: "让每个人都可以快乐的创造世界。",
                links: "快速链接",
                contact: "联系方式",
                subscribeTitle: "保持更新",
                newsletter: { desc: "订阅以获取最新平台新闻。" },
                email: { placeholder: "您的电子邮件地址" },
                subscribe: { btn: "订阅" },
                copyright: "&copy; 2025 3dugc.com. 澳门总部. 版权所有.",
            },
        },
        "zh-TW": {
            nav: {
                about: "平台介紹",
                capabilities: "核心技術",
                devices: "支持設備",
                news: "新聞動態",
                contact: "聯繫我們",
                login: "登錄",
            },
            login: {
                title: "用戶登錄",
                username: "用戶名",
                password: "密碼",
                btn: "登錄",
            },
            hero: {
                title: "3D + UGC <br><span class='text-gradient'>創造你的世界</span>",
                subtitle: "用 AR + AI 賦能教育。<br>立足澳門，服務全球。<br>無縫的多設備互動與大屏幕投屏，專為課堂打造。",
                explore: "支持設備",
                learn: "了解更多",
            },
            about: {
                title: "無代碼創作",
                subtitle: "師生無需編寫任何代碼，即可輕鬆創建沉浸式AR教學內容。",
                card1: {
                    title: "模型上傳",
                    desc: "輕鬆導入3D資產，構建獨特的教學素材庫。",
                },
                card2: {
                    title: "場景拼裝",
                    desc: "通過在3D空間中放置對象，直觀地組裝課程場景。",
                },
                card3: {
                    title: "可視化邏輯",
                    desc: "只需拖放邏輯塊即可實現複雜的交互式課件。",
                },
            },
            capabilities: {
                title: "核心技術",
                lead: "專為教育行業設計，融合先進的 AR + AI 功能。",
                item1: {
                    title: "AR + AI 核心",
                    desc: "由先進AI驅動的智能內容生成與物體識別技術。",
                },
                item2: {
                    title: "多設備互動",
                    desc: "AR眼鏡、平板電腦和手機之間的實時協作。",
                },
                item3: {
                    title: "三方視角與投屏",
                    desc: "將AR視角實時投屏到大屏幕，實現全班教學分享。",
                },
            },
            devices: {
                title: "支持設備",
                ar: "AR眼鏡",
                tablet: "平板電腦",
                learn: "了解更多 →",
                card1: {
                    title: "Rokid AR Studio",
                    desc: "沉浸式學習的完美空間計算設備。",
                },
                card2: { title: "iPad", desc: "隨時隨地創建和查看教育AR內容。" },
            },
            news: {
                title: "平台動態",
                readmore: "閱讀更多",
                item1: {
                    title: "教育版 AI 新功能發布",
                    desc: "增強的自動綁定和物體識別，專為課堂優化。",
                },
                item2: {
                    title: "大屏幕投屏支持",
                    desc: "現已支持無縫投屏到教室顯示屏。",
                },
                item3: {
                    title: "全球教育合作夥伴計劃",
                    desc: "加入我們的學校網絡，用AR變革學習。",
                },
            },
            month: { nov: "11月" },
            footer: {
                tagline: "讓每個人都可以快樂的創造世界。",
                links: "快速鏈接",
                contact: "聯繫方式",
                subscribeTitle: "保持更新",
                newsletter: { desc: "訂閱以獲取最新平台新聞。" },
                email: { placeholder: "您的電子郵件地址" },
                subscribe: { btn: "訂閱" },
                copyright: "&copy; 2025 3dugc.com. 澳門總部. 版權所有.",
            },
        },
        ja: {
            nav: {
                about: "プラットフォーム",
                capabilities: "コア技術",
                devices: "対応デバイス",
                news: "ニュース",
                contact: "お問い合わせ",
                login: "ログイン",
            },
            login: {
                title: "ログイン",
                username: "ユーザー名",
                password: "パスワード",
                btn: "サインイン",
            },
            hero: {
                title: "3D + UGC <br><span class='text-gradient'>世界を創造しよう</span>",
                subtitle: "AR + AIで教育を支援。<br>マカオを拠点に、世界へ。<br>教室のためのシームレスなマルチデバイスインタラクションと大画面キャスト。",
                explore: "対応デバイス",
                learn: "詳細を見る",
            },
            about: {
                title: "ノーコード作成",
                subtitle: "教師と生徒がコードを書かずに没入型AR教材を作成できる究極のツール。",
                card1: {
                    title: "モデルのアップロード",
                    desc: "3Dアセットを簡単にインポートして、独自の教材ライブラリを構築できます。",
                },
                card2: {
                    title: "シーンの組み立て",
                    desc: "3D空間にオブジェクトを配置して、直感的に授業シーンを組み立てます。",
                },
                card3: {
                    title: "ビジュアルロジック",
                    desc: "ロジックブロックをドラッグアンドドロップするだけで、インタラクティブなコースウェアを作成できます。",
                },
            },
            capabilities: {
                title: "コア技術",
                lead: "高度なAR + AI機能を備えた、教育業界向けのデザイン。",
                item1: {
                    title: "AR + AI コア",
                    desc: "高度なAIによるインテリジェントなコンテンツ生成と物体認識。",
                },
                item2: {
                    title: "マルチデバイス連携",
                    desc: "ARグラス、タブレット、スマートフォン間のリアルタイムコラボレーション。",
                },
                item3: {
                    title: "サードパーティビューとキャスト",
                    desc: "ARの視点を大画面にキャストして、クラス全体で共有できます。",
                },
            },
            devices: {
                title: "対応デバイス",
                ar: "ARヘッドセット",
                tablet: "タブレット",
                learn: "詳細を見る →",
                card1: {
                    title: "Rokid AR Studio",
                    desc: "没入型学習に最適な空間コンピューティングデバイス。",
                },
                card2: {
                    title: "iPad",
                    desc: "どこでも教育用ARコンテンツを作成して表示できます。",
                },
            },
            news: {
                title: "最新情報",
                readmore: "続きを読む",
                item1: {
                    title: "教育向け新AI機能",
                    desc: "教室向けに最適化された強化された自動リギングと物体認識。",
                },
                item2: {
                    title: "大画面キャスト対応",
                    desc: "教室のディスプレイへのシームレスなキャストに対応しました。",
                },
                item3: {
                    title: "グローバル教育パートナー",
                    desc: "ARで学習を変革する学校のネットワークに参加してください。",
                },
            },
            month: { nov: "11月" },
            footer: {
                tagline: "誰もが楽しく世界を創造できるように。",
                links: "クイックリンク",
                contact: "連絡先",
                subscribeTitle: "最新情報を受け取る",
                newsletter: {
                    desc: "最新のプラットフォームニュースを受け取るために購読してください。",
                },
                email: { placeholder: "メールアドレス" },
                subscribe: { btn: "購読する" },
                copyright: "&copy; 2025 3dugc.com. マカオ本部. All rights reserved.",
            },
        },
        th: {
            nav: {
                about: "แพลตฟอร์ม",
                capabilities: "เทคโนโลยีหลัก",
                devices: "อุปกรณ์ที่รองรับ",
                news: "ข่าวสาร",
                contact: "ติดต่อเรา",
                login: "เข้าสู่ระบบ",
            },
            login: {
                title: "เข้าสู่ระบบ",
                username: "ชื่อผู้ใช้",
                password: "รหัสผ่าน",
                btn: "ลงชื่อเข้าใช้",
            },
            hero: {
                title: "3D + UGC <br><span class='text-gradient'>สร้างโลกของคุณ</span>",
                subtitle: "เสริมพลังการศึกษาด้วย AR + AI <br>ฐานปฏิบัติการในมาเก๊า ให้บริการทั่วโลก <br>การโต้ตอบหลายอุปกรณ์ที่ราบรื่นและการแคสต์หน้าจอขนาดใหญ่",
                explore: "อุปกรณ์ที่รองรับ",
                learn: "เรียนรู้เพิ่มเติม",
            },
            about: {
                title: "การสร้างแบบไม่ต้องเขียนโค้ด",
                subtitle: "เครื่องมือที่ดีที่สุดสำหรับครูและนักเรียนในการสร้างเนื้อหา AR ที่สมจริงโดยไม่ต้องเขียนโค้ด",
                card1: {
                    title: "อัปโหลดโมเดล",
                    desc: "นำเข้าสินทรัพย์ 3D ได้อย่างง่ายดายเพื่อสร้างไลบรารีการศึกษาที่ไม่เหมือนใคร",
                },
                card2: {
                    title: "การประกอบฉาก",
                    desc: "ประกอบฉากบทเรียนอย่างสังหรณ์ใจโดยการวางวัตถุในพื้นที่ 3D",
                },
                card3: {
                    title: "ตรรกะภาพ",
                    desc: "สร้างบทเรียนแบบโต้ตอบเพียงแค่ลากและวางบล็อกตรรกะ",
                },
            },
            capabilities: {
                title: "เทคโนโลยีหลัก",
                lead: "ออกแบบมาสำหรับอุตสาหกรรมการศึกษาด้วยคุณสมบัติ AR + AI ขั้นสูง",
                item1: {
                    title: "AR + AI หลัก",
                    desc: "การสร้างเนื้อหาอัจฉริยะและการจดจำวัตถุที่ขับเคลื่อนโดย AI ขั้นสูง",
                },
                item2: {
                    title: "การโต้ตอบหลายอุปกรณ์",
                    desc: "การทำงานร่วมกันแบบเรียลไทม์ระหว่างแว่นตา AR แท็บเล็ต และโทรศัพท์",
                },
                item3: {
                    title: "มุมมองบุคคลที่ 3 และการแคสต์",
                    desc: "แบ่งปันมุมมอง AR ไปยังหน้าจอขนาดใหญ่สำหรับการสอนทั้งชั้นเรียน",
                },
            },
            devices: {
                title: "อุปกรณ์ที่รองรับ",
                ar: "ชุดหูฟัง AR",
                tablet: "แท็บเล็ต",
                learn: "เรียนรู้เพิ่มเติม →",
                card1: {
                    title: "Rokid AR Studio",
                    desc: "อุปกรณ์ประมวลผลเชิงพื้นที่ที่สมบูรณ์แบบสำหรับการเรียนรู้ที่สมจริง",
                },
                card2: {
                    title: "iPad",
                    desc: "สร้างและดูเนื้อหา AR เพื่อการศึกษาได้ทุกที่",
                },
            },
            news: {
                title: "อัปเดตแพลตฟอร์ม",
                readmore: "อ่านเพิ่มเติม",
                item1: {
                    title: "ฟีเจอร์ AI ใหม่สำหรับการศึกษา",
                    desc: "การผูกอัตโนมัติและการจดจำวัตถุที่ได้รับการปรับปรุงสำหรับห้องเรียน",
                },
                item2: {
                    title: "รองรับการแคสต์หน้าจอขนาดใหญ่",
                    desc: "รองรับการแคสต์ไปยังจอแสดงผลในห้องเรียนได้อย่างราบรื่นแล้ว",
                },
                item3: {
                    title: "โครงการพันธมิตรการศึกษาระดับโลก",
                    desc: "เข้าร่วมเครือข่ายโรงเรียนของเราที่เปลี่ยนการเรียนรู้ด้วย AR",
                },
            },
            month: { nov: "พ.ย." },
            footer: {
                tagline: "ให้ทุกคนสร้างโลกได้อย่างมีความสุข",
                links: "ลิงก์ด่วน",
                contact: "ติดต่อ",
                subscribeTitle: "ติดตามข่าวสาร",
                newsletter: {
                    desc: "สมัครรับจดหมายข่าวเพื่อรับข่าวสารล่าสุดของแพลตฟอร์ม",
                },
                email: { placeholder: "ที่อยู่อีเมลของคุณ" },
                subscribe: { btn: "สมัครสมาชิก" },
                copyright: "&copy; 2025 3dugc.com. สำนักงานใหญ่มาเก๊า. สงวนลิขสิทธิ์",
            },
        },
    };
    const langSelect = document.getElementById("langSelect");
    function updateContent(lang) {
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");
            if (!key)
                return;
            const keys = key.split(".");
            let value = translations[lang];
            for (const k of keys) {
                if (value)
                    value = value[k];
            }
            if (value && typeof value === "string") {
                element.innerHTML = value;
            }
        });
        document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
            const key = element.getAttribute("data-i18n-placeholder");
            if (!key)
                return;
            const keys = key.split(".");
            let value = translations[lang];
            for (const k of keys) {
                if (value)
                    value = value[k];
            }
            if (value && typeof value === "string") {
                element.placeholder = value;
            }
        });
    }
    if (langSelect) {
        // Set default language to Traditional Chinese
        const defaultLang = "zh-TW";
        langSelect.value = defaultLang;
        updateContent(defaultLang);
        langSelect.addEventListener("change", (e) => {
            const target = e.target;
            updateContent(target.value);
        });
    }
});
