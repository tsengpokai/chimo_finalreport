// data.js
const courseData = {
    // ... Week 1 保持不變 ...
    "week1": {
        title: "Week 1: 地球物理與 AI 工具建置",
        date: "2025/09/10",
        tags: ["GitHub", "Hugging Face", "AI Workflow"],
        icon: "fa-server",
        description: "建立科研開發環境，利用 Prompt Engineering 指令 AI 生成震源互動網頁，並熟悉 Pull Request 流程。",
        content: [
            { type: "text", heading: "課程與工具介紹", body: "本週重點在於建立數位科研環境。我們註冊了 GitHub 與 Hugging Face 帳號，並學習使用 Github Codespace 進行雲端程式開發。" },
            { type: "iframe", src: "https://tspokai-homework1.hf.space", caption: "成果展示：互動式震源與規模模擬網頁" },
            { type: "text", heading: "AI Prompt", body: "使用提示詞：「你是一位地球物理學教師...製作成互動式應用方案...」成功生成了 Python Gradio 應用程式。" },
            { type: "text", heading: "GitHub Pull Request", body: "學會了 Fork 倉庫、Commit 修改並發起 PR (Pull Request)，完成作業繳交流程。" }
        ]
    },
    "week2": {
        title: "Week 2: 折射震測與深度探勘",
        date: "2025/09/17",
        tags: ["Seismic Refraction", "Derivation", "Engineering"],
        icon: "fa-calculator",
        description: "推導臨界折射波走時公式與 Crossover Distance，並探討其在工程上的應用。",
        content: [
            { type: "text", heading: "臨界折射波 (Critical Refraction)", body: "當震波從低速層進入高速層，且入射角達到臨界角時，波會沿著交界面滑行並折射回地表。" },
            // 修正：將兩張圖拆開，src 放路徑，caption 放說明
            { type: "image", src: "img/041.png", caption: "示意圖：臨界折射波路徑" },
            { type: "image", src: "img/042.png", caption: "示意圖：波前傳播機制" },
            { type: "math", heading: "走時公式推導", body: "$$ T = \\frac{x}{V_2} + \\frac{2h \\cos \\theta_c}{V_1} $$" },
            { type: "math", heading: "Crossover Distance", body: "$$ X_{cr} = 2h \\sqrt{\\frac{V_2 + V_1}{V_2 - V_1}} $$" }
        ]
    },
    "week3": {
        title: "Week 3: 校園折射震測實驗",
        date: "2025/09/24",
        tags: ["Field Trip", "Experiment", "Analysis"],
        icon: "fa-hard-hat",
        description: "於校園進行實地佈線與敲擊，並撰寫完整的實驗報告。",
        content: [
            { type: "text", heading: "1. 實驗器材與方法", body: "使用 NZ 24 Strata View 紀錄儀與 24 道檢波器 (Geophones)。每隔 2 公尺設置一個接收點，並使用大錘敲擊金屬板作為震源。除了器材架設，我們也學習了如何檢查線路雜訊 (Noise Test)。" },
            // 修正路徑
            { type: "image", src: "img/032.png", caption: "實驗器材與佈線現場" },
            { type: "text", heading: "2. 實驗過程", body: "團隊分工合作，依序進行正打（由北向南）與逆打。紀錄過程中，必須確保大錘敲擊力道足夠，且周圍無人走動干擾訊號。我們共採集了多組震測紀錄，並即時檢查初達波是否清晰。" },
            // 修正路徑
            { type: "image", src: "img/033.png", caption: "實驗過程：大錘敲擊與團隊紀錄" },
            { type: "text", heading: "3. 結果與結論", body: "透過分析走時曲線圖，我們計算出校園地下的分層速度構造。藍線斜率代表表土層速度 V1，紅線斜率代表基盤速度 V2。利用截距時間法，成功推算出基盤深度約在地下 5-8 公尺處，顯示該區域地質結構相對平緩。" },
            // 修正：將兩張圖拆開
            { type: "image", src: "img/031.png", caption: "實驗結果：走時曲線分析圖 (1)" },
            { type: "image", src: "img/034.png", caption: "實驗結果：數據統整 (2)" }
        ]
    },
    "week4": {
        title: "Week 4: 甘禮有博士專題演講",
        date: "2025/10/01",
        tags: ["Guest Speech", "Tomography"],
        icon: "fa-user-tie",
        description: "主題：地震層析成像 (Seismic Tomography) 之原理與應用。",
        content: [
            { type: "text", heading: "演講摘要", body: "甘博士以「地球的 CT 掃描」為比喻，深入淺出地介紹了地震層析成像。演講涵蓋了從資料收集、模型建立到反演算法的完整流程。重點探討了如何利用震波在不同介質中的速度差異（高溫低速、低溫高速）來視覺化地球深部的冷熱構造，如板塊隱沒帶與地函熱柱。" },
            { type: "text", heading: "心得反思", body: "這次演講解開了我對「反演 (Inversion)」的許多困惑。博士提到，正演是用模型預測數據，而逆推則是用數據找模型，這中間最大的困難在於資料的有限性與非唯一性。這讓我聯想到，科學研究往往就是在有限的線索中，試圖拼湊出最接近真理的圖景。我對科學家如何利用數學工具處理這些龐大且充滿雜訊的地震數據感到敬佩，也激發了我未來想深入學習數值模擬的興趣。" }
        ]
    },
    "week5": {
        title: "Week 5: 走時層析成像與深度探勘",
        date: "2025/10/08",
        tags: ["Deep Exploration", "Tomography"],
        icon: "fa-layer-group",
        description: "深入解析走時層析成像技術 (Travel Time Tomography) 原理。",
        content: [
            { type: "text", heading: "什麼是走時層析成像？", body: "走時層析成像 (Travel Time Tomography) 是一種利用地震波由震源傳遞至測站的「走時殘差 (Travel-time Residual)」來反推地下速度構造的技術。<br><br>原理基於：<strong>$T_{obs} = T_{cal} + \\Delta T$</strong><br>如果觀測時間比理論時間短，代表波經過了高速區；反之則經過低速區。透過建立方程組 $d = Gm$ (d:資料, G:路徑矩陣, m:模型參數)，我們可以解出地下的速度擾動分佈。" },
            // 修正路徑
            { type: "image", src: "img/051.png", caption: "示意圖：地震射線穿過網格化的地球模型" }
        ]
    },
    "week6": {
        title: "Week 6: 重力探勘 (Free Air vs Bouguer)",
        date: "2025/10/15",
        tags: ["Gravity", "Anomaly", "Gradio"],
        icon: "fa-weight-hanging",
        description: "解析兩種重力異常的物理意義差異，並實作 Gradio 互動程式。",
        content: [
            { type: "text", heading: "自由空間異常 vs 布蓋異常", body: "<ul><li><strong>Free Air (自由空間異常):</strong> 僅修正高度影響。用途：反映地殼均衡 (Isostasy)，常用於海洋重力。</li><li><strong>Bouguer (布蓋異常):</strong> 修正高度 + 中間岩層質量引力。用途：反映<strong>地下密度不均</strong>，是尋找礦體與油氣的關鍵。</li></ul>" },
            { type: "iframe", src: "https://tspokai-hw8.hf.space", caption: "Gradio 實作：Free Air Anomaly 互動展示" }
        ]
    },

    // --- Week 7: AI Agent 詳細解釋 ---
    "week7": {
        title: "Week 7: AI Agent 工作流設計",
        date: "2025/10/22",
        tags: ["AI Agent", "Workflow", "Automation"],
        icon: "fa-robot",
        description: "深入探討 AI Agent 架構，並實作 Gemini API + Dify 自動化工作流。",
        content: [
            { type: "text", heading: "什麼是 AI Agent 工作流？", body: "AI Agent (人工智慧代理) 不同於單純的問答機器人，它具備<strong>感知、思考、行動</strong>的能力。一個完整的工作流包含：<br>1. <strong>大腦 (LLM)：</strong>負責理解意圖與邏輯判斷 (如 Gemini)。<br>2. <strong>工具 (Tools)：</strong>執行具體任務 (如搜尋文獻、寫入資料庫)。<br>3. <strong>記憶 (Memory)：</strong>記住上下文以進行多輪對話。<br>本週我透過 Dify 平台將這些模組串聯，實現自動化科研。" },
            { type: "text", heading: "如何創造工作流？(實作步驟)", body: "1. <strong>定義目標：</strong>我希望自動整理地球物理文獻並存檔。<br>2. <strong>設計 Prompt：</strong>設定 AI 角色為「科研助理」，並規定輸出格式 (JSON)。<br>3. <strong>串接 API：</strong>在 Dify 中設定 Google Gemini API Key。<br>4. <strong>連結 Notion：</strong>透過 webhook 將 AI 生成的摘要自動寫入 Notion Database。" },
            // 修正：這張圖看起來您想用本地圖片 img/061.png 或是保留 Notion 連結？
            // 如果要用本地圖片，請改用下面這行：
             { type: "image", src: "img/061.png", caption: "AI Agent 工作流架構圖" },
            // 如果要維持 Notion 連結：
            { type: "image", src: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fhw-2a9a2e8d13c680e2a0eced173b528cc4.png?table=block&id=2a9a2e8d-13c6-80e2-a0ec-ed173b528cc4", caption: "AI Agent 工作流架構圖" },
            { type: "link_group", links: [{text: "GitHub Repo", url: "https://github.com/tsengpokai/Homework7_U11310015"}, {text: "Notion Page", url: "https://www.notion.so/hw-2a9a2e8d13c680e2a0eced173b528cc4"}] }
        ]
    },
    
    // ... 後面 Week 8 - Week 16 維持不變，請直接複製原本的 ...
    "week8": { title: "Week 8: 期中考", date: "2025/10/29", tags: ["Exam"], icon: "fa-pen-alt", description: "期中知識檢核。", content: [{ type: "text", heading: "期中總結", body: "複習震測公式、重力異常與地球物理基礎。" }] },
    "week9": {
        title: "Week 9: 南美洲板塊構造分析",
        date: "2025/11/05",
        tags: ["Plate Tectonics", "PyGMT", "South America"],
        icon: "fa-globe-americas",
        description: "利用 PyGMT 繪圖，深入分析南美洲周邊的五大板塊邊界特性。",
        content: [
            { type: "text", heading: "一、南美洲板塊 vs 納茲卡板塊 (Nazca)", body: "<strong>[聚合型邊界]</strong> 納茲卡板塊(海洋)向東隱沒至南美大陸之下。<br><ul><li><strong>景觀：</strong>形成全球最長的陸上山脈—<strong>安地斯山脈</strong>，以及深邃的<strong>秘魯-智利海溝</strong>。</li><li><strong>災害：</strong>隱沒帶導致劇烈地震(如1960智利大地震)與火山弧分佈。</li></ul>" },
            { type: "text", heading: "二、南美洲板塊 vs 非洲板塊", body: "<strong>[張裂型邊界]</strong> 兩者由<strong>大西洋中洋脊 (Mid-Atlantic Ridge)</strong> 分開。<br><ul><li><strong>機制：</strong>岩漿上湧生成新洋殼，推動南美洲向西漂移。</li><li><strong>特徵：</strong>海底火山、正斷層與持續變寬的大西洋。</li></ul>" },
            { type: "text", heading: "三、南美洲板塊 vs 加勒比海板塊", body: "<strong>[複雜邊界]</strong> 位於南美洲北部，混合了轉形斷層與聚合作用。<br><ul><li><strong>特徵：</strong>板塊間的剪切與擠壓，造就了哥倫比亞北部的褶皺山脈與小型火山弧 (如特立尼達島附近)。</li></ul>" },
            { type: "text", heading: "四、南美洲板塊 vs 南極板塊", body: "<strong>[張裂型邊界]</strong> 位於南大西洋海域。<br><ul><li><strong>特徵：</strong>形成南大西洋洋中脊，海底擴張作用活躍，伴隨新洋殼生成。</li></ul>" },
            { type: "text", heading: "五、南美洲板塊 vs 斯科細亞板塊 (Scotia)", body: "<strong>[轉形邊界]</strong> 位於南美洲南端。<br><ul><li><strong>特徵：</strong>形成斯科細亞海及深海斷層帶，主要表現為板塊間的水平剪切運動。</li></ul>" },
            { type: "link_group", links: [{text: "Google Colab 程式碼", url: "https://colab.research.google.com/github/tsengpokai/-10--/blob/main/PyGMT.ipynb"}] }
        ]
    },
    "week10": { title: "Week 10: PyGMT 教學網站", date: "2025/11/12", tags: ["Web Dev"], icon: "fa-laptop-code", description: "製作 PyGMT 入門教學網頁。", content: [{ type: "iframe", src: "https://tsengpokai.github.io/intro-learnPYGMT/", caption: "GitHub Pages 成果" }] },
    "week11_13": {
        title: "Week 11-13: 板塊構造與地熱綜合探勘",
        date: "2025/11/19 - 12/03",
        tags: ["Paleomagnetism", "Geothermal", "Gamification"],
        icon: "fa-fire",
        description: "深度整合古地磁學證據、板塊構造理論與地熱探勘技術，並包含三個互動模擬實驗。",
        content: [
            { type: "text", heading: "1. 古地磁與海底擴張 (Week 11)", body: "<strong>岩石的秘密羅盤：</strong>當岩漿冷卻低於居禮溫度時，磁性礦物會紀錄當下的地磁方向。透過分析洋脊兩側的磁條帶對稱性，我們證實了海底正在擴張，且地磁極會發生倒轉。" },
            { type: "game_magnetic", heading: "Game I：海底擴張磁條帶模擬器", caption: "拖動滑桿，觀察隨著時間推移，洋脊如何製造新地殼並紀錄地磁倒轉。" },
            { type: "text", heading: "2. 地球熱分佈與地熱技術 (Week 12-13)", body: "地熱探勘仰賴多種地球物理方法。<strong>大地電磁法 (MT)</strong> 利用地下電阻率差異尋找黏土蓋層；<strong>熱流模擬</strong>則幫助我們推估深部溫度。此外，<strong>微震監測</strong>對於地熱注水過程中的安全性至關重要。" },
            { type: "game_heat", heading: "Game II：地殼熱流模擬器", caption: "調整導熱參數與地溫梯度，模擬鑽井深度與溫度變化。(還原經典版)" },
            { type: "text", heading: "3. 微震監測 (Microseismic Monitoring)", body: "在地熱開發(EGS)中，我們需要將水注入地底以撐開裂隙。這時需即時監控誘發的微小地震，以追蹤流體路徑並防止災害。" },
            { type: "game_microseismic", heading: "Game III：微震監測儀表板 (New)", caption: "調整「注水壓力」，觀察誘發微震的分佈與破裂範圍。" }
        ]
    },
    "week14": {
        title: "Week 14: 黃有志博士專題演講",
        date: "2025/12/10",
        tags: ["Volcano", "Disaster", "Reflection"],
        icon: "fa-mountain",
        description: "主題：從阿蘇火山到熊本地震—談複合式災害與防災應用。",
        content: [
            { type: "text", heading: "演講摘要", body: "黃博士分享了在日本防災研究所的經驗。最令我震撼的是關於<strong>2016熊本地震</strong>的分析：它打破了常規，出現了前震 (M6.5) 後接主震 (M7.3) 的特殊序列，並引發了山崩與火山活動的<strong>「複合式災害」</strong>。" },
            { type: "text", heading: "深度心得", body: "這次演講讓我深刻體會到大自然的不可預測性。博士提到的阿蘇火山「草千里」碧綠草原景色雖美，背後卻隱藏著巨大的地質能量。我開始思考，身為地球科學的學生，我們不應只關注單一災害，而應具備整合性思維。利用次聲波、傾斜儀等多參數觀測手段，才能在災害發生前爭取黃金時間。這場演講點燃了我對「防災工程」與「地質監測」的熱情，或許未來能將 AI 技術應用於此，為守護家園盡一份力。" }
        ]
    },
    "week15": {
        title: "Week 15: 廖勿渝博士專題演講",
        date: "2025/12/17",
        tags: ["AI", "Deep Learning"],
        icon: "fa-microchip",
        description: "主題：AI 遇上地震學—從深度學習到全自動化監測。",
        content: [
            { type: "iframe", src: "https://tsengpokai.github.io/WuYuLiao/", caption: "演講心得與專題網頁" }
        ]
    },
    "week16": {
        title: "Week 16: 期末專題發表",
        date: "2025/12/24",
        tags: ["Final Project"],
        icon: "fa-flag-checkered",
        description: "學期總結與成果展示。",
        content: [{ type: "text", heading: "總結", body: "這 18 週的旅程，從 Github 架站到 AI 地震監測，將地科知識與資訊技術完美結合。" }]
    }
};