// =========================
// STATE MANAGEMENT
// =========================

let currentUser = null;
let transactions = [];
let balance = 12450.00;

// Demo credentials
const DEMO_USER = {
    username: 'demo',
    password: '1234',
    pin: '1234',
    name: 'John Doe',
    email: 'john@apex.com'
};

// =========================
// INITIALIZATION
// =========================

document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    initializeDefaultTransactions();
    updateUI();
});

// =========================
// LOCAL STORAGE
// =========================

function saveToLocalStorage() {
    localStorage.setItem('bankBalance', balance.toString());
    localStorage.setItem('bankTransactions', JSON.stringify(transactions));
    if (currentUser) {
        localStorage.setItem('bankUser', JSON.stringify(currentUser));
    }
}

function loadFromLocalStorage() {
    const savedBalance = localStorage.getItem('bankBalance');
    const savedTransactions = localStorage.getItem('bankTransactions');
    const savedUser = localStorage.getItem('bankUser');
    
    if (savedBalance) {
        balance = parseFloat(savedBalance);
    }
    
    if (savedTransactions) {
        transactions = JSON.parse(savedTransactions);
    }
    
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
    }
}

function initializeDefaultTransactions() {
    if (transactions.length === 0) {
        transactions = [
            {
                id: 1,
                type: 'deposit',
                amount: 5000,
                recipient: 'Initial Deposit',
                note: 'Opening balance',
                date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
            },
            {
                id: 2,
                type: 'transfer',
                amount: -150,
                recipient: 'Sarah Johnson',
                note: 'Lunch payment',
                date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
            },
            {
                id: 3,
                type: 'deposit',
                amount: 2500,
                recipient: 'Salary',
                note: 'Monthly salary',
                date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
            },
            {
                id: 4,
                type: 'withdrawal',
                amount: -200,
                recipient: 'ATM Withdrawal',
                note: 'Cash withdrawal',
                date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
            },
            {
                id: 5,
                type: 'transfer',
                amount: -75,
                recipient: 'Mike Thompson',
                note: 'Movie tickets',
                date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
            }
        ];
        saveToLocalStorage();
    }
}

// =========================
// PAGE NAVIGATION
// =========================

function showLanding() {
    hidePage('login-page');
    hidePage('dashboard');
    showPage('landing-page');
}

function showLogin() {
    hidePage('landing-page');
    hidePage('dashboard');
    showPage('login-page');
}

function showDashboard() {
    hidePage('landing-page');
    hidePage('login-page');
    showPage('dashboard');
    updateDashboard();
}

function showPage(pageId) {
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.add('active');
    }
}

function hidePage(pageId) {
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.remove('active');
    }
}

function scrollToFeatures() {
    const features = document.getElementById('features');
    if (features) {
        features.scrollIntoView({ behavior: 'smooth' });
    }
}

// =========================
// AUTHENTICATION
// =========================

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation (in production, this would be server-side)
    if (username === DEMO_USER.username && password === DEMO_USER.password) {
        currentUser = {
            username: DEMO_USER.username,
            name: DEMO_USER.name,
            email: DEMO_USER.email
        };
        
        saveToLocalStorage();
        showNotification('Login successful! Welcome back.', 'success');
        
        setTimeout(() => {
            showDashboard();
        }, 1000);
    } else {
        showNotification('Invalid username or password', 'error');
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('bankUser');
    showNotification('Logged out successfully', 'success');
    
    setTimeout(() => {
        showLanding();
    }, 1000);
}

// =========================
// SIDEBAR
// =========================

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

function switchTab(event, tabName) {
    event.preventDefault();
    
    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // Add active class to clicked nav item
    event.currentTarget.classList.add('active');
    
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab
    const selectedTab = document.getElementById(`${tabName}-tab`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Update page title
    const pageTitle = document.querySelector('.page-title');
    if (pageTitle) {
        pageTitle.textContent = tabName.charAt(0).toUpperCase() + tabName.slice(1);
    }
    
    // Load specific content based on tab
    if (tabName === 'transactions') {
        displayTransactions();
    } else if (tabName === 'analytics') {
        updateAnalytics();
    }
    
    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.remove('open');
        }
    }
}

// =========================
// BANKING OPERATIONS
// =========================

function handleTransfer(event) {
    event.preventDefault();
    
    const recipient = document.getElementById('recipient').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const pin = document.getElementById('pin').value;
    const note = document.getElementById('note').value;
    
    // Validate PIN
    if (pin !== DEMO_USER.pin) {
        showNotification('Invalid PIN', 'error');
        return;
    }
    
    // Validate amount
    if (amount <= 0) {
        showNotification('Amount must be greater than zero', 'error');
        return;
    }
    
    if (amount > balance) {
        showNotification('Insufficient funds', 'error');
        return;
    }
    
    // Process transfer
    balance -= amount;
    
    const transaction = {
        id: Date.now(),
        type: 'transfer',
        amount: -amount,
        recipient: recipient,
        note: note || 'Money transfer',
        date: new Date().toISOString()
    };
    
    transactions.unshift(transaction);
    saveToLocalStorage();
    updateUI();
    
    showNotification(`Successfully transferred $${amount.toFixed(2)} to ${recipient}`, 'success');
    
    // Reset form
    document.getElementById('transfer-form').reset();
}

