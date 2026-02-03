//slecting the elements and changing the text content on button click

const extElement = document.getElementById('text');
const buttonElement = document.getElementById('change-text');

if (buttonElement && textElement) {
    buttonElement.addEventListener('click', () => {
           textElement.textContent = 'The text has been changed!';
    });
} 

//Selcting element and changin html constent on button click
const htmlElement = document.getElementById('html-content');
const htmlButtonElement = document.getElementById('change-html');

if (htmlButtonElement && htmlElement) {
    htmlButtonElement.addEventListener('click', () => {
           htmlElement.innerHTML = '<strong>The HTML content has been changed!</strong>';
    });
}

// Toggle show/hide password
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('toggle-password');

if (passwordInput && togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
        const isHidden = passwordInput.type === 'password';
        passwordInput.type = isHidden ? 'text' : 'password';
        togglePasswordBtn.textContent = isHidden ? 'Hide' : 'Show';
        togglePasswordBtn.setAttribute('aria-pressed', String(!isHidden));
    });
}

// Dynamic list: add items and delete specific item
const newItemInput = document.getElementById('new-item');
const addItemBtn = document.getElementById('add-item');
const itemsList = document.getElementById('items-list');

if (newItemInput && addItemBtn && itemsList) {
    function addItem() {
        const value = newItemInput.value.trim();
        if (!value) return; // ignore empty entries
        const li = document.createElement('li');
        const textSpan = document.createElement('span');
        textSpan.textContent = value;
        const delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.className = 'delete-item';
        delBtn.textContent = 'Delete';
        delBtn.setAttribute('aria-label', `Delete ${value}`);
        li.appendChild(textSpan);
        li.appendChild(document.createTextNode(' '));
        li.appendChild(delBtn);
        itemsList.appendChild(li);
        newItemInput.value = '';
        newItemInput.focus();
    }

    addItemBtn.addEventListener('click', addItem);

    // Allow Enter key to add item
    newItemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addItem();
    });

    // Event delegation for delete buttons
    itemsList.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('delete-item')) {
            const li = e.target.closest('li');
            if (li) li.remove();
        }
    });
}

// Advanced DOM Manipulation: card creation, edit, delete, move, highlight
const cardTitle = document.getElementById('card-title');
const cardDesc = document.getElementById('card-desc');
const addCardBtn = document.getElementById('add-card');
const cardsContainer = document.getElementById('cards');

if (cardTitle && cardDesc && addCardBtn && cardsContainer) {
    function createCardElement(title, desc) {
        const card = document.createElement('article');
        card.className = 'card';
        const h = document.createElement('h3');
        h.textContent = title || 'Untitled';
        const p = document.createElement('p');
        p.textContent = desc || '';
        const controls = document.createElement('div');
        controls.className = 'card-controls';

        function makeBtn(text, cls, aria) {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = cls;
            b.textContent = text;
            if (aria) b.setAttribute('aria-label', aria);
            return b;
        }

        const editBtn = makeBtn('Edit', 'edit-card', 'Edit card');
        const upBtn = makeBtn('Up', 'move-up', 'Move up');
        const downBtn = makeBtn('Down', 'move-down', 'Move down');
        const highlightBtn = makeBtn('Highlight', 'highlight-card', 'Toggle highlight');
        const delBtn = makeBtn('Delete', 'delete-card', 'Delete card');

        controls.append(editBtn, upBtn, downBtn, highlightBtn, delBtn);
        card.append(h, p, controls);
        return card;
    }

    function addCardFromForm() {
        const t = cardTitle.value.trim();
        const d = cardDesc.value.trim();
        if (!t && !d) return;
        const card = createCardElement(t, d);
        cardsContainer.appendChild(card);
        cardTitle.value = '';
        cardDesc.value = '';
        cardTitle.focus();
    }

    addCardBtn.addEventListener('click', addCardFromForm);
    cardTitle.addEventListener('keypress', (e) => { if (e.key === 'Enter') addCardFromForm(); });
    cardDesc.addEventListener('keypress', (e) => { if (e.key === 'Enter') addCardFromForm(); });

    cardsContainer.addEventListener('click', (e) => {
        const target = e.target;
        const card = target.closest('article');
        if (!card) return;
        if (target.classList.contains('delete-card')) {
            card.remove();
        } else if (target.classList.contains('edit-card')) {
            const titleEl = card.querySelector('h3');
            const descEl = card.querySelector('p');
            const newTitle = prompt('Edit title', titleEl.textContent);
            if (newTitle !== null) titleEl.textContent = newTitle;
            const newDesc = prompt('Edit description', descEl.textContent);
            if (newDesc !== null) descEl.textContent = newDesc;
        } else if (target.classList.contains('move-up')) {
            const prev = card.previousElementSibling;
            if (prev) cardsContainer.insertBefore(card, prev);
        } else if (target.classList.contains('move-down')) {
            const next = card.nextElementSibling;
            if (next) cardsContainer.insertBefore(next, card);
        } else if (target.classList.contains('highlight-card')) {
            card.classList.toggle('highlight');
        }
    });
}