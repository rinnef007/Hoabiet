# XéXé BOX Clone - Mystery Box E-commerce Platform

Một nền tảng thương mại điện tử mô phỏng theo XéXé BOX, chuyên về việc mở hộp bí ẩn và mua sắm trực tuyến.

## 🚀 Tính Năng Chính

### 🎁 Hộp Bí Ẩn
- Mở hộp bí ẩn với animation thú vị
- Nhiều loại hộp với giá trị khác nhau
- Hệ thống rarity (Common, Rare, Epic, Legendary)
- Cam kết 100% có quà trong mỗi hộp
- Thống kê real-time về người chơi và giải thưởng

### 🛍️ Trung Tâm Mua Sắm
- Catalog sản phẩm đa dạng
- Tìm kiếm và lọc sản phẩm
- Hệ thống điểm tích lũy
- Đổi điểm lấy sản phẩm
- Đánh giá và review sản phẩm

### 👤 Quản Lý Tài Khoản
- Profile người dùng chi tiết
- Lịch sử hoạt động
- Hệ thống thành tích (achievements)
- Chương trình giới thiệu bạn bè
- Cài đặt tài khoản

### 🤝 Chương Trình Đối Tác
- Dành cho nhãn hàng và thương hiệu
- Chương trình affiliate cho influencer
- Hệ thống đại lý reseller
- Hoa hồng hấp dẫn
- Dashboard quản lý doanh số

## 🛠️ Công Nghệ Sử Dụng

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Routing**: React Router DOM

## 📦 Cài Đặt

1. Clone repository:
```bash
git clone <repository-url>
cd xexeboxes-clone
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở trình duyệt và truy cập `http://localhost:3000`

## 🏗️ Cấu Trúc Dự Án

```
src/
├── components/          # Các component tái sử dụng
│   ├── Header.tsx      # Header navigation
│   └── Footer.tsx      # Footer
├── pages/              # Các trang chính
│   ├── HomePage.tsx    # Trang chủ
│   ├── MysteryBoxPage.tsx  # Trang hộp bí ẩn
│   ├── ShoppingCenter.tsx  # Trung tâm mua sắm
│   ├── ProfilePage.tsx     # Trang profile
│   └── PartnerPage.tsx     # Trang đối tác
├── App.tsx             # Component chính
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Thiết Kế

- **Responsive Design**: Tối ưu cho mobile, tablet và desktop
- **Modern UI**: Thiết kế hiện đại với gradient và animation
- **User Experience**: Trải nghiệm người dùng mượt mà và thú vị
- **Color Scheme**: Orange/Red gradient chủ đạo, phù hợp với thương hiệu

## 🔧 Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run preview` - Preview production build
- `npm run lint` - Chạy ESLint

## 📱 Responsive Design

Website được tối ưu cho tất cả các thiết bị:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🎯 Các Trang Chính

### 🏠 Trang Chủ (/)
- Hero section với CTA
- Showcase hộp bí ẩn phổ biến
- Thống kê và testimonials
- Call-to-action sections

### 🎁 Hộp Bí Ẩn (/mystery-boxes)
- Danh sách các hộp bí ẩn
- Thống kê real-time
- Chức năng mở hộp với animation
- Lịch sử người thắng

### 🛒 Mua Sắm (/shopping)
- Catalog sản phẩm
- Tìm kiếm và lọc
- Hiển thị grid/list
- Hệ thống điểm tích lũy

### 👤 Profile (/profile)
- Thông tin cá nhân
- Lịch sử hoạt động
- Thành tích
- Chương trình giới thiệu

### 🤝 Đối Tác (/partner)
- Thông tin chương trình đối tác
- Các hình thức hợp tác
- Quy trình đăng ký
- Testimonials từ đối tác

## 🚀 Tính Năng Nâng Cao

- **Animation**: Sử dụng Framer Motion cho các hiệu ứng mượt mà
- **Interactive**: Chức năng mở hộp bí ẩn tương tác
- **Real-time Stats**: Thống kê người chơi và hoạt động
- **Gamification**: Hệ thống điểm, thành tích và xếp hạng

## 🎨 Customization

Có thể dễ dàng tùy chỉnh:
- Colors trong `tailwind.config.js`
- Animation trong các component
- Layout và styling
- Thêm tính năng mới

## 📞 Hỗ Trợ

Nếu có thắc mắc hoặc cần hỗ trợ, vui lòng liên hệ:
- Email: support@xexeboxes.com
- Phone: 1900 1234

---

**Lưu ý**: Đây là phiên bản demo/clone được tạo ra để học tập và tham khảo. Không sử dụng cho mục đích thương mại.