# JavaScript Progressive Task List

This project uses **semantic HTML** and **Bootstrap (CSS only)**.  
JavaScript is added progressively to enhance the page — not to make it work in the first place.

Your goal is to **improve behaviour, interactivity, and user experience** while keeping the HTML structure intact.

---

## Phase 1 — Foundations (DOM & Events)

### Task 1: Button Click Interaction
**Goal:** Confirm JavaScript is connected and responding to user actions.

- Select the button with ID `primary-action-btn`
- When clicked:
  - Change the button text
  - Toggle its Bootstrap class (`btn-primary` → `btn-success`)
- Stretch:
  - Prevent the action from running more than once

**Concepts**
- `querySelector`
- `addEventListener`
- `classList`

---

### Task 2: Counter Logic
**Goal:** Introduce state and simple logic.

- Use:
  - `#increment-btn`
  - `#decrement-btn`
  - `#counter-value`
- Increase and decrease the displayed number
- Prevent the value from going below `0`

**Concepts**
- Variables as state
- `textContent`
- Conditionals

---

### Task 3: Toggle the Alert
**Goal:** Show and hide UI elements.

- Toggle visibility of `#alert-box`
- Use the Bootstrap class `d-none`
- Update the button text based on visibility

**Concepts**
- Boolean state
- `classList.toggle`
- UI feedback

---

## Phase 2 — Data & Attributes

### Task 4: View Switching
**Goal:** Control content using data attributes.

- Use buttons with `data-view`
- Clicking a button updates the text inside `#view-output`
- Each view should display different content

**Concepts**
- `dataset`
- Event handling
- DOM updates

---

### Task 5: Active Button States
**Goal:** Provide visual feedback.

- Only one view button may be active at a time
- Apply and remove the `active` class correctly

**Concepts**
- Iterating over elements
- Managing UI state

---

## Phase 3 — Forms & Validation

### Task 6: Custom Form Validation
**Goal:** Replace browser defaults with JavaScript logic.

- Listen for the form `submit` event
- Prevent default submission
- Validate required fields
- Display error messages in the UI

**Rules**
- No `alert()` calls
- Errors must be visible on the page

**Concepts**
- `preventDefault`
- Input validation
- DOM feedback

---

### Task 7: Success Feedback
**Goal:** Improve user experience after valid submission.

- Clear the form
- Show a success message
- Disable the submit button temporarily

**Concepts**
- Form state
- UI feedback
- Time-based logic (stretch)

---

## Phase 4 — Tables & Dynamic Content

### Task 8: Add Table Rows Dynamically
**Goal:** Create and insert DOM elements.

- Add a new row to the table using JavaScript
- Data may come from:
  - The form
  - A hardcoded object

**Concepts**
- `createElement`
- `appendChild`
- Template strings (stretch)

---

### Task 9: Filter Table Rows
**Goal:** Manipulate collections of elements.

- Add a way to show only “Active” users
- Hide rows without deleting them

**Concepts**
- Looping over DOM nodes
- Conditional rendering

---

## Phase 5 — State & Structure

### Task 10: Centralised State
**Goal:** Avoid scattered variables.

- Create a single `state` object to store:
  - Counter value
  - Current view
  - Form submission status

**Concepts**
- State management
- Predictable updates

---

### Task 11: Extract Functions
**Goal:** Improve code readability and maintainability.

- Separate:
  - Event handlers
  - State updates
  - UI updates

**Rule**
- No large anonymous functions

**Concepts**
- Function responsibility
- Clean code principles

---

## Phase 6 — Progressive Enhancement

### Task 12: No-JavaScript Fallback
**Goal:** Ensure graceful degradation.

- The page must:
  - Load correctly without JavaScript
  - Display meaningful content

**Concepts**
- Progressive enhancement
- Accessibility basics

---

### Task 13: Keyboard Accessibility (Stretch)
**Goal:** Improve accessibility.

- All interactive elements must be keyboard-usable
- Add visible focus styles if needed

**Concepts**
- Accessibility
- Focus management

---

## Phase 7 — Optional Challenges

Choose any:

- Persist the counter value using `localStorage`
- Animate the alert using CSS classes
- Add sorting to the table
- Convert view switching into a reusable component

---

## Expectations

- Do **not** modify the HTML structure unless instructed
- Use clear, readable JavaScript
- Prefer small functions over clever one-liners
- Break things, then fix them

This is not about memorising syntax.  
It’s about understanding how the DOM actually works.

