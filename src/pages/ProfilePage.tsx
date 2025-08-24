import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Gift, ShoppingBag, Users, Star, Trophy, Calendar, Eye, Settings, LogOut } from 'lucide-react'

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const userStats = {
    totalBoxesOpened: 47,
    totalSpent: 2350000,
    currentPoints: 1250,
    referrals: 8,
    memberSince: '2023-06-15',
    vipLevel: 'Gold'
  }

  const recentActivities = [
    {
      id: 1,
      type: 'box_opened',
      title: 'Mở Hộp Gaming Pro',
      prize: 'PlayStation 5',
      value: 15000000,
      date: '2024-01-15',
      points: -199
    },
    {
      id: 2,
      type: 'points_earned',
      title: 'Giới thiệu bạn bè',
      description: 'Minh Anh đã tham gia',
      date: '2024-01-14',
      points: 50
    },
    {
      id: 3,
      type: 'shopping',
      title: 'Đổi điểm lấy AirPods',
      value: 6000000,
      date: '2024-01-12',
      points: -600
    },
    {
      id: 4,
      type: 'box_opened',
      title: 'Mở Hộp Công Nghệ',
      prize: 'iPhone 15',
      value: 25000000,
      date: '2024-01-10',
      points: -99
    }
  ]

  const achievements = [
    { id: 1, name: 'Người Mới', description: 'Mở hộp đầu tiên', completed: true },
    { id: 2, name: 'Thành Viên Tích Cực', description: 'Mở 10 hộp', completed: true },
    { id: 3, name: 'Người Giới Thiệu', description: 'Mời 5 bạn bè', completed: true },
    { id: 4, name: 'Thợ Săn Kho Báu', description: 'Mở 50 hộp', completed: false },
    { id: 5, name: 'VIP Platinum', description: 'Đạt hạng Platinum', completed: false },
    { id: 6, name: 'Triệu Phú', description: 'Nhận quà trị giá 100 triệu', completed: false }
  ]

  const referralHistory = [
    { name: 'Minh Anh', joinDate: '2024-01-14', status: 'active', earned: 50 },
    { name: 'Thu Hằng', joinDate: '2024-01-10', status: 'active', earned: 50 },
    { name: 'Nam Hoàng', joinDate: '2024-01-08', status: 'active', earned: 50 },
    { name: 'Linh Chi', joinDate: '2024-01-05', status: 'inactive', earned: 25 },
    { name: 'Đức Minh', joinDate: '2023-12-28', status: 'active', earned: 50 }
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'box_opened': return Gift
      case 'shopping': return ShoppingBag
      case 'points_earned': return Star
      default: return Gift
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN')
  }

  const tabs = [
    { id: 'overview', name: 'Tổng Quan', icon: User },
    { id: 'activities', name: 'Hoạt Động', icon: Eye },
    { id: 'achievements', name: 'Thành Tích', icon: Trophy },
    { id: 'referrals', name: 'Giới Thiệu', icon: Users },
    { id: 'settings', name: 'Cài Đặt', icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              U
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">User123</h1>
              <p className="text-gray-600 mb-4">Thành viên từ {formatDate(userStats.memberSince)}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold flex items-center">
                  <Trophy className="w-4 h-4 mr-2" />
                  VIP {userStats.vipLevel}
                </div>
                <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                  {userStats.currentPoints} điểm
                </div>
              </div>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center">
              <LogOut className="w-4 h-4 mr-2" />
              Đăng Xuất
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <Gift className="w-12 h-12 text-orange-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {userStats.totalBoxesOpened}
            </div>
            <div className="text-gray-600">Hộp Đã Mở</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <ShoppingBag className="w-12 h-12 text-blue-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {(userStats.totalSpent / 1000000).toFixed(1)}M
            </div>
            <div className="text-gray-600">Đã Chi Tiêu</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <Users className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {userStats.referrals}
            </div>
            <div className="text-gray-600">Bạn Bè Giới Thiệu</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {userStats.currentPoints}
            </div>
            <div className="text-gray-600">Điểm Hiện Tại</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Thông Tin Cá Nhân</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tên người dùng</label>
                      <input
                        type="text"
                        value="User123"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        value="user123@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
                      <input
                        type="tel"
                        value="0901234567"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ngày sinh</label>
                      <input
                        type="date"
                        value="1995-06-15"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Activities Tab */}
            {activeTab === 'activities' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Hoạt Động Gần Đây</h3>
                {recentActivities.map((activity) => {
                  const Icon = getActivityIcon(activity.type)
                  return (
                    <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                        {activity.prize && (
                          <p className="text-green-600 font-medium">Trúng: {activity.prize}</p>
                        )}
                        {activity.description && (
                          <p className="text-gray-600">{activity.description}</p>
                        )}
                        <p className="text-sm text-gray-500">{formatDate(activity.date)}</p>
                      </div>
                      <div className="text-right">
                        {activity.value && (
                          <div className="text-lg font-bold text-green-600">
                            +{activity.value.toLocaleString('vi-VN')}đ
                          </div>
                        )}
                        <div className={`text-sm font-medium ${
                          activity.points > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {activity.points > 0 ? '+' : ''}{activity.points} điểm
                        </div>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Thành Tích</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-lg border-2 ${
                        achievement.completed
                          ? 'bg-green-50 border-green-200'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          achievement.completed
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          <Trophy className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className={`font-semibold ${
                            achievement.completed ? 'text-green-800' : 'text-gray-700'
                          }`}>
                            {achievement.name}
                          </h4>
                          <p className={`text-sm ${
                            achievement.completed ? 'text-green-600' : 'text-gray-500'
                          }`}>
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Referrals Tab */}
            {activeTab === 'referrals' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Chương Trình Giới Thiệu</h3>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-orange-800 mb-2">Mã giới thiệu của bạn</h4>
                    <div className="flex items-center space-x-3">
                      <code className="bg-white px-3 py-2 rounded border text-orange-600 font-mono">
                        USER123REF
                      </code>
                      <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                        Sao chép
                      </button>
                    </div>
                    <p className="text-sm text-orange-700 mt-2">
                      Chia sẻ mã này để nhận 50 điểm cho mỗi bạn bè tham gia!
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Lịch Sử Giới Thiệu</h4>
                  <div className="space-y-3">
                    {referralHistory.map((referral, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {referral.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{referral.name}</div>
                            <div className="text-sm text-gray-500">
                              Tham gia {formatDate(referral.joinDate)}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            referral.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {referral.status === 'active' ? 'Hoạt động' : 'Không hoạt động'}
                          </div>
                          <div className="text-sm text-green-600 font-medium mt-1">
                            +{referral.earned} điểm
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cài Đặt Tài Khoản</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Thông báo email</h4>
                      <p className="text-sm text-gray-600">Nhận thông báo về khuyến mãi và hoạt động</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Thông báo push</h4>
                      <p className="text-sm text-gray-600">Nhận thông báo trên thiết bị</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                    </label>
                  </div>

                  <div className="border-t pt-4">
                    <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                      Lưu Cài Đặt
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage