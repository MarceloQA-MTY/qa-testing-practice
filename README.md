# QA Automation Practice - Playwright

Automation testing project using Playwright and JavaScript.

## Tech Stack
- Playwright
- JavaScript
- Page Object Model (POM)
- Node.js

## Test Coverage
- Login flow (valid, invalid, empty fields)
- Add product to cart
- Complete purchase flow

## Project Structure
```
pages/          - Page Object Model classes
tests/          - Test files
Bugs-report/    - Bug reports
test-cases/     - Manual test cases
```

## How to Run

Install dependencies:
```
npm install
npx playwright install
```

Run all tests:
```
npx playwright test
```

Run specific test:
```
npx playwright test tests/login-pom.spec.js
```

## Author
Marcelo - QA Automation Engineer