function handleDeposit(event) {
    event.preventDefault();
    
    const amount = parseFloat(document.getElementById('deposit-amount').value);
    
    if (amount <= 0) {
        showNotification('Amount must be greater than zero', 'error');
        return;
    }
    
    // Process deposit
    balance += amount;
    
    const transaction = {
        id: Date.now(),
        type: 'deposit',
        amount: amount,
        recipient: 'Account Deposit',
        note: 'Funds deposited',
        date: new Date().toISOString()
    };
    
    transactions.unshift(transaction);
    saveToLocalStorage();
    updateUI();
    
    showNotification(`Successfully deposited $${amount.toFixed(2)}`, 'success');
    closeModals();
}

function handleWithdraw(event) {
    event.preventDefault();
    
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    const pin = document.getElementById('withdraw-pin').value;
    
    // Validate PIN
    if (pin !== DEMO_USER.pin) {
        showNotification('Invalid PIN', 'error');
        return;
    }
    
    if (amount <= 0) {
        showNotification('Amount must be greater than zero', 'error');
        return;
    }
    
    if (amount > balance) {
        showNotification('Insufficient funds', 'error');
        return;
    }
    
    // Process withdrawal
    balance -= amount;
    
    const transaction = {
        id: Date.now(),
        type: 'withdrawal',
        amount: -amount,
        recipient: 'Cash Withdrawal',
        note: 'Funds withdrawn',
        date: new Date().toISOString()
    };
    
    transactions.unshift(transaction);
    saveToLocalStorage();
    updateUI();
    
    showNotification(`Successfully withdrawn $${amount.toFixed(2)}`, 'success');
    closeModals();
}

// =========================
// UI UPDATES
// =========================

function updateUI() {
    updateBalance();
    updateRecentActivity();
    updateDashboard();
}

function updateBalance() {
    const balanceElement = document.getElementById('main-balance');
    if (balanceElement) {
        balanceElement.textContent = `$${balance.toFixed(2)}`;
    }
}

function updateDashboard() {
    if (currentUser) {
        const userNameElement = document.getElementById('user-name');
        if (userNameElement) {
            userNameElement.textContent = currentUser.name;
        }
    }
}

function updateRecentActivity() {
    const activityList = document.getElementById('recent-activity-list');
    if (!activityList) return;
    
    activityList.innerHTML = '';
    
    // Show last 5 transactions
    const recentTransactions = transactions.slice(0, 5);
    
    recentTransactions.forEach(transaction => {
        const activityItem = createActivityItem(transaction);
        activityList.appendChild(activityItem);
    });
}

function createActivityItem(transaction) {
    const item = document.createElement('div');
    item.className = 'activity-item';
    
    const typeClass = transaction.type;
    const icon = getTransactionIcon(transaction.type);
    const isPositive = transaction.amount >= 0;
    const amountClass = isPositive ? 'positive' : 'negative';
    const amountPrefix = isPositive ? '+' : '';
    
    item.innerHTML = `
        <div class="activity-info">
            <div class="activity-icon ${typeClass}">${icon}</div>
            <div class="activity-details">
                <span class="activity-title">${transaction.recipient}</span>
                <span class="activity-date">${formatDate(transaction.date)}</span>
            </div>
        </div>
        <span class="activity-amount ${amountClass}">
            ${amountPrefix}$${Math.abs(transaction.amount).toFixed(2)}
        </span>
    `;
    
    return item;
}

function getTransactionIcon(type) {
    switch (type) {
        case 'deposit':
            return '⬆️';
        case 'withdrawal':
            return '⬇️';
        case 'transfer':
            return '↔️';
        default:
            return '💳';
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
        return 'Today';
    } else if (diffDays === 1) {
        return 'Yesterday';
    } else if (diffDays < 7) {
        return `${diffDays} days ago`;
    } else {
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        });
    }
}

// =========================
// TRANSACTIONS TAB
// =========================

function displayTransactions() {
    const transactionsList = document.getElementById('transactions-list');
    if (!transactionsList) return;
    
    transactionsList.innerHTML = '';
    
    if (transactions.length === 0) {
        transactionsList.innerHTML = '<p style="text-align: center; color: var(--text-muted);">No transactions yet</p>';
        return;
    }
    
    transactions.forEach(transaction => {
        const transactionItem = createTransactionItem(transaction);
        transactionsList.appendChild(transactionItem);
    });
}

