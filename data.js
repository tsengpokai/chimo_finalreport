// data.js
const courseData = {
    "week1": {
        title: "Week 1: 地球物理與 AI 工具建置",
        date: "2025/09/10",
        tags: ["GitHub", "Hugging Face", "Environment"],
        icon: "fa-server",
        description: "建立科研開發環境，並利用 LLM 輔助生成第一個地球物理互動網頁。",
        content: [
            { type: "text", heading: "學習目標", body: "建立 GitHub 與 Hugging Face 帳號，學習使用 Codespace 進行雲端開發，並利用 Prompt Engineering 指令 AI 生成震源互動網頁。" },
            { type: "iframe", src: "https://tspokai-homework1.hf.space", caption: "Hugging Face Space 實作成果" }
        ]
    },
    "week2": {
        title: "Week 2: 折射震測原理與工程應用",
        date: "2025/09/17",
        tags: ["Seismic Refraction", "Derivation", "Engineering"],
        icon: "fa-calculator",
        description: "深入探討臨界折射波 (Critical Refraction) 原理，推導走時公式並探討其在隧道工程與基盤探測的應用。",
        content: [
            { type: "text", heading: "什麼是臨界折射波？", body: "當震波從低速層 $V_1$ 進入高速層 $V_2$ ($V_2 > V_1$)，且入射角達到臨界角 $\\theta_c = \\sin^{-1}(V_1/V_2)$ 時，波會沿著交界面滑行（Head Wave），並不斷將能量折射回地表。" },
            { type: "math", heading: "走時公式推導", body: "$$ T = \\frac{x}{V_2} + \\frac{2h \\cos \\theta_c}{V_1} $$ <br> 其中 $T$ 為總走時，$x$ 為測站距離，$h$ 為層厚。此公式是反演地下構造的核心。" },
            { type: "text", heading: "工程應用實例", body: "<ul><li><strong>基盤探測：</strong>利用截距時間 (Intercept Time) 反推基岩深度，決定高樓地基打樁深度。</li><li><strong>隧道選址：</strong>透過低速區 ($V_2$ 異常低) 辨識斷層破碎帶或含水層，避免施工災難。</li></ul>" },
            { type: "image", src: "homework4_scan.jpg", caption: "手寫推導過程 (參考附件：作業四_U11310015_曾柏凱)" }
        ]
    },
    "week3": {
        title: "Week 3: 專題演講與野外實驗",
        date: "2025/09/24",
        tags: ["Field Trip", "Tomography", "Volcano"],
        icon: "fa-mountain",
        description: "校園折射震測實作，並探討地震層析成像與複合式災害。",
        content: [
            { type: "text", heading: "校園折射震測實驗", body: "於圖書館後方進行實地佈線。使用 24 道檢波器 (Geophone) 接收大錘震源訊號。透過分析初達波 (First Arrival)，成功計算出校園地下淺層的 $V_1$、$V_2$ 速度構造。" },
            { type: "text", heading: "黃有志博士：複合式災害", body: "以阿蘇火山與熊本地震為例，闡述了地震如何誘發火山活動與山崩的連鎖效應。介紹了利用<strong>次聲波 (Infrasound)</strong> 監測火山噴發氣流的技術。" },
            { type: "text", heading: "甘禮有博士：地震層析成像", body: "<strong>正演 (Forward)</strong> vs <strong>逆推 (Inverse)</strong>：科學家利用有限的測站資料，如同電腦斷層掃描 (CT) 般，反推地球內部的速度擾動，藉此看穿地函熱柱的形狀。" }
        ]
    },
    "week6": {
        title: "Week 6: 重力探勘：Free Air vs Bouguer",
        date: "2025/10/15",
        tags: ["Gravity", "Anomaly", "Geodesy"],
        icon: "fa-magnet",
        description: "解析兩種重力異常的物理意義差異，並實作互動程式。",
        content: [
            { type: "text", heading: "自由空間異常 (Free Air Anomaly)", body: "僅進行<strong>高度修正</strong>。假設測點與大地水準面之間是「空的」。<br>$$ \\Delta g_{FA} = g_{obs} - g_{ref} + 0.3086h $$<br><strong>用途：</strong>主要用於海洋重力研究，反映地殼均衡 (Isostasy) 狀態。" },
            { type: "text", heading: "布蓋異常 (Bouguer Anomaly)", body: "在 Free Air 基礎上，進一步扣除測點下方<strong>岩層質量的引力</strong>。<br>$$ \\Delta g_{B} = \\Delta g_{FA} - 0.0419 \\rho h $$<br><strong>用途：</strong>排除地形影響後，剩餘的數值直接反映<strong>地下的密度變化</strong>（如高密度的金屬礦床或低密度的岩漿庫）。" },
            { type: "iframe", src: "https://tspokai-hw8.hf.space", caption: "Gradio 實作：Free Air Anomaly 互動展示" }
        ]
    },
    "week7": {
        title: "Week 7: AI 科研助理工作流",
        date: "2025/10/22",
        tags: ["Workflow", "Notion", "Automation"],
        icon: "fa-robot",
        description: "整合 Gemini API 與 Notion，建立自動化文獻整理系統。",
        content: [
            { type: "text", heading: "自動化工作流設計", body: "利用 Dify 串接 LLM，自動摘要地球物理文獻並歸檔至 Notion 資料庫。" },
            { type: "image", src: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fhw-2a9a2e8d13c680e2a0eced173b528cc4.png?table=block&id=2a9a2e8d-13c6-80e2-a0ec-ed173b528cc4", caption: "AI Agent 工作流設計圖 (Notion)" },
            { type: "link_group", links: [{text: "查看 GitHub Repo", url: "https://github.com/tsengpokai/Homework7_U11310015"}, {text: "查看 Notion Page", url: "https://www.notion.so/hw-2a9a2e8d13c680e2a0eced173b528cc4"}] }
        ]
    },
    "week9": {
        title: "Week 9: 南美洲板塊構造分析",
        date: "2025/11/05",
        tags: ["Plate Tectonics", "PyGMT", "Subduction"],
        icon: "fa-globe-americas",
        description: "利用 PyGMT 繪製並分析南美洲周邊的三種板塊邊界。",
        content: [
            { type: "text", heading: "1. 聚合型邊界 (西側)", body: "<strong>納茲卡板塊 (Nazca)</strong> 向東隱沒至南美板塊之下，形成了深邃的<strong>秘魯-智利海溝</strong>以及壯麗的<strong>安地斯山脈</strong>。此處地震頻發（班尼奧夫帶）。" },
            { type: "text", heading: "2. 張裂型邊界 (東側)", body: "位於<strong>大西洋中洋脊</strong>，南美板塊與非洲板塊在此分離，岩漿上湧生成新的海洋地殼，推動大陸向西漂移。" },
            { type: "iframe", src: "https://tsengpokai.github.io/intro-learnPYGMT/", caption: "PyGMT 繪圖成果與教學網站" }
        ]
    },
    "week11_12": {
        title: "Week 11-12: 海底擴張與地熱分佈",
        date: "2025/11/26",
        tags: ["Heat Flow", "Paleomagnetism", "Geothermal"],
        icon: "fa-fire",
        description: "從古地磁證據驗證板塊理論，並探討地球熱流分佈與地熱潛能。",
        content: [
            { type: "text", heading: "海底擴張證據 (Evidence)", body: "<ul><li><strong>古地磁條帶：</strong>洋脊兩側的磁力異常呈現對稱排列，記錄了地球磁極的反轉歷史。</li><li><strong>岩石年齡：</strong>越靠近洋脊越年輕，越靠近海溝越老。</li></ul>" },
            { type: "text", heading: "板塊構造理論", body: "整合了大陸漂移與海底擴張學說，指出地球外殼由剛性的「岩石圈」板塊組成，漂浮在具塑性的「軟流圈」之上。" },
            { type: "text", heading: "地球熱流分佈", body: "全球熱流值並非均勻分佈。<strong>中洋脊</strong>因岩漿上湧熱流最高；<strong>古老地盾</strong>區熱流最低。地熱探勘平台即是利用此熱訊號尋找能源。" }
        ]
    },
    "week13": {
        title: "Week 13: 地熱探勘技術與模擬",
        date: "2025/12/03",
        tags: ["Interactive Game", "Magnetotellurics", "AI"],
        icon: "fa-gamepad",
        description: "探討大地電磁法 (MT)、微震監測與 AI 在地熱的應用，並實作熱流模擬器。",
        content: [
            { type: "text", heading: "地熱探勘關鍵技術", body: "<ul><li><strong>大地電磁法 (MT)：</strong>利用地下電阻率差異，尋找低電阻的「黏土蓋層」與下方高溫儲集層。</li><li><strong>微震監測：</strong>監聽注水誘發的微小地震，描繪地底裂隙路徑。</li><li><strong>AI 應用：</strong>利用機器學習整合 MT 與震測資料，提高鑽井成功率。</li></ul>" },
            { type: "game", heading: "互動實驗：地殼熱流模擬器" } 
        ]
    },
    "week15": {
        title: "Week 15: AI 遇上地震學",
        date: "2025/12/17",
        tags: ["Deep Learning", "Future", "Seismology"],
        icon: "fa-microchip",
        description: "廖勿渝博士演講心得：從深度學習到全自動化地震監測。",
        content: [
            { type: "iframe", src: "https://tsengpokai.github.io/WuYuLiao/", caption: "演講心得專題網頁" }
        ]
    }
};