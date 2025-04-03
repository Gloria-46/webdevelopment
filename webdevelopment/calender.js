const calendarBody = document.getElementById('calendar-body');
const monthYear = document.getElementById('month-year');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const eventDate = document.getElementById('event-date');
const eventTitle = document.getElementById('event-title');
const addEventBtn = document.getElementById('add-event');
const eventList = document.getElementById('event-list');

let currentDate = new Date(2025, 3, 1); // Start at April 2025 (month 3, since JS months are 0-based)
let events = [];

function renderCalendar() {
    calendarBody.innerHTML = '';
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Set month and year in header
    monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

    // Get first day of the month and number of days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) { // 6 rows max
        const row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');
            if (i === 0 && j < firstDay) {
                cell.textContent = '';
            } else if (date > daysInMonth) {
                cell.textContent = '';
            } else {
                cell.textContent = date;
                cell.addEventListener('click', () => showEvents(year, month, date));
                // Highlight if event exists
                if (events.some(e => e.date === `${year}-${month + 1}-${date}`)) {
                    cell.style.backgroundColor = '#e0f7fa';
                }
                date++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
        if (date > daysInMonth) break;
    }
}

function showEvents(year, month, day) {
    eventList.innerHTML = '';
    const dateStr = `${year}-${month + 1}-${day}`;
    const dayEvents = events.filter(e => e.date === dateStr);
    dayEvents.forEach(e => {
        const li = document.createElement('li');
        li.textContent = `${e.title} (${e.date})`;
        eventList.appendChild(li);
    });
}

addEventBtn.addEventListener('click', () => {
    const date = eventDate.value;
    const title = eventTitle.value;
    if (date && title) {
        events.push({ date, title });
        eventDate.value = '';
        eventTitle.value = '';
        renderCalendar(); // Re-render to show event highlight
    }
});

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initial render
renderCalendar();