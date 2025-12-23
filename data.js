// data.js
const courseData = {
    "week1": {
        title: "Week 1: 地球物理與 AI 工具建置",
        date: "2025/09/10",
        tags: ["GitHub", "Hugging Face", "AI Workflow"],
        icon: "fa-server",
        description: "建立科研開發環境，利用 Prompt Engineering 指令 AI 生成震源互動網頁，並熟悉 Pull Request 流程。",
        content: [
            { type: "text", heading: "課程與工具介紹", body: "本週重點在於建立數位科研環境。我們註冊了 GitHub 與 Hugging Face 帳號，並學習使用 Github Codespace 進行雲端程式開發。此外，透過與 Gemini、ChatGPT 等大型語言模型協作，加速程式撰寫效率。" },
            { type: "text", heading: "Hugging Face Space 實作", body: "我利用 AI 輔助生成了一個地球物理互動網頁，這是我針對本週內容學習後的成果：" },
            { type: "iframe", src: "https://tspokai-homework1.hf.space", caption: "成果展示：互動式震源與規模模擬網頁" },
            { type: "text", heading: "開發過程與 AI Prompt", body: "為了完成上述網頁，我扮演了提示工程師的角色。以下是我使用的關鍵提示詞(Prompt)：<br><br><em>「你是一位地球物理學教師，熟練教導學生基本地球物理知識...目的是為了讓學生了解全球地球物理的知識...製作成互動式應用方案...可以實現有下拉式選單，地球物理概念很多互動功能...互動功能是透過調整震源可以用來觀察地表地震規模變化。」</em><br><br>透過這個 Prompt，AI 幫我生成了 Python (Streamlit/Gradio) 程式碼，我再將其部署到 Hugging Face Spaces。" },
            { type: "text", heading: "GitHub Pull Request (PR)", body: "<strong>關鍵技能：</strong>在繳交作業的過程中，我學會了如何 Fork 老師的倉庫，在本地端完成修改後，發起 <strong>Pull Request (PR)</strong> 將我的作業合併回主倉庫。這是現代軟體開發與科研協作中不可或缺的版控技能。" }
        ]
    },
    "week2": {
        title: "Week 2: 折射震測與深度探勘",
        date: "2025/09/17",
        tags: ["Seismic Refraction", "Derivation", "Engineering"],
        icon: "fa-calculator",
        description: "推導臨界折射波走時公式與 Crossover Distance，並探討其在工程上的應用。",
        content: [
            { type: "text", heading: "臨界折射波 (Critical Refraction)", body: "當震波從低速層 $V_1$ 進入高速層 $V_2$ ($V_2 > V_1$)，且入射角達到臨界角 $\\theta_c = \\sin^{-1}(V_1/V_2)$ 時，波會沿著交界面滑行（Head Wave），並不斷將能量以臨界角折射回地表。" },
            { type: "math", heading: "1. 臨界折射波走時公式推導", body: "折射波總走時 $T$ 由下降段、滑行段、上升段組成：<br>$$ T = \\frac{x}{V_2} + \\frac{2h \\cos \\theta_c}{V_1} $$<br>其中 $x$ 為測站距離，$h$ 為層厚。此公式是反演地下構造的核心。" },
            { type: "math", heading: "2. Crossover Distance ($X_{cr}$)", body: "<strong>定義：</strong>直達波與折射波同時到達地表檢波器的距離。<br>當 $\\frac{X_{cr}}{V_1} = \\frac{X_{cr}}{V_2} + \\frac{2h \\cos \\theta_c}{V_1}$ 時，可推導出：<br>$$ X_{cr} = 2h \\sqrt{\\frac{V_2 + V_1}{V_2 - V_1}} $$" },
            { type: "text", heading: "應用場景", body: "<ul><li><strong>基盤探測：</strong>利用截距時間反推基岩深度，決定高樓地基打樁深度。</li><li><strong>隧道選址：</strong>透過低速區 ($V_2$ 異常低) 辨識斷層破碎帶，避免施工災難。</li></ul>" }
        ]
    },
    "week3": {
        title: "Week 3: 校園折射震測實驗",
        date: "2025/09/24",
        tags: ["Field Trip", "Experiment", "Analysis"],
        icon: "fa-hard-hat",
        description: "於校園進行實地佈線與敲擊，並撰寫完整的實驗報告。",
        content: [
            { type: "text", heading: "實驗目的", body: "1. 找出地下分層震波速度 ($V_1, V_2$)。<br>2. 確定地層分界深度 (Depth) 與厚度。<br>3. 評估地層密實度供工程參考。" },
            { type: "text", heading: "實驗器材與方法", body: "<ul><li><strong>震源：</strong>大錘敲擊金屬板 (Sledgehammer)，作為人工震源。</li><li><strong>接收儀器：</strong>NZ 24 Strata View 紀錄儀，搭配 24 道檢波器 (Geophones)。</li><li><strong>參數設定：</strong>檢波器間距 2m，採樣率 0.25ms，紀錄長度 0.5s。</li></ul>" },
            { type: "text", heading: "實驗過程", body: "團隊分工進行佈線，確保檢波器與地面耦合良好。由北向南進行敲擊（正打與逆打），紀錄直達波與折射波訊號。過程中需注意環境噪音（如腳步聲）的干擾。" },
            { type: "text", heading: "結果與結論", body: "透過分析走時曲線圖 (Travel-time Curve)：<br>1. <strong>直達波 ($V_1$)：</strong>由近距離測站斜率求得，代表表土層速度。<br>2. <strong>折射波 ($V_2$)：</strong>由遠距離測站斜率求得，代表下層岩盤速度。<br>3. <strong>結論：</strong>利用截距時間公式計算，成功描繪出校園地下淺層的基盤起伏構造。" }
        ]
    },
    "week4": {
        title: "Week 4: 甘禮有博士專題演講",
        date: "2025/10/01",
        tags: ["Guest Speech", "Tomography"],
        icon: "fa-user-tie",
        description: "主題：地震層析成像 (Seismic Tomography) 之原理與應用。",
        content: [
            { type: "text", heading: "演講心得", body: "甘博士深入淺出地介紹了如何利用震波「掃描」地球內部。核心概念在於<strong>正演 (Forward)</strong> 與 <strong>逆推 (Inverse)</strong> 問題。我們利用地表接收到的震波走時異常，反推地底下的速度構造（如高溫低速的地函熱柱）。這場演講讓我了解到，地球物理學家就像是幫地球做 CT 掃描的醫生。" }
        ]
    },
    "week5": {
        title: "Week 5: 深度探勘與 Tomography",
        date: "2025/10/08",
        tags: ["Deep Exploration", "Travel Time"],
        icon: "fa-layer-group",
        description: "學習走時層析成像技術 (Travel Time Tomography) 及其在深度探勘的應用。",
        content: [
            { type: "text", heading: "走時層析成像", body: "進一步探討 Week 4 的概念。學習如何將地球網格化，建立方程組 $d = Gm$（d為資料，m為模型參數，G為核矩陣），並利用數值方法求解地底速度分佈。這是現代尋找深部油氣與礦產的關鍵技術。" }
        ]
    },
    "week6": {
        title: "Week 6: 重力探勘 (Free Air vs Bouguer)",
        date: "2025/10/15",
        tags: ["Gravity", "Anomaly", "Gradio"],
        icon: "fa-weight-hanging",
        description: "解析兩種重力異常的物理意義差異，並實作 Gradio 互動程式。",
        content: [
            { type: "text", heading: "1. 自由空間異常 (Free Air Anomaly)", body: "<strong>定義：</strong>僅進行高度修正，假設測點與大地水準面之間是「空的」（無質量）。<br><strong>公式：</strong> $\\Delta g_{FA} = g_{obs} - g_{ref} + 0.3086h$<br><strong>用途：</strong>主要用於海洋重力研究，反映地殼均衡 (Isostasy) 狀態，與地形相關性高。" },
            { type: "text", heading: "2. 布蓋異常 (Bouguer Anomaly)", body: "<strong>定義：</strong>在 Free Air 基礎上，進一步扣除測點下方岩層平板質量的引力。<br><strong>公式：</strong> $\\Delta g_{B} = \\Delta g_{FA} - 0.0419 \\rho h$<br><strong>差異關鍵：</strong>布蓋異常排除了地形影響，剩餘的數值直接反映<strong>地表以下的密度變化</strong>（如高密度的金屬礦床或低密度的岩漿庫/鹽丘）。" },
            { type: "iframe", src: "https://tspokai-hw8.hf.space", caption: "Gradio 實作：Free Air Anomaly 互動展示" }
        ]
    },
    "week7": {
        title: "Week 7: AI Agent 工作流設計",
        date: "2025/10/22",
        tags: ["AI Agent", "Dify", "Notion"],
        icon: "fa-robot",
        description: "整合 Gemini API、Dify 與 Notion，打造自動化科研助理。",
        content: [
            { type: "text", heading: "工作流架構", body: "本週目標是建立一個自動化知識管理系統。我利用 <strong>Dify</strong> 平台串接 <strong>Google Gemini API</strong>，設計了一個工作流：當輸入地球物理相關文獻或關鍵字時，AI 會自動進行摘要與分類，並透過 API 將結果寫入 <strong>Notion 資料庫</strong>。" },
            { type: "image", src: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fhw-2a9a2e8d13c680e2a0eced173b528cc4.png?table=block&id=2a9a2e8d-13c6-80e2-a0ec-ed173b528cc4", caption: "AI Agent 工作流設計圖 (來源：我的 Notion)" },
            { type: "link_group", links: [{text: "GitHub Repo", url: "https://github.com/tsengpokai/Homework7_U11310015"}, {text: "Notion Page", url: "https://www.notion.so/hw-2a9a2e8d13c680e2a0eced173b528cc4"}] }
        ]
    },
    "week8": {
        title: "Week 8: 期中考",
        date: "2025/10/29",
        tags: ["Exam"],
        icon: "fa-pen-alt",
        description: "進行學期中評量，檢視對前半學期震測、重力與地球物理基礎知識的掌握程度。",
        content: [
            { type: "text", heading: "期中總結", body: "本週進行期中考試。複習重點涵蓋：地震波傳遞原理、折射震測公式推導、重力異常修正公式以及相關的計算應用。" }
        ]
    },
    "week9": {
        title: "Week 9: 南美洲板塊構造分析",
        date: "2025/11/05",
        tags: ["Plate Tectonics", "PyGMT", "South America"],
        icon: "fa-globe-americas",
        description: "利用 PyGMT 繪圖，深入分析南美洲周邊的五大板塊邊界特性。",
        content: [
            { type: "text", heading: "1. 聚合型邊界 (與納茲卡板塊)", body: "<strong>Nazca Plate</strong> 向東隱沒至南美大陸之下。景觀特徵：<strong>安地斯山脈</strong>（褶皺山脈）、<strong>秘魯-智利海溝</strong>。此處伴隨強烈的火山活動與地震（如1960智利大地震）。" },
            { type: "text", heading: "2. 張裂型邊界 (與非洲板塊)", body: "位於<strong>大西洋中洋脊 (Mid-Atlantic Ridge)</strong>。兩板塊彼此遠離，海底火山噴發生成新洋殼，導致南美洲持續向西漂移，大西洋變寬。" },
            { type: "text", heading: "3. 複雜邊界 (與加勒比海板塊)", body: "混合了轉形斷層與聚合作用。板塊間的剪切與擠壓造就了哥倫比亞北部的褶皺山脈與小型火山弧。" },
            { type: "text", heading: "4. 張裂型邊界 (與南極板塊)", body: "位於南大西洋洋中脊，海底擴張作用活躍。" },
            { type: "text", heading: "5. 轉形邊界 (與斯科細亞板塊)", body: "形成斯科細亞海 (Scotia Sea) 及深海斷層帶，具有顯著的剪切運動特徵。" },
            { type: "link_group", links: [{text: "PyGMT 作業 GitHub", url: "https://github.com/tsengpokai/-10–"}] }
        ]
    },
    "week10": {
        title: "Week 10: PyGMT 教學網站製作",
        date: "2025/11/12",
        tags: ["Web Dev", "Tutorial", "Open Source"],
        icon: "fa-laptop-code",
        description: "將學習成果轉化為教學資源，製作並發布 PyGMT 入門教學網頁。",
        content: [
            { type: "iframe", src: "https://tsengpokai.github.io/intro-learnPYGMT/", caption: "GitHub Pages 成果展示：PyGMT 教學網站" }
        ]
    },
    "week11": {
        title: "Week 11: 古地磁與板塊構造理論",
        date: "2025/11/19",
        tags: ["Paleomagnetism", "Drift", "Evidence"],
        icon: "fa-compass",
        description: "探討岩石的秘密羅盤，從古地磁學證據驗證大陸漂移。",
        content: [
            { type: "text", heading: "古地磁學 (Paleomagnetism)", body: "岩石在冷卻時會記錄當時的地球磁場方向。透過分析不同年代岩石的<strong>視極移 (Apparent Polar Wander)</strong> 路徑，我們發現並非磁極在跑，而是大陸板塊在移動。" },
            { type: "text", heading: "海底擴張證據", body: "1. <strong>磁條帶對稱性：</strong>洋脊兩側的地磁正反極性呈現對稱排列。<br>2. <strong>岩石年齡：</strong>離洋脊越遠，洋殼年齡越老。<br>這些證據強烈支持海底擴張學說。" },
            { type: "text", heading: "板塊構造理論", body: "整合了「大陸漂移」與「海底擴張」。核心概念：地球外殼由剛性的<strong>岩石圈 (Lithosphere)</strong> 板塊組成，漂浮在具塑性流動的<strong>軟流圈 (Asthenosphere)</strong> 之上，板塊運動引發了地震、火山與造山運動。" }
        ]
    },
    "week12": {
        title: "Week 12: 地球熱分布與地熱探勘",
        date: "2025/11/26",
        tags: ["Heat Flow", "Geothermal", "Resource"],
        icon: "fa-fire",
        description: "分析全球地殼熱流分佈，並介紹地熱探勘資訊平台。",
        content: [
            { type: "text", heading: "地球熱分佈", body: "全球熱流值 (Heat Flow) 分佈不均。<strong>中洋脊</strong>因岩漿上湧熱流最高；<strong>古老地盾</strong>區熱流最低；<strong>海溝</strong>處因板塊隱沒吸熱，熱流也較低。" },
            { type: "text", heading: "地熱探勘平台", body: "現代地熱探勘整合了地質、地球物理（重、磁、震、電）與地球化學資料，建立地下熱構造模型，以降低鑽探風險。我們學習了如何使用這些平台來評估地熱潛能區。" }
        ]
    },
    "week13": {
        title: "Week 13: 地熱前沿技術與互動模擬",
        date: "2025/12/03",
        tags: ["Game", "Magnetotellurics", "AI"],
        icon: "fa-gamepad",
        description: "探討 MT、微震與 AI 在地熱的應用，並遊玩地殼熱流模擬遊戲。",
        content: [
            { type: "text", heading: "地熱探勘關鍵技術", body: "<ul><li><strong>大地電磁法 (MT)：</strong>探勘核心技術。利用地下電阻率差異，尋找低電阻的「黏土蓋層」與下方高溫儲集層。</li><li><strong>微震監測：</strong>監聽注水誘發的微小地震，描繪地底裂隙路徑。</li><li><strong>AI 應用：</strong>利用機器學習整合 MT 與震測資料，提高鑽井成功率。</li></ul>" },
            { type: "game", heading: "互動實驗：地殼熱流與地溫梯度模擬器", caption: "請調整下方參數，觀察地溫梯度與熱流變化。" } 
        ]
    },
    "week14": {
        title: "Week 14: 黃有志博士專題演講",
        date: "2025/12/10",
        tags: ["Volcano", "Disaster", "Japan"],
        icon: "fa-mountain",
        description: "主題：從阿蘇火山到熊本地震—談複合式災害與防災應用。",
        content: [
            { type: "text", heading: "演講心得", body: "黃博士分享了在日本京都大學防災研究所的經驗。重點在於<strong>2016熊本地震</strong>的特殊序列（前震-主震）以及引發的<strong>複合式災害</strong>（地震觸發山崩與火山活動）。" },
            { type: "text", heading: "監測技術", body: "演講中提到的<strong>次聲波 (Infrasound)</strong> 監測技術讓我印象深刻，能有效監聽火山噴發的空氣振動。這讓我認識到多參數整合觀測對於防災預警的重要性。" }
        ]
    },
    "week15": {
        title: "Week 15: 廖勿渝博士專題演講",
        date: "2025/12/17",
        tags: ["AI", "Deep Learning", "Automation"],
        icon: "fa-microchip",
        description: "主題：AI 遇上地震學—從深度學習到全自動化監測。",
        content: [
            { type: "iframe", src: "https://tsengpokai.github.io/WuYuLiao/", caption: "演講心得與專題網頁" }
        ]
    },
    "week16": {
        title: "Week 16: 期末專題發表",
        date: "2025/12/24",
        tags: ["Final Project", "Presentation"],
        icon: "fa-flag-checkered",
        description: "展示本學期 18 週的學習成果，包含網頁製作、程式開發與地科知識的整合應用。",
        content: [
            { type: "text", heading: "學期總結", body: "本網頁即為我的期末專題成果。從基礎的 Github 架設，到中期的震測公式推導與實作，再到後期的 AI 應用與地熱探勘，完整的記錄了這學期的學習軌跡。" }
        ]
    }
};