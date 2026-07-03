# QA Automation – UI + API + Manual Testing

## 📌 Project Overview
This repository demonstrates a QA Engineer including:

- UI Automation Testing (Playwright)
- API Automation Testing (GoRest API)
- Manual Test Design (Checkout & Payment module)
- Exploratory Testing on SauceDemo
- Bug Reporting (JIRA-style)

The goal is to simulate QA responsibilities in an e-commerce system.

---

## 🌐 Applications Under Test

### UI Under Test
- https://www.saucedemo.com/

### API Under Test
- GoRest API  
- https://gorest.co.in/public/v2

---

## 🧪 Test Coverage

### 1. UI Automation (Playwright)
- Login functionality
- Add products to cart
- Verify cart count
- Checkout flow
- Negative login scenario

### 2. API Automation (GoRest)
- Create user
- Get user
- Update user
- Delete user
- Negative scenarios:
  - Invalid email
  - Missing fields
  - Unauthorized access

### 3. Manual Testing
- Checkout & Payment module test design (20 test cases)
- Exploratory testing on SauceDemo
- Bug reporting with severity & priority

---

## 📁 Project Structure
automation-ui/
automation-api/
manual-testing/
README.md

---

## 🚀 How to Run

### Install dependencies
```bash
npm install
npx playwright install

Run UI tests
npx playwright test

Run API tests
npx playwright test tests/api

---

#🧾 Task 3: Manual Test Design – Checkout & Payment Module
🛒  System: E-commerce Checkout Flow (Generic)
🧪  Test Design (15–20 Test Cases)

🔹 1. User Login & Logout 
TC01 – Successful login with valid credentials
Expected: User is redirected to Products page
TC02 – Logout after successful login
Expected: User is redirected back to login page
TC03 - Login with invalid username
Expected: Error message displayed "Epic sadface: Username and password do not match any user in this service"
TC04 - Login with invalid password
Expected: Error message displayed "Epic sadface: Username and password do not match any user in this service"
TC05 - Login with empty username
Expected: Error message displayed "Epic sadface: Username is required"
TC06 - Login with empty password
Expected: Error message displayed "Epic sadface: Password is required"
TC07 - Login with both fields empty
Expected: Error message displayed "Epic sadface: Username is required"
TC08 - Login with locked user (locked_out_user)
Expected: Error message displayed "Epic sadface: Sorry, this user has been locked out."

🔹 2. Product & Cart Pre-checkout
TC09 – Verify product list is displayed
Expected: Product list is displayed with each product shows
- Name
- Price
- Image
- “Add to cart” button
TC10 – Verify number of products displayed
Expected: All available products (6 items) are shown
TC11 - Verify product name is clickable (if applicable)
Expected: Clicking product name opens product detail page
TC12 – Add single item to cart
Expected: Item added correctly, cart count +1
TC13 – Add multiple different items
Expected: All items visible, correct total price
TC14 – Add same item multiple times
Expected: Cannot increase the quantity of the same product
TC15 – Remove item from cart
Expected: Item removed, total recalculated
TC16 – Cart persists after refresh
Expected: Items remain after reload
TC17 – Sort by Name (A → Z)
Expected: Products sorted alphabetically ascending
TC18 – Sort by Name (Z → A)
Expected: Products sorted alphabetically descending
TC19 – Sort by Price (Low → High)
Expected: Cheapest product shown first
TC20 – Sort by Price (High → Low)
Expected: Most expensive product shown first

🔹 3. Checkout Information 
TC21 – Checkout with valid data
Expected: Proceed to Checkout Overview and Payment Information
TC22 – Missing first name
Expected: Validation error shown "Error: First Name is required"
TC23 – Missing last name
Expected: Validation error shown "Error: Last Name is required"
TC24 – Missing postal code
Expected: Validation error shown "Error: Postal Code is required"
TC25 – Special characters in all field
Expected: Able to enter but either sanitized 
TC26 – Extremely long input (1000 chars)
Expected: Field limits enforced / errors shown

🔹 4. Checkout Overview & Price Calculation
TC27 – Verify product list is displayed correctly
Expected: All selected products from cart are visible
TC28 – Verify product name is displayed correctly
Expected: Product name matches items added in cart
TC29 – Verify product price is displayed correctly
Expected: Price matches inventory page value
TC30 – Verify item total calculation (subtotal)
Expected: Sum of item prices = subtotal
TC31 – Verify tax calculation correctness
Expected: Tax = correct percentage applied (8% in SauceDemo)
TC32 –  Verify total price calculation
Expected: Total = subtotal + tax
TC33 –  Verify rounding of price values
Expected: Values rounded to 2 decimal places
TC34 –  Verify “Cancel” button functionality
Expected: Redirect back to Products page
TC35 –  Verify “Finish” button functionality
Expected: Navigate to Checkout Complete page "Thank you for your order!
Your order has been dispatched, and will arrive just as fast as the pony can get there!"

🔹 5. Checkout Complete
TC36 –  Verify successful order confirmation message
Expected: Complete page shown "Thank you for your order!
Your order has been dispatched, and will arrive just as fast as the pony can get there!"
TC37 –  Verify Back Home navigation
Expected: User is redirected to Inventory (Products) page

---

🐞 Bug Reporting Format
Each bug includes:
- Title
- Steps to reproduce
- Expected vs Actual result
- Screenshot evidence
- Severity
- Priority
- Reason

Bug Reports SauceDemo Exploratory Testing
🔍 Issue 1: No input validation feedback clarity (Login)
Steps:
1. Open login page
2. Enter invalid username or password
3. Click Login

Actual Result:
Error message shown but generic (“Epic sadface…”)
No field-level validation
<img width="1035" height="704" alt="ภาพถ่ายหน้าจอ 2569-07-03 เวลา 07 45 06" src="https://github.com/user-attachments/assets/a87ba223-0fb9-49f1-91f1-8c46bcbbf7be" />
<img width="1021" height="698" alt="ภาพถ่ายหน้าจอ 2569-07-03 เวลา 07 45 31" src="https://github.com/user-attachments/assets/5dfeca8f-24ee-4d0b-9e73-1bd5e2d8a75f" />

Expected:
Clear field-specific validation (username/password highlighted)

Severity: Medium
Priority: High

👉 Reason:
Affects usability and user understanding

🔍 Issue 2: Add to Cart button does not add selected product to shopping cart for problem_user
Steps:
1. Login with:
Username: problem_user
Password: secret_sauce
2. On the Inventory page, click Add to cart for multiple products.
3. Observe the shopping cart badge and the button state.

Actual Result:
For some products, clicking Add to cart does not add the item to the cart.
The cart badge is not updated.
The button state may remain unchanged.
<img width="1469" height="880" alt="2026-07-03_10-04-02" src="https://github.com/user-attachments/assets/15f21c5c-f505-4eea-948c-81b077fad353" />


Expected:
The selected product is added to the shopping cart.
The cart badge increases by one.
The button text changes from Add to cart to Remove.

Severity: High
Priority: High

👉 Reason:
Adding products to the cart is a critical business function. This issue impacts the checkout flow and user experience.

🔍 Issue 3: Product sorting does not work correctly for problem_user
Steps:
1. Login with:
Username: problem_user
Password: secret_sauce
2. Scenario A – Sort by Name
- Select Name (A to Z).
Observe the product order.
- Select Name (Z to A).
Observe the product order.
3. Scenario B – Sort by Price
- Select Price (Low to High).
Observe the product prices.
- Select Price (High to Low).
Observe the product price

Actual Result:
Product order remains unchanged or is displayed incorrectly after changing the sorting option.
Sorting results do not match the selected criteria.
<img width="1469" height="882" alt="2026-07-03_10-05-16" src="https://github.com/user-attachments/assets/6d3511f8-d47d-4cef-90ff-74bf2de8ce3e" />


Expected:
Products should be sorted alphabetically for Name sorting.
Products should be sorted numerically for Price sorting.
Product list should refresh immediately after each selection.

Severity: Medium
Priority: Medium

👉 Reason:
Sorting improves product discoverability and user experience but does not completely block the purchasing process.

---

