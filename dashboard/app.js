// Nemo Professional Data Analytics Dashboard Logic
document.addEventListener('DOMContentLoaded', () => {
    // 1. Common Data Settings
    const regions = ['강남구', '서초구', '송파구', '마포구', '성동구', '용산구', '영등포구'];
    const colors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4'];

    // 2. Line Chart: Weekly Price Trends
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['4월 1주', '4월 2주', '4월 3주', '4월 4주'],
            datasets: [
                {
                    label: '강남구',
                    data: [14.8, 15.1, 14.9, 15.2],
                    borderColor: colors[0],
                    backgroundColor: colors[0] + '20',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: '마포구',
                    data: [8.2, 8.3, 8.5, 8.5],
                    borderColor: colors[2],
                    backgroundColor: colors[2] + '20',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#f8fafc' } } },
            scales: {
                y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8' } },
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
            }
        }
    });

    // 3. Pie Chart: Property Type Share
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    new Chart(ctxPie, {
        type: 'doughnut',
        data: {
            labels: ['아파트', '빌라', '오피스텔', '상가'],
            datasets: [{
                data: [55, 20, 15, 10],
                backgroundColor: colors.slice(0, 4),
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'right', labels: { color: '#f8fafc' } }
            },
            cutout: '65%'
        }
    });

    // 4. Radar Chart: Location Index Analysis
    const ctxRadar = document.getElementById('radarChart').getContext('2d');
    new Chart(ctxRadar, {
        type: 'radar',
        data: {
            labels: ['교통편의', '학군수준', '상권발달', '녹지비율', '치안안전', '미래가치'],
            datasets: [
                {
                    label: '성수동 (성동구)',
                    data: [85, 60, 95, 80, 75, 90],
                    borderColor: colors[1],
                    backgroundColor: colors[1] + '30'
                },
                {
                    label: '반포동 (서초구)',
                    data: [90, 98, 85, 70, 95, 95],
                    borderColor: colors[0],
                    backgroundColor: colors[0] + '30'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    pointLabels: { color: '#f8fafc', font: { size: 12 } },
                    ticks: { backdropColor: 'transparent', color: '#94a3b8' }
                }
            },
            plugins: { legend: { labels: { color: '#f8fafc' } } }
        }
    });

    // 5. Scatter Chart: Area vs Price
    const ctxScatter = document.getElementById('scatterChart').getContext('2d');
    new Chart(ctxScatter, {
        type: 'scatter',
        data: {
            datasets: [{
                label: '매물 데이터 포인트',
                data: Array.from({length: 40}, () => ({
                    x: Math.random() * 150 + 20, // 면적 (㎡)
                    y: Math.random() * 30 + 2     // 가격 (억)
                })),
                backgroundColor: colors[4] + '80'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { title: { display: true, text: '전용면적 (㎡)', color: '#94a3b8' }, ticks: { color: '#94a3b8' } },
                y: { title: { display: true, text: '매매가격 (억)', color: '#94a3b8' }, ticks: { color: '#94a3b8' } }
            }
        }
    });

    // 6. Bubble Chart: Market Heatmap
    const ctxBubble = document.getElementById('bubbleChart').getContext('2d');
    new Chart(ctxBubble, {
        type: 'bubble',
        data: {
            datasets: regions.map((region, i) => ({
                label: region,
                data: [{
                    x: 7 + Math.random() * 10, // 평균가
                    y: 50 + Math.random() * 200, // 매물수
                    r: 10 + Math.random() * 20   // 성장성 (Radius)
                }],
                backgroundColor: colors[i] + '80'
            }))
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { title: { display: true, text: '평균 매매가 (억)', color: '#94a3b8' }, ticks: { color: '#94a3b8' } },
                y: { title: { display: true, text: '등록 매물 수', color: '#94a3b8' }, ticks: { color: '#94a3b8' } }
            }
        }
    });

    // 7. Table Data
    const tableBody = document.getElementById('data-table-body');
    const mockList = [
        { id: 'NM-001', area: '강남구 역삼동', type: '아파트', price: '18.5억', change: '+2.1%', status: '진행중' },
        { id: 'NM-002', area: '서초구 잠원동', type: '아파트', price: '24.2억', change: '-0.5%', status: '진행중' },
        { id: 'NM-003', area: '성동구 성수동', type: '빌라', price: '9.8억', change: '+1.8%', status: '완료' },
        { id: 'NM-004', area: '마포구 연남동', type: '오피스텔', price: '5.4억', change: '0.0%', status: '진행중' }
    ];

    mockList.forEach(item => {
        const row = `<tr>
            <td>${item.id}</td>
            <td>${item.area}</td>
            <td>${item.type}</td>
            <td style="font-weight: 700">${item.price}</td>
            <td style="color: ${item.change.startsWith('+') ? '#10b981' : item.change.startsWith('-') ? '#ef4444' : '#94a3b8'}">${item.change}</td>
            <td><span class="badge ${item.status === '완료' ? 'badge-green' : 'badge-blue'}">${item.status}</span></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
});
