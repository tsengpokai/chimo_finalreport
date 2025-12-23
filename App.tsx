import React, { useState, useEffect } from "react";

// --- CSS Animations & Glass Styles (定義在 JS 中以便封裝) ---
const styles = `
  /* 玻璃擬態面板 */
  .glass-card {
    background: rgba(30, 41, 59, 0.4);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  }
  
  .glass-header {
    background: rgba(11, 15, 25, 0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  /* 文字光暈 */
  .glow-text {
    text-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
  }

  /* 動畫關鍵影格 */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }

  /* 裝飾性背景光斑 */
  .blob {
    position: absolute;
    filter: blur(80px);
    z-index: -1;
    opacity: 0.4;
    animation: float 10s infinite ease-in-out;
  }
  
  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(20px, -20px); }
  }
`;

// --- Type Definitions ---

type CategoryType = "Knowledge" | "Skills" | "Fieldwork" | "Exam" | "Presentation";

interface WeekData {
  id: number;
  date: string;
  title: string;
  category: CategoryType;
  tags: string[];
  summary: string;
  content: React.ReactNode;
  links?: { label: string; url: string; icon: string }[];
  images?: { url: string; caption: string }[];
}

// --- Components ---

const Icon = ({ name, className = "" }: { name: string; className?: string }) => (
  <i className={`fa-solid ${name} ${className}`}></i>
);

// 程式碼區塊組件
const CodeBlock = ({ code, lang = "python" }: { code: string; lang?: string }) => (
  <div className="my-6 rounded-lg overflow-hidden border border-slate-700 bg-[#0d1117] group">
    <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-slate-700">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
      </div>
      <span className="text-xs text-slate-500 font-mono uppercase">{lang}</span>
    </div>
    <pre className="p-4 overflow-x-auto text-sm font-mono text-slate-300 leading-relaxed">
      <code>{code}</code>
    </pre>
  </div>
);

// 數學公式卡片組件
const MathCard = ({ title, formula }: { title: string; formula: string }) => (
  <div className="glass-card p-4 rounded-lg my-4 border-l-2 border-neon-blue">
    <div className="text-xs text-neon-blue mb-2 font-bold tracking-wider uppercase">{title}</div>
    <div className="font-serif text-xl text-center py-2 text-slate-200 tracking-wide">
      {formula}
    </div>
  </div>
);

// --- Data (完整課程內容) ---

const syllabus: WeekData[] = [
  {
    id: 1,
    date: "Sep 10",
    title: "數位孿生與課程啟動",
    category: "Skills",
    tags: ["GitHub", "HuggingFace", "AI Prompt"],
    summary: "建立數位工作環境，利用 Generative AI 部署第一個地震互動網頁。",
    content: (
      <div className="space-y-6 text-slate-300">
        <p className="leading-relaxed text-lg">
          本週是數位地球物理的起點。重點在於熟悉現代化開發工具，我們創立了 Github 與 Hugging Face 帳號，並學習如何利用 Gemini、ChatGPT 等 AI 模型作為輔助工具，完成從程式碼生成到雲端部署的完整流程。
        </p>
        <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
          <h3 className="text-white font-bold mb-2 flex items-center">
            <Icon name="fa-rocket" className="text-neon-blue mr-2"/> 
            本週成果：地震規模互動網頁
          </h3>
          <p className="mb-4">利用 AI Prompt 生成 Python Gradio 程式碼，實現可調整震級與深度的動態模擬。</p>
          <div className="text-xs font-mono text-slate-500 bg-black/30 p-3 rounded">
            Prompt: "Create a Gradio app that visualizes earthquake magnitude scaling..."
          </div>
        </div>
      </div>
    ),
    links: [
      { label: "My Homework Space", url: "https://huggingface.co/spaces/tspokai/homework1", icon: "fa-cube" },
      { label: "Course Repo", url: "https://github.com/tsengpokai", icon: "fa-github" }
    ]
  },
  {
    id: 2,
    date: "Sep 17",
    title: "震測學原理推導",
    category: "Knowledge",
    tags: ["Derivation", "Refraction", "Seismology"],
    summary: "深入研讀《Whole Earth Geophysics》，推導臨界折射波走時公式。",
    content: (
      <div className="space-y-6 text-slate-300">
        <p className="text-lg leading-relaxed">
          為了理解地下構造探勘的物理基礎，本週重點在於數學推導。我們探討了雙層介質下的斯乃爾定律 (Snell's Law) 應用，並計算出臨界折射波的走時方程式。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <MathCard title="Travel Time Equation" formula="Tt = x/V₂ + (2h cos θc)/V₁" />
           <MathCard title="Crossover Distance" formula="Xcr = 2h √((V₂ + V₁)/(V₂ - V₁))" />
        </div>
        <p>
          <strong>Crossover Distance (Xcr)</strong> 是直達波與折射波同時到達的距離。這對於野外實驗的佈線長度設計至關重要。
        </p>
      </div>
    ),
    links: [
      { label: "Theory Blog Post", url: "https://oceanicdayi.blogspot.com/2025/09/blog-post_30.html", icon: "fa-blog" }
    ],
    images: [
      { url: "https://placehold.co/800x400/1e293b/FFF?text=Formula+Derivation", caption: "手寫推導過程紀錄" }
    ]
  },
  {
    id: 3,
    date: "Sep 24",
    title: "校園折射震測實驗",
    category: "Fieldwork",
    tags: ["Field Trip", "Data Acquisition", "Interpretation"],
    summary: "於圖書館後方進行實地佈線與大錘敲擊，獲取淺層地質數據。",
    content: (
      <div className="space-y-6 text-slate-300">
        <p className="text-lg leading-relaxed">
           紙上談兵不如實地演練。我們分組在圖書館後方草地進行了完整的折射震測實驗。使用 24 道 Geophone 接收器，以大錘敲擊金屬板作為人工震源。
        </p>
        
        <div className="glass-card p-5 rounded-lg">
            <h4 className="text-white font-bold mb-4">數據解讀三部曲</h4>
            <ul className="space-y-3">
                <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold mr-3">1</span>
                    <span><strong>First Break Picking：</strong> 挑選每道波形的初達時間。</span>
                </li>
                <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold mr-3">2</span>
                    <span><strong>V-T Plot：</strong> 繪製走時曲線，斜率倒數即為波速。</span>
                </li>
                <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold mr-3">3</span>
                    <span><strong>Depth Calculation：</strong> 利用截距時間回推地層介面深度。</span>
                </li>
            </ul>
        </div>
      </div>
    ),
    images: [
        { url: "https://placehold.co/800x500/1e293b/FFF?text=Seismic+Record", caption: "野外震測紀錄 (Seismic Record)" }
    ],
    links: [
        { label: "Full Report PDF", url: "#", icon: "fa-file-pdf" }
    ]
  },
  {
    id: 5,
    date: "Oct 08",
    title: "Python 地震波處理 (ObsPy)",
    category: "Skills",
    tags: ["Python", "ObsPy", "IRIS FDSN", "Data Viz"],
    summary: "利用 ObsPy 套件連接 IRIS 全球地震網，抓取並視覺化台灣地震波形。",
    content: (
      <div className="space-y-6 text-slate-300">
        <p className="text-lg">
          本週進入程式實戰。利用 Python 強大的地震學套件 <code>ObsPy</code>，透過 FDSN Client 連接 IRIS 資料庫。
          我們指定了台灣區網 (TW) 的 NACB 測站，成功下載 2025/10/07 的地震波形。
        </p>
        
        <CodeBlock code={`from obspy import UTCDateTime
from obspy.clients.fdsn import Client

client = Client("IRIS")
t = UTCDateTime("2025-10-07T23:52:12")
st = client.get_waveforms("TW", "NACB", "", "BHZ", t, t+120)
st.plot()`} />
        
        <p>這段程式碼展示了如何僅用幾行指令，就獲取並繪製出專業級的地震波形圖，是現代地震學研究的基礎技能。</p>
      </div>
    ),
  },
  {
    id: 6,
    date: "Oct 15",
    title: "重力探勘與異常校正",
    category: "Knowledge",
    tags: ["Gravity", "Free Air", "Bouguer", "Gradio"],
    summary: "探討重力異常原理，並實作 Free Air Anomaly 互動計算程式。",
    content: (
      <div className="space-y-6 text-slate-300">
         <p className="text-lg">
            重力測量值需經過層層校正才能反映地下構造。我們重點學習了 Free Air Correction (高度校正) 與 Bouguer Correction (質量校正)。
         </p>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {["Latitude Correction", "Free Air Correction", "Bouguer Correction"].map((item, i) => (
                <div key={i} className="bg-slate-800 p-3 rounded text-center border border-slate-700 text-sm font-bold text-slate-300">
                    {item}
                </div>
            ))}
         </div>
         <p>為了視覺化此概念，我在 Hugging Face 上建立了一個 Gradio App，演示自由空間異常隨高度變化的計算過程。</p>
      </div>
    ),
    links: [
        { label: "Gravity App Demo", url: "https://huggingface.co/spaces/tspokai/HW8", icon: "fa-cube" }
    ]
  },
  {
    id: 7,
    date: "Oct 22",
    title: "打造 AI 科研助手 (Dify)",
    category: "Skills",
    tags: ["AI Agent", "Workflow", "Notion API", "Automation"],
    summary: "整合 Dify 工作流與 Notion 資料庫，建立個人化的地球物理知識庫。",
    content: (
      <div className="space-y-6 text-slate-300">
         <p className="text-lg">
            這週跨足 AI Agent 領域，學習「自動化工作流」。我利用 Dify 平台串接 Google Gemini API，並將 Notion 筆記作為後端知識庫 (RAG)。
         </p>
         <div className="glass-card p-6 rounded-xl flex items-center justify-between px-10">
            <div className="text-center">
                <Icon name="fa-robot" className="text-3xl text-pink-400 mb-2"/>
                <div className="text-sm font-bold">Dify Workflow</div>
            </div>
            <Icon name="fa-arrow-right" className="text-slate-600"/>
            <div className="text-center">
                <Icon name="fa-database" className="text-3xl text-blue-400 mb-2"/>
                <div className="text-sm font-bold">Notion KB</div>
            </div>
            <Icon name="fa-arrow-right" className="text-slate-600"/>
            <div className="text-center">
                <Icon name="fa-comment-dots" className="text-3xl text-green-400 mb-2"/>
                <div className="text-sm font-bold">Smart Reply</div>
            </div>
         </div>
      </div>
    ),
    links: [
        { label: "Project GitHub", url: "https://github.com/tsengpokai/Homework7_U11310015", icon: "fa-github" },
        { label: "Notion Page", url: "https://www.notion.so/hw-2a9a2e8d13c680e2a0eced173b528cc4", icon: "fa-file-lines" }
    ]
  },
  {
      id: 9,
      date: "Nov 05",
      title: "板塊構造與 PyGMT 繪圖",
      category: "Knowledge",
      tags: ["Tectonics", "PyGMT", "Visualization"],
      summary: "利用 PyGMT 繪製南美洲板塊邊界，視覺化分析聚合與張裂構造。",
      content: (
          <div className="space-y-6 text-slate-300">
              <p className="text-lg">
                  利用 GMT 的 Python 介面 (PyGMT) 來繪製高解析度地圖。本週專注於南美洲板塊周邊的複雜構造，包含納茲卡板塊的隱沒帶（聚合型）與大西洋中洋脊（張裂型）。
              </p>
          </div>
      ),
      links: [
        { label: "Map Source Code", url: "https://github.com/tsengpokai/-10--", icon: "fa-map" }
      ]
  },
  {
      id: 10,
      date: "Nov 12",
      title: "PyGMT 教學網站製作",
      category: "Skills",
      tags: ["Web Dev", "Documentation", "Open Source"],
      summary: "將學習成果轉化為教學資源，製作並發布 PyGMT 入門教學網頁。",
      content: (
          <div className="space-y-6 text-slate-300">
              <p className="text-lg">
                  為了更有系統地整理 PyGMT 的繪圖指令（如 `coast`, `plot`, `colorbar`），我製作了一個靜態教學網站，詳細記錄參數設定與範例圖檔。
              </p>
              <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg flex items-center justify-between">
                  <div>
                      <h4 className="font-bold text-white">Intro to Learn PyGMT</h4>
                      <p className="text-sm text-slate-400">託管於 GitHub Pages 的完整文檔</p>
                  </div>
                  <a href="https://tsengpokai.github.io/intro-learnPYGMT/" target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition-colors text-sm font-bold">
                      前往閱讀
                  </a>
              </div>
          </div>
      )
  },
  {
      id: 15,
      date: "Dec 17",
      title: "演講：AI 遇上地震學",
      category: "Presentation",
      tags: ["Deep Learning", "Phase Picking", "Review"],
      summary: "廖勿渝博士演講心得：從深度學習到全自動化監測系統。",
      content: (
          <div className="space-y-6 text-slate-300">
              <p className="text-lg">
                  深入了解 AI 模型（如 CNN, Transformer）如何應用於地震波的自動挑選 (Phase Picking)。這場演講讓我看到「全自動化監測」的未來，以及 AI 如何解決人力無法負荷的大數據分析問題。
              </p>
          </div>
      ),
      links: [
          { label: "Lecture Review Site", url: "https://tsengpokai.github.io/WuYuLiao/", icon: "fa-brain" }
      ]
  },
  {
      id: 16,
      date: "Dec 24",
      title: "期末專題發表",
      category: "Exam",
      tags: ["Final Project", "Presentation", "Milestone"],
      summary: "學期總結與專題成果展示。",
      content: (
          <div className="text-center py-10 space-y-6">
              <div className="inline-block p-6 rounded-full bg-yellow-500/10 border border-yellow-500/50">
                <Icon name="fa-trophy" className="text-5xl text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Semester Complete!</h3>
              <p className="text-slate-400 max-w-md mx-auto">
                  從基礎理論推導到高階 AI 應用，這 18 週的旅程建立了完整的地球物理知識體系。
              </p>
          </div>
      )
  }
];

// --- Sub-Components (Functional Views) ---

const Background = () => (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        {/* 深空背景色 */}
        <div className="absolute inset-0 bg-space-900"></div>
        {/* 裝飾性光球 - 藍色 */}
        <div className="blob bg-blue-600/20 w-[600px] h-[600px] rounded-full top-[-10%] left-[-10%] blur-[100px]"></div>
        {/* 裝飾性光球 - 紫色 */}
        <div className="blob bg-purple-600/10 w-[500px] h-[500px] rounded-full bottom-[-10%] right-[-10%] blur-[100px]" style={{animationDelay: '2s'}}></div>
        {/* 網格線 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    </div>
);

// 主頁的 Hero 區塊 (保持不變)
const HeroSection = ({ onEnter }: { onEnter: () => void }) => (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center animate-fade-in-up">
        <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-neon-blue text-xs tracking-widest font-mono">
            U11310015 • TSENG PO-KAI
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight glow-text">
            GEOPHYSICS
            <span className="block text-2xl md:text-4xl font-light text-slate-400 mt-2 tracking-[0.2em] opacity-80">SEMESTER REVIEW</span>
        </h1>
        <p className="max-w-xl text-slate-400 mb-12 leading-relaxed">
            從震測理論推導到 AI 地震監測應用。<br/>這是一個關於地球物理、數據科學與程式開發的學習旅程。
        </p>
        <button 
            onClick={onEnter}
            className="group relative px-8 py-3 bg-white text-space-900 font-bold rounded-full hover:bg-neon-blue transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]"
        >
            <span className="relative z-10 flex items-center gap-2">
                ENTER TIMELINE <Icon name="fa-arrow-down" className="group-hover:translate-y-1 transition-transform"/>
            </span>
        </button>
    </div>
);

// 主頁的時間軸項目 (保持不變)
const TimelineItem = ({ week, index, onClick }: { week: WeekData, index: number, onClick: () => void }) => {
    const isLeft = index % 2 === 0;
    
    // 類別顏色映射
    const getCategoryColor = (cat: string) => {
        switch(cat) {
            case "Skills": return "text-pink-400 border-pink-500/50";
            case "Fieldwork": return "text-green-400 border-green-500/50";
            case "Exam": return "text-red-400 border-red-500/50";
            default: return "text-neon-blue border-neon-blue/50";
        }
    };
    const catColor = getCategoryColor(week.category);

    return (
        <div 
            onClick={onClick}
            className={`relative flex items-center justify-between w-full mb-12 cursor-pointer group hover:scale-[1.01] transition-transform duration-300 animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* 左側內容 */}
            <div className={`w-5/12 ${isLeft ? "text-right pr-8" : "pl-8 order-last"}`}>
                {isLeft ? (
                    <div>
                        <span className={`text-xs font-bold uppercase tracking-widest ${catColor.split(" ")[0]} mb-1 block`}>{week.category}</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">{week.title}</h3>
                        <p className="text-slate-400 text-sm line-clamp-2">{week.summary}</p>
                    </div>
                ) : (
                    <span className="font-mono text-4xl font-bold text-slate-700 group-hover:text-white transition-colors">{week.date}</span>
                )}
            </div>

            {/* 中軸線與節點 */}
            <div className="w-2/12 flex flex-col items-center relative h-full">
                <div className="w-px h-[150%] bg-slate-800 absolute top-4 -z-10 group-hover:bg-slate-600 transition-colors"></div>
                <div className={`w-4 h-4 rounded-full bg-space-900 border-2 ${catColor.split(" ")[1]} z-10 group-hover:scale-150 transition-all duration-300 group-hover:bg-white`}></div>
            </div>

            {/* 右側內容 */}
            <div className={`w-5/12 ${isLeft ? "pl-8 text-left" : "text-right pr-8 order-first"}`}>
                {isLeft ? (
                    <span className="font-mono text-4xl font-bold text-slate-700 group-hover:text-white transition-colors">{week.date}</span>
                ) : (
                    <div>
                        <span className={`text-xs font-bold uppercase tracking-widest ${catColor.split(" ")[0]} mb-1 block`}>{week.category}</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">{week.title}</h3>
                        <p className="text-slate-400 text-sm line-clamp-2">{week.summary}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- 重點：全新的子頁面 (結構參考你的 React Code，風格參考我的設計) ---
const DetailPage = ({ week, onBack }: { week: WeekData; onBack: () => void }) => {
    // 確保切換進來時捲軸在最上方
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [week]);

    return (
        <div className="min-h-screen pt-20 pb-20 animate-fade-in relative z-20">
            {/* 1. 頂部導覽列 (Sticky Header) */}
            <div className="fixed top-0 left-0 w-full glass-header z-50 h-16 flex items-center justify-between px-6 md:px-12">
                <button 
                    onClick={onBack}
                    className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors text-sm font-bold tracking-wide group"
                >
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-neon-blue group-hover:text-space-900 transition-all">
                        <Icon name="fa-arrow-left"/>
                    </div>
                    BACK TO TIMELINE
                </button>
                <div className="font-mono text-slate-500 text-xs md:text-sm">
                    {week.date} / WEEK {week.id}
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-6">
                {/* 2. 頁面標題區 (Header Section) */}
                <div className="mb-12 border-b border-slate-700 pb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-slate-800 rounded-md text-xs font-mono text-neon-blue border border-slate-700">
                            {week.category}
                        </span>
                        {week.tags.map(tag => (
                            <span key={tag} className="text-xs text-slate-500">#{tag}</span>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        {week.title}
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
                        {week.summary}
                    </p>
                </div>

                {/* 3. 雙欄佈局 (參考你的 React Code 結構) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* 左側：主要內容 (Main Content) */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="glass-card p-8 rounded-xl">
                            {week.content}
                        </div>
                        
                        {/* 這裡可以放更多延伸閱讀或 Code */}
                        <div className="flex justify-between text-slate-500 text-sm pt-4 border-t border-slate-800">
                             <span>Author: Tseng Po-Kai</span>
                             <span>Geophysics 2025</span>
                        </div>
                    </div>

                    {/* 右側：側邊欄 (Sidebar) - 放置連結、圖片、資源 */}
                    <div className="space-y-6">
                        {/* 資源連結卡片 */}
                        {week.links && (
                            <div className="glass-card p-6 rounded-xl">
                                <h3 className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider flex items-center">
                                    <Icon name="fa-link" className="mr-2 text-neon-blue"/> Resources
                                </h3>
                                <div className="flex flex-col gap-3">
                                    {week.links.map((link, i) => (
                                        <a 
                                            key={i} 
                                            href={link.url} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="flex items-center justify-between p-3 rounded bg-slate-800/50 hover:bg-neon-blue hover:text-space-900 border border-slate-700 transition-all group"
                                        >
                                            <span className="text-sm font-medium">{link.label}</span>
                                            <Icon name={link.icon} className="opacity-50 group-hover:opacity-100"/>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 圖片展示卡片 */}
                        {week.images && week.images.map((img, i) => (
                            <div key={i} className="glass-card p-2 rounded-xl">
                                <div className="overflow-hidden rounded-lg mb-2 relative group">
                                    <img 
                                        src={img.url} 
                                        alt={img.caption} 
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <p className="text-xs text-center text-slate-500 py-1">{img.caption}</p>
                            </div>
                        ))}

                        {/* 標籤雲 (額外裝飾) */}
                        <div className="glass-card p-6 rounded-xl">
                             <h3 className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider">Keywords</h3>
                             <div className="flex flex-wrap gap-2">
                                 {week.tags.map(t => (
                                     <span key={t} className="px-2 py-1 bg-slate-900 rounded text-xs text-slate-400 border border-slate-800">{t}</span>
                                 ))}
                             </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


// --- Main App Entry ---

const App = () => {
  const [view, setView] = useState<"home" | "list" | "detail">("home");
  const [activeWeekId, setActiveWeekId] = useState<number | null>(null);

  // 取得當前選中的週次資料
  const activeWeek = syllabus.find(w => w.id === activeWeekId);

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen text-slate-200 font-sans selection:bg-neon-blue selection:text-space-900">
        <Background />
        
        {/* 1. 首頁 (Hero) */}
        {view === "home" && (
            <HeroSection onEnter={() => setView("list")} />
        )}

        {/* 2. 時間軸列表 (Timeline) */}
        {view === "list" && (
            <div className="max-w-4xl mx-auto px-6 py-24 animate-fade-in-up">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Course Timeline</h2>
                    <p className="text-slate-400">18 週的探索旅程</p>
                </div>
                
                <div className="relative">
                     {syllabus.map((week, idx) => (
                        <TimelineItem 
                            key={week.id} 
                            week={week} 
                            index={idx} 
                            onClick={() => { setActiveWeekId(week.id); setView("detail"); }}
                        />
                     ))}
                </div>

                <div className="text-center mt-20 pt-10 border-t border-slate-800 text-slate-600 text-sm">
                    © 2025 Geophysics Portfolio. Built with React & Tailwind.
                </div>
            </div>
        )}

        {/* 3. 詳細頁面 (Detail View) - 這是你要求參考 React 結構的部分 */}
        {view === "detail" && activeWeek && (
            <DetailPage 
                week={activeWeek} 
                onBack={() => setView("list")} 
            />
        )}
      </div>
    </>
  );
};

export default App;