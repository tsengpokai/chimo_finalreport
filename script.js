// script.js

// 初始化 AOS 動畫庫
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    renderTimeline();
    initCanvasAnimation();
});

// 渲染時間軸
function renderTimeline() {
    const container = document.getElementById('timeline-container');
    const keys = Object.keys(courseData);

    keys.forEach((key, index) => {
        const item = courseData[key];
        const isLeft = index % 2 === 0;
        
        // 決定動畫方向
        const fadeDir = isLeft ? 'fade-right' : 'fade-left';
        
        // HTML 結構
        const html = `
        <div class="flex flex-col md:flex-row justify-between items-center w-full relative z-10 group" data-aos="${fadeDir}">
            
            <div class="md:w-5/12 order-1 ${isLeft ? '' : 'md:order-3'} mb-8 md:mb-0">
                ${isLeft ? createCardHtml(key, item) : ''}
            </div>

            <div class="md:w-2/12 order-2 flex justify-center py-4 md:py-0 relative">
                <div class="w-14 h-14 bg-gray-900 border-4 border-${item.color}-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20 group-hover:scale-110 transition duration-300">
                    <i class="fas ${item.icon} text-${item.color}-400 text-xl"></i>
                </div>
            </div>

            <div class="md:w-5/12 order-3 ${isLeft ? 'md:order-3' : 'md:order-1'}">
                 ${!isLeft ? createCardHtml(key, item) : ''}
            </div>
        </div>
        `;

        container.innerHTML += html;
    });
}

// 產生卡片 HTML 函數
function createCardHtml(key, item) {
    return `
        <a href="detail.html?id=${key}" class="block">
            <div class="glass-card p-6 rounded-xl border-l-4 border-${item.color}-500 relative overflow-hidden group-hover:bg-gray-800 transition">
                <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                    <i class="fas ${item.icon} text-6xl text-${item.color}-400"></i>
                </div>
                <div class="text-sm font-bold text-${item.color}-400 mb-2 font-mono">${item.date}</div>
                <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-${item.color}-300 transition">${item.title}</h3>
                <p class="text-gray-400 mb-4 line-clamp-2">${item.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${item.tags.map(tag => `<span class="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">#${tag}</span>`).join('')}
                </div>
                <span class="text-${item.color}-400 text-sm font-semibold flex items-center">
                    深入閱讀 <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition"></i>
                </span>
            </div>
        </a>
    `;
}

// Canvas 粒子動畫
function initCanvasAnimation() {
    const canvas = document.getElementById('bg-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    
    const resize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const particles = [];
    const particleCount = 60;

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        draw() {
            ctx.fillStyle = 'rgba(100, 149, 237, 0.5)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        // 繪製連線
        ctx.strokeStyle = 'rgba(100, 149, 237, 0.1)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
}