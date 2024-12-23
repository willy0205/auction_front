import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  AppLayout,
  Sidebar,
  MainContent,
  Navigation,
  NavItem,
  MobileNav
} from './styles/layout.styles';
import {
  HomeIcon,
  ExploreIcon,
  NotificationIcon,
  MessageIcon,
  ProfileIcon,
} from './components/icons';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppLayout>
          <Sidebar>
            <Navigation>
              <NavItem href="/">
                <HomeIcon color="#262626" />
                <span>홈</span>
              </NavItem>
              <NavItem href="/explore">
                <ExploreIcon color="#262626" />
                <span>탐색</span>
              </NavItem>
              <NavItem href="/notifications">
                <NotificationIcon color="#262626" />
                <span>알림</span>
              </NavItem>
              <NavItem href="/messages">
                <MessageIcon color="#262626" />
                <span>메시지</span>
              </NavItem>
              <NavItem href="/profile">
                <ProfileIcon color="#262626" />
                <span>프로필</span>
              </NavItem>
            </Navigation>
          </Sidebar>

          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </MainContent>
        </AppLayout>

        <MobileNav>
          <NavItem href="/">
            <HomeIcon color="#0f1419" />
          </NavItem>
          <NavItem href="/explore">
            <ExploreIcon color="#0f1419" />
          </NavItem>
          <NavItem href="/notifications">
            <NotificationIcon color="#0f1419" />
          </NavItem>
          <NavItem href="/messages">
            <MessageIcon color="#0f1419" />
          </NavItem>
          <NavItem href="/profile">
            <ProfileIcon color="#0f1419" />
          </NavItem>
        </MobileNav>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
