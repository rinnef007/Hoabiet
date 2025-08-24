import { motion } from 'framer-motion'
import { Gift, Star, Users, Award, ArrowRight, Zap, Shield, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const features = [
    {
      icon: Gift,
      title: 'Mở Hộp Là Trúng',
      description: 'Cam kết 100% có quà trong mỗi hộp bí ẩn. Không có hộp nào trống!'
    },
    {
      icon: Star,
      title: 'Sản Phẩm Chính Hãng',
      description: 'Tất cả sản phẩm đều là hàng chính hãng, có tem bảo hành đầy đủ.'
    },
    {
      icon: Zap,
      title: 'Trải Nghiệm Thú Vị',
      description: 'Cảm giác hồi hộp, bất ngờ khi mở hộp và nhận được quà tặng giá trị.'
    },
    {
      icon: Shield,
      title: 'An Toàn & Tin Cậy',
      description: 'Giao dịch bảo mật, chính sách hoàn tiền rõ ràng và minh bạch.'
    }
  ]

  const mysteryBoxes = [
    {
      id: 1,
      name: 'Hộp Công Nghệ',
      price: '99,000',
      maxValue: '2,000,000',
      image: '/api/placeholder/300/200',
      items: ['Điện thoại', 'Tai nghe', 'Phụ kiện công nghệ']
    },
    {
      id: 2,
      name: 'Hộp Thời Trang',
      price: '149,000',
      maxValue: '3,000,000',
      image: '/api/placeholder/300/200',
      items: ['Đồng hồ', 'Túi xách', 'Phụ kiện thời trang']
    },
    {
      id: 3,
      name: 'Hộp Gaming',
      price: '199,000',
      maxValue: '5,000,000',
      image: '/api/placeholder/300/200',
      items: ['Console game', 'Tay cầm', 'Game chính hãng']
    },
    {
      id: 4,
      name: 'Hộp Cao Cấp',
      price: '499,000',
      maxValue: '20,000,000',
      image: '/api/placeholder/300/200',
      items: ['Xe máy', 'Đồng hồ cao cấp', 'Trang sức']
    }
  ]

  const testimonials = [
    {
      name: 'Minh Anh',
      text: 'Tôi đã trúng một chiếc iPhone 15 từ hộp 199k. Không thể tin được!',
      rating: 5
    },
    {
      name: 'Thu Hằng',
      text: 'Mở hộp thời trang và nhận được túi Gucci. XéXé BOX thật tuyệt vời!',
      rating: 5
    },
    {
      name: 'Hoàng Nam',
      text: 'Dịch vụ chuyên nghiệp, giao hàng nhanh. Sẽ tiếp tục ủng hộ!',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Mở Hộp
                <br />
                <span className="text-yellow-300">Bí Ẩn</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-orange-100">
                Trải nghiệm cảm giác hồi hộp khi mở hộp và nhận quà giá trị!
                <br />
                <strong className="text-yellow-300">Mở hộp là trúng 100%!</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/mystery-boxes"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Khám Phá Ngay
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/shopping"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors inline-flex items-center justify-center"
                >
                  Trung Tâm Mua Sắm
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 mystery-box-gradient rounded-3xl flex items-center justify-center glow-effect animate-pulse-slow">
                  <Gift className="w-32 h-32 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold animate-bounce">
                  100% Trúng!
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tại Sao Chọn XéXé BOX?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi cam kết mang đến trải nghiệm mua sắm tuyệt vời nhất với những ưu điểm vượt trội
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors"
              >
                <div className="w-16 h-16 mystery-box-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mystery Boxes Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hộp Bí Ẩn Phổ Biến
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá những hộp bí ẩn hấp dẫn nhất với giá trị quà tặng lên đến hàng chục triệu đồng
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mysteryBoxes.map((box, index) => (
              <motion.div
                key={box.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <Gift className="w-20 h-20 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {box.name}
                  </h3>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Giá mở hộp:</span>
                      <span className="text-lg font-bold text-orange-600">
                        {box.price}đ
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Giá trị tối đa:</span>
                      <span className="text-lg font-bold text-green-600">
                        {box.maxValue}đ
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Có thể chứa:</p>
                    <div className="flex flex-wrap gap-1">
                      {box.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={`/mystery-boxes?box=${box.id}`}
                    className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center"
                  >
                    Mở Hộp Ngay
                    <Gift className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/mystery-boxes"
              className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-700 transition-colors inline-flex items-center"
            >
              Xem Tất Cả Hộp Bí Ẩn
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 mystery-box-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-orange-100">Hộp Đã Mở</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-orange-100">Khách Hàng Hài Lòng</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-orange-100">Sản Phẩm Đa Dạng</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-orange-100">Tỷ Lệ Hài Lòng</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Khách Hàng Nói Gì Về Chúng Tôi
            </h2>
            <p className="text-xl text-gray-600">
              Hàng ngàn khách hàng đã có trải nghiệm tuyệt vời cùng XéXé BOX
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <span className="ml-3 font-semibold text-gray-900">
                    {testimonial.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Sẵn Sàng Cho Cuộc Phiêu Lưu?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Tham gia ngay hôm nay và trải nghiệm cảm giác hồi hộp khi mở hộp bí ẩn!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/mystery-boxes"
                className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-700 transition-colors inline-flex items-center justify-center"
              >
                Bắt Đầu Ngay
                <Gift className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/partner"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
              >
                Trở Thành Đối Tác
                <Users className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage