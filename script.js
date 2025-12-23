// script.js

// 1. 背景動畫：地質網格 (Terrain Mesh Simulation)
const canvas = document.getElementById('geo-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    let time = 0;
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        ctx.strokeStyle = 'rgba(0, 242, 255, 0.12)';
        ctx.lineWidth = 1;
        
        const spacing = 60; // 網格間距
        
        // 繪製動態網格點
        for (let x = 0; x < width; x += spacing) {
            for (let y = 0; y < height; y += spacing) {
                // 波動公式：模擬震波傳遞
                const dist = Math.sqrt((x - width/2)**2 + (y - height/2)**2);
                const wave = Math.sin(dist * 0.008 - time) * 12;
                
                const size = 2;
                ctx.fillStyle = `rgba(0, 242, 255, ${0.1 + (wave+12)/50})`;
                ctx.fillRect(x, y + wave, size, size);
            }
        }
        
        time += 0.03;
        requestAnimationFrame(animate);
    }
    animate();
}

// 2. 主頁面卡片渲染 (只在有 card-container 的頁面執行)
const container = document.getElementById('card-container');
if (container && typeof courseData !== 'undefined') {
    
    // 遍歷 data.js 中的所有週次
    Object.keys(courseData).forEach(key => {
        const item = courseData[key];
        
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => {
            window.location.href = `detail.html?id=${key}`;
        };

        const tagsHtml = item.tags.map(tag => `<span>${tag}</span>`).join('');

        card.innerHTML = `
            <div class="card-date">${item.date}</div>
            <h3><i class="fas ${item.icon} fa-xs" style="color:var(--accent-cyan); margin-right:10px;"></i>${item.title}</h3>
            <p style="color: #94a3b8; margin-bottom: 20px; font-size: 0.95rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${item.description}</p>
            <div class="tags">${tagsHtml}</div>
            <div style="margin-top:20px; text-align:right; color:var(--accent-blue); font-size:0.85rem; font-weight:bold;">
                Read More <i class="fas fa-arrow-right ml-1"></i>
            </div>
        `;

        container.appendChild(card);
    });
}