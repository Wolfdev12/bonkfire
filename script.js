// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking a nav link
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
  
  // Header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.style.padding = '0.5rem 0';
      header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.padding = '1rem 0';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });
  
  // Copy Token Address
  const copyAddressBtn = document.getElementById('copy-address');
  const tokenAddress = document.querySelector('.address').textContent;
  const toast = document.getElementById('toast');
  
  if (copyAddressBtn) {
    copyAddressBtn.addEventListener('click', function() {
      // Copy to clipboard
      navigator.clipboard.writeText(tokenAddress).then(() => {
        // Show check icon
        this.innerHTML = '<i class="icon-check"></i>';
        
        // Show toast notification
        toast.classList.add('show');
        
        // Reset copy button and hide toast after delay
        setTimeout(() => {
          this.innerHTML = '<i class="icon-copy"></i>';
          toast.classList.remove('show');
        }, 2000);
      }).catch(err => {
        console.error('Could not copy text: ', err);
      });
    });
  }
  
  // Burn Button Functionality (placeholder)
  const burnBtn = document.getElementById('burn-btn');
  const joinBurnBtn = document.getElementById('join-burn-btn');
  
  if (burnBtn) {
    burnBtn.addEventListener('click', function() {
      alert('Burn functionality coming soon!');
    });
  }
  
  if (joinBurnBtn) {
    joinBurnBtn.addEventListener('click', function() {
      alert('Burn competition functionality coming soon!');
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Mock Leaderboard Data
  const mockLeaderboardData = [
    { rank: 1, wallet: '7cknFaDwzvrxVhFNh2YGj3fYJfMGRBT1BgGaUSLsgUKR', amount: '25,000,000,000' },
    { rank: 2, wallet: '9pDU8EGuenKGVqJzqKxQ88QVUmZTiumNNuPg9jNjGgWa', amount: '18,750,000,000' },
    { rank: 3, wallet: 'GqoJuKD7czqZ7CUMgkJct6mhUynxkQWYJrcN7RzxLnRs', amount: '12,500,000,000' },
    { rank: 4, wallet: 'AyypwFUSxzWcfWjnFgBwFYJyNSsySVskS5cxZRtYKjvk', amount: '10,000,000,000' },
    { rank: 5, wallet: 'HrjSa7hfkdQZ1UxQ2xVpJMBcvyBL2uLhS4TfEAGVA5YL', amount: '8,750,000,000' },
    { rank: 6, wallet: 'E4DjQsYwxALn9cS9gGJtr7L8bbSvNKxn8YP4pfMJqtBf', amount: '7,500,000,000' },
    { rank: 7, wallet: 'DBXcXpUCNL5SiqTNZgyHnQXoKhRnXbdBpETP8jTLtBJG', amount: '6,250,000,000' },
    { rank: 8, wallet: 'FVb5h1VmHPfVb1rXs9o5YoungbL6A4vx9YRUQPKLh6Qt', amount: '5,000,000,000' },
    { rank: 9, wallet: 'HC5qr9LgUNyJnTCxsLbULikbF4cTbT7VJNcFWRnUzmEH', amount: '3,750,000,000' },
    { rank: 10, wallet: 'JDKLFoYXgJtcTbEkn6KRWvWbUm4XeDbJJ22NXDgRp3e4', amount: '2,500,000,000' }
  ];
  
  // Populate Leaderboard
  const leaderboardData = document.getElementById('leaderboard-data');
  
  if (leaderboardData) {
    mockLeaderboardData.forEach(entry => {
      const row = document.createElement('div');
      row.className = 'leaderboard-row';
      
      const rankCol = document.createElement('div');
      rankCol.className = 'leaderboard-rank';
      rankCol.textContent = entry.rank;
      
      const walletCol = document.createElement('div');
      walletCol.className = 'leaderboard-wallet';
      walletCol.textContent = entry.wallet;
      
      const amountCol = document.createElement('div');
      amountCol.className = 'leaderboard-amount';
      amountCol.textContent = entry.amount;
      
      row.appendChild(rankCol);
      row.appendChild(walletCol);
      row.appendChild(amountCol);
      
      leaderboardData.appendChild(row);
    });
  }
  
  // Create Tokenomics Chart
  const tokenomicsChart = document.getElementById('tokenomics-chart');
  
  if (tokenomicsChart) {
    // Create a simple SVG chart
    const tokenomicsData = [
      { label: 'Liquidity', value: 50, color: '#FF6B00' },
      { label: 'Marketing', value: 10, color: '#FF8A00' },
      { label: 'Team', value: 10, color: '#FFA94D' },
      { label: 'Burn Pool', value: 20, color: '#FF3A00' },
      { label: 'Community', value: 10, color: '#FFD426' }
    ];
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.style.transform = 'rotate(-90deg)';
    
    let cumulativePercent = 0;
    const radius = 50;
    const center = 50;
    
    tokenomicsData.forEach(segment => {
      const percent = segment.value;
      const startX = center + radius * Math.cos(2 * Math.PI * cumulativePercent / 100);
      const startY = center + radius * Math.sin(2 * Math.PI * cumulativePercent / 100);
      
      cumulativePercent += percent;
      
      const endX = center + radius * Math.cos(2 * Math.PI * cumulativePercent / 100);
      const endY = center + radius * Math.sin(2 * Math.PI * cumulativePercent / 100);
      
      // Create arc path
      const largeArcFlag = percent > 50 ? 1 : 0;
      const pathData = [
        `M ${center},${center}`,
        `L ${startX},${startY}`,
        `A ${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY}`,
        'Z'
      ].join(' ');
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathData);
      path.setAttribute('fill', segment.color);
      path.setAttribute('stroke', 'white');
      path.setAttribute('stroke-width', '0.5');
      
      // Add hover effect with JavaScript
      path.addEventListener('mouseenter', function() {
        this.setAttribute('transform', 'scale(1.05) translate(-2.5, -2.5)');
        this.style.transition = 'transform 0.2s ease';
      });
      
      path.addEventListener('mouseleave', function() {
        this.setAttribute('transform', 'scale(1) translate(0, 0)');
      });
      
      svg.appendChild(path);
    });
    
    tokenomicsChart.appendChild(svg);
    
    // Add the legend
    const legend = document.createElement('div');
    legend.style.display = 'flex';
    legend.style.flexWrap = 'wrap';
    legend.style.justifyContent = 'center';
    legend.style.marginTop = '20px';
    
    tokenomicsData.forEach(segment => {
      const legendItem = document.createElement('div');
      legendItem.style.display = 'flex';
      legendItem.style.alignItems = 'center';
      legendItem.style.margin = '5px 10px';
      
      const colorBox = document.createElement('div');
      colorBox.style.width = '12px';
      colorBox.style.height = '12px';
      colorBox.style.backgroundColor = segment.color;
      colorBox.style.marginRight = '5px';
      
      const label = document.createElement('span');
      label.textContent = `${segment.label}: ${segment.value}%`;
      label.style.fontSize = '12px';
      
      legendItem.appendChild(colorBox);
      legendItem.appendChild(label);
      legend.appendChild(legendItem);
    });
    
    tokenomicsChart.appendChild(legend);
  }
}); 