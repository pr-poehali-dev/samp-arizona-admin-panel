import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const LoginForm = () => (
    <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader className="text-center pb-2">
        <div className="gradient-primary w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center">
          <Icon name="Shield" size={32} className="text-white" />
        </div>
        <CardTitle className="text-2xl font-bold text-gradient">Arizona STAG</CardTitle>
        <CardDescription className="text-lg">Админ-панель</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login">Логин</Label>
              <Input id="login" placeholder="Введите логин" className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input id="password" type="password" placeholder="Введите пароль" className="h-12" />
            </div>
            <Button 
              onClick={() => setIsLoggedIn(true)} 
              className="w-full h-12 gradient-primary text-white font-semibold"
            >
              Войти
            </Button>
          </TabsContent>
          
          <TabsContent value="register" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reg-login">Логин</Label>
              <Input id="reg-login" placeholder="Выберите логин" className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reg-email">Email</Label>
              <Input id="reg-email" type="email" placeholder="Введите email" className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reg-password">Пароль</Label>
              <Input id="reg-password" type="password" placeholder="Придумайте пароль" className="h-12" />
            </div>
            <Button className="w-full h-12 gradient-primary text-white font-semibold">
              Зарегистрироваться
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );

  const AdminPanel = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="gradient-primary w-10 h-10 rounded-lg flex items-center justify-center">
              <Icon name="Shield" size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">Arizona STAG</h1>
              <p className="text-sm text-gray-600">Админ-панель</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Icon name="Wifi" size={14} className="mr-1" />
              Онлайн
            </Badge>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsLoggedIn(false)}
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              <Icon name="LogOut" size={16} className="mr-2" />
              Выход
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm h-[calc(100vh-73px)] border-r border-gray-200">
          <nav className="p-4 space-y-2">
            {[
              { id: 'overview', label: 'Главная', icon: 'Home' },
              { id: 'admins', label: 'Администраторы', icon: 'Users' },
              { id: 'stats', label: 'Статистика', icon: 'BarChart3' },
              { id: 'logs', label: 'Логи', icon: 'FileText' },
              { id: 'profile', label: 'Профиль', icon: 'User' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                  activeTab === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon name={item.icon as any} size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Добро пожаловать!</h2>
                <p className="text-gray-600">Обзор системы Arizona STAG</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Онлайн игроков', value: '1,247', icon: 'Users', color: 'text-green-600', bg: 'bg-green-50' },
                  { title: 'Офлайн игроков', value: '8,532', icon: 'UserMinus', color: 'text-gray-600', bg: 'bg-gray-50' },
                  { title: 'Активных админов', value: '23', icon: 'Shield', color: 'text-blue-600', bg: 'bg-blue-50' },
                  { title: 'Сообщений в чате', value: '15,642', icon: 'MessageSquare', color: 'text-purple-600', bg: 'bg-purple-50' },
                ].map((stat, index) => (
                  <Card key={index} className="shadow-sm border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                        <div className={`w-12 h-12 rounded-lg ${stat.bg} flex items-center justify-center`}>
                          <Icon name={stat.icon as any} size={24} className={stat.color} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="shadow-sm border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="TrendingUp" size={20} />
                      <span>Активность сервера</span>
                    </CardTitle>
                    <CardDescription>Онлайн за последние 24 часа</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { time: '00:00', players: 890 },
                        { time: '06:00', players: 1200 },
                        { time: '12:00', players: 1800 },
                        { time: '18:00', players: 2100 },
                        { time: '23:59', players: 1247 },
                      ].map((data, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600">{data.time}</span>
                          <div className="flex items-center space-x-3 flex-1 mx-4">
                            <Progress value={(data.players / 2100) * 100} className="flex-1" />
                            <span className="text-sm font-bold text-gray-900 min-w-0">{data.players}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="Activity" size={20} />
                      <span>Системные метрики</span>
                    </CardTitle>
                    <CardDescription>Состояние сервера</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        { label: 'CPU', value: 45, color: 'bg-blue-500' },
                        { label: 'RAM', value: 72, color: 'bg-green-500' },
                        { label: 'Диск', value: 28, color: 'bg-yellow-500' },
                        { label: 'Сеть', value: 63, color: 'bg-purple-500' },
                      ].map((metric, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                            <span className="text-sm font-bold text-gray-900">{metric.value}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${metric.color}`}
                              style={{ width: `${metric.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'admins' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Администраторы</h2>
                <Button className="gradient-primary text-white">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить админа
                </Button>
              </div>

              <Card className="shadow-sm border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="text-left p-4 font-semibold text-gray-700">Никнейм</th>
                          <th className="text-left p-4 font-semibold text-gray-700">Уровень</th>
                          <th className="text-left p-4 font-semibold text-gray-700">Статус</th>
                          <th className="text-left p-4 font-semibold text-gray-700">Последний вход</th>
                          <th className="text-left p-4 font-semibold text-gray-700">Действия</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'Alexander_Stone', level: 10, status: 'online', lastSeen: '2 мин назад' },
                          { name: 'Maria_Rodriguez', level: 8, status: 'offline', lastSeen: '1 час назад' },
                          { name: 'John_Smith', level: 9, status: 'online', lastSeen: 'Сейчас онлайн' },
                          { name: 'Anna_Kowalski', level: 7, status: 'offline', lastSeen: '3 часа назад' },
                        ].map((admin, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="p-4 font-medium text-gray-900">{admin.name}</td>
                            <td className="p-4">
                              <Badge variant="outline">{admin.level} lvl</Badge>
                            </td>
                            <td className="p-4">
                              <Badge 
                                variant="secondary" 
                                className={admin.status === 'online' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                              >
                                {admin.status === 'online' ? 'Онлайн' : 'Офлайн'}
                              </Badge>
                            </td>
                            <td className="p-4 text-gray-600">{admin.lastSeen}</td>
                            <td className="p-4">
                              <Button variant="ghost" size="sm">
                                <Icon name="MoreHorizontal" size={16} />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'logs' && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900">Логи администрации</h2>
              
              <Card className="shadow-sm border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      { time: '14:32', admin: 'Alexander_Stone', action: 'Забанил игрока John_Doe', type: 'ban' },
                      { time: '14:15', admin: 'Maria_Rodriguez', action: 'Выдал предупреждение игроку Anna_Test', type: 'warn' },
                      { time: '13:45', admin: 'John_Smith', action: 'Кикнул игрока BadPlayer_123', type: 'kick' },
                      { time: '13:30', admin: 'Anna_Kowalski', action: 'Заспавнил транспорт ID: 567', type: 'spawn' },
                      { time: '13:12', admin: 'Alexander_Stone', action: 'Телепортировался к игроку TestUser', type: 'teleport' },
                    ].map((log, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm font-mono text-gray-600 min-w-0">{log.time}</div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant="outline" 
                            className={
                              log.type === 'ban' ? 'border-red-300 text-red-700' :
                              log.type === 'warn' ? 'border-yellow-300 text-yellow-700' :
                              log.type === 'kick' ? 'border-orange-300 text-orange-700' :
                              'border-blue-300 text-blue-700'
                            }
                          >
                            {log.admin}
                          </Badge>
                        </div>
                        <div className="flex-1 text-gray-700">{log.action}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen gradient-primary flex items-center justify-center p-4">
        <div className="animate-fade-in">
          <LoginForm />
        </div>
      </div>
    );
  }

  return <AdminPanel />;
};

export default Index;