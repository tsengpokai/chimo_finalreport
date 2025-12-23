// script.js (維持不變，僅確保時間軸生成邏輯正確)
const canvas = document.getElementById('geo-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let w, h;
    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);
    resize();
    let t = 0;
    function animate() {
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = 'rgba(0, 242, 255, 0.15)';
        ctx.lineWidth = 1;
        for (let x = 0; x < w; x += 60) {
            for (let y = 0; y < h; y += 60) {
                const d = Math.sqrt((x - w/2)**2 + (y - h/2)**2);
                const offset = Math.sin(d * 0.01 - t) * 10;
                ctx.fillStyle = `rgba(0, 242, 255, ${0.1 + (offset+10)/60})`;
                ctx.fillRect(x, y + offset, 2, 2);
            }
        }
        t += 0.02;
        requestAnimationFrame(animate);
    }
    animate();
}

const timeline = document.getElementById('timeline-container');
if (timeline && typeof courseData !== 'undefined') {
    Object.keys(courseData).forEach((key, index) => {
        const item = courseData[key];
        const side = index % 2 === 0 ? 'left' : 'right';
        const div = document.createElement('div');
        div.className = `container ${side}`;
        div.innerHTML = `
            <div class="content" onclick="location.href='detail.html?id=${key}'" style="cursor:pointer;">
                <div class="date">${item.date}</div>
                <h2><i class="fas ${item.icon}"></i> ${item.title}</h2>
                <p>${item.description}</p>
                <div style="margin-top:10px;">${item.tags.map(t => `<span style="font-size:0.8rem; color:var(--accent-cyan); margin-right:5px;">#${t}</span>`).join('')}</div>
            </div>`;
        timeline.appendChild(div);
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('show'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.container').forEach(el => observer.observe(el));
}