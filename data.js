// data.js
const courseData = {
    "week1": {
        title: "Week 1: 地球物理與 AI 工具建置",
        date: "2025/09/10",
        tags: ["GitHub", "Hugging Face", "AI Prompt"],
        icon: "fa-tools",
        color: "blue",
        description: "建立開發環境，並利用 LLM 輔助生成第一個地球物理互動網頁。",
        content: [
            {
                type: "text",
                heading: "學習目標",
                body: "本週創立了 GitHub 與 Hugging Face 帳號，並學習使用 Codespace 進行雲端開發。透過 Prompt Engineering 指令 AI 協助生成程式碼。"
            },
            {
                type: "iframe",
                src: "https://huggingface.co/spaces/tspokai/homework1",
                caption: "Hugging Face Space 實作成果：地球物理互動網頁"
            },
            {
                type: "code",
                heading: "使用的 AI Prompt",
                body: "你是一位地球物理學教師...製作成互動式應用方案...可以實現有下拉式選單，觀察地表地震規模變化。"
            },
            {
                type: "text",
                heading: "GitHub 協作",
                body: "學會了利用 Pull Request (PR) 繳交作業，完成了從本地端到雲端的版控流程。"
            }
        ]
    },
    "week2": {
        title: "Week 2: 震測理論推導",
        date: "2025/09/17",
        tags: ["Math", "Derivation", "Seismic Refraction"],
        icon: "fa-calculator",
        color: "blue",
        description: "深入探討折射與反射震測原理，並推導臨界折射波公式。",
        content: [
            {
                type: "text",
                heading: "理論基礎",
                body: "本週研讀《Whole Earth Geophysics》，並利用 Python 工具 (ObsPy, PyGMT) 輔助學習。重點在於理解 Snell's Law 如何應用於地下分層介質。"
            },
            {
                type: "math",
                heading: "1. 臨界折射波走時公式 (Travel Time)",
                body: "$$ T_t = \\frac{x}{V_2} + \\frac{2h \\cos \\theta_c}{V_1} $$ <br> 其中 $T_t$ 為總走時，$x$ 為測站距離，$h$ 為層厚，$\\theta_c$ 為臨界角。"
            },
            {
                type: "math",
                heading: "2. Crossover Distance ($X_{cr}$)",
                body: "當直達波與折射波同時到達的距離。推導結果為：<br> $$ X_{cr} = 2h \\sqrt{\\frac{V_2 + V_1}{V_2 - V_1}} $$"
            },
            {
                type: "image",
                src: "path/to/your/homework4_image.jpg", // 請替換成 作業四 截圖
                caption: "手寫推導過程 (參考附件：作業四_U11310015_曾柏凱)"
            }
        ]
    },
    "week3": {
        title: "Week 3: 校園折射震測實驗",
        date: "2025/09/24",
        tags: ["Field Work", "Experiment", "Data Analysis"],
        icon: "fa-hammer",
        color: "emerald",
        description: "於校園圖書館後方進行實地佈線與敲擊實驗，探勘淺層地質構造。",
        content: [
            {
                type: "text",
                heading: "實驗資訊",
                body: "<ul><li><strong>日期：</strong>114年9月24日</li><li><strong>地點：</strong>北市大圖書館後方</li><li><strong>震源：</strong>大錘敲擊金屬板 (Sledgehammer)</li><li><strong>儀器：</strong>DAS-1 / NZ 24 Strata View</li><li><strong>檢波器 (Geophones)：</strong>24道，間距 2m</li></ul>"
            },
            {
                type: "text",
                heading: "實驗目的",
                body: "1. 找出分層震波速度 (V1, V2)。<br>2. 確定地層分界深度與厚度。<br>3. 評估地層密實度供工程參考。"
            },
            {
                type: "image",
                src: "path/to/field_work_photo.jpg", // 請替換成實驗照片
                caption: "野外實驗現場：佈線與震源敲擊"
            },
            {
                type: "text",
                heading: "結果分析 (參考實驗報告)",
                body: "透過走時曲線圖分析：<br> - **藍線斜率**：代表第一層速度 (V1)。<br> - **紅線斜率**：代表第二層速度 (V2)。<br>利用截距時間 (Intercept Time) 與 $X_{cr}$ 計算後，成功求出地下淺層結構之厚度。"
            }
        ]
    },
    "week4": {
        title: "Week 4: 地震層析成像 (甘禮有博士演講)",
        date: "2025/10/01",
        tags: ["Speech", "Tomography", "Inversion"],
        icon: "fa-user-tie",
        color: "purple",
        description: "探討如何利用地震波「電腦斷層」來掃描地球內部構造。",
        content: [
            {
                type: "text",
                heading: "演講心得摘要",
                body: "甘博士介紹了利用震波通過不同介質的速度變化來推測內部構造。最令我印象深刻的是**正演 (Forward)** 與 **逆推 (Inverse)** 問題的概念：<br> - 正演：已知模型預測數據。<br> - 逆推：利用觀測資料反推模型（也是科學家面臨的最大挑戰，因為資料往往有限）。"
            },
            {
                type: "text",
                heading: "心得",
                body: "這場演講解開了我對層析成像的疑惑，雖然目前只是冰山一角，但我對科學家如何在有限數據下拼湊出最接近真實的地球模型感到敬佩。"
            }
        ]
    },
    "week6": {
        title: "Week 6: 重力探勘與 Gradio 實作",
        date: "2025/10/15",
        tags: ["Gravity", "Free Air Anomaly", "Gradio"],
        icon: "fa-magnet",
        color: "purple",
        description: "學習重力異常校正，並實作 Free Air Anomaly 互動程式。",
        content: [
            {
                type: "text",
                heading: "重力異常概念",
                body: "學習了自由空間重力 (Free Air) 與布蓋重力 (Bouguer) 的差異。重力探勘對於尋找地底高密度礦體或地質構造非常有用。"
            },
            {
                type: "iframe",
                src: "https://huggingface.co/spaces/tspokai/HW8",
                caption: "Gradio 實作：Free Air Anomaly 互動展示"
            }
        ]
    },
    "week7": {
        title: "Week 7: 打造 AI 科研助理",
        date: "2025/10/22",
        tags: ["AI Agent", "Gemini API", "Dify", "Notion"],
        icon: "fa-robot",
        color: "purple",
        description: "整合 Dify、Gemini API 與 Notion，建立自動化知識工作流。",
        content: [
            {
                type: "text",
                heading: "工作流設計",
                body: "透過 Dify 串接 Google Gemini 模型，並將整理好的地球物理文獻自動匯入 Notion 資料庫，形成個人的知識管理系統。"
            },
            {
                type: "link_group",
                links: [
                    {text: "查看 GitHub Repo", url: "https://github.com/tsengpokai/Homework7_U11310015"},
                    {text: "查看 Notion Page", url: "https://www.notion.so/hw-2a9a2e8d13c680e2a0eced173b528cc4"}
                ]
            }
        ]
    },
    "week9": {
        title: "Week 9: 板塊構造與 PyGMT",
        date: "2025/11/05",
        tags: ["PyGMT", "Plate Tectonics", "Mapping"],
        icon: "fa-globe-americas",
        color: "yellow",
        description: "繪製南美洲板塊周邊的複雜邊界：聚合、張裂與轉形斷層。",
        content: [
            {
                type: "text",
                heading: "板塊邊界分析",
                body: "<strong>1. 聚合型：</strong>納茲卡板塊隱沒至南美洲下，形成安地斯山脈與秘魯-智利海溝。<br><strong>2. 張裂型：</strong>大西洋中洋脊推動南美洲向西移動。<br><strong>3. 複雜區：</strong>加勒比海板塊的剪切與擠壓。"
            },
            {
                type: "link_group",
                links: [
                    {text: "PyGMT 繪圖作業 GitHub", url: "https://github.com/tsengpokai/-10--"}
                ]
            }
        ]
    },
    "week10": {
        title: "Week 10: PyGMT 教學網站製作",
        date: "2025/11/12",
        tags: ["Web Dev", "Tutorial", "Open Source"],
        icon: "fa-laptop-code",
        color: "yellow",
        description: "將學習成果轉化為教學資源，製作 PyGMT 入門教學網頁。",
        content: [
            {
                type: "iframe",
                src: "https://tsengpokai.github.io/intro-learnPYGMT/",
                caption: "GitHub Pages 成果展示"
            }
        ]
    },
    "week11_12": {
        title: "Week 11-12: 古地磁與地熱分佈",
        date: "2025/11/26",
        tags: ["Paleomagnetism", "Geothermal", "Heat Flow"],
        icon: "fa-compass",
        color: "yellow",
        description: "探索大陸漂移的證據：古地磁 (Apparent Polar Wander) 與地熱探勘。",
        content: [
            {
                type: "text",
                heading: "關鍵概念",
                body: "<strong>古地磁學：</strong>透過岩石中磁性礦物的排列，重建過去的磁極位置，證實了板塊的移動。<br><strong>地熱探勘：</strong>利用地殼熱流測量與模擬，尋找具潛力的地熱能源場址。"
            }
        ]
    },
    "week13": {
        title: "Week 13: AI 地震學平台",
        date: "2025/12/03",
        tags: ["AI", "Seismology", "ObsPy", "Web App"],
        icon: "fa-server",
        color: "red",
        description: "期末專題前哨戰：整合 Gemini 與 ObsPy 的地震波分析平台。",
        content: [
            {
                type: "text",
                heading: "平台功能",
                body: "這是一個整合 Obspy 與 Plotly 的高效能解決方案。透過 Gradio 介面，支援從 IRIS 下載波形、動態疊加 IASP91 走時模型，並進行即時濾波處理。"
            },
            {
                type: "iframe",
                src: "https://huggingface.co/spaces/cwadayi/Eq_demo",
                caption: "AI 地震監測平台展示"
            }
        ]
    },
    "week14": {
        title: "Week 14: 複合式災害 (黃有志博士演講)",
        date: "2025/12/10",
        tags: ["Disaster", "Kumamoto", "Volcano"],
        icon: "fa-exclamation-triangle",
        color: "red",
        description: "從阿蘇火山到熊本地震，探討複合式災害與防災監測。",
        content: [
            {
                type: "text",
                heading: "演講重點：2016 熊本地震",
                body: "博士解析了當時特殊的「前震(M6.5)—主震(M7.3)」序列，讓我體會到災害的多變。地震引發山崩、地裂甚至連動火山活動的「複合式災害」打破了我對單一災害的想像。"
            },
            {
                type: "text",
                heading: "監測技術",
                body: "利用次聲波監聽空氣振動、傾斜儀偵測地殼變形。這些多參數整合觀測是判斷警戒等級的關鍵。"
            },
            {
                type: "text",
                heading: "心得",
                body: "演講中提到的阿蘇「草千里」碧綠草原令人嚮往。這場演講讓我對「防災工程」與「地質觀測研究」產生了濃厚興趣。"
            }
        ]
    },
    "week15": {
        title: "Week 15: AI 遇上地震學 (廖勿渝博士演講)",
        date: "2025/12/17",
        tags: ["Deep Learning", "Automation", "Future"],
        icon: "fa-microchip",
        color: "red",
        description: "探討深度學習如何應用於全自動化地震監測。",
        content: [
            {
                type: "iframe",
                src: "https://tsengpokai.github.io/WuYuLiao/",
                caption: "廖勿渝博士演講心得網站"
            }
        ]
    },
    "week16": {
        title: "Week 16: 期末專題發表",
        date: "2025/12/24",
        tags: ["Final Project", "Presentation"],
        icon: "fa-flag-checkered",
        color: "red",
        description: "展示本學期所有學習成果與最終專題報告。",
        content: [
            {
                type: "text",
                heading: "學期總結",
                body: "從基礎的 GitHub 架設、震測實驗到進階的 AI 地震波處理，這 18 週不僅學會了地球物理知識，更掌握了現代化的資料科學工具。"
            }
        ]
    }
};