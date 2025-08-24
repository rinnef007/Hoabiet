import { Link } from 'react-router-dom'
import { Gift, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="mystery-box-gradient w-8 h-8 rounded-lg flex items-center justify-center">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                XéXé BOX
              </span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Nền tảng mở hộp bí ẩn hàng đầu Việt Nam. Mở hộp là trúng! 
              Trải nghiệm thú vị với hàng ngàn sản phẩm giá trị đang chờ bạn khám phá.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mystery-boxes" className="text-gray-300 hover:text-white transition-colors">
                  Hộp Bí Ẩn
                </Link>
              </li>
              <li>
                <Link to="/shopping" className="text-gray-300 hover:text-white transition-colors">
                  Trung Tâm Mua Sắm
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-gray-300 hover:text-white transition-colors">
                  Chương Trình Đối Tác
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Quy Tắc & Điều Khoản
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Chính Sách Bảo Mật
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="text-gray-300">support@xexeboxes.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="text-gray-300">1900 1234</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-orange-500 mt-1" />
                <span className="text-gray-300">
                  123 Đường ABC, Quận 1<br />
                  TP. Hồ Chí Minh, Việt Nam
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 XéXé BOX. Tất cả quyền được bảo lưu. | Thiết kế bởi AI Assistant
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer