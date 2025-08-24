import { motion } from 'framer-motion'
import { Users, TrendingUp, DollarSign, Star, CheckCircle, ArrowRight, Briefcase, Target, Zap } from 'lucide-react'

const PartnerPage = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Hoa Hồng Hấp Dẫn',
      description: 'Nhận hoa hồng lên đến 15% cho mỗi giao dịch thành công từ khách hàng bạn giới thiệu'
    },
    {
      icon: TrendingUp,
      title: 'Tăng Trưởng Doanh Thu',
      description: 'Tăng doanh số bán hàng và phát triển thương hiệu thông qua nền tảng của chúng tôi'
    },
    {
      icon: Users,
      title: 'Mở Rộng Khách Hàng',
      description: 'Tiếp cận hàng ngàn khách hàng tiềm năng trên toàn quốc'
    },
    {
      icon: Star,
      title: 'Hỗ Trợ Marketing',
      description: 'Nhận hỗ trợ tài liệu marketing và chiến lược bán hàng chuyên nghiệp'
    },
    {
      icon: Zap,
      title: 'Công Cụ Quản Lý',
      description: 'Dashboard theo dõi doanh số, hoa hồng và hiệu quả bán hàng real-time'
    },
    {
      icon: Target,
      title: 'Mục Tiêu Rõ Ràng',
      description: 'Hệ thống KPI và thưởng thành tích minh bạch, công bằng'
    }
  ]

  const partnerTypes = [
    {
      title: 'Nhãn Hàng & Thương Hiệu',
      description: 'Đưa sản phẩm của bạn vào hộp bí ẩn và trung tâm mua sắm',
      features: [
        'Đặt sản phẩm trong hộp bí ẩn',
        'Gian hàng riêng trong shopping center',
        'Marketing và quảng bá thương hiệu',
        'Báo cáo doanh số chi tiết',
        'Hỗ trợ logistics và vận chuyển'
      ],
      commission: '5-10%',
      minOrder: '10 triệu đồng'
    },
    {
      title: 'Influencer & KOL',
      description: 'Kiếm tiền từ lượng người theo dõi thông qua affiliate marketing',
      features: [
        'Mã affiliate cá nhân',
        'Link tracking chuyên dụng',
        'Content kit và tài liệu marketing',
        'Live stream và review sản phẩm',
        'Bonus theo milestone'
      ],
      commission: '10-15%',
      minOrder: 'Không yêu cầu'
    },
    {
      title: 'Đại Lý & Reseller',
      description: 'Trở thành đại lý phân phối sản phẩm tại khu vực của bạn',
      features: [
        'Quyền phân phối độc quyền khu vực',
        'Giá sỉ ưu đãi',
        'Hỗ trợ setup cửa hàng',
        'Training và đào tạo',
        'Chính sách đổi trả linh hoạt'
      ],
      commission: '15-20%',
      minOrder: '50 triệu đồng'
    }
  ]

  const stats = [
    { number: '500+', label: 'Đối Tác Hiện Tại' },
    { number: '50M+', label: 'Doanh Thu Tháng' },
    { number: '95%', label: 'Tỷ Lệ Hài Lòng' },
    { number: '24/7', label: 'Hỗ Trợ Khách Hàng' }
  ]

  const testimonials = [
    {
      name: 'Nguyễn Văn A',
      role: 'CEO TechStore',
      content: 'Sau 6 tháng hợp tác, doanh thu của chúng tôi tăng 300%. XéXé BOX thực sự là đối tác đáng tin cậy.',
      rating: 5
    },
    {
      name: 'Trần Thị B',
      role: 'Fashion Influencer',
      content: 'Hoa hồng hấp dẫn và hỗ trợ tuyệt vời. Tôi đã kiếm được 50 triệu chỉ trong 3 tháng đầu.',
      rating: 5
    },
    {
      name: 'Lê Hoàng C',
      role: 'Đại Lý Miền Nam',
      content: 'Quy trình làm việc chuyên nghiệp, thanh toán đúng hạn. Rất recommend cho ai muốn kinh doanh.',
      rating: 5
    }
  ]

  const steps = [
    {
      step: 1,
      title: 'Đăng Ký',
      description: 'Điền form đăng ký và gửi thông tin doanh nghiệp/cá nhân'
    },
    {
      step: 2,
      title: 'Xét Duyệt',
      description: 'Team của chúng tôi sẽ xem xét và phản hồi trong 24-48h'
    },
    {
      step: 3,
      title: 'Ký Hợp Đồng',
      description: 'Ký kết hợp đồng hợp tác và thiết lập tài khoản'
    },
    {
      step: 4,
      title: 'Bắt Đầu',
      description: 'Nhận tài liệu, training và bắt đầu kiếm tiền'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              Trở Thành Đối Tác
              <br />
              <span className="text-yellow-300">Cùng XéXé BOX</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
            >
              Tham gia mạng lưới đối tác của chúng tôi và tận hưởng những cơ hội kinh doanh tuyệt vời
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center">
                Đăng Ký Ngay
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors">
                Tìm Hiểu Thêm
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lợi Ích Khi Hợp Tác
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá những ưu đãi và hỗ trợ tuyệt vời dành cho đối tác của XéXé BOX
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Các Hình Thức Hợp Tác
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chọn hình thức hợp tác phù hợp với năng lực và mục tiêu của bạn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-500 transition-colors"
              >
                <div className="text-center mb-6">
                  <Briefcase className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600">
                    {type.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Hoa hồng:</span>
                    <span className="text-2xl font-bold text-blue-600">{type.commission}</span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-600">Đơn tối thiểu:</span>
                    <span className="font-semibold">{type.minOrder}</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Đăng Ký Ngay
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quy Trình Hợp Tác
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chỉ 4 bước đơn giản để trở thành đối tác của XéXé BOX
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
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
              Đối Tác Nói Gì Về Chúng Tôi
            </h2>
            <p className="text-xl text-gray-600">
              Những phản hồi tích cực từ đối tác hiện tại
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Sẵn Sàng Bắt Đầu Hành Trình?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Tham gia cùng hàng trăm đối tác đang thành công với XéXé BOX
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center">
                Đăng Ký Đối Tác
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors">
                Liên Hệ Tư Vấn
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PartnerPage