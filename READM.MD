# 🏀 Basketball Scoreboard (Vanilla JS)

Interactive basketball scoreboard built with **HTML, CSS and Vanilla JavaScript**, focused on DOM manipulation, state management and UI behavior.

---

## 📌 Overview

This project simulates a real-time basketball scoreboard where users can control the score of two teams (**Home** and **Guest**) through interactive buttons.

The main goal was to move from static layouts to **dynamic, event-driven interfaces**, reinforcing core JavaScript fundamentals.

---

## 🚀 Features

* Increment score (+1, +2, +3) for each team
* Real-time UI updates using DOM manipulation
* Independent state management for both teams
* "New Game" reset functionality
* Additional tracking system for **assists** (custom feature beyond original scope)

---

## 🧠 Technical Highlights

### 1. DOM Manipulation

Elements are dynamically updated using `getElementById` and `textContent`, enabling real-time UI changes.

```js id="d9y1he"
homeEl.textContent = homescore
```

---

### 2. State Management (Basic)

The application uses independent variables to track scores and assists:

```js id="1a6s1m"
let homescore = 0
let guestscore = 0
```

This introduces the concept of **state-driven UI**, where the interface reflects the current data.

---

### 3. Event Handling

User interaction is handled through click events:

```html id="d6dskv"
<button onclick="haddone()">+1</button>
```

This establishes a clear flow:

```text id="7lskv2"
User action → Function → State update → UI update
```

---

### 4. Feature Extension (Assists System)

Beyond the original challenge, an additional system was implemented to track assists for each team.

This demonstrates:

* understanding of scalable logic
* ability to extend existing systems
* separation of concerns in UI structure

---

## 🎨 UI & Layout

* Flexbox-based layout for horizontal distribution
* Centered scoreboard container
* Digital-style font for score display
* Thematic background image
* Clear visual separation between teams

---

## 📂 Project Structure

```id="h9s2ld"
.
├── index.html
├── styles.css
├── strings.js
├── /pictures
└── /fonts
```

---

## 📈 What This Project Demonstrates

This project marks a transition from:

```text id="1n9zwd"
Static pages → Interactive applications
```

It demonstrates the ability to:

* manipulate the DOM
* handle user interaction
* manage application state
* connect UI with logic
* extend base requirements with custom features

---

## 🔧 Possible Improvements

* Highlight leading team dynamically
* Add game timer
* Persist data using localStorage
* Improve responsiveness (mobile support)
* Refactor inline event handlers to `addEventListener`

---

## ▶️ How to Run

Clone the repository and open the HTML file:

```bash id="9z4kdm"
git clone <your-repo-url>
cd project
open index.html
```

---

## 👨‍💻 Author

Developed as part of a structured Full Stack learning path, focused on building practical JavaScript skills.

---

## 📄 License

Educational use.
