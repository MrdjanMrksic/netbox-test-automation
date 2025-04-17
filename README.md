# netbox-test-automation
# 🧪 End-to-End Automation Suite

This project contains automated tests for critical workflows within the NetBox UI, including registration, login, and device/rack management.

## ✅ Test Scenarios Covered

- **User Registration**
- **Login (valid & invalid credentials)**
- **Create and Delete Device Types**
- **Create and Delete Racks**
- **Create and Delete Devices in Specific Rack Positions**

## 📁 Project Structure
```bash
├── allure-results/ # Allure results
├── config/ # Typescript and Wdio config files
├── data/ # Test data and constants 
├── pages/ # Page Object Models 
├── specs/ # Tests
├── support/ # Reusable utility functions 
```
## 🚀 Getting Started

1. **Install dependencies**  
  ```bash
  npm install
  ```
   
2. **Run tests**

  ```bash
  #Registration tests
  npm run registration

  #Login tests
  npm run login

  #Device type tests
  npm run device-type

  #Rack tests
  npm run rack

  #e2e test - adding a device into the rack
  npm run e2e-add-device
  ```

3. **Generate & open Allure report**

```bash
allure serve
```

📦 Tech Stack

WebdriverIO

TypeScript

Allure Reporting
