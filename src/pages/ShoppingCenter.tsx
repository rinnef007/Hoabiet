import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, Grid, List, Star, ShoppingCart, Heart, Zap } from 'lucide-react'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  pointsPrice: number
  category: string
  brand: string
  rating: number
  reviewCount: number
  image: string
  description: string
  inStock: boolean
  isHot: boolean
  discount?: number
}

const ShoppingCenter = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000000])

  const categories = [
    { id: 'all', name: 'Tất Cả', count: 156 },
    { id: 'technology', name: 'Công Nghệ', count: 45 },
    { id: 'fashion', name: 'Thời Trang', count: 32 },
    { id: 'gaming', name: 'Gaming', count: 28 },
    { id: 'beauty', name: 'Làm Đẹp', count: 24 },
    { id: 'sports', name: 'Thể Thao', count: 19 },
    { id: 'home', name: 'Gia Dụng', count: 8 }
  ]

  const products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max 256GB',
      price: 29990000,
      originalPrice: 32990000,
      pointsPrice: 2999,
      category: 'technology',
      brand: 'Apple',
      rating: 4.9,
      reviewCount: 1247,
      image: '/api/placeholder/300/300',
      description: 'iPhone mới nhất với chip A17 Pro và camera 48MP',
      inStock: true,
      isHot: true,
      discount: 9
    },
    {
      id: 2,
      name: 'MacBook Air M3 13 inch',
      price: 27990000,
      pointsPrice: 2799,
      category: 'technology',
      brand: 'Apple',
      rating: 4.8,
      reviewCount: 892,
      image: '/api/placeholder/300/300',
      description: 'Laptop siêu mỏng với chip M3 mạnh mẽ',
      inStock: true,
      isHot: true
    },
    {
      id: 3,
      name: 'PlayStation 5 Slim',
      price: 13990000,
      originalPrice: 15990000,
      pointsPrice: 1399,
      category: 'gaming',
      brand: 'Sony',
      rating: 4.7,
      reviewCount: 2156,
      image: '/api/placeholder/300/300',
      description: 'Console gaming thế hệ mới với hiệu năng vượt trội',
      inStock: true,
      isHot: false,
      discount: 12
    },
    {
      id: 4,
      name: 'Đồng hồ Apple Watch Series 9',
      price: 9990000,
      pointsPrice: 999,
      category: 'technology',
      brand: 'Apple',
      rating: 4.6,
      reviewCount: 567,
      image: '/api/placeholder/300/300',
      description: 'Smartwatch với tính năng sức khỏe tiên tiến',
      inStock: true,
      isHot: false
    },
    {
      id: 5,
      name: 'Túi Louis Vuitton Neverfull',
      price: 45000000,
      pointsPrice: 4500,
      category: 'fashion',
      brand: 'Louis Vuitton',
      rating: 4.9,
      reviewCount: 234,
      image: '/api/placeholder/300/300',
      description: 'Túi xách luxury cao cấp, thiết kế iconic',
      inStock: false,
      isHot: true
    },
    {
      id: 6,
      name: 'Giày Nike Air Jordan 1',
      price: 4500000,
      originalPrice: 5200000,
      pointsPrice: 450,
      category: 'fashion',
      brand: 'Nike',
      rating: 4.5,
      reviewCount: 1834,
      image: '/api/placeholder/300/300',
      description: 'Giày thể thao iconic với thiết kế cổ điển',
      inStock: true,
      isHot: false,
      discount: 13
    },
    {
      id: 7,
      name: 'Nước hoa Chanel No.5',
      price: 3200000,
      pointsPrice: 320,
      category: 'beauty',
      brand: 'Chanel',
      rating: 4.8,
      reviewCount: 445,
      image: '/api/placeholder/300/300',
      description: 'Nước hoa luxury với hương thơm quyến rũ',
      inStock: true,
      isHot: false
    },
    {
      id: 8,
      name: 'Máy pha cà phê Breville',
      price: 8500000,
      pointsPrice: 850,
      category: 'home',
      brand: 'Breville',
      rating: 4.4,
      reviewCount: 156,
      image: '/api/placeholder/300/300',
      description: 'Máy pha cà phê chuyên nghiệp cho gia đình',
      inStock: true,
      isHot: false
    }
  ]

  const filteredProducts = useMemo(() => {
    let filtered = products

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        filtered.sort((a, b) => b.id - a.id)
        break
      default: // popular
        filtered.sort((a, b) => b.reviewCount - a.reviewCount)
    }

    return filtered
  }, [searchTerm, selectedCategory, sortBy, priceRange])

  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN') + 'đ'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Trung Tâm Mua Sắm
          </h1>
          <p className="text-xl text-gray-600">
            Sử dụng điểm tích lũy để đổi lấy những sản phẩm yêu thích
          </p>
        </div>

        {/* Points Balance */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Điểm Tích Lũy Của Bạn</h3>
              <div className="text-3xl font-bold">1,250 điểm</div>
              <p className="text-orange-100">Tương đương ~1,250,000đ</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-orange-100 mb-2">Hạng thành viên</div>
              <div className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-semibold">
                VIP Gold
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Danh Mục
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                      selectedCategory === category.id
                        ? 'bg-orange-100 text-orange-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="text-sm text-gray-500">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Khoảng Giá
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Từ:</label>
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Đến:</label>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="50000000"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">
                    Hiển thị {filteredProducts.length} sản phẩm
                  </span>
                </div>
                
                <div className="flex items-center space-x-4">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="popular">Phổ biến</option>
                    <option value="newest">Mới nhất</option>
                    <option value="price-low">Giá thấp đến cao</option>
                    <option value="price-high">Giá cao đến thấp</option>
                    <option value="rating">Đánh giá cao</option>
                  </select>

                  {/* View Mode */}
                  <div className="flex border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Product Image */}
                  <div className={`relative ${
                    viewMode === 'list' ? 'w-48 h-48' : 'h-64'
                  } bg-gray-100 flex items-center justify-center`}>
                    {product.isHot && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Zap className="w-3 h-3 mr-1" />
                        HOT
                      </div>
                    )}
                    {product.discount && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        -{product.discount}%
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-semibold">Hết hàng</span>
                      </div>
                    )}
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 text-sm">{product.brand}</span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                        {product.name}
                      </h3>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        {product.rating} ({product.reviewCount})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-bold text-gray-900">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-orange-600 font-semibold">
                        Hoặc {product.pointsPrice} điểm
                      </div>
                    </div>

                    {/* Actions */}
                    <div className={`flex gap-3 ${viewMode === 'list' ? 'mt-auto' : ''}`}>
                      <button
                        disabled={!product.inStock}
                        className={`flex-1 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                          product.inStock
                            ? 'bg-orange-600 text-white hover:bg-orange-700'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {product.inStock ? 'Đổi Điểm' : 'Hết Hàng'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Không tìm thấy sản phẩm
                </h3>
                <p className="text-gray-600">
                  Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCenter