import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, Star, Sparkles, Trophy, Clock, Users } from 'lucide-react'

interface MysteryBox {
  id: number
  name: string
  price: number
  maxValue: number
  category: string
  description: string
  items: string[]
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  image: string
}

interface Prize {
  id: number
  name: string
  value: number
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  image: string
}

const MysteryBoxPage = () => {
  const [selectedBox, setSelectedBox] = useState<MysteryBox | null>(null)
  const [isOpening, setIsOpening] = useState(false)
  const [openedPrize, setOpenedPrize] = useState<Prize | null>(null)
  const [showResult, setShowResult] = useState(false)

  const mysteryBoxes: MysteryBox[] = [
    {
      id: 1,
      name: 'Hộp Công Nghệ Cơ Bản',
      price: 99000,
      maxValue: 2000000,
      category: 'technology',
      description: 'Hộp chứa các sản phẩm công nghệ từ cơ bản đến cao cấp',
      items: ['Điện thoại', 'Tai nghe', 'Sạc dự phòng', 'Phụ kiện điện tử'],
      rarity: 'common',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      name: 'Hộp Thời Trang Trendy',
      price: 149000,
      maxValue: 3000000,
      category: 'fashion',
      description: 'Những món đồ thời trang hot trend và phụ kiện cao cấp',
      items: ['Đồng hồ', 'Túi xách', 'Trang sức', 'Phụ kiện thời trang'],
      rarity: 'rare',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      name: 'Hộp Gaming Pro',
      price: 199000,
      maxValue: 5000000,
      category: 'gaming',
      description: 'Dành cho game thủ với các thiết bị gaming chuyên nghiệp',
      items: ['Console game', 'Tay cầm', 'Headset gaming', 'Game chính hãng'],
      rarity: 'epic',
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      name: 'Hộp Siêu Phẩm',
      price: 499000,
      maxValue: 20000000,
      category: 'premium',
      description: 'Hộp cao cấp nhất với những phần thưởng giá trị nhất',
      items: ['Xe máy', 'iPhone mới nhất', 'Đồng hồ Rolex', 'Trang sức kim cương'],
      rarity: 'legendary',
      image: '/api/placeholder/300/200'
    },
    {
      id: 5,
      name: 'Hộp Làm Đẹp',
      price: 79000,
      maxValue: 1500000,
      category: 'beauty',
      description: 'Các sản phẩm làm đẹp và chăm sóc sức khỏe',
      items: ['Nước hoa', 'Mỹ phẩm', 'Skincare', 'Phụ kiện làm đẹp'],
      rarity: 'common',
      image: '/api/placeholder/300/200'
    },
    {
      id: 6,
      name: 'Hộp Thể Thao',
      price: 129000,
      maxValue: 2500000,
      category: 'sports',
      description: 'Dụng cụ thể thao và phụ kiện fitness',
      items: ['Giày thể thao', 'Đồ tập gym', 'Phụ kiện thể thao', 'Đồng hồ thông minh'],
      rarity: 'rare',
      image: '/api/placeholder/300/200'
    }
  ]

  const possiblePrizes: Prize[] = [
    { id: 1, name: 'iPhone 15 Pro Max', value: 30000000, rarity: 'legendary', image: '/api/placeholder/200/200' },
    { id: 2, name: 'MacBook Pro M3', value: 45000000, rarity: 'legendary', image: '/api/placeholder/200/200' },
    { id: 3, name: 'Honda Vision 2024', value: 35000000, rarity: 'legendary', image: '/api/placeholder/200/200' },
    { id: 4, name: 'Đồng hồ Rolex', value: 25000000, rarity: 'legendary', image: '/api/placeholder/200/200' },
    { id: 5, name: 'PlayStation 5', value: 15000000, rarity: 'epic', image: '/api/placeholder/200/200' },
    { id: 6, name: 'AirPods Pro', value: 6000000, rarity: 'epic', image: '/api/placeholder/200/200' },
    { id: 7, name: 'Samsung Galaxy S24', value: 20000000, rarity: 'epic', image: '/api/placeholder/200/200' },
    { id: 8, name: 'iPad Air', value: 18000000, rarity: 'rare', image: '/api/placeholder/200/200' },
    { id: 9, name: 'Tai nghe Sony', value: 3000000, rarity: 'rare', image: '/api/placeholder/200/200' },
    { id: 10, name: 'Sạc dự phòng Anker', value: 500000, rarity: 'common', image: '/api/placeholder/200/200' }
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-600 bg-gray-100'
      case 'rare': return 'text-blue-600 bg-blue-100'
      case 'epic': return 'text-purple-600 bg-purple-100'
      case 'legendary': return 'text-yellow-600 bg-yellow-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-300'
      case 'rare': return 'border-blue-300'
      case 'epic': return 'border-purple-300'
      case 'legendary': return 'border-yellow-300'
      default: return 'border-gray-300'
    }
  }

  const getRandomPrize = (boxRarity: string): Prize => {
    // Logic to determine prize based on box rarity and randomness
    const rand = Math.random()
    let filteredPrizes = possiblePrizes

    if (boxRarity === 'legendary') {
      filteredPrizes = possiblePrizes.filter(p => ['legendary', 'epic'].includes(p.rarity))
    } else if (boxRarity === 'epic') {
      filteredPrizes = possiblePrizes.filter(p => ['epic', 'rare'].includes(p.rarity))
    } else if (boxRarity === 'rare') {
      filteredPrizes = possiblePrizes.filter(p => ['rare', 'common'].includes(p.rarity))
    }

    return filteredPrizes[Math.floor(Math.random() * filteredPrizes.length)]
  }

  const openBox = async (box: MysteryBox) => {
    setSelectedBox(box)
    setIsOpening(true)
    setShowResult(false)
    setOpenedPrize(null)

    // Simulate box opening animation delay
    setTimeout(() => {
      const prize = getRandomPrize(box.rarity)
      setOpenedPrize(prize)
      setIsOpening(false)
      setShowResult(true)
    }, 3000)
  }

  const closeResult = () => {
    setShowResult(false)
    setSelectedBox(null)
    setOpenedPrize(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hộp Bí Ẩn
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chọn hộp bí ẩn yêu thích và trải nghiệm cảm giác hồi hộp khi mở hộp!
            <br />
            <span className="text-orange-600 font-semibold">Cam kết 100% có quà trong mỗi hộp!</span>
          </p>
        </div>

        {/* Statistics Bar */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Gift className="w-6 h-6 text-orange-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900">10,234</div>
                <div className="text-sm text-gray-600">Hộp được mở hôm nay</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="w-6 h-6 text-blue-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900">2,847</div>
                <div className="text-sm text-gray-600">Người chơi online</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900">156</div>
                <div className="text-sm text-gray-600">Giải thưởng lớn hôm nay</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-6 h-6 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Hoạt động liên tục</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mystery Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mysteryBoxes.map((box) => (
            <motion.div
              key={box.id}
              whileHover={{ scale: 1.02 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 ${getRarityBorder(box.rarity)} hover:shadow-xl transition-shadow`}
            >
              {/* Box Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center relative">
                <Gift className="w-24 h-24 text-white" />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getRarityColor(box.rarity)}`}>
                  {box.rarity.toUpperCase()}
                </div>
              </div>

              {/* Box Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {box.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {box.description}
                </p>

                {/* Price Info */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Giá mở hộp:</span>
                    <span className="text-xl font-bold text-orange-600">
                      {box.price.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Giá trị tối đa:</span>
                    <span className="text-lg font-bold text-green-600">
                      {box.maxValue.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                </div>

                {/* Items Preview */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Có thể chứa:</p>
                  <div className="flex flex-wrap gap-1">
                    {box.items.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                    {box.items.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{box.items.length - 3} khác
                      </span>
                    )}
                  </div>
                </div>

                {/* Open Button */}
                <button
                  onClick={() => openBox(box)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  <Gift className="mr-2 w-5 h-5" />
                  Mở Hộp Ngay
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Box Opening Modal */}
        <AnimatePresence>
          {(isOpening || showResult) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
              >
                {isOpening && (
                  <div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-32 h-32 mystery-box-gradient rounded-2xl flex items-center justify-center mx-auto mb-6"
                    >
                      <Gift className="w-16 h-16 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Đang mở hộp...
                    </h3>
                    <p className="text-gray-600">
                      Chuẩn bị đón nhận phần thưởng của bạn!
                    </p>
                    <div className="flex justify-center mt-4">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Sparkles className="w-6 h-6 text-yellow-500" />
                      </motion.div>
                    </div>
                  </div>
                )}

                {showResult && openedPrize && (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="prize-glow bg-gradient-to-br from-yellow-400 to-orange-500 w-32 h-32 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Trophy className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Chúc Mừng!
                    </h3>
                    <h4 className="text-xl font-semibold text-orange-600 mb-2">
                      {openedPrize.name}
                    </h4>
                    <p className="text-lg text-green-600 font-bold mb-4">
                      Giá trị: {openedPrize.value.toLocaleString('vi-VN')}đ
                    </p>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-6 ${getRarityColor(openedPrize.rarity)}`}>
                      {openedPrize.rarity.toUpperCase()}
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={closeResult}
                        className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                      >
                        Đóng
                      </button>
                      <button
                        onClick={() => {
                          closeResult()
                          // Could open another box or navigate somewhere
                        }}
                        className="flex-1 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                      >
                        Mở Tiếp
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Recent Winners */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Người Thắng Gần Đây
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Minh A***', prize: 'iPhone 15 Pro', time: '2 phút trước' },
              { name: 'Thu H***', prize: 'MacBook Air M3', time: '5 phút trước' },
              { name: 'Nam N***', prize: 'PlayStation 5', time: '8 phút trước' },
            ].map((winner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border border-orange-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    {winner.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{winner.name}</div>
                    <div className="text-sm text-orange-600">{winner.prize}</div>
                    <div className="text-xs text-gray-500">{winner.time}</div>
                  </div>
                  <Trophy className="w-6 h-6 text-yellow-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MysteryBoxPage