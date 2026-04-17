# 🛒 Shopify Bundle Builder (Cart Customizer)

A custom **Shopify Bundle Builder** extension that allows users to create personalized product bundles directly from the storefront. Built using **Shopify Functions (Cart Transform API)** and a dynamic UI section for seamless bundle creation.

---

## 🎥 Demo Preview

<p align="center">
  <img src="/section.png" alt="Shopify Bundle Builder Demo" width="800"/>
</p>
<p align="center">
  <img src="/page.png" alt="Shopify Bundle Builder Demo" width="800"/>
</p>
<p align="center">
  <img src="/checkout.png" alt="Shopify Bundle Builder Demo" width="800"/>
</p>

---

## ✨ Features

- 🧩 Create custom product bundles
- 📦 Select products from multiple collections (tab-based UI)
- 🎯 Configurable bundle size (e.g., pick any 3 items)
- 💰 Dynamic pricing calculation
- 🚚 Free shipping threshold indicator
- ❌ Add / Remove items from bundle
- 🛍️ Single-click "Add Bundle to Cart"
- ⚡ Powered by **Shopify Cart Transform Function**
- 🎛️ Fully configurable via Shopify Theme Editor

---

## 🖥️ Demo Overview

### Bundle Builder UI
- Tab-based collection selection  
- Product grid with "Add to Bundle" CTA  

### Bundle Summary Panel
- Selected items preview  
- Dynamic total price  
- Progress bar for threshold (e.g., free shipping)  

### Checkout Integration
- Bundle appears as a grouped item in checkout via cart transformation  

---

## 🏗️ Tech Stack

- **Shopify Liquid** – UI rendering  
- **JavaScript (Vanilla)** – State management & interactions  
- **Shopify Functions** – Cart Transform API  
- **CSS** – Custom styling  
- **Shopify Sections** – Drag & drop configurability  

---

## ⚙️ Configuration (Theme Editor)

The section provides the following customizable settings:

| Setting | Description |
|--------|-------------|
| Bundle Title | Heading text |
| Bundle Size | Number of items allowed |
| Price Limit | Threshold for rewards (e.g., free shipping) |
| Button Text | CTA button label |
| Reached Message | Message when threshold is met |
| Below Limit Message | Message before threshold |
| Products per page | Grid control |

---

## 🔄 How It Works

1. User selects products from collection tabs  
2. Items are added to bundle container (client-side state)  
3. Total price updates dynamically  
4. On clicking **Add Bundle to Cart**:
   - Bundle payload is sent to cart  
   - **Cart Transform Function** groups items  
5. Bundle appears as a single logical unit in checkout  

---

## 📁 Project Structure