function createTransactionItem(transaction) {
    const item = document.createElement('div');
    item.className = 'transaction-item';
    item.dataset.type = transaction.type;
    
    const isPositive = transaction.amount >= 0;
    const amountClass = isPositive ? 'positive' : 'negative';
    const amountPrefix = isPositive ? '+' : '';
    
    item.innerHTML = `
        <div class="activity-info">
            <div class="activity-icon ${transaction.type}">${getTransactionIcon(transaction.type)}</div>
            <div class="activity-details">
                <span class="activity-title">${transaction.recipient}</span>
                <span class="activity-date">${formatDate(transaction.date)}</span>
                ${transaction.note ? `<span class="activity-note" style="font-size: 0.75rem; color: var(--text-muted);">${transaction.note}</span>` : ''}
            </div>
        </div>
        <span class="activity-amount ${amountClass}">
            ${amountPrefix}$${Math.abs(transaction.amount).toFixed(2)}
        </span>
    `;
    
    return item;
}

function filterTransactions() {
    const filterType = document.getElementById('filter-type').value;
    const transactionItems = document.querySelectorAll('.transaction-item');
    
    transactionItems.forEach(item => {
        if (filterType === 'all' || item.dataset.type === filterType) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// =========================
// ANALYTICS TAB
// =========================

let spendingChart = null;

function updateAnalytics() {
    updateStatistics();
    createSpendingChart();
}

function updateStatistics() {
    const deposits = transactions.filter(t => t.amount > 0);
    const withdrawals = transactions.filter(t => t.amount < 0);
    
    const totalReceived = deposits.reduce((sum, t) => sum + t.amount, 0);
    const totalSpent = Math.abs(withdrawals.reduce((sum, t) => sum + t.amount, 0));
    const avgTransaction = transactions.length > 0 
        ? Math.abs(transactions.reduce((sum, t) => sum + Math.abs(t.amount), 0) / transactions.length)
        : 0;
    
    document.getElementById('avg-transaction').textContent = `$${avgTransaction.toFixed(2)}`;
    document.getElementById('total-spent').textContent = `$${totalSpent.toFixed(2)}`;
    document.getElementById('total-received').textContent = `$${totalReceived.toFixed(2)}`;
    document.getElementById('transaction-count').textContent = transactions.length;
}

function createSpendingChart() {
    const canvas = document.getElementById('spending-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Destroy existing chart if it exists
    if (spendingChart) {
        spendingChart.destroy();
    }
    
    // Prepare data for last 7 days
    const last7Days = [];
    const spendingData = [];
    const incomeData = [];
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        last7Days.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
        
        const dayStart = new Date(date.setHours(0, 0, 0, 0));
        const dayEnd = new Date(date.setHours(23, 59, 59, 999));
        
        const dayTransactions = transactions.filter(t => {
            const tDate = new Date(t.date);
            return tDate >= dayStart && tDate <= dayEnd;
        });
        
        const spending = Math.abs(dayTransactions
            .filter(t => t.amount < 0)
            .reduce((sum, t) => sum + t.amount, 0));
        
        const income = dayTransactions
            .filter(t => t.amount > 0)
            .reduce((sum, t) => sum + t.amount, 0);
        
        spendingData.push(spending);
        incomeData.push(income);
    }
    
    spendingChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: last7Days,
            datasets: [
                {
                    label: 'Income',
                    data: incomeData,
                    borderColor: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Spending',
                    data: spendingData,
                    borderColor: '#EF4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#FFFFFF',
                        font: {
                            family: 'IBM Plex Sans',
                            size: 12
                        }
                    }
                },
                tooltip: {
                    backgroundColor: '#1A2332',
                    titleColor: '#FFFFFF',
                    bodyColor: '#A0AEC0',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': $' + context.parsed.y.toFixed(2);
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#718096',
                        font: {
                            family: 'IBM Plex Sans',
                            size: 11
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#718096',
                        font: {
                            family: 'IBM Plex Sans',
                            size: 11
                        },
                        callback: function(value) {
                            return '$' + value;
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            }
        }
    });
}

// =========================
// MODALS
// =========================

function showDepositModal() {
    const modal = document.getElementById('deposit-modal');
    const overlay = document.getElementById('modal-overlay');
    
    if (modal && overlay) {
        modal.classList.add('active');
        overlay.classList.add('active');
    }
}

function showWithdrawModal() {
    const modal = document.getElementById('withdraw-modal');
    const overlay = document.getElementById('modal-overlay');
    
    if (modal && overlay) {
        modal.classList.add('active');
        overlay.classList.add('active');
    }
}

function closeModals() {
    const modals = document.querySelectorAll('.modal');
    const overlay = document.getElementById('modal-overlay');
    
    modals.forEach(modal => modal.classList.remove('active'));
    if (overlay) {
        overlay.classList.remove('active');
    }
    
    // Reset forms
    const forms = document.querySelectorAll('.modal form');
    forms.forEach(form => form.reset());
}

// =========================
// NOTIFICATIONS
// =========================

function showNotification(message, type = 'success') {
    const notification = document.getElementById(`${type}-notification`);
    const messageElement = document.getElementById(`${type}-message`);
    
    if (notification && messageElement) {
        messageElement.textContent = message;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// =========================
// EVENT LISTENERS
// =========================

// Close modals when clicking overlay
document.addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') {
        closeModals();
    }
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    
    if (sidebar && window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && e.target !== sidebarToggle && !sidebarToggle?.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && window.innerWidth > 768) {
        sidebar.classList.remove('open');
    }
});